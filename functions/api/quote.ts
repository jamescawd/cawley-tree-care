/**
 * Cloudflare Pages Function: connects POST /api/quote to the existing quote
 * handler in worker/index.ts (unchanged). The site is deployed on Cloudflare
 * Pages, which runs files in functions/ but not worker/index.ts directly.
 *
 * Delivery settings. Cloudflare settings (Pages → Settings → Variables and
 * Secrets) always win over these defaults:
 *   RESEND_API_KEY  secret, required; never stored in the repository
 *   ENQUIRY_TO      defaults to the owner's temporary inbox (server-side only,
 *                   never shown on the site). Replace with the business
 *                   address once cawleytreecare.ie email is set up.
 *   ENQUIRY_FROM    defaults to Resend's test sender, which can only deliver
 *                   to the Resend account owner's own address. Switch to
 *                   e.g. "Cawley's Website <quotes@cawleytreecare.ie>" once
 *                   the domain is verified in Resend.
 */
import worker, { type Env } from '../../worker/index';

export const DEFAULTS = {
  ENQUIRY_TO: 'jamescawley2022@gmail.com',
  ENQUIRY_FROM: "Cawley's Website <onboarding@resend.dev>",
};

export const onRequest = ({ request, env }: { request: Request; env: Env }): Promise<Response> =>
  worker.fetch(request, {
    ...env,
    ENQUIRY_TO: env.ENQUIRY_TO || DEFAULTS.ENQUIRY_TO,
    ENQUIRY_FROM: env.ENQUIRY_FROM || DEFAULTS.ENQUIRY_FROM,
  });
