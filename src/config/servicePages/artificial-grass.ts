/**
 * Artificial grass: confirmed by the owner (Nov 2026) with photos of their own
 * jobs. Brands, pile heights, lifespans and guarantees are NOT confirmed, so
 * none are claimed. Locations were not given, so captions describe the work only.
 */
import type { ServicePage } from './types';
import deckBefore from '@/assets/images/work/old-decking-gravel-and-lawn-before-artificial-grass.jpg';
import deckAfter from '@/assets/images/work/artificial-grass-and-new-decking-finished.jpg';
import deckBefore2 from '@/assets/images/work/old-decking-and-gravel-garden-before.jpg';
import deckAfter2 from '@/assets/images/work/artificial-grass-lawn-beside-new-decking.jpg';
import newBuildBefore from '@/assets/images/work/new-build-garden-patchy-lawn-before.jpg';
import newBuildAfter from '@/assets/images/work/new-build-garden-artificial-grass-sleeper-edge.jpg';
import patioBefore from '@/assets/images/work/new-build-garden-patio-and-lawn-before.jpg';
import patioAfter from '@/assets/images/work/artificial-grass-behind-patio-new-build.jpg';
import muddyBefore from '@/assets/images/work/muddy-worn-lawn-before-artificial-grass.jpg';
import familyAfter from '@/assets/images/work/artificial-grass-family-garden-finished.jpg';

