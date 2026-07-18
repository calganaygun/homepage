globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CPgHhId0.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_D8_TJ81O.mjs';
export { renderers } from '../renderers.mjs';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const base_url = "https://api.unsplash.com/users/calganaygun";
async function getPhotos() {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn("UNSPLASH_ACCESS_KEY not set, returning empty photos");
    return [];
  }
  try {
    const url = `${base_url}/photos?per_page=50&client_id=${UNSPLASH_ACCESS_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Unsplash API returned ${res.status}`);
      return [];
    }
    return await res.json();
  } catch (e) {
    console.warn("Failed to fetch Unsplash photos:", e.message);
    return [];
  }
}
async function getStats() {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn("UNSPLASH_ACCESS_KEY not set, returning empty stats");
    return { views: { total: 0 }, downloads: { total: 0 } };
  }
  try {
    const url = `${base_url}/statistics?&client_id=${UNSPLASH_ACCESS_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Unsplash stats API returned ${res.status}`);
      return { views: { total: 0 }, downloads: { total: 0 } };
    }
    return await res.json();
  } catch (e) {
    console.warn("Failed to fetch Unsplash stats:", e.message);
    return { views: { total: 0 }, downloads: { total: 0 } };
  }
}

const prerender = false;
const $$Photos = createComponent(async ($$result, $$props, $$slots) => {
  const photos = await getPhotos();
  const stats = await getStats();
  const unsplashUrl = "https://unsplash.com/@calganaygun";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Photos" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="c-small"> <p class="text-2xl text-highlight">
You can find the photos I share on my Unsplash account here.
</p> <div class="grid grid-cols-2 gap-10 mt-10"> <div class="border border-gray-200 rounded-xl p-4 dark:border-gray-700"> <a${addAttribute(unsplashUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:underline"> <div>Unsplash Views</div> </a> <p class="mt-1 text-3xl font-bold spacing-sm text-highlight"> ${stats?.views?.total?.toLocaleString() ?? "\u2014"} </p> </div> <div class="border border-gray-200 rounded-xl p-4 dark:border-gray-700"> <a${addAttribute(unsplashUrl, "href")} target="_blank" rel="noopener noreferrer" class="hover:underline"> <div>Unsplash Downloads</div> </a> <p class="mt-1 text-3xl font-bold spacing-sm text-highlight"> ${stats?.downloads?.total?.toLocaleString() ?? "\u2014"} </p> </div> </div> </div> <div class="c-large mt-20"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${photos?.length > 0 ? photos.map((item) => renderTemplate`<div class="mb-8"> <a${addAttribute(item.links.html, "href")} target="_blank" rel="noopener noreferrer"> <img${addAttribute(item.urls.regular, "src")}${addAttribute(item.description || "", "alt")}${addAttribute(item.width, "width")}${addAttribute(item.height, "height")} loading="lazy" class="w-full h-auto rounded"> </a> </div>`) : null} </div> </div>  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Footer", $$Footer, {})} ` })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "active": "/photos" })} ` })}` })}`;
}, "/home/calgan/homepage-rewrite/src/pages/photos.astro", void 0);

const $$file = "/home/calgan/homepage-rewrite/src/pages/photos.astro";
const $$url = "/photos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Photos,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
