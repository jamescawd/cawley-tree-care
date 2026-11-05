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
    phone: placeholder('Main phone number'),
    email: placeholder('Enquiries email address'),
  },

  /** Base / registered location. Must match the Google Business Profile. */
  address: {
    streetAddress: placeholder('Street address (or omit if a service-area business)'),
    locality: placeholder('Base town'),
    region: placeholder('Base county'),
    postalCode: placeholder('Eircode'),
    country: 'IE',
  } satisfies PostalAddress,

  /** Latitude / longitude of the base, for maps and structured data. */
  geo: placeholder('Map coordinates of the base location') as Maybe<{
    latitude: number;
    longitude: number;
  }>,

  /** schema.org format, e.g. "Mo-Fr 08:00-18:00". */
  openingHours: placeholder('Opening hours') as Maybe<string[]>,

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

  links: {
    googleBusinessProfile: placeholder('Google Business Profile URL'),
    facebook: placeholder('Facebook page URL (remove if not used)'),
    instagram: placeholder('Instagram profile URL (remove if not used)'),
  },
} as const;