export const artificialGrass: ServicePage = {
  slug: 'artificial-grass',
  navLabel: 'Artificial Grass',
  teaser: 'A green, mud-free lawn all year, with no mowing.',
  services: ['artificial-grass'],
  seoTitle: "Artificial Grass in Athlone & the Midlands | Cawley's",
  description:
    'Artificial grass laid across Westmeath, Roscommon, Longford, Offaly and Galway: a green, mud-free lawn all year with no mowing. Free quotes.',

  hero: {
    eyebrow: 'Artificial grass',
    title: 'A lawn that stays',
    accent: 'green',
    end: 'all year.',
    intro:
      'Worn, muddy and patchy lawns replaced with artificial grass that looks neat in every season and never needs cutting. Across Westmeath, Roscommon, Longford, Offaly and Galway, with a free quotation first.',
    image: {
      src: newBuildAfter,
      alt: 'A new artificial grass lawn edged with timber sleepers beside a patio, enclosed by timber fencing.',
      caption: 'Artificial grass edged with timber sleepers',
      focus: '50% 60%',
    },
  },

  overview: {
    title: 'Why more people are',
    accent: 'going artificial',
    paragraphs: [
      'Irish weather is hard on a lawn. Months of rain turn grass to mud, shaded corners never take, and new-build gardens often come with thin turf laid on poor ground. By the time the lawn recovers in summer, it needs mowing every week.',
      'Artificial grass takes that away. It stays green and even through the winter, there is no mud tracked into the house, and the garden is ready to use the moment the rain stops. For busy families, people who are away a lot, and anyone who would rather enjoy the garden than maintain it, it is an easy decision.',
      'The finish depends on what is underneath. The old turf comes out, the ground is levelled and prepared so water drains through, and the grass is laid and fixed with neat edges. That groundwork is where a lawn lasts or fails, and it is the part we take most care over.',
    ],
    situationsTitle: 'People choose artificial grass for',
    situations: [
      'A lawn that turns to mud every winter',
      'Patchy grass in shade or on poor ground',
      'Children who want to play outside all year',
      'Dogs wearing the lawn bare',
      'No time, or no wish, to mow every week',
      'A new-build garden that needs finishing',
    ],
  },

  work: {
    title: 'The benefits of',
    accent: 'artificial grass',
    intro: 'What our customers tell us they wanted, and what they got.',
    items: [
      {
        title: 'No mowing',
        text: 'No cutting, edging or feeding. An occasional brush and rinse keeps it looking its best.',
      },
      {
        title: 'Green all year',
        text: 'It looks the same in January as it does in June, whatever the weather does.',
      },
      {
        title: 'No mud',
        text: 'Children and dogs can be out on it straight after rain, without mud coming back into the house.',
      },
      {
        title: 'Usable after rain',
        text: 'Laid on a properly prepared base, water drains through instead of sitting on top.',
      },
      {
        title: 'Good for shade',
        text: 'Corners where real grass will not grow look as good as the rest of the lawn.',
      },
      {
        title: 'Neat edges',
        text: 'Finished against patios, decking, sleepers and fences for a tidy, built-in look.',
      },
      {
        title: 'Part of a bigger job',
        text: 'Combined with fencing, paving or a garden clearance as one job.',
        href: '/landscaping',
      },
    ],
  },

  why: 'A good artificial lawn is all in the preparation. You get an experienced team that does the groundwork properly, a clear price up front and a site left clean.',

  photos: {
    title: 'Artificial grass',
    accent: 'before and after',
    intro: 'Genuine photos of artificial grass laid by the Cawley’s team, before and after.',
    items: [],
  },

  beforeAfter: {
    pairs: [
      {
        title: 'Muddy family lawn, now usable all year',
        summary:
          'A worn, muddy lawn replaced with artificial grass, finished neatly around the decking.',
        before: {
          src: muddyBefore,
          alt: 'A worn, muddy lawn with bare patches, enclosed by a timber fence beside decking and a trampoline.',
        },
        after: {
          src: familyAfter,
          alt: 'The same garden with an even, green artificial grass lawn running up to the decking and trampoline.',
        },
      },
      {
        title: 'New-build garden finished',
        summary:
          'Patchy new-build turf and bare soil replaced with artificial grass, edged with timber sleepers against the patio.',
        before: {
          src: newBuildBefore,
          alt: 'A new-build garden with thin, patchy grass, bare soil beside the patio and new timber fencing.',
        },
        after: {
          src: newBuildAfter,
          alt: 'The same garden with a green artificial grass lawn edged by timber sleepers beside the patio.',
        },
      },
      {
        title: 'New-build garden, from the patio',
        before: {
          src: patioBefore,
          alt: 'A patio with a strip of bare soil and patchy grass beyond it, enclosed by timber fencing.',
        },
        after: {
          src: patioAfter,
          alt: 'A raised artificial grass lawn edged with timber sleepers behind a paved patio.',
        },
      },
      {
        title: 'Gravel and lawn into one easy garden',
        summary:
          'Old decking, gravel and a small lawn replaced with one open artificial grass lawn and new decking.',
        before: {
          src: deckBefore,
          alt: 'Old timber decking with railings looking onto a small lawn and a gravelled area inside fencing.',
        },
        after: {
          src: deckAfter,
          alt: 'New dark decking running onto an open artificial grass lawn filling the garden.',
        },
      },
      {
        title: 'The same garden, other angle',
        before: {
          src: deckBefore2,
          alt: 'Weathered decking with railings, a small lawn and gravel beyond, inside wooden fencing.',
        },
        after: {
          src: deckAfter2,
          alt: 'A green artificial grass lawn beside new dark decking, with plants on a small raised deck in the corner.',
        },
      },
    ],
  },

  process: {
    title: 'How an artificial grass job',
    accent: 'works',
    steps: [
      {
        title: 'Send us photos',
        text: 'A few photos of the garden and a rough size help us understand the job.',
      },
      {
        title: 'We look at the ground',
        text: 'Where needed we visit to measure up and check the levels and drainage.',
      },
      {
        title: 'Free quotation',
        text: 'One clear price, including taking out the old turf and preparing the base.',
      },
      {
        title: 'Grass laid',
        text: 'The ground is prepared, the grass laid and edged, and the site left tidy.',
      },
    ],
  },

  areas:
    'From our base in Athlone we lay artificial grass throughout Westmeath, Roscommon, Longford, Offaly and Galway',

  faqs: [
    {
      question: 'Does artificial grass need any maintenance?',
      answer:
        'Very little. No mowing, feeding or weeding the lawn itself: just clear leaves now and then and give it a brush or rinse to keep the pile looking even.',
    },
    {
      question: 'Will it drain in wet weather?',
      answer:
        'Yes, when the ground is prepared properly. The base is laid so water drains through the grass instead of pooling on top, which is why the groundwork matters so much.',
    },
    {
      question: 'Is it suitable for children and dogs?',
      answer:
        'It is one of the main reasons people choose it: no mud, no bare patches where they play, and it can be used straight after rain.',
    },
    {
      question: 'Can you lay it beside decking, a patio or fencing?',
      answer:
        'Yes. We finish the edges neatly against decking, paving, sleepers and fences, and can do fencing or other landscaping as part of the same job.',
    },
    {
      question: 'Are there any downsides?',
      answer:
        'It can get warm in strong sun, and it is not a habitat for wildlife the way a real lawn is. Many people keep planted borders or beds alongside it for that reason. We are happy to talk it through.',
    },
    {
      question: 'How much does artificial grass cost?',
      answer:
        'It depends mainly on the size of the area, the grass chosen and how much groundwork is needed. Quotations are free, so send us a few photos and a rough size.',
    },
  ],

  cta: {
    title: 'Ready for a lawn without the',
    accent: 'mud?',
    text: 'Send us a few photos of the garden. We cover Westmeath, Roscommon, Longford, Offaly and Galway, and every quotation is free.',
  },

  related: ['landscaping', 'fencing', 'site-clearance', 'hedge-cutting'],
};
