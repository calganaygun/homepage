globalThis.process ??= {}; globalThis.process.env ??= {};
import { i as imageConfig } from '../chunks/_astro_assets_BPskt8IL.mjs';
import { i as isRemotePath } from '../chunks/path_BgNISshD.mjs';
import { i as isRemoteAllowed } from '../chunks/remote_CVXTZJrr.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const GET = (ctx) => {
  const href = ctx.url.searchParams.get("href");
  if (!href) {
    return new Response("Missing 'href' query parameter", {
      status: 400,
      statusText: "Missing 'href' query parameter"
    });
  }
  if (isRemotePath(href)) {
    if (isRemoteAllowed(href, imageConfig) === false) {
      return new Response("Forbidden", { status: 403 });
    } else {
      return Response.redirect(href, 302);
    }
  }
  const proxied = new URL(href, ctx.url.origin);
  if (proxied.origin !== ctx.url.origin) {
    return new Response("Forbidden", { status: 403 });
  }
  return fetch(proxied);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
