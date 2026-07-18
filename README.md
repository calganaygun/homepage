# Çalgan Aygün — Personal Website

Personal website for [calganaygun.com](https://calganaygun.com), built with
[Astro](https://astro.build), Tailwind CSS, and the
[Cloudflare adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/).

Most pages are prerendered. Pages backed by external services are rendered by a
Cloudflare Worker so their content can update without rebuilding the website.

## Development

Requires a current Node.js LTS release.

```bash
npm install
npm run dev
```

Create a local `.env` file when working with API-backed pages:

```dotenv
RAINDROP_ACCESS_TOKEN=your_raindrop_access_token
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

Do not commit `.env` or API credentials.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run check` | Run Astro and TypeScript diagnostics |
| `npm run build` | Check and create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Content and external services

| Route | Source |
|---|---|
| `/` | Homepage and consultancy link to [Pipelines](https://pipelines.company) |
| `/photos` | Unsplash API |
| `/ai-art` | Local AI-generated artwork |
| `/notes` | Medium RSS and DEV API, fetched at request time |
| `/notes/speaker-profile` | Local MDX speaker profile |
| `/bookmarks` | Raindrop.io API |
| `/about` | About page |

Medium is fetched directly from its RSS feed without a third-party RSS-to-JSON
proxy. DEV requests include an identifiable user agent because its API rejects
anonymous Worker requests. If an external service is unavailable, its client
returns an empty result instead of crashing the whole website. Raindrop errors
produce a controlled `503` response.

## Cloudflare deployment

Deploy this repository as a **Cloudflare Worker**, not a legacy Pages project.
The committed [`wrangler.jsonc`](./wrangler.jsonc) contains the Worker runtime
configuration.

In **Cloudflare Dashboard → Workers & Pages → Create application → Import a
repository**, use:

| Setting | Value |
|---|---|
| Worker name | `calganaygun-website` |
| Root directory | `/` or empty |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Non-production deploy command | `npx wrangler versions upload` |

After the first deployment, open **Worker → Settings → Variables and Secrets**
and add these as encrypted runtime secrets:

- `RAINDROP_ACCESS_TOKEN`
- `UNSPLASH_ACCESS_KEY`

Use **Domains → Add Custom Domain** to attach `calganaygun.com`. Pushes to the
configured production branch trigger automatic builds and deployments.

## Production checks

```bash
npm run build
npm audit
git diff --check
```

The build command includes `astro check`; warnings or type errors fail the
deployment.
