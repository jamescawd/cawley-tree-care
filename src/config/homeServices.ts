/**
 * Homepage service chapters (confirmed services, Nov 2026).
 * Each chapter uses a different genuine photograph; none of these are
 * repeated in the hero, About section or portfolio.
 * Stump grinding has no photograph yet, so it renders as a typographic
 * panel; add `image` once a genuine photo is supplied.
 */
import type { ImageMetadata } from 'astro';
import treeSurgery from '@/assets/images/work/removal-12.jpg';
import dismantling from '@/assets/images/work/removal-4.jpg';
import storm from '@/assets/images/work/storm-2.jpg';
import hedges from '@/assets/images/work/hedge-9.jpg';
import landscaping from '@/assets/images/work/hedge-4.jpg';

export interface ServiceChapter {
  id: string;
  label: string;
  /** Heading; the part in `accent` is set in orange italic. */
  title: string;
  accent: string;
  description: string;
  /** The customer benefit, one sentence. */
  benefit: string;
  includes?: string[];
  image?: { src: ImageMetadata; alt: string; focus?: string };
  /** Link text for the quote/learn-more link. */
  cta: string;
}

export const serviceChapters: ServiceChapter[] = [
  {
    id: 'tree-surgery',
    label: 'Tree surgery',
    title: 'Tree surgery &',
    accent: 'crown reduction',
    description:
      'Pruning, crown reduction and remedial work carried out from the tree itself, with the right cuts in the right places.',
    benefit:
      'Your trees stay healthy, safe and in proportion with your home, rather than being cut back harder than they need.',
    includes: ['Crown reduction', 'Pruning & remedial work', 'Tree health inspections'],
    image: {
      src: treeSurgery,
      alt: "A Cawley's arborist in a harness and visor cutting a section from a tree trunk, sawdust drifting against a clear blue sky.",
      focus: '50% 28%',
    },
    cta: 'Request a tree surgery quote',
  },
  {
    id: 'tree-removal',
    label: 'Tree removal',
    title: 'Felling &',
    accent: 'sectional dismantling',
    description:
      'Where a tree has to come down, we fell it in one piece where there is room, or take it apart section by section where there is not.',
    benefit:
      'Trees beside houses, sheds, roads and boundaries are removed in a controlled way, with your property protected throughout.',
    includes: ['Tree felling', 'Sectional dismantling', 'Clearing timber and brash'],
    image: {
      src: dismantling,
      alt: 'A climber roped high in a large sycamore, dismantling it in sections directly beside a timber building.',
      focus: '50% 38%',
    },
    cta: 'Request a tree removal quote',
  },
  {
    id: 'storm-damage',
    label: 'Storm damage',
    title: 'Storm-damaged &',
    accent: 'dangerous trees',
    description:
      'Fallen, split and leaning trees made safe and cleared, from blocked lanes and driveways to trees resting on roofs.',
    benefit:
      'A dangerous situation is brought under control quickly and safely, so you can get access and repairs back on track.',
    image: {
      src: storm,
      alt: 'A tractor-mounted crane and grab lifting a large storm-felled conifer off the front of a white house.',
      focus: '50% 50%',
    },
    cta: 'Get help with a storm-damaged tree',
  },
  {
    id: 'hedges',
    label: 'Hedges',
    title: 'Hedge cutting &',
    accent: 'reduction',
    description:
      'Tall and overgrown hedges trimmed, shaped and reduced in height, including work at height and close to overhead lines.',
    benefit:
      'You get back light, space and a clean, even hedge line, without having to tackle a dangerous job yourself.',
    includes: ['Hedge trimming & shaping', 'Height and width reduction', 'Cuttings cleared away'],
    image: {
      src: hedges,
      alt: 'A worker on a tripod ladder trimming the top of a tall conifer hedge beside overhead lines.',
      focus: '50% 42%',
    },
    cta: 'Request a hedge cutting quote',
  },
  {
    id: 'landscaping',
    label: 'Landscaping',
    title: 'Gardens & grounds,',
    accent: 'finished well',
    description:
      'Planting, lawns and turfing, patios and paving, fencing, garden clearance and ongoing maintenance.',
    benefit:
      'The same care we bring to trees, applied to the whole garden, so the finished space looks right and is easy to look after.',
    includes: [
      'Garden design & planting',
      'Lawns & turfing',
      'Patios, paving & fencing',
      'Clearance & maintenance',
    ],
    image: {
      src: landscaping,
      alt: 'A sunlit lawn running alongside a long, neatly trimmed conifer hedge beside a white bungalow.',
      focus: '50% 60%',
    },
    cta: 'Request a landscaping quote',
  },
];

/** Supporting service shown as a compact panel (no photo yet). */
export const stumpGrinding = {
  id: 'stump-grinding',
  label: 'Also available',
  title: 'Stump grinding',
  description:
    'Stumps ground out below ground level after felling, so the area can be levelled, turfed or replanted.',
  cta: 'Ask about stump grinding',
};
