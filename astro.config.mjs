import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://calganaygun.com',
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile'
  }),
  integrations: [
    mdx(),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0
    }
  }
});
