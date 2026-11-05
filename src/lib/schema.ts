/**
 * schema.org JSON-LD builders.
 *
 * Every builder drops placeholder values, so structured data only ever
 * contains confirmed facts. Google penalises inaccurate markup.
 */
import { business } from '@/config/business';
import { serviceAreas } from '@/config/areas';
import { provided } from '@/lib/placeholder';

type JsonLd = Record<string, unknown>;

/** Recursively removes undefined values, empty arrays and empty objects. */
const clean = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    const items = value.map(clean).filter((v) => v !== undefined);
    return items.length ? items : undefined;
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([k, v]) => [k, clean(v)] as const)
      .filter(([, v]) => v !== undefined);
    return entries.length ? Object.fromEntries(entries) : undefined;
  }
  return value;
};

const withContext = (data: JsonLd): JsonLd => ({
  '@context': 'https://schema.org',
  ...((clean(data) as JsonLd | undefined) ?? {}),
});

/** Confirmed counties, each containing its confirmed towns. */
const areaServed = () =>
  serviceAreas.flatMap((area) => {
    const county = provided(area.county);
    if (!county) return [];
    return [
      {
        '@type': 'AdministrativeArea',
        name: `County ${county}`,
        containsPlace: area.towns
          .map(provided)
          .filter(Boolean)
          .map((name) => ({ '@type': 'Place', name })),
      },
    ];
  });

export const businessId = (site: URL) => new URL('/#business', site).href;

export const localBusinessSchema = (site: URL): JsonLd => {
  const { address, contact, links } = business;
  const geo = provided(business.geo);
  const street = provided(address.streetAddress);
  const locality = provided(address.locality);

  return withContext({
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId(site),
    name: business.tradingName,
    legalName: provided(business.legalName),
    description: provided(business.description),
    url: site.href,
    telephone: provided(contact.phone),
    email: provided(contact.email),
    address:
      street || locality
        ? {
            '@type': 'PostalAddress',
            streetAddress: street,
            addressLocality: locality,
            addressRegion: provided(address.region),
            postalCode: provided(address.postalCode),
            addressCountry: address.country,
          }
        : undefined,
    geo: geo ? { '@type': 'GeoCoordinates', ...geo } : undefined,
    openingHours: provided(business.openingHours),
    areaServed: areaServed(),
    hasCredential: business.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      recognizedBy: { '@type': 'Organization', name: c.issuer },
      url: c.url,
    })),
    sameAs: [links.googleBusinessProfile, links.facebook, links.instagram]
      .map(provided)
      .filter(Boolean),
  });
};

export const websiteSchema = (site: URL): JsonLd =>
  withContext({
    '@type': 'WebSite',
    '@id': new URL('/#website', site).href,
    url: site.href,
    name: business.tradingName,
    inLanguage: 'en-IE',
    publisher: { '@id': businessId(site) },
  });

export interface Crumb {
  name: string;
  path: string;
}

export const breadcrumbSchema = (crumbs: Crumb[], site: URL): JsonLd =>
  withContext({
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: new URL(crumb.path, site).href,
    })),
  });

export const serviceSchema = (
  service: { name: string; description: string; path: string },
  site: URL,
): JsonLd =>
  withContext({
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: new URL(service.path, site).href,
    provider: { '@id': businessId(site) },
    areaServed: areaServed(),
  });

export const faqSchema = (items: { question: string; answer: string }[]): JsonLd =>
  withContext({
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  });
