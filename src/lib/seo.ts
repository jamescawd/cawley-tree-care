import { site } from '@/config/site';

/** "Page title | Cawley's Tree Care & Landscaping"; the home page uses the bare name. */
export const formatTitle = (title?: string): string =>
  title && title !== site.name ? `${title}${site.titleSeparator}${site.name}` : site.name;

/**
 * Absolute canonical URL for a path. Strips query strings / hashes and
 * trailing slashes so every page has exactly one canonical address.
 */
export const canonicalUrl = (pathname: string, base: URL | string): string => {
  const url = new URL(pathname, base);
  url.search = '';
  url.hash = '';
  // Build output is `page.html`; Cloudflare serves it at `/page`.
  const path = url.pathname
    .replace(/\.html$/, '')
    .replace(/\/index$/, '')
    .replace(/(.)\/$/, '$1');
  return `${url.origin}${path === '' ? '/' : path}`;
};

/** Search snippets are truncated around 155–160 characters. */
export const DESCRIPTION_MAX = 160;
