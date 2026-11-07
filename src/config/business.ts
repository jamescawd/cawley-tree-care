import { placeholder, type Maybe } from '@/lib/placeholder';

/**
 * Single source of truth for business facts.
 *
 * Everything here feeds visible copy, the footer, contact links and Google
 * structured data, so it must match the Google Business Profile exactly
 * (same name, address, phone: "NAP consistency").
 *
 * Replace each `placeholder()` only with information confirmed by the business.
 */

export interface PostalAddress {
  streetAddress: Maybe<string>;
  /** Town / city. */
  locality: Maybe<string>;
  /** County, e.g. "Co. Kildare". */
  region: Maybe<string>;
  /** Eircode. */
  postalCode: Maybe<string>;
  /** ISO 3166-1 alpha-2. */
  country: 'IE';
}

export interface Credential {
  /** e.g. the name of a qualification or professional membership. */
  name: string;
  /** Awarding / membership body. */
  issuer: string;
  /** Public verification link, if one exists. */
  url?: string;
}

export const business = {
  tradingName: "Cawley's Tree Care & Landscaping",
  shortName: "Cawley's",
  legalName: placeholder('Registered business name (as registered with the CRO / Revenue)'),
  tagline: placeholder('Brand tagline / strapline'),
  description: placeholder(
    'One or two sentence description of the business (used in search results and social shares)',
  ),
  /** Positioning: tree care leads, landscaping supports. */
  serviceCategories: [
    { id: 'tree-care', name: 'Tree Care & Tree Surgery', priority: 'primary' },
    { id: 'landscaping', name: 'Landscaping', priority: 'secondary' },
  ],

  /**
   * CONFIRMED by the business (Nov 2026): over 15 years in business.
   * The exact founding year is not confirmed. Claim only "over 15 years";
   * never derive a year or a larger number from it.
   */
  experience: {
    years: 15,
    /** Large-figure form, e.g. for a credentials band. */
    figure: '15+',
    label: 'Over 15 Years of Experience',
  },

  contact: {
    /** International format for tel: links and structured data, e.g. +353 87 000 0000. */
    phone: '+353871199816', // CONFIRMED by the business (Nov 2026)
    /** How the number is shown on the page. */
    phoneDisplay: '087 119 9816',
    /**
     * NOT CONFIRMED. Suggested: info@qualitytreecare.com or
     * info@qualitytreecare.ie, but neither matches the website domain
     * (cawleytreecare.ie). Confirm the exact address before launch.
     */
    email: placeholder(
      'Enquiries email: info@qualitytreecare.com or .ie? Neither matches cawleytreecare.ie',
      'Email to be confirmed',
    ),
  },

  /** Base / registered location. Must match the Google Business Profile. */
  address: {
    streetAddress: placeholder('Street address (or omit if a service-area business)'),
    locality: 'Athlone', // CONFIRMED by the business (Nov 2026)
    region: 'Co. Westmeath', // CONFIRMED by the business (Nov 2026)
    postalCode: placeholder('Eircode'),
    country: 'IE',
  } satisfies PostalAddress,

  /** Latitude / longitude of the base, for maps and structured data. */
  geo: placeholder('Map coordinates of the base location') as Maybe<{
    latitude: number;
    longitude: number;
  }>,

  /**
   * CONFIRMED by the business (Nov 2026): 8am to 6pm, Monday to Saturday;
   * customers can call 24/7 about emergencies. "24/7" means the phone can
   * be rung at any time, not a guaranteed response time.
   */
  /** schema.org format, used in structured data. */
  openingHours: ['Mo-Sa 08:00-18:00'] as Maybe<string[]>,
  /** How the hours are shown on the page. */
  openingHoursDisplay: 'Monday to Saturday, 8am to 6pm',
  emergencyContact: 'Emergencies: call us 24/7',

  /** Verified qualifications and memberships only. Leave empty until confirmed. */
  credentials: [] as Credential[],

  /**
   * CONFIRMED by the business (Nov 2026): fully insured.
   * Do not name an insurer, cover types (e.g. public liability) or amounts
   * unless those details are separately confirmed.
   */
  insurance: {
    fullyInsured: true,
    label: 'Fully Insured',
  },

  /**
   * About-section story. Must come from the business: who runs it, where it
   * is based, how it started. Nothing here may be written on their behalf.
   */
  about: [
    "Cawley's Tree Care & Landscaping is a tree surgery and landscaping business based in Athlone, Co. Westmeath. For more than fifteen years we have looked after trees, hedges and gardens for customers across the Midlands and the West.",
    'Tree work is what we do best: pruning and crown reduction, careful removals beside homes and buildings, and making storm-damaged trees safe. Alongside it we clear overgrown gardens and sites, chip and remove green waste, and carry out landscaping, so one team can take care of the whole job.',
    'We are fully insured. Before any work starts we explain what we propose to do and what it will cost, we work with care around your home and garden, and when the job is done the site is left clean and tidy.',
  ],

  /** Quote form handler: worker/index.ts on Cloudflare. */
  enquiryEndpoint: '/api/quote',
  /**
   * The form handler needs three Cloudflare settings before enquiries can
   * be delivered (see worker/index.ts). Until then submissions go to
   * /quote-error, which gives the phone number.
   */
  enquiryDelivery: placeholder(
    'Quote form not live: the site is on Cloudflare Pages, which does not run worker/index.ts. Connect the handler, then set RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM',
  ),

  /**
   * CONFIRMED by the business (Nov 2026): the reviews in
   * src/content/testimonials were sent directly by customers for use on
   * the website.
   */
  reviewsConfirmed: true,

  /** The privacy notice at /privacy was drafted for the business to review. */
  privacyReviewed: placeholder('Review and approve the privacy notice at /privacy'),

  links: {
    privacyPolicy: '/privacy',
    /** CONFIRMED by the business (Nov 2026): Google Business Profile (Google Maps link). */
    googleBusinessProfile: 'https://maps.app.goo.gl/R4FtkTmv1xhLis16A' as Maybe<string>,
    /**
     * Set to true once the profile has a few genuine Google reviews: the
     * button then reads "Read our reviews on Google" instead of "Find us on Google".
     */
    googleHasReviews: false,
    facebook: placeholder('Facebook page URL (remove if not used)'),
    instagram: placeholder('Instagram profile URL (remove if not used)'),
  },
} as const;
