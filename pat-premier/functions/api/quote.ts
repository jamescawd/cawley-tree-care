/**
 * Cloudflare Pages Function: POST /api/quote (same handler as the Worker).
 * Until RESEND_API_KEY, ENQUIRY_TO and ENQUIRY_FROM are set in the Pages
 * project, submissions go to /enquiry-error, which shows phone and email.
 */
import { handleQuote, type Env } from '../../worker/quote';

export const onRequestPost = ({ request, env }: { request: Request; env: Env }) =>
  handleQuote(request, env, new URL(request.url));
