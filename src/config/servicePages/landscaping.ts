/**
 * Landscaping services are the owner's confirmed list: garden design and
 * planting, lawns and turfing, patios and paving, fencing, garden
 * maintenance and garden clearance. The before/after section brings
 * together the owner's patio, artificial grass and fencing jobs (also shown
 * on their own pages), plus empty slots for lawn, planting and makeover
 * photos, which stay hidden on the live site until photos are added.
 */
import type { ServicePage } from './types';
import lawn from '@/assets/images/work/conifer-hedge-trimmed-beside-lawn.jpg';
import gravelled from '@/assets/images/work/border-cleared-and-gravelled.jpg';
import tidy from '@/assets/images/work/garden-tidy-after-tree-removal.jpg';
import patioBefore from '@/assets/images/work/overgrown-back-garden-before-sandstone-patio.jpg';
import patioAfter from '@/assets/images/work/indian-sandstone-patio-sleeper-steps-finished.jpg';
import agDeckBefore from '@/assets/images/work/old-decking-gravel-and-lawn-before-artificial-grass.jpg';
import agDeckAfter from '@/assets/images/work/artificial-grass-and-new-decking-finished.jpg';
import agDeckBefore2 from '@/assets/images/work/old-decking-and-gravel-garden-before.jpg';
import agDeckAfter2 from '@/assets/images/work/artificial-grass-lawn-beside-new-decking.jpg';
import agNewBuildBefore from '@/assets/images/work/new-build-garden-patchy-lawn-before.jpg';
import agNewBuildAfter from '@/assets/images/work/new-build-garden-artificial-grass-sleeper-edge.jpg';
import agPatioBefore from '@/assets/images/work/new-build-garden-patio-and-lawn-before.jpg';
import agPatioAfter from '@/assets/images/work/artificial-grass-behind-patio-new-build.jpg';
import agMuddyBefore from '@/assets/images/work/muddy-worn-lawn-before-artificial-grass.jpg';
import agFamilyAfter from '@/assets/images/work/artificial-grass-family-garden-finished.jpg';
import fencePostsSet from '@/assets/images/work/concrete-fence-posts-set-new-boundary.jpg';
import fenceLong from '@/assets/images/work/long-slatted-boundary-fence-finished.jpg';
import fenceHedgeFrame from '@/assets/images/work/hedge-cut-back-timber-fence-frame.jpg';
import fenceFeatherEdge from '@/assets/images/work/close-board-timber-fence-finished.jpg';
import fenceLawnBefore from '@/assets/images/work/lawn-before-new-fence-line-marked.jpg';
import fencePanel from '@/assets/images/work/feather-edge-panel-fence-concrete-posts-finished.jpg';
import laurel from '@/assets/images/work/laurel-hedge-after-cutting.jpg';

