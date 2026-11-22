import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projects (Our Projects page + individual project showcases)
 * -----------------------------------------------------------
 * One Markdown file per project in src/content/projects/. Copy
 * `_template.md.example`, rename it, fill in the frontmatter and write the
 * description as the body. Photos live in src/assets/projects/<project>/.
 *
 * `demo: true` marks a DEMONSTRATION project made from stock photographs to
 * show the layout. Demo projects are labelled on every page, kept out of the
 * sitemap and set to noindex. Delete them once real projects are added.
 */
const services = z.enum([
  'roof-repairs',
  'roof-restoration',
  'new-roofs-and-re-roofing',
  'flat-roofing',
  'fascias-soffits-and-guttering',
  'extensions',
  'property-renovations',
  'general-building-work',
  'media-walls',
  'flooring',
  'knock-throughs',
]);

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) => {
    const photo = z.object({ src: image(), alt: z.string().min(8) });
    return z.object({
      title: z.string(),
      /** Town / area, e.g. "Naas, Co. Kildare". Leave out if not confirmed. */
      location: z.string().optional(),
      county: z.string().optional(),
      category: z.enum(['roofing', 'building', 'interiors']),
      services: z.array(services).min(1),
      /** Short label shown on cards, e.g. "Slate re-roof". */
      workType: z.string(),
      summary: z.string().max(220),
      demo: z.boolean().default(false),
      featured: z.boolean().default(false),
      /** Completion date (YYYY-MM), optional. */
      completed: z.string().optional(),
      cover: photo,
      before: z.array(photo).default([]),
      during: z.array(photo).default([]),
      after: z.array(photo).default([]),
      order: z.number().default(100),
      /** Show a drag-to-compare slider (only when before and after are taken from the same viewpoint). */
      compare: z.boolean().default(false),
      /** Optional job video in public/video/, e.g. "/video/reroof.mp4" (poster: same name .webp). */
      video: z.string().optional(),
    });
  },
});

export const collections = { projects };
