globalThis.process ??= {}; globalThis.process.env ??= {};
import { j as createAstro, c as createComponent, b as addAttribute, k as renderHead, l as renderSlot, a as renderTemplate, m as maybeRenderHead } from './astro/server_CPgHhId0.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://calganaygun.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const siteConfig = {
    title: "\xC7algan Ayg\xFCn",
    description: "Sharing things that inspire me",
    lang: "en"};
  const { title, description } = Astro2.props;
  const pageTitle = title ? `${title} \u2014 ${siteConfig.title}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  return renderTemplate`<html${addAttribute(siteConfig.lang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(pageDescription, "content")}><title>${pageTitle}</title><link rel="icon" type="image/png" sizes="32x32" href="/static/icons/icon-favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/static/icons/icon-favicon-16x16.png"><link rel="apple-touch-icon" href="/static/icons/icon-apple-touch-icon.png"><link rel="stylesheet" href="/fonts/Inter-roman.var.woff2" as="font" type="font/woff2" crossorigin>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["header"])} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderSlot($$result, $$slots["footer"])} </body></html>`;
}, "/home/calgan/homepage-rewrite/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://calganaygun.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const MENU = {
    "/": "Home",
    "/photos": "Photos",
    "/notes": "Notes",
    "/bookmarks": "Bookmarks"
  };
  const { active } = Astro2.props;
  const pathname = active || "/";
  return renderTemplate`${maybeRenderHead()}<header class="pt-6"> <div class="c-small text-lg"> <nav class="flex items-center space-x-4"> ${Object.entries(MENU).map(([url, label]) => renderTemplate`<a${addAttribute(url, "href")}${addAttribute(pathname === url ? "text-highlight font-bold" : "hover:underline", "class")}> ${label} </a>`)} </nav> </div> </header>`;
}, "/home/calgan/homepage-rewrite/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="pb-14"> <div class="c-small"> <p>
You can access the source code of this website${" "} <a href="https://github.com/calganaygun/homepage" target="_blank" rel="noopener noreferrer" class="hover:underline">
on Github
</a>.
</p> </div> </footer>`;
}, "/home/calgan/homepage-rewrite/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };
