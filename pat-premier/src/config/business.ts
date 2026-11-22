/**
 * Confirmed business facts: the ONLY source for names, contact details,
 * coverage and brand lines anywhere on the site.
 *
 * Rule: never invent facts (years trading, qualifications, insurance,
 * guarantees, reviews, prices, team, addresses). Anything not confirmed by
 * Pat Premier stays `null` and is listed in docs/CONTENT-NEEDED.md; the UI
 * simply hides it (or shows a <Pending> marker on draft-only sections).
 */
export const business = {
  name: 'Pat Premier Roofing and Building',
  shortName: 'Pat Premier',
  /** Official tagline (supplied brief + promotional artwork). */
  tagline: 'Built on Trust, Covered in Quality.',
  /** Secondary line from the company van artwork. */
  slogan: 'Don’t move… improve!',

  phone: {
    display: '087 365 4209',
    /** E.164 for tel: links and structured data. */
    e164: '+353873654209',
  },
  email: 'pcandson84@outlook.ie',

  /** Coverage as confirmed in the brief. */
  coverage: {
    summary: 'All of Leinster, all of Munster and the Midlands',
    regions: ['Leinster', 'Munster', 'the Midlands'] as const,
    nationwide: 'Nationwide enquiries are also welcome.',
  },

  /** Values shown on the company’s own promotional artwork. */
  values: ['Quality workmanship', 'Reliable service', 'Competitive prices'] as const,

  /** Free quotations are part of the brief’s primary call to action. */
  freeQuotes: true,

  // ── Not yet confirmed: keep null until Pat Premier supplies them ──────────
  /** Business address / Eircode (not supplied). */
  address: null as null | { street: string; town: string; county: string; eircode: string },
  /** Year established (not supplied). */
  established: null as null | number,
  /** Insurance, memberships, qualifications (not supplied). */
  credentials: [] as string[],
  /** Social profiles: icons appear on the artwork, but no links were supplied. */
  social: {
    facebook: null as string | null,
    tiktok: null as string | null,
    /** WhatsApp is not confirmed for 087 365 4209, so no WhatsApp link yet. */
    whatsapp: null as string | null,
  },
  /** Google Business Profile review link (not supplied). */
  reviewLink: null as string | null,
} as const;

export const telHref = `tel:${business.phone.e164}`;
export const mailHref = `mailto:${business.email}`;
