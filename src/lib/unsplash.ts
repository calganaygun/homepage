import { getSecret } from 'astro:env/server';

const BASE_URL = 'https://api.unsplash.com/users/calganaygun';

export interface UnsplashPhoto {
  id: string;
  width: number;
  height: number;
  description: string | null;
  links: { html: string };
  urls: { regular: string };
}

export interface UnsplashStats {
  views: { total: number };
  downloads: { total: number };
}

const emptyStats = (): UnsplashStats => ({ views: { total: 0 }, downloads: { total: 0 } });

export async function getPhotos(): Promise<UnsplashPhoto[]> {
  const accessKey = getSecret('UNSPLASH_ACCESS_KEY');
  if (!accessKey) return [];

  try {
    const url = new URL(`${BASE_URL}/photos`);
    url.searchParams.set('per_page', '50');
    url.searchParams.set('client_id', accessKey);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Unsplash API returned ${response.status}`);
    const payload = await response.json();
    return Array.isArray(payload) ? payload as UnsplashPhoto[] : [];
  } catch (error) {
    console.warn('Failed to fetch Unsplash photos:', error instanceof Error ? error.message : error);
    return [];
  }
}

export async function getStats(): Promise<UnsplashStats> {
  const accessKey = getSecret('UNSPLASH_ACCESS_KEY');
  if (!accessKey) return emptyStats();

  try {
    const url = new URL(`${BASE_URL}/statistics`);
    url.searchParams.set('client_id', accessKey);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Unsplash stats API returned ${response.status}`);
    return await response.json() as UnsplashStats;
  } catch (error) {
    console.warn('Failed to fetch Unsplash stats:', error instanceof Error ? error.message : error);
    return emptyStats();
  }
}