export const landscaping: ServicePage = {
  slug: 'landscaping',
  navLabel: 'Landscaping',
  teaser: 'Planting, lawns, paving, fencing and garden improvements.',
  services: ['landscaping'],
  seoTitle: "Landscaping & Garden Improvements in Athlone | Cawley's",
  description:
    'Garden design and planting, lawns, patios, paving, fencing and garden maintenance across Westmeath, Roscommon, Longford, Offaly and Galway. Free quotes.',

  hero: {
    eyebrow: 'Landscaping services',
    title: 'Landscaping, from the',
    accent: 'treeline',
    end: 'to the lawn.',
    intro:
      'Planting, lawns and turfing, patios and paving, fencing and garden maintenance, from the same team that looks after your trees. Across Westmeath, Roscommon, Longford, Offaly and Galway, with a free quotation first.',
    image: {
      src: lawn,
      alt: 'A sunlit lawn running alongside a long, neatly trimmed conifer hedge beside a white bungalow.',
      caption: 'A finished lawn and hedge line',
      focus: '50% 60%',
    },
  },

  overview: {
    title: 'One team for the',
    accent: 'whole garden',
    paragraphs: [
      'Landscaping often follows tree or hedge work: a tree comes out, a hedge is brought back, and suddenly there is space and light to do something with. When the same team has already worked in the garden, the landscaping follows on naturally.',
      'Whether it is a new lawn, a patio, planting, fencing or keeping the garden in order through the year, the work is done to the same standard as our tree care, with a clear price agreed before we start.',
    ],
    situationsTitle: 'Landscaping often follows',
    situations: [
      'A tree or hedge being removed, opening up the garden',
      'A garden or site clearance',
      'A new home with a garden that needs finishing',
      'An old lawn or patio that has seen better days',
      'Boundaries that need new fencing',
      'A garden that needs regular upkeep',
    ],
  },

  work: {
    title: 'Landscaping',
    accent: 'work we undertake',
    intro: 'Practical improvements that make a garden easier to use and enjoy.',
    items: [
      {
        title: 'Garden design & planting',
        text: 'Planning and planting beds, borders and new trees and shrubs.',
      },
      {
        title: 'Lawns & turfing',
        text: 'New lawns laid and tired ones brought back to life, or artificial grass.',
      },
      {
        title: 'Artificial grass',
        href: '/artificial-grass',
        text: 'A green, mud-free lawn all year with no mowing.',
      },
      {
        title: 'Patios & paving',
        text: 'Patios, paths and paved areas for a garden you can use all year.',
      },
      {
        title: 'Fencing',
        href: '/fencing',
        text: 'New boundary fencing and replacement of old or damaged panels.',
      },
      {
        title: 'Garden maintenance',
        text: 'Ongoing care to keep lawns, borders and hedges in order.',
      },
      {
        title: 'Garden clearance',
        href: '/site-clearance',
        text: 'Overgrown areas cleared first, ready for the new work.',
      },
    ],
  },

  why: 'Good landscaping starts with good ground, and that is where our tree and clearance work comes in. You get one experienced team from start to finish and a clear price up front.',

  photos: {
    title: 'Landscaping',
    accent: 'before and after',
    intro:
      'Before and after photos of landscaping jobs, followed by more finished garden work by the Cawley’s team.',
    items: [
      {
        src: gravelled,
        alt: 'A cleared border finished with fresh decorative gravel and a neat timber edge.',
        caption: 'A border finished with gravel and a timber edge',
        focus: '50% 60%',
      },
      {
        src: tidy,
        alt: 'A garden with a clear lawn, a pond and a tidy seating area under a blue sky.',
        caption: 'An open, tidy garden after tree work',
        focus: '50% 70%',
      },
      {
        src: laurel,
        alt: 'A laurel hedge cut back to a tidy, even shape.',
        caption: 'A tidy hedge line framing the garden',
      },
    ],
  },

  /**
   * Empty slots for the owner's landscaping photos. For each pair: add the
   * files to src/assets/images/work/, import them at the top, set `src` and
   * `alt`, and update the title/summary to describe the real job. Empty
   * pairs show as "Photo to come" in previews and are hidden at launch.
   */
  beforeAfter: {
    pairs: [
      {
        title: 'Overgrown garden to Indian sandstone patio',
        summary:
          'A neglected, weed-covered back garden turned into a tiered Indian sandstone patio with timber sleeper steps, decorative stone edging and new fencing.',
        before: {
          src: patioBefore,
          alt: 'An overgrown back garden of long grass, weeds and broken paving slabs behind a terraced house.',
        },
        after: {
          src: patioAfter,
          alt: 'The same garden laid as a tiered Indian sandstone patio with timber sleeper steps, white stone edging and new timber fencing.',
        },
      },
      {
        title: 'Muddy family lawn, now usable all year',
        summary:
          'A worn, muddy lawn replaced with artificial grass, finished neatly around the decking.',
        before: {
          src: agMuddyBefore,
          alt: 'A worn, muddy lawn with bare patches, enclosed by a timber fence beside decking and a trampoline.',
        },
        after: {
          src: agFamilyAfter,
          alt: 'The same garden with an even, green artificial grass lawn running up to the decking and trampoline.',
        },
      },
      {
        title: 'New-build garden finished',
        summary:
          'Patchy new-build turf and bare soil replaced with artificial grass, edged with timber sleepers against the patio.',
        before: {
          src: agNewBuildBefore,
          alt: 'A new-build garden with thin, patchy grass, bare soil beside the patio and new timber fencing.',
        },
        after: {
          src: agNewBuildAfter,
          alt: 'The same garden with a green artificial grass lawn edged by timber sleepers beside the patio.',
        },
      },
      {
        title: 'New-build garden, from the patio',
        before: {
          src: agPatioBefore,
          alt: 'A patio with a strip of bare soil and patchy grass beyond it, enclosed by timber fencing.',
        },
        after: {
          src: agPatioAfter,
          alt: 'A raised artificial grass lawn edged with timber sleepers behind a paved patio.',
        },
      },
      {
        title: 'Gravel and lawn into one easy garden',
        summary:
          'Old decking, gravel and a small lawn replaced with one open artificial grass lawn and new decking.',
        before: {
          src: agDeckBefore,
          alt: 'Old timber decking with railings looking onto a small lawn and a gravelled area inside fencing.',
        },
        after: {
          src: agDeckAfter,
          alt: 'New dark decking running onto an open artificial grass lawn filling the garden.',
        },
      },
      {
        title: 'The same garden, other angle',
        before: {
          src: agDeckBefore2,
          alt: 'Weathered decking with railings, a small lawn and gravel beyond, inside wooden fencing.',
        },
        after: {
          src: agDeckAfter2,
          alt: 'A green artificial grass lawn beside new dark decking, with plants on a small raised deck in the corner.',
        },
      },
      {
        title: 'New boundary fence, posts to finish',
        summary:
          'Concrete posts set along a new boundary, then finished with dark slatted panels on gravel boards.',
        before: {
          src: fencePostsSet,
          label: 'During',
          alt: 'A line of new concrete fence posts set into freshly dug ground along a boundary beside a house.',
          focus: '45% 50%',
        },
        after: {
          src: fenceLong,
          alt: 'The finished boundary: a long run of dark slatted fence panels on concrete posts beside a house.',
          focus: '45% 55%',
        },
      },
      {
        title: 'Open garden, new feather edge panel fence',
        summary:
          'The fence line marked out across an open garden, then feather edge panels put in on concrete posts and gravel boards.',
        before: {
          src: fenceLawnBefore,
          alt: 'An open lawn with marker pegs and tape setting out a new fence line, with trees and shrubs behind.',
          focus: '50% 50%',
        },
        after: {
          src: fencePanel,
          alt: 'A long run of new feather edge timber fence panels on concrete posts and gravel boards along the lawn.',
          focus: '40% 50%',
        },
      },
      {
        title: 'Hedge cut back, feather edge fence put in',
        summary:
          'An overgrown hedge cut back hard and a timber frame put in front of it, then finished with feather edge boards.',
        before: {
          src: fenceHedgeFrame,
          label: 'During',
          alt: 'New timber fence posts and rails set in front of a hedge cut back to bare stems, beside a garden shed.',
          focus: '50% 50%',
        },
        after: {
          src: fenceFeatherEdge,
          alt: 'The finished feather edge timber fence running along the boundary beside a lawn, with trees behind.',
          focus: '55% 50%',
        },
      },
      { title: 'New lawn and turf', before: {}, after: {} },
      { title: 'Planting and borders', before: {}, after: {} },
      { title: 'Full garden makeover', before: {}, after: {} },
    ],
  },

  process: {
    title: 'How a landscaping job',
    accent: 'comes together',
    steps: [
      {
        title: 'Tell us your plans',
        text: 'What you would like the garden to be, even if it is only a rough idea.',
      },
      {
        title: 'Look at the space',
        text: 'Where needed we visit to see the garden and talk through what will work there.',
      },
      {
        title: 'Free quotation',
        text: 'A clear price for the agreed work, including any clearance or tree work first.',
      },
      {
        title: 'Garden transformed',
        text: 'The work is carried out to the agreed plan and the garden left clean and ready to enjoy.',
      },
    ],
  },

  areas:
    'Based in Athlone, we take on landscaping and garden work throughout Westmeath, Roscommon, Longford, Offaly and Galway',

  faqs: [
    {
      question: 'Can you do the tree work and the landscaping together?',
      answer:
        'Yes, and that is often the easiest way. Trees and hedges are dealt with first, then the garden is cleared and the landscaping carried out by the same team.',
    },
    {
      question: 'Do I need a full garden design before contacting you?',
      answer:
        'No. Many people start with a rough idea of what they want. We can talk it through with you and suggest what will work in the space.',
    },
    {
      question: 'Do you offer ongoing garden maintenance?',
      answer:
        'Yes. We can look after lawns, borders and hedges through the year to keep the garden in good order.',
    },
    {
      question: 'Can you put up fencing after a hedge is removed?',
      answer:
        'Yes. Removing an old hedge and fencing the boundary can be quoted as one job. See our fencing page for more.',
    },
    {
      question: 'How much does landscaping cost?',
      answer:
        'Every garden and plan is different, so there is no set price. Tell us what you have in mind, with a few photos of the space, and we will give you a free quotation.',
    },
    {
      question: 'Do you work in my area?',
      answer:
        'We take on landscaping and garden work throughout Westmeath, Roscommon, Longford, Offaly and Galway from our base in Athlone. If you are unsure whether we reach you, just ask.',
    },
  ],

  cta: {
    title: 'Let’s make the most of',
    accent: 'your garden',
    text: 'Tell us what you have in mind. We cover Westmeath, Roscommon, Longford, Offaly and Galway, and we will talk it through and give you a free, clear quotation.',
  },

  related: ['fencing', 'site-clearance', 'hedge-cutting', 'tree-removal'],
};
