/**
 * Stump grinding was confirmed by the owner in Nov 2026. No photographs of
 * stump work exist yet, so this page uses genuine photos of the ground
 * after tree removal and clearance, captioned as exactly that. Replace with
 * real stump grinding photos when available.
 */
import type { ServicePage } from './types';
import siteAfter from '@/assets/images/work/site-after-sectional-dismantling.jpg';
import tidy from '@/assets/images/work/garden-tidy-after-tree-removal.jpg';
import reduced from '@/assets/images/work/mature-tree-reduced-to-trunk.jpg';
import gravelled from '@/assets/images/work/border-cleared-and-gravelled.jpg';

export const stumpGrinding: ServicePage = {
  slug: 'stump-grinding',
  navLabel: 'Stump Grinding & Removal',
  teaser: 'Unwanted stumps ground out so the ground can be used again.',
  services: ['stump-grinding'],
  seoTitle: "Stump Grinding & Stump Removal in Athlone | Cawley's",
  description:
    'Stump grinding and stump removal across Westmeath, Roscommon, Longford, Offaly and Galway. Old stumps cleared so the ground can be used again. Free quotes.',

  hero: {
    eyebrow: 'Stump grinding & removal',
    title: 'Get rid of that',
    accent: 'stubborn stump',
    end: 'for good.',
    intro:
      'A leftover stump gets in the way of the mower, trips people up and wastes good ground. We grind stumps down or remove them so the ground can be used again. Across Westmeath, Roscommon, Longford, Offaly and Galway, with a free quotation first.',
    image: {
      src: siteAfter,
      alt: 'Decking and ground beside a timber garden building, cleared after a tree was taken down, with one cut log left standing.',
      caption: 'Ground cleared after tree removal',
      focus: '50% 60%',
    },
  },

  overview: {
    title: 'Why an old stump is',
    accent: 'worth removing',
    paragraphs: [
      'Stumps take years to rot away on their own. In the meantime they get in the way of lawns, paths and new planting, can send up fresh shoots, and are easy to trip over or catch with a mower.',
      'Stump grinding breaks the stump down into chippings, below ground level where that is suitable for the site, so the area can be levelled and reused. Where a stump needs to come out completely, or grinding is not suitable, we will explain the options before giving you a price.',
    ],
    situationsTitle: 'Stump work makes sense when',
    situations: [
      'A stump is left after a tree was felled',
      'You want to lay a lawn, patio or path over the area',
      'New planting is going in where the old tree stood',
      'The stump is a trip hazard or in the way of mowing',
      'Shoots keep growing back from the old stump',
      'Ground is being prepared for building or landscaping',
    ],
  },

  work: {
    title: 'Stump',
    accent: 'work we undertake',
    intro:
      'Single stumps in a garden or several across a site, quoted on their own or with tree removal.',
    items: [
      {
        title: 'Stump grinding',
        text: 'Grinding unwanted stumps down below ground level where suitable, so the area can be reused.',
      },
      {
        title: 'Stump removal',
        text: 'Taking stumps out where they need to come out completely, with the options explained first.',
      },
      {
        title: 'Removal with the tree',
        href: '/tree-removal',
        text: 'Having the stump dealt with at the same time as the tree comes down, in one visit where possible.',
      },
      {
        title: 'Preparing the ground',
        href: '/landscaping',
        text: 'Leaving the area ready to be levelled, seeded, planted or landscaped.',
      },
      {
        title: 'Clearing the grindings',
        text: 'Chippings left to fill the hole or taken away, as agreed beforehand.',
      },
    ],
  },

  why: 'Stump work is the last step in getting your ground back. You get the same experienced, fully insured team that took the tree down, and a clear price before work starts.',

  photos: {
    title: 'Ground cleared after',
    accent: 'tree work',
    intro:
      'Genuine photographs of ground cleared after tree removal and clearance by the Cawley’s team.',
    items: [
      {
        src: reduced,
        alt: 'A tree reduced to its main trunk with rigging ropes in place and logs cut on the ground.',
        caption: 'A large tree being taken down in sections',
        focus: '50% 40%',
      },
      {
        src: tidy,
        alt: 'A garden after tree removal: lawn clear, logs stacked by a pond and the seating area tidy under a blue sky.',
        caption: 'A garden left clear after tree removal',
        focus: '50% 70%',
      },
      {
        src: gravelled,
        alt: 'A cleared border finished with fresh decorative gravel and a neat timber edge.',
        caption: 'Cleared ground finished and ready to use',
        focus: '50% 60%',
      },
    ],
  },

  process: {
    title: 'How stump grinding',
    accent: 'works',
    steps: [
      {
        title: 'Tell us about the stump',
        text: 'Roughly how wide it is and where it is. A photo showing access to it helps.',
      },
      {
        title: 'Check access & the site',
        text: 'Where needed we look at the stump, the access and anything underground to be aware of.',
      },
      {
        title: 'Free quotation',
        text: 'A clear price, including what happens to the grindings afterwards.',
      },
      {
        title: 'Stump ground out',
        text: 'The stump is ground down and the area left tidy and ready for its next use.',
      },
    ],
  },

  areas:
    'From our base in Athlone we grind and remove stumps throughout Westmeath, Roscommon, Longford, Offaly and Galway',

  faqs: [
    {
      question: 'How far down is a stump ground?',
      answer:
        'Stumps are ground below ground level where that is suitable for the site. The right depth depends on the stump and what you plan to do with the area, so we agree it with you before the work starts.',
    },
    {
      question: 'Will the roots be removed too?',
      answer:
        'Grinding deals with the stump and the main root area directly around it. Roots further out are usually left in the ground to break down naturally. If you are planning building work, tell us so we can talk about what is needed.',
    },
    {
      question: 'What happens to the grindings?',
      answer:
        'The grindings can be used to fill the hole left by the stump, or taken away so the area can be topped with soil and reseeded. We agree which before we start.',
    },
    {
      question: 'Can you remove a stump from a tree someone else cut down?',
      answer:
        'Yes. We can deal with old stumps whoever felled the tree. Send us a photo and let us know roughly how wide it is.',
    },
    {
      question: 'Is there anything you need to know before grinding?',
      answer:
        'Yes: anything buried near the stump, such as pipes, cables or drains, and how we get to it. Gateways, steps and narrow paths all affect access, so a photo of the route is helpful.',
    },
    {
      question: 'How much does stump grinding cost?',
      answer:
        'It depends mainly on the size of the stump, how many there are and how easy they are to reach. Send us a photo with a rough width and we will give you a free quotation.',
    },
  ],

  cta: {
    title: 'Ready to get your',
    accent: 'ground back?',
    text: 'Tell us about the stump and where it is. We cover Westmeath, Roscommon, Longford, Offaly and Galway, and the quotation to grind it out or remove it is free.',
  },

  related: ['tree-removal', 'site-clearance', 'landscaping', 'tree-surgery'],
};
