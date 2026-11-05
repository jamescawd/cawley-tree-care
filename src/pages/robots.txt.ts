import type { APIRoute } from 'astro';
import { site } from '@/config/site';

/** robots.txt follows the ALLOW_INDEXING switch, so previews never get indexed. */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const sitemap = new URL('/sitemap-index.xml', siteUrl).href;
  const body = site.allowIndexing
    ? `User-agent: *\nAllow: /\nDisallow: /styleguide\n\nSitemap: ${sitemap}\n`
    : `# Indexing disabled (ALLOW_INDEXING is not "true").\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
