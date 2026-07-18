import { parseISO, format } from 'date-fns';

const DEVTO_USERNAME = 'calganaygun';

interface DevToArticle {
  title: string;
  url: string;
  slug: string;
  published_at: string;
}

export interface Story extends DevToArticle {
  date: Date;
  readableDate: string;
}

export async function getStories(): Promise<Story[]> {
  try {
    const response = await fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}`, {
      headers: {
        Accept: 'application/vnd.forem.api-v1+json',
      },
    });
    if (!response.ok) throw new Error(`dev.to API returned ${response.status}`);
    const payload = await response.json();
    if (!Array.isArray(payload)) return [];

    return (payload as DevToArticle[]).map((post) => {
      const date = parseISO(post.published_at);
      return { ...post, date, readableDate: format(date, 'd.M, yy') };
    });
  } catch (error) {
    console.warn('Failed to fetch dev.to stories:', error instanceof Error ? error.message : error);
    return [];
  }
}
