/**
 * Photography register. Every image used on the site is listed here with
 * its status, so temporary imagery can never be mistaken for real work.
 *
 * Brand artwork (logo) lives in src/assets/brand/: logo-original.webp is
 * the file as supplied; the transparent variants and the icons in public/
 * are generated from it by scripts/brand/*.py.
 *
 * illustrative: true  → temporary stock/AI image. Shown with an
 *                       "Illustrative image" note; alt text describes the
 *                       scene only and never claims it shows Cawley's work.
 *                       Replace with genuine photography when available.
 */
import heroStormClearance from '@/assets/images/work/storm-1.jpg';
import crewPlatform from '@/assets/images/work/removal-1.jpg';

export const media = {
  homeHero: {
    src: heroStormClearance,
    alt: "A Cawley's arborist in orange protective kit cutting up a storm-fallen beech across a rural lane in low evening light.",
    illustrative: false,
  },
  aboutTeam: {
    src: crewPlatform,
    alt: "The Cawley's crew removing a large tree from a tracked access platform, with a chipper and stacked logs below.",
    illustrative: false,
  },
} as const;
