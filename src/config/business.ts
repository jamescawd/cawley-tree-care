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
  foundingYear: placeholder('Year the business was established') as Maybe<number>,

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

  /** Only state cover that is confirmed in writing. */
  insurance: placeholder('Insurance details (type and level of cover)'),

  links: {
    googleBusinessProfile: placeholder('Google Business Profile URL'),
    facebook: placeholder('Facebook page URL (remove if not used)'),
    instagram: placeholder('Instagram profile URL (remove if not used)'),
  },
} as const;
