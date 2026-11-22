import type { APIRoute } from 'astro';
import { ALLOW_INDEXING } from 'astro:env/server';

/** Indexing stays off until the live deployment is approved (ALLOW_INDEXING=true). */
export const GET: APIRoute = ({ site }) => {
  const body = ALLOW_INDEXING
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
