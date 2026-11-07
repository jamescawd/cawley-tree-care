import type { ServicePage } from './types';
import tripod from '@/assets/images/work/hedge-trimming-from-tripod-ladder.jpg';
import laurelBefore from '@/assets/images/work/overgrown-laurel-hedge-before.jpg';
import laurelAfter from '@/assets/images/work/laurel-hedge-after-cutting.jpg';
import conifer from '@/assets/images/work/conifer-hedge-after-trimming.jpg';
import lawn from '@/assets/images/work/conifer-hedge-trimmed-beside-lawn.jpg';

export const hedgeCutting: ServicePage = {
  slug: 'hedge-cutting',
  navLabel: 'Hedge Trimming & Cutting',
  teaser: 'Trimming, reducing and removing hedges, with every cutting cleared.',
  services: ['hedge-cutting'],
  seoTitle: "Hedge Cutting & Trimming in Athlone & Westmeath | Cawley's",
  description:
    'Hedge trimming, reduction and removal for conifer, laurel and beech hedges across Westmeath, Roscommon, Longford, Offaly and Galway. Cuttings cleared away.',

  hero: {
    eyebrow: 'Hedge trimming & cutting',
    title: 'Hedges cut back to a',
    accent: 'clean, even',
    end: 'finish.',
    intro:
      'We trim and shape conifer, laurel and beech hedges, bring overgrown ones back down to size and remove hedges where you want the space back. Across Westmeath, Roscommon, Longford, Offaly and Galway, with a free quotation first.',
    image: {
      src: tripod,
      alt: 'A worker on a tripod ladder trimming the top of a tall conifer hedge, with overhead lines above.',
      caption: 'Trimming a tall conifer hedge from a tripod ladder',
      focus: '50% 40%',
    },
  },

  overview: {
    title: 'Tall hedges are a job for',
    accent: 'a professional',
    paragraphs: [
      'A hedge that has been let go for a few seasons is hard work to bring back, and the tallest ones sit over driveways, paths and sometimes overhead lines. That is not work to tackle from a stepladder at the weekend.',
      'We cut hedges to a straight, even face, bring overgrown ones back to a manageable size, and clear every cutting away when we are done, so all that is left is a tidy hedge and a clean garden.',
    ],
    situationsTitle: 'Hedge work we are asked for',
    situations: [
      'A hedge has grown too tall and is blocking light',
      'It has spread over a path, driveway or road',
      'The hedge is near overhead lines',
      'It needs a regular trim to keep its shape',
      'You want an old or unwanted hedge removed',
      'Property or business boundaries need tidying',
    ],
  },

  work: {
    title: 'Hedge',
    accent: 'work we undertake',
    intro: 'From a single garden hedge to long boundary runs, cut to the height and line you want.',
    items: [
      {
        title: 'Hedge cutting & trimming',
        text: 'Shaping the top and faces of a hedge to a straight, even finish.',
      },
      {
        title: 'Overgrown hedge reduction',
        text: 'Bringing tall or wide hedges back down in height and width to a size you can manage.',
      },
      {
        title: 'Regular hedge maintenance',
        text: 'Keeping hedges in shape with trims at the right times of the year.',
      },
      {
        title: 'Hedge removal',
        href: '/site-clearance',
        text: 'Taking out unwanted hedges completely, ready for fencing, planting or landscaping.',
      },
      {
        title: 'Residential & commercial',
        text: 'Garden hedges at home as well as boundaries around business premises and sites.',
      },
      {
        title: 'Cuttings cleared away',
        text: 'Ground sheets down while we work, and every cutting chipped or removed afterwards.',
      },
    ],
  },

  why: 'A good hedge cut is about a straight line, the right height and a clean garden afterwards. You get experienced hands, a free quote and a tidy finish.',

  photos: {
    title: 'Hedges from',
    accent: 'our own jobs',
    intro: 'Genuine photographs of hedge work carried out by the Cawley’s team.',
    items: [
      {
        src: laurelBefore,
        alt: 'An overgrown laurel hedge spreading over a garden path.',
        caption: 'An overgrown laurel hedge, before cutting',
      },
      {
        src: laurelAfter,
        alt: 'A laurel hedge cut back to a tidy, even shape.',
        caption: 'A laurel hedge cut back to shape',
      },
      {
        src: conifer,
        alt: 'A conifer hedge with a straight, even face running along a lawn.',
        caption: 'A tall conifer hedge after trimming',
        focus: '50% 45%',
      },
      {
        src: lawn,
        alt: 'A sunlit lawn running alongside a long, neatly trimmed conifer hedge beside a white bungalow.',
        caption: 'A long conifer hedge, neatly trimmed',
        focus: '50% 60%',
      },
    ],
  },

  process: {
    title: 'How hedge cutting',
    accent: 'works',
    steps: [
      {
        title: 'Send us the details',
        text: 'Roughly how long and how tall the hedge is, plus a photo, is usually enough to start.',
      },
      {
        title: 'Agree the height',
        text: 'We agree how far back it should come and when is the right time to cut.',
      },
      {
        title: 'Free quotation',
        text: 'A clear price for the cut, including clearing every cutting away.',
      },
      {
        title: 'Cut and cleared',
        text: 'The hedge is cut to a clean line and the garden left tidy.',
      },
    ],
  },

  areas:
    'Based in Athlone, we cut and maintain hedges throughout Westmeath, Roscommon, Longford, Offaly and Galway',

  faqs: [
    {
      question: 'When can hedges be cut?',
      answer:
        'Under the Wildlife Acts, cutting hedgerows is restricted between 1 March and 31 August, with certain exemptions, and nesting birds are protected all year. The rules can be different for some garden hedges, so if you are unsure, check before work is booked. If birds are nesting in a hedge, the work should wait, and we will talk through the best timing with you.',
    },
    {
      question: 'Can an overgrown hedge be cut back hard?',
      answer:
        'Many hedges, such as laurel and beech, recover well from being reduced. Conifers like leylandii do not regrow from old bare wood, so cutting too far back can leave brown patches. We will tell you how far your hedge can safely come back.',
    },
    {
      question: 'Do you take the cuttings away?',
      answer:
        'Yes. Ground sheets are laid while we work and the cuttings are cleared up and chipped or taken away, so your lawn and beds are left clean.',
    },
    {
      question: 'Can you cut a hedge near overhead lines?',
      answer:
        'Hedges near lines need extra care. Where lines are involved, we will look at the situation first and tell you honestly what can be done safely, and whether the network operator needs to be involved.',
    },
    {
      question: 'Do you offer regular hedge trimming?',
      answer:
        'Yes. Many hedges look best with a trim once or twice a year, and we can arrange regular visits to keep them in shape.',
    },
    {
      question: 'How much does hedge cutting cost?',
      answer:
        'Mostly it depends on the length and height of the hedge, how overgrown it is and the access to it. A photo and a rough length is often enough for us to give you a free quotation.',
    },
  ],

  cta: {
    title: 'Hedge got',
    accent: 'out of hand?',
    text: 'Send us a photo and roughly how long it is. We cover Westmeath, Roscommon, Longford, Offaly and Galway, and the quotation to bring it back into shape is free.',
  },

  related: ['tree-pruning', 'site-clearance', 'landscaping', 'tree-surgery'],
};
