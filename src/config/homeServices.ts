/**
 * Homepage service chapters. Nine confirmed services, grouped into six
 * chapters so the page stays readable. Each chapter uses a different
 * genuine photograph that is not repeated elsewhere on the homepage.
 */
import type { ImageMetadata } from 'astro';
import surgeryImg from '@/assets/images/work/arborist-cutting-trunk-section.jpg';
import removalImg from '@/assets/images/work/sectional-dismantling-beside-building.jpg';
import stormImg from '@/assets/images/work/crane-lifting-fallen-conifer-off-house.jpg';
import hedgeImg from '@/assets/images/work/conifer-hedge-cut-near-overhead-lines.jpg';
import clearanceImg from '@/assets/images/work/overgrown-beech-hedge-with-wood-chipper.jpg';
import landscapingImg from '@/assets/images/work/conifer-hedge-trimmed-beside-lawn.jpg';
import { serviceById, type Service } from '@/config/services';

export interface ServiceChapter {
  /** Anchor id on the homepage. */
  id: string;
  label: string;
  /** Heading; `accent` is set in orange italic. */
  title: string;
  accent: string;
  /** What the work involves. */
  description: string;
  /** Why customers need it / what they get. */
  benefit: string;
  /** Services covered by this chapter (from the registry). */
  services: Service[];
  image: { src: ImageMetadata; alt: string; focus?: string };
  cta: string;
}

export const serviceChapters: ServiceChapter[] = [
  {
    id: 'tree-surgery',
    label: 'Tree surgery',
    title: 'Tree surgery, pruning &',
    accent: 'crown reduction',
    description:
      'Most trees do not need to come down. Careful pruning, crown reduction and the removal of deadwood can make a tree safer, let more light into the garden and take weight off branches that overhang roofs, roads or neighbours.',
    benefit:
      'We climb and work from within the tree, making clean cuts in the right places so it stays healthy and keeps a natural shape rather than being hacked back.',
    services: [
      serviceById('tree-surgery'),
      serviceById('crown-reduction'),
      serviceById('deadwood-removal'),
    ],
    image: {
      src: surgeryImg,
      alt: "A Cawley's arborist in a harness and visor cutting a section from a tree trunk, sawdust drifting against a clear blue sky.",
      focus: '50% 28%',
    },
    cta: 'Ask about tree surgery',
  },
  {
    id: 'tree-removal',
    label: 'Tree removal',
    title: 'Tree removal &',
    accent: 'felling',
    description:
      'When a tree is dead, unsafe or simply in the wrong place, we take it down in a controlled way. Where there is open ground it can be felled whole; beside houses, sheds, walls and wires it is dismantled from the top in manageable sections.',
    benefit:
      'You get the tree out without damage to your property, and the timber and brash are dealt with as agreed, chipped, stacked as logs or taken away.',
    services: [serviceById('tree-removal')],
    image: {
      src: removalImg,
      alt: 'A climber roped high in a large sycamore, dismantling it in sections directly beside a timber building.',
      focus: '50% 38%',
    },
    cta: 'Get a tree removal quote',
  },
  {
    id: 'emergency',
    label: 'Emergency work',
    title: 'Emergency &',
    accent: 'storm-damaged trees',
    description:
      'Storms leave trees split, leaning or lying across lanes, driveways and roofs. These jobs need to be approached carefully, because damaged timber is under tension and can move without warning.',
    benefit:
      'Call us and we will tell you honestly how quickly we can get to you. We make the tree safe first, then clear it so you can get access and repairs back on track.',
    services: [serviceById('emergency')],
    image: {
      src: stormImg,
      alt: 'A tractor-mounted crane and grab lifting a large storm-felled conifer off the front of a white house.',
      focus: '50% 50%',
    },
    cta: 'Call about storm damage',
  },
  {
    id: 'hedges',
    label: 'Hedges',
    title: 'Hedge cutting,',
    accent: 'reduction & removal',
    description:
      'Conifer, laurel and beech hedges can get away from you quickly. We trim and shape them, bring overgrown hedges back down in height and width, and remove hedges entirely where you want the space back.',
    benefit:
      'Tall hedges near overhead lines or over driveways are work most people should not tackle from a ladder. You get light and space back, a clean finish, and every cutting cleared away.',
    services: [serviceById('hedge-cutting')],
    image: {
      src: hedgeImg,
      alt: 'A worker on a tripod ladder trimming the top of a tall conifer hedge beside overhead lines.',
      focus: '50% 42%',
    },
    cta: 'Get a hedge cutting quote',
  },
  {
    id: 'clearance',
    label: 'Clearance',
    title: 'Garden & site clearance,',
    accent: 'chipping & green waste',
    description:
      'Neglected gardens, overgrown plots and building sites cleared of scrub, brambles, small trees and old hedging. Branches and brash are put through our wood chipper on site, so there is far less to take away.',
    benefit:
      'Instead of weekends of work and trips to the recycling centre, the ground is cleared in one go and green waste is removed, leaving it ready to use, landscape or build on.',
    services: [serviceById('garden-clearance'), serviceById('wood-chipping')],
    image: {
      src: clearanceImg,
      alt: 'An overgrown beech hedge along a gravel driveway with a tracked wood chipper parked ready to work.',
      focus: '40% 55%',
    },
    cta: 'Get a clearance quote',
  },
  {
    id: 'landscaping',
    label: 'Landscaping',
    title: 'Landscaping &',
    accent: 'garden improvements',
    description:
      'Once the trees and hedges are right, the rest of the garden often needs attention too. We take on planting, lawns and turfing, patios and paving, fencing and ongoing garden maintenance.',
    benefit:
      'One team who already knows your garden, working to the same standard from the treeline to the lawn.',
    services: [serviceById('landscaping')],
    image: {
      src: landscapingImg,
      alt: 'A sunlit lawn running alongside a long, neatly trimmed conifer hedge beside a white bungalow.',
      focus: '50% 60%',
    },
    cta: 'Talk to us about your garden',
  },
];
