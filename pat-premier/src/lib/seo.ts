import { business, telHref } from '@/config/business';

export const SITE_NAME = business.name;

/** Ensures every page title ends with the brand, without doubling it. */
export function pageTitle(title?: string): string {
  if (!title) return `${business.name} | ${business.tagline}`;
  return /Pat Premier/.test(title) ? title : `${title} | ${business.shortName}`;
}

/** Organisation structured data, built ONLY from confirmed facts. */
export function organisationSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': new URL('/#business', site).href,
    name: business.name,
    slogan: business.tagline,
    url: site.href,
    logo: new URL('/brand/logo-on-light.svg', site).href,
    telephone: business.phone.e164,
    email: business.email,
    sameAs: [business.social.facebook, business.social.tiktok].filter(Boolean),
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Leinster' },
      { '@type': 'AdministrativeArea', name: 'Munster' },
      { '@type': 'Place', name: 'Midlands, Ireland' },
    ],
    knowsAbout: ['Roofing', 'Roof repairs', 'Flat roofing', 'Extensions', 'Renovations', 'Building work'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phone.e164,
      email: business.email,
      contactType: 'customer service',
      areaServed: 'IE',
      availableLanguage: 'en',
    },
  };
}

export function breadcrumbSchema(site: URL, trail: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: new URL(t.href, site).href,
    })),
  };
}

export function serviceSchema(site: URL, s: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: new URL(s.url, site).href,
    provider: { '@id': new URL('/#business', site).href },
    areaServed: ['Leinster', 'Munster', 'Midlands, Ireland'],
  };
}

export { telHref };
