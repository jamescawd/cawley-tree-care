/**
 * Content model for a dedicated service page. Every page is rendered by
 * src/layouts/ServicePageLayout.astro in the same order:
 * hero → introduction → work we undertake → why Cawley's → photos →
 * how it works → areas → FAQs → final call to action (+ quote form).
 *
 * Headings take a `title` and an `accent` (set in orange italic, the site's
 * signature device) and an optional `end` after the accent.
 */
import type { ImageMetadata } from 'astro';

export interface Heading {
  title: string;
  accent: string;
  end?: string;
}

export interface Photo {
  src: ImageMetadata;
  /** Describes what the photo shows. Never names a client or location. */
  alt: string;
  /** Short visible caption: what kind of work is shown, not a named project. */
  caption: string;
  focus?: string;
}

/**
 * One side of a before/after pair. Leave `src` out until the owner's photo
 * arrives: previews show a "photo to come" frame, and on the launched site
 * (ALLOW_INDEXING=true) a pair with a missing photo is hidden automatically.
 */
export interface PhotoSlot {
  src?: ImageMetadata;
  /** Describe what the real photo shows once it is added. */
  alt?: string;
  focus?: string;
}

export interface BeforeAfterPair {
  /** Short title, e.g. "New boundary fence". Update to describe the real job. */
  title: string;
  summary?: string;
  before: PhotoSlot;
  after: PhotoSlot;
}

export interface ServicePage {
  /** URL without the leading slash, e.g. "tree-removal". */
  slug: string;
  /** Short name for menus, breadcrumbs and related-service links. */
  navLabel: string;
  /** One line for related-service cards. */
  teaser: string;
  /** Registry ids (config/services.ts) this page covers; the first one is
   *  pre-selected in the quote form and used for structured data. */
  services: string[];
  /** ≤60 characters, unique. */
  seoTitle: string;
  /** 50–160 characters, unique. */
  description: string;

  hero: Heading & {
    eyebrow: string;
    intro: string;
    image: Photo;
    /** Urgent services: make "Call" the primary hero button. */
    callFirst?: boolean;
  };
  overview: Heading & {
    paragraphs: string[];
    situationsTitle: string;
    situations: string[];
  };
  /** `href` (optional) links an item to its own service page. */
  work: Heading & { intro: string; items: { title: string; text: string; href?: string }[] };
  /** Page-specific opening line for the shared "Why Cawley's" section. */
  why: string;
  /** Genuine photos. May be empty when the page relies on `beforeAfter`. */
  photos: Heading & { intro: string; items: Photo[] };
  /** Optional before/after pairs, shown at the top of the photos section. */
  beforeAfter?: { pairs: BeforeAfterPair[] };
  process: Heading & { steps: { title: string; text: string }[] };
  areas: string;
  faqs: { question: string; answer: string }[];
  cta: Heading & { text: string };
  /** Slugs of related service pages. */
  related: string[];
  /** Optional link to a town page, shown under related services. */
  localPage?: { href: string; label: string };
}
