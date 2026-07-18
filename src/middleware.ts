import { defineMiddleware } from 'astro:middleware';

const securityHeaders = {
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Permissions-Policy': 'camera=(), geolocation=(), microphone=()',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
};

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' data: https://images.unsplash.com",
  "object-src 'none'",
  "script-src 'self' 'sha256-FsCro4ttShVTaaBT/oqTQTmyeml69kk94s9fHk1GNi4='",
  "style-src 'self'",
  'upgrade-insecure-requests',
].join('; ');

export const onRequest = defineMiddleware(async (_, next) => {
  const response = await next();

  for (const [name, value] of Object.entries(securityHeaders)) {
    response.headers.set(name, value);
  }

  if (import.meta.env.PROD) {
    response.headers.set('Content-Security-Policy', contentSecurityPolicy);
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }

  return response;
});
