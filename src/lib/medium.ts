import { format } from 'date-fns';

const MEDIUM_RSS = 'https://medium.com/feed/@calganaygun';

export interface Story {
  url: string;
  title: string;
  date: Date;
  readableDate: string;
  slug: string;
}

function readTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return decodeXml(match?.[1] ?? '');
}

function decodeXml(value: string): string {
  return value
    .replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim();
}

export async function getStories(): Promise<Story[]> {
  try {
    const response = await fetch(MEDIUM_RSS, {
      headers: {
        Accept: 'application/rss+xml, application/xml;q=0.9, text/xml;q=0.8',
        'User-Agent': 'calganaygun-website/2.0 (+https://calganaygun.com)',
      },
    });
    if (!response.ok) throw new Error(`Medium RSS returned ${response.status}`);

    const xml = await response.text();
    return [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)]
      .map((match) => {
        const item = match[1];
        const url = readTag(item, 'link');
        const title = readTag(item, 'title');
        const guid = readTag(item, 'guid');
        const date = new Date(readTag(item, 'pubDate'));

        if (!url || !title || Number.isNaN(date.getTime())) return null;

        return {
          url,
          title,
          date,
          readableDate: format(date, 'd.M, yy'),
          slug: guid.split('/').at(-1) ?? guid,
        };
      })
      .filter((post): post is Story => post !== null);
  } catch (error) {
    console.warn('Failed to fetch Medium stories:', error instanceof Error ? error.message : error);
    return [];
  }
}
