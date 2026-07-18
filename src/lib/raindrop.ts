import { getSecret } from 'astro:env/server';

const COLLECTION_ID = 25093237;
const PAGE_SIZE = 50;
const MAX_PAGES = 100;

export interface Bookmark {
  _id: number | string;
  title: string;
  excerpt: string;
  link: string;
  domain: string;
  created: string;
  tags: string[];
  [key: string]: unknown;
}

function normalizeBookmark(value: unknown): Bookmark | null {
  if (!value || typeof value !== 'object') return null;
  const item = value as Record<string, unknown>;

  const id = item._id;
  const title = typeof item.title === 'string' ? item.title.trim() : '';
  const link = typeof item.link === 'string' ? item.link.trim() : '';
  const created = typeof item.created === 'string' ? item.created : '';

  if ((typeof id !== 'number' && typeof id !== 'string') || !title || !link) return null;
  if (!created || Number.isNaN(Date.parse(created))) return null;

  let domain = typeof item.domain === 'string' ? item.domain.trim() : '';
  if (!domain) {
    try {
      domain = new URL(link).hostname;
    } catch {
      domain = '';
    }
  }

  const tags = Array.isArray(item.tags)
    ? [...new Set(item.tags.filter((tag): tag is string => typeof tag === 'string' && Boolean(tag.trim())).map((tag) => tag.trim()))]
    : [];

  return {
    ...item,
    _id: id,
    title,
    link,
    created,
    domain,
    excerpt: typeof item.excerpt === 'string' ? item.excerpt.trim() : '',
    tags,
  };
}

export async function getBookmark(startPage = 0): Promise<Bookmark[]> {
  const accessToken = getSecret('RAINDROP_ACCESS_TOKEN');
  if (!accessToken) throw new Error('RAINDROP_ACCESS_TOKEN is not configured');

  const bookmarks: Bookmark[] = [];
  const seenIds = new Set<number | string>();

  for (let page = startPage; page < startPage + MAX_PAGES; page += 1) {
    const url = new URL(`https://api.raindrop.io/rest/v1/raindrops/${COLLECTION_ID}`);
    url.searchParams.set('perpage', String(PAGE_SIZE));
    url.searchParams.set('page', String(page));
    url.searchParams.set('sort', '-created');

    const response = await fetch(url, {
      headers: { Accept: 'application/json', Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
      throw new Error(`Raindrop API request failed with ${response.status} ${response.statusText}`);
    }

    const payload = await response.json() as { result?: boolean; items?: unknown[] };
    if (payload.result === false || !Array.isArray(payload.items)) {
      throw new Error('Raindrop API returned an unexpected response');
    }

    for (const rawItem of payload.items) {
      const item = normalizeBookmark(rawItem);
      if (item && !seenIds.has(item._id)) {
        bookmarks.push(item);
        seenIds.add(item._id);
      }
    }

    if (payload.items.length < PAGE_SIZE) return bookmarks;
  }

  console.warn(`Stopped Raindrop pagination after ${MAX_PAGES} pages`);
  return bookmarks;
}
