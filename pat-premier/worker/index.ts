/**
 * Cloudflare Worker entry (Workers + static assets hosting, see wrangler.jsonc).
 * POST /api/quote goes to the shared handler in ./quote.ts; everything else
 * is a static file. On Cloudflare Pages, functions/api/quote.ts is used instead.
 */
import { handleQuote, type Env } from './quote';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/quote') {
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
      return handleQuote(request, env, url);
    }
    return env.ASSETS.fetch(request);
  },
};
