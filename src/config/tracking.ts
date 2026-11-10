/**
 * Analytics and advertising IDs.
 *
 * NOT stored in the code: each ID is read at build time from a Cloudflare
 * Pages environment variable (Settings → Variables and secrets, Production).
 * While none is set, nothing loads, no cookie banner is shown and the site
 * stays cookie-free. Set an ID, redeploy, and the consent banner appears.
 *
 *   PUBLIC_GA4_ID              Google Analytics 4 measurement ID, e.g. G-ABC123XYZ9
 *   PUBLIC_GOOGLE_ADS_ID       Google Ads tag ID, e.g. AW-123456789
 *   PUBLIC_GOOGLE_ADS_QUOTE    Conversion label for a sent quote request
 *   PUBLIC_GOOGLE_ADS_CALL     Conversion label for a phone-number tap
 *   PUBLIC_META_PIXEL_ID       Meta (Facebook/Instagram) Pixel ID, e.g. 123456789012345
 *
 * Nothing non-essential loads before the visitor chooses in the consent
 * banner (src/components/consent/ConsentManager.astro).
 */

const env = import.meta.env as Record<string, string | undefined>;

function read(name: string, pattern: RegExp, example: string): string | undefined {
  const value = env[name]?.trim();
  if (!value) return undefined;
  // Fail the build on a typo rather than ship a tag that silently does nothing.
  if (!pattern.test(value)) {
    throw new Error(`${name} "${value}" does not look right (expected something like ${example}).`);
  }
  return value;
}

const adsId = read('PUBLIC_GOOGLE_ADS_ID', /^AW-\d{6,}$/, 'AW-123456789');

export const tracking = {
  ga4Id: read('PUBLIC_GA4_ID', /^G-[A-Z0-9]{6,}$/, 'G-ABC123XYZ9'),
  googleAds: adsId
    ? {
        id: adsId,
        quoteLabel: read('PUBLIC_GOOGLE_ADS_QUOTE', /^[\w-]{6,}$/, 'AbCdEfGhIj-123'),
        callLabel: read('PUBLIC_GOOGLE_ADS_CALL', /^[\w-]{6,}$/, 'AbCdEfGhIj-456'),
      }
    : undefined,
  metaPixelId: read('PUBLIC_META_PIXEL_ID', /^\d{10,20}$/, '123456789012345'),
};

/** Analytics: GA4. Marketing: Google Ads and Meta Pixel. */
export const hasAnalytics = Boolean(tracking.ga4Id);
export const hasMarketing = Boolean(tracking.googleAds || tracking.metaPixelId);
/** True when any non-essential tracking is configured, so consent is needed. */
export const trackingEnabled = hasAnalytics || hasMarketing;
