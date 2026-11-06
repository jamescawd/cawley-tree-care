/**
 * Content collections: Markdown files validated against these schemas at
 * build time. A missing or mistyped field fails the build, so content errors
 * are caught before they reach the live site.
 *
 * Files starting with "_" (e.g. `_template.md`) are ignored: copy a template,
 * rename it, fill it in.
 */
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const seo = z.object({
  /** Overrides the page title in search results. */
  title: z.string().max(60).optional(),
  description: z.string().min(50).max(160),
});

const services = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Tree care leads; landscaping is secondary. */
      category: z.enum(['tree-care', 'landscaping']),
      summary: z.string().max(200),
      seo,
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      /** Lower numbers appear first. */
      order: z.number().int().default(100),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(200),
      seo,
      /** Town / county, matching an entry in src/config/areas.ts. */
      location: z.string(),
      completed: z.coerce.date(),
      services: z.array(reference('services')).default([]),
      coverImage: image(),
      coverImageAlt: z.string(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      /** Only real, completed jobs with the client's permission to publish. */
      clientPermission: z.literal(true),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/guides' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seo,
      published: z.coerce.date(),
      updated: z.coerce.date().optional(),
      author: z.string(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      relatedServices: z.array(reference('services')).default([]),
      draft: z.boolean().default(false),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,yaml,json}', base: './src/content/testimonials' }),
  schema: z.object({
    /** As the client agreed to be named, e.g. "Mary, Naas". */
    name: z.string(),
    location: z.string().optional(),
    quote: z.string(),
    /** Where the review was originally left, so it can be verified. */
    source: z.enum(['google', 'facebook', 'direct']),
    sourceUrl: z.url().optional(),
    date: z.coerce.date().optional(),
    /** Display order (lower first). */
    order: z.number().int().default(100),
    rating: z.number().int().min(1).max(5).optional(),
    /** Must be a genuine review, published with permission. */
    verified: z.literal(true),
    service: reference('services').optional(),
  }),
});

export const collections = { services, projects, guides, testimonials };
