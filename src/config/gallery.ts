/**
 * Homepage "Featured work" gallery: the business's own jobs (supplied
 * Nov 2026). Photos are prepared by scripts/photos/prepare-work-photos.py
 * (third-party signage blurred, gentle tonal correction only).
 *
 * Captions describe the work shown; locations are not stated because
 * they have not been provided.
 */
import type { ImageMetadata } from 'astro';
import storm2 from '@/assets/images/work/storm-2.jpg';
import storm3 from '@/assets/images/work/storm-3.jpg';
import storm5 from '@/assets/images/work/storm-5.jpg';
import storm6 from '@/assets/images/work/storm-6.jpg';
import hedge1 from '@/assets/images/work/hedge-1.jpg';
import hedge4 from '@/assets/images/work/hedge-4.jpg';
import hedge5 from '@/assets/images/work/hedge-5.jpg';
import hedge6 from '@/assets/images/work/hedge-6.jpg';
import hedge7 from '@/assets/images/work/hedge-7.jpg';
import hedge9 from '@/assets/images/work/hedge-9.jpg';
import hedge10 from '@/assets/images/work/hedge-10.jpg';
import removal1 from '@/assets/images/work/removal-1.jpg';
import removal3 from '@/assets/images/work/removal-3.jpg';
import removal4 from '@/assets/images/work/removal-4.jpg';
import removal6 from '@/assets/images/work/removal-6.jpg';
import removal8 from '@/assets/images/work/removal-8.jpg';
import removal9 from '@/assets/images/work/removal-9.jpg';
import removal12 from '@/assets/images/work/removal-12.jpg';

export type WorkCategory = 'storm' | 'removal' | 'hedges';

export const workCategories: { id: WorkCategory; label: string }[] = [
  { id: 'storm', label: 'Storm damage' },
  { id: 'removal', label: 'Tree removal' },
  { id: 'hedges', label: 'Hedges' },
];

export interface WorkPhoto {
  src: ImageMetadata;
  alt: string;
  /** Badge on a pair, e.g. "Before" / "After". */
  tag?: string;
  /** object-position for the crop. */
  focus?: string;
}

export interface WorkItem {
  category: WorkCategory;
  title: string;
  /** One photo, or a before/after (or during/after) pair. */
  photos: [WorkPhoto] | [WorkPhoto, WorkPhoto];
}

/** Ordered so pairs (2 columns) and singles (1 column) fill 3-column rows. */
export const workItems: WorkItem[] = [
  {
    category: 'removal',
    title: 'Sectional dismantling beside a building',
    photos: [
      {
        src: removal4,
        alt: 'Climber roped into a large sycamore, taking it down in sections beside a timber building.',
        tag: 'During',
        focus: '50% 40%',
      },
      {
        src: removal6,
        alt: 'The same site afterwards: logs stacked neatly on the decking and a tall stump left standing.',
        tag: 'After',
      },
    ],
  },
  {
    category: 'storm',
    title: 'Fallen conifer lifted off a house',
    photos: [
      {
        src: storm2,
        alt: 'Tractor-mounted crane and grab lifting a large fallen conifer off the front of a white house.',
      },
    ],
  },
  {
    category: 'removal',
    title: 'Climbing and dismantling',
    photos: [
      {
        src: removal12,
        alt: 'Arborist in full protective kit cutting a section of trunk from a tree, sawdust flying against a blue sky.',
        focus: '50% 30%',
      },
    ],
  },
  {
    category: 'hedges',
    title: 'Conifer hedge trimmed near overhead lines',
    photos: [
      {
        src: hedge9,
        alt: 'Worker on a tripod ladder trimming the top of a tall conifer hedge close to overhead lines.',
        tag: 'During',
        focus: '50% 45%',
      },
      {
        src: hedge10,
        alt: 'The finished hedge with a neat, even face and the lawn cleared of cuttings.',
        tag: 'After',
      },
    ],
  },
  {
    category: 'removal',
    title: 'Tree removal using a tracked platform',
    photos: [
      {
        src: removal1,
        alt: 'Crew removing a large tree from a tracked access platform, with a chipper and stacked logs below.',
        tag: 'During',
        focus: '50% 55%',
      },
      {
        src: removal3,
        alt: 'The garden afterwards: lawn clear, logs stacked by the pond and the seating area tidy.',
        tag: 'After',
        focus: '50% 70%',
      },
    ],
  },
  {
    category: 'storm',
    title: 'Storm-damaged tree on a driveway',
    photos: [
      {
        src: storm6,
        alt: 'A storm-felled tree leaning across a driveway and onto the roof of a white house.',
      },
    ],
  },
  {
    category: 'storm',
    title: 'Snapped beech over a lane',
    photos: [
      {
        src: storm5,
        alt: 'A large beech limb snapped in a storm, hanging low across a rural lane.',
      },
    ],
  },
  {
    category: 'hedges',
    title: 'Conifer hedge reshaped',
    photos: [
      { src: hedge1, alt: 'A tall, untidy conifer hedge along the side of a lawn.', tag: 'Before' },
      {
        src: hedge4,
        alt: 'The same hedge trimmed to a clean, straight line beside the lawn.',
        tag: 'After',
      },
    ],
  },
  {
    category: 'removal',
    title: 'Mature tree taken down beside a stone wall',
    photos: [
      {
        src: removal9,
        alt: 'A large mature tree beside a stone wall and a timber cabin, before work began.',
        tag: 'Before',
      },
      {
        src: removal8,
        alt: 'The tree reduced to its main trunk, with rigging ropes in place and logs on the ground.',
        tag: 'During',
      },
    ],
  },
  {
    category: 'storm',
    title: 'Uprooted tree across a garden',
    photos: [
      {
        src: storm3,
        alt: 'An uprooted tree lying across a garden and a broken fence after a storm.',
      },
    ],
  },
  {
    category: 'hedges',
    title: 'Hedge trimming at height',
    photos: [
      {
        src: hedge7,
        alt: 'Worker on a tripod ladder trimming a tall conifer hedge with a hedge cutter.',
        focus: '50% 35%',
      },
    ],
  },
  {
    category: 'hedges',
    title: 'Laurel hedge cut back',
    photos: [
      {
        src: hedge6,
        alt: 'An overgrown laurel hedge spreading over a garden path.',
        tag: 'Before',
      },
      { src: hedge5, alt: 'The laurel hedge cut back to a tidy, even shape.', tag: 'After' },
    ],
  },
];
