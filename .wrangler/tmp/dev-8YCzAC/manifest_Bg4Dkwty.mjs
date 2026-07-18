globalThis.process ??= {}; globalThis.process.env ??= {};
import { v as decodeKey } from './chunks/astro/server_CPgHhId0.mjs';
import './chunks/astro-designed-error-pages_-rV6jv_B.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DVHPtNv8.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/calgan/homepage-rewrite/","cacheDir":"file:///home/calgan/homepage-rewrite/node_modules/.astro/","outDir":"file:///home/calgan/homepage-rewrite/dist/","srcDir":"file:///home/calgan/homepage-rewrite/src/","publicDir":"file:///home/calgan/homepage-rewrite/public/","buildClientDir":"file:///home/calgan/homepage-rewrite/dist/","buildServerDir":"file:///home/calgan/homepage-rewrite/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DgGpwj3R.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DgGpwj3R.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"ai-art/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DgGpwj3R.css"}],"routeData":{"route":"/ai-art","isIndex":false,"type":"page","pattern":"^\\/ai-art\\/?$","segments":[[{"content":"ai-art","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ai-art.astro","pathname":"/ai-art","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DgGpwj3R.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DgGpwj3R.css"}],"routeData":{"route":"/bookmarks","isIndex":false,"type":"page","pattern":"^\\/bookmarks\\/?$","segments":[[{"content":"bookmarks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bookmarks.astro","pathname":"/bookmarks","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DgGpwj3R.css"}],"routeData":{"route":"/notes","isIndex":true,"type":"page","pattern":"^\\/notes\\/?$","segments":[[{"content":"notes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/notes/index.astro","pathname":"/notes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DgGpwj3R.css"}],"routeData":{"route":"/photos","isIndex":false,"type":"page","pattern":"^\\/photos\\/?$","segments":[[{"content":"photos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/photos.astro","pathname":"/photos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://calganaygun.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/calgan/homepage-rewrite/src/pages/notes/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/notes/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/calgan/homepage-rewrite/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/calgan/homepage-rewrite/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/calgan/homepage-rewrite/src/pages/ai-art.astro",{"propagation":"none","containsHead":true}],["/home/calgan/homepage-rewrite/src/pages/bookmarks.astro",{"propagation":"none","containsHead":true}],["/home/calgan/homepage-rewrite/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/calgan/homepage-rewrite/src/pages/notes/index.astro",{"propagation":"none","containsHead":true}],["/home/calgan/homepage-rewrite/src/pages/photos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/ai-art@_@astro":"pages/ai-art.astro.mjs","\u0000@astro-page:src/pages/bookmarks@_@astro":"pages/bookmarks.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/notes/[...slug]@_@astro":"pages/notes/_---slug_.astro.mjs","\u0000@astro-page:src/pages/notes/index@_@astro":"pages/notes.astro.mjs","\u0000@astro-page:src/pages/photos@_@astro":"pages/photos.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bg4Dkwty.mjs","/home/calgan/homepage-rewrite/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BGPRFjBj.mjs","/home/calgan/homepage-rewrite/.astro/content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","/home/calgan/homepage-rewrite/.astro/content-modules.mjs":"chunks/content-modules_DqXEdBss.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_fcVA8wrm.mjs","/home/calgan/homepage-rewrite/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/home/calgan/homepage-rewrite/src/content/notes/speaker-profile.mdx?astroPropagatedAssets":"chunks/speaker-profile_DrSUs5y0.mjs","/home/calgan/homepage-rewrite/src/content/notes/speaker-profile.mdx":"chunks/speaker-profile_KNexi53j.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.DgGpwj3R.css","/robot.txt","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/fonts/Inter-roman.var.woff2","/_worker.js/chunks/Footer_D8_TJ81O.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_BnwH4aXD.mjs","/_worker.js/chunks/_astro_assets_BPskt8IL.mjs","/_worker.js/chunks/_astro_data-layer-content_fcVA8wrm.mjs","/_worker.js/chunks/astro-designed-error-pages_-rV6jv_B.mjs","/_worker.js/chunks/astro_CB0M17he.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/consts_DBS1dnOp.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_DqXEdBss.mjs","/_worker.js/chunks/index_Ck9nm2cs.mjs","/_worker.js/chunks/noop-middleware_DVHPtNv8.mjs","/_worker.js/chunks/parse_F8JSOSev.mjs","/_worker.js/chunks/path_BgNISshD.mjs","/_worker.js/chunks/remote_CVXTZJrr.mjs","/_worker.js/chunks/render-context_BEq7d72Y.mjs","/_worker.js/chunks/sharp_BGPRFjBj.mjs","/_worker.js/chunks/speaker-profile_DrSUs5y0.mjs","/_worker.js/chunks/speaker-profile_KNexi53j.mjs","/_worker.js/pages/404.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/about.astro.mjs","/_worker.js/pages/ai-art.astro.mjs","/_worker.js/pages/bookmarks.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/notes.astro.mjs","/_worker.js/pages/photos.astro.mjs","/_worker.js/_astro/about.DgGpwj3R.css","/photos/ai-art/1.jpg","/photos/ai-art/10.jpg","/photos/ai-art/11.jpg","/photos/ai-art/12.jpg","/photos/ai-art/13.jpg","/photos/ai-art/14.jpg","/photos/ai-art/15.jpg","/photos/ai-art/16.jpg","/photos/ai-art/2.jpg","/photos/ai-art/3.jpg","/photos/ai-art/4.jpg","/photos/ai-art/5.jpeg","/photos/ai-art/6.jpg","/photos/ai-art/7.jpg","/photos/ai-art/8.jpg","/photos/ai-art/9.jpg","/static/icons/icon-android-chrome-192x192.png","/static/icons/icon-android-chrome-512x512.png","/static/icons/icon-apple-touch-icon.png","/static/icons/icon-favicon-16x16.png","/static/icons/icon-favicon-32x32.png","/static/icons/icon-mstile-150x150.png","/static/icons/icon-safari-pinned-tab.svg","/static/icons/site.webmanifest","/static/notes/1*0QOjhahdP46qBPay4orjMg.png","/static/notes/1*H6JMN6MYtIUSwrHEMClrdQ.png","/static/notes/1*JNvCTDvXLWOlnyvcE6991A.png","/static/notes/1*PrVcGRRFb9E6CSHyIWElhQ.png","/static/notes/1*QPTwndA-6Imq5MBwxeXbzw.png","/static/notes/1*RNjxD8RMIGnvbmOxGmpqyQ.jpeg","/static/notes/1*ZfzycKq0utZHRc0MVwW70w.png","/static/notes/1*n3pImUxI0m566Uz9YM5Zow.png","/static/notes/1*xYxTaS8clqNRZAwvj8wkUw.png","/static/notes/1*yfyhUf5PCBESxUMPrfBxHg.png","/static/notes/1_XCZZZmhQN4rHLw2dW14BZQ.png","/static/notes/1__UzOusxNhf3YC33__C__h__7mw.png","/static/notes/speaker_profile_full.jpeg","/static/notes/speaker_profile_square.jpeg","/_worker.js/chunks/astro/server_CPgHhId0.mjs","/_worker.js/pages/notes/_---slug_.astro.mjs","/404.html","/about/index.html","/ai-art/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"XhtcGY0TPQKBXyi0DhRtACnCunAIwI04dwzBcEd037A=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
