globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_-rV6jv_B.mjs';
import './chunks/astro/server_CPgHhId0.mjs';
import { s as sequence } from './chunks/render-context_BEq7d72Y.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
