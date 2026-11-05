/**
 * Photography register. Every image used on the site is listed here with
 * its status, so temporary imagery can never be mistaken for real work.
 *
 * illustrative: true  → temporary stock/AI image. Shown with an
 *                       "Illustrative image" note; alt text describes the
 *                       scene only and never claims it shows Cawley's work.
 *                       Replace with genuine photography when available.
 */
import heroArboristOak from '@/assets/images/home/hero-arborist-oak.webp';

export const media = {
  homeHero: {
    src: heroArboristOak,
    alt: 'An arborist in an orange helmet and harness, roped into the spreading crown of a mature oak above misty green fields.',
    illustrative: true,
  },
} as const;
