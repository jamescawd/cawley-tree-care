/**
 * Homepage portfolio: the business's own jobs (supplied Nov 2026).
 * Photos prepared by scripts/photos/prepare-work-photos.py (third-party
 * signage blurred, gentle tonal correction only).
 *
 * Photos used in the hero, service chapters and About section are not
 * repeated here. Captions describe the work shown; locations are not
 * stated because they have not been provided.
 */
import type { ImageMetadata } from 'astro';
import storm3 from '@/assets/images/work/storm-3.jpg';
import storm4 from '@/assets/images/work/storm-4.jpg';
import storm5 from '@/assets/images/work/storm-5.jpg';
import storm6 from '@/assets/images/work/storm-6.jpg';
import hedge2 from '@/assets/images/work/hedge-2.jpg';
import hedge3 from '@/assets/images/work/hedge-3.jpg';
import hedge5 from '@/assets/images/work/hedge-5.jpg';
import hedge6 from '@/assets/images/work/hedge-6.jpg';
import hedge11 from '@/assets/images/work/hedge-11.jpg';
import hedge12 from '@/assets/images/work/hedge-12.jpg';
import removal2 from '@/assets/images/work/removal-2.jpg';
import removal3 from '@/assets/images/work/removal-3.jpg';
import removal6 from '@/assets/images/work/removal-6.jpg';
import removal7 from '@/assets/images/work/removal-7.jpg';
import removal8 from '@/assets/images/work/removal-8.jpg';
import removal9 from '@/assets/images/work/removal-9.jpg';
import removal10 from '@/assets/images/work/removal-10.jpg';
import removal11 from '@/assets/images/work/removal-11.jpg';

export type WorkCategory = 'surgery' | 'removal' | 'storm' | 'hedges' | 'landscaping';

export const workCategories: { id: WorkCategory; label: string }[] = [
  { id: 'surgery', label: 'Tree surgery' },
  { id: 'removal', label: 'Tree removal' },
  { id: 'storm', label: 'Storm clearance' },
  { id: 'hedges', label: 'Hedges' },
  { id: 'landscaping', label: 'Landscaping' },
];

export interface WorkPhoto {
  src: ImageMetadata;
  alt: string;
  /** Badge, e.g. "Before" / "After". */
  tag?: string;
  focus?: string;
}

/**
 * Mosaic tile sizes (12-column desktop grid):
 *  feature = 8 cols × 4 rows, tall = 4 × 4, wide = 8 × 3, standard = 4 × 3.
 */
export type TileSize = 'feature' | 'tall' | 'wide' | 'standard';

export interface WorkItem {
  category: WorkCategory;
  title: string;
  size: TileSize;
  photos: [WorkPhoto] | [WorkPhoto, WorkPhoto];
}

/** Order fills complete 12-column rows on desktop. */
export const workItems: WorkItem[] = [
  {
    category: 'removal',
    title: 'Large tree removed from a tracked platform',
    size: 'feature',
    photos: [
      {
        src: removal2,
        alt: 'Arborist on a green tracked access platform removing the last limbs of a large tree, with a chipper and log stack below.',
        tag: 'During',
        focus: '55% 45%',
      },
      {
        src: removal3,
        alt: 'The garden afterwards: lawn clear, logs stacked by the pond and the seating area tidy under a blue sky.',
        tag: 'After',
        focus: '50% 72%',
      },
    ],
  },
  {
    category: 'surgery',
    title: 'Climbing a tree for crown work',
    size: 'tall',
    photos: [
      {
        src: removal11,
        alt: 'Arborist in orange chainsaw trousers climbing a tall tree that has been carefully reduced.',
        focus: '50% 40%',
      },
    ],
  },
  {
    category: 'storm',
    title: 'Storm-snapped beech over a lane',
    size: 'standard',
    photos: [
      {
        src: storm5,
        alt: 'A large beech limb snapped in a storm and hanging low across a rural lane.',
      },
    ],
  },
  {
    category: 'surgery',
    title: 'Pruning at height',
    size: 'standard',
    photos: [
      {
        src: removal10,
        alt: 'Arborist in a harness and helmet pruning among the upper branches of a tree.',
        focus: '50% 35%',
      },
    ],
  },
  {
    category: 'storm',
    title: 'Tree down on a house',
    size: 'standard',
    photos: [
      {
        src: storm6,
        alt: 'A storm-felled tree leaning across a wet driveway and onto the roof of a white house.',
      },
    ],
  },
  {
    category: 'hedges',
    title: 'Overgrown laurel cut back',
    size: 'wide',
    photos: [
      {
        src: hedge6,
        alt: 'An overgrown laurel hedge spreading over a garden path.',
        tag: 'Before',
      },
      { src: hedge5, alt: 'The same laurel hedge cut back to a tidy, even shape.', tag: 'After' },
    ],
  },
  {
    category: 'storm',
    title: 'Uprooted tree across a garden',
    size: 'standard',
    photos: [
      {
        src: storm3,
        alt: 'An uprooted tree lying across a garden and a broken fence after a storm.',
      },
    ],
  },
  {
    category: 'removal',
    title: 'Climbing a mature tree before dismantling',
    size: 'tall',
    photos: [
      {
        src: removal7,
        alt: 'A climber high in a large mature tree beside a stone wall, with a ground worker below.',
        focus: '50% 30%',
      },
    ],
  },
  {
    category: 'removal',
    title: 'Mature tree reduced to its trunk',
    size: 'feature',
    photos: [
      {
        src: removal9,
        alt: 'A large mature tree beside a stone wall and timber cabin, before work began.',
        tag: 'Before',
        focus: '50% 40%',
      },
      {
        src: removal8,
        alt: 'The tree reduced to its main trunk with rigging ropes in place and logs cut on the ground.',
        tag: 'During',
        focus: '50% 40%',
      },
    ],
  },
  {
    category: 'landscaping',
    title: 'Overgrown border cleared and gravelled',
    size: 'wide',
    photos: [
      {
        src: hedge2,
        alt: 'An overgrown border and gravel path running between a hedge and a house.',
        tag: 'Before',
        focus: '50% 60%',
      },
      {
        src: hedge3,
        alt: 'The border cleared and finished with fresh decorative gravel and a neat timber edge.',
        tag: 'After',
        focus: '50% 60%',
      },
    ],
  },
  {
    category: 'removal',
    title: 'Timber stacked after dismantling',
    size: 'standard',
    photos: [
      {
        src: removal6,
        alt: 'Logs stacked neatly on decking beside a timber building after a tree was dismantled.',
      },
    ],
  },
  {
    category: 'hedges',
    title: 'Beech hedge reduced',
    size: 'wide',
    photos: [
      {
        src: hedge11,
        alt: 'A tall, overgrown beech hedge along a gravel driveway, with a chipper parked nearby.',
        tag: 'Before',
      },
      {
        src: hedge12,
        alt: 'The same beech hedge reduced in height and cut back to the main stems.',
        tag: 'After',
      },
    ],
  },
  {
    category: 'storm',
    title: 'Clearing a road blocked by fallen trees',
    size: 'standard',
    photos: [
      {
        src: storm4,
        alt: 'A worker in orange protective kit walking along a lane cleared through storm-fallen conifers.',
        focus: '50% 55%',
      },
    ],
  },
];
