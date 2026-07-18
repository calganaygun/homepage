import { parse, format } from 'date-fns';

const MEDIUM_RSS = 'https://medium.com/feed/@calganaygun';

interface MediumItem {
  pubDate: string;
  link: string;
  title: string;
  guid: string;
}

export interface Story {
  url: string;
  title: string;
  date: Date;
  readableDate: string;
  slug: string;
}

export async function getStories(): Promise<Story[]> {
  try {
    const url = new URL('https://api.rss2json.com/v1/api.json');
    url.searchParams.set('rss_url', MEDIUM_RSS);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`rss2json API returned ${response.status}`);
    const payload = await response.json() as { items?: MediumItem[] };
    if (!Array.isArray(payload.items)) return [];

    return payload.items.map((post) => {
      const date = parse(post.pubDate, 'yyyy-MM-dd HH:mm:ss', new Date(0));
      return {
        url: post.link,
        title: post.title,
        date,
        readableDate: format(date, 'd.M, yy'),
        slug: post.guid.split('/').at(-1) ?? post.guid,
      };
    });
  } catch (error) {
    console.warn('Failed to fetch Medium stories:', error instanceof Error ? error.message : error);
    return [];
  }
}
