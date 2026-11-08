/**
 * Content model for a town page (e.g. /tree-surgeon-athlone), rendered by
 * src/layouts/LocationPageLayout.astro in this order:
 * hero → local introduction → services → proof (review + photos) →
 * advice (FAQs) → nearby areas → final call to action (+ quote form).
 *
 * Athlone is the master template. Before copying it for another town, read
 * docs/LOCATION-PAGES.md: a town page needs its own genuine local content,
 * not the Athlone text with the name swapped.
 */
import type { Heading, Photo } from '@/config/servicePages/types';

export interface LocationPage {
  /** URL without the leading slash, e.g. "tree-surgeon-athlone". */
  slug: string;
  /** Town name as shown, e.g. "Athlone". */
  town: string;
  /** ≤60 characters, unique. */
  seoTitle: string;
  /** 50–160 characters, unique. */
  description: string;

  hero: Heading & { eyebrow: string; intro: string; image: Photo };
  intro: Heading & {
    paragraphs: string[];
    /** Short confirmed facts for the side panel. */
    facts: string[];
  };
  services: Heading & {
    intro: string;
    /** `href` must be an existing service page. Text is written for this page. */
    items: { title: string; text: string; href: string }[];
  };
  proof: Heading & {
    intro: string;
    /** Id of a genuine testimonial in src/content/testimonials (file name without .yaml). */
    testimonial?: string;
    photos: Photo[];
  };
  advice: Heading & { intro: string; faqs: { question: string; answer: string }[] };
  nearby: Heading & {
    intro: string;
    /** Towns grouped by county; every town must be listed in config/areas.ts. */
    groups: { county: string; towns: string[] }[];
  };
  cta: Heading & { text: string };
}
