import type { ServicePage } from './types';
import chipper from '@/assets/images/work/overgrown-beech-hedge-with-wood-chipper.jpg';
import borderBefore from '@/assets/images/work/overgrown-border-before-clearance.jpg';
import borderAfter from '@/assets/images/work/border-cleared-and-gravelled.jpg';
import driveAfter from '@/assets/images/work/beech-hedge-after-reduction.jpg';

export const siteClearance: ServicePage = {
  slug: 'site-clearance',
  navLabel: 'Site Clearance & Vegetation',
  teaser: 'Overgrown gardens, plots and sites cleared back to usable ground.',
  services: ['garden-clearance', 'wood-chipping'],
  seoTitle: "Site & Garden Clearance in Athlone & Midlands | Cawley's",
  description:
    'Overgrown gardens, plots and sites cleared of scrub, brambles, hedging and small trees across Westmeath and the Midlands. Green waste chipped or removed.',

  hero: {
    eyebrow: 'Site clearance & vegetation management',
    title: 'Overgrown ground,',
    accent: 'cleared',
    end: 'in one go.',
    intro:
      'Neglected gardens, overgrown plots and building sites cleared of scrub, brambles, small trees and old hedging. Branches go through a wood chipper on site, so there is far less to take away.',
    image: {
      src: chipper,
      alt: 'An overgrown beech hedge along a gravel driveway with a tracked wood chipper parked ready to work.',
      caption: 'An overgrown boundary, ready for clearance',
      focus: '40% 55%',
    },
  },

  overview: {
    title: 'From overgrown to',
    accent: 'ready to use',
    paragraphs: [
      'Ground that has been left for a few years quickly disappears under brambles, scrub, self-seeded trees and overgrown hedging. Clearing it by hand takes weekends and endless trips to the recycling centre.',
      'We clear the whole area in one go, cutting back or removing vegetation, chipping the branches on site and taking green waste away, so the ground is ready to be landscaped, built on or simply enjoyed again.',
    ],
    situationsTitle: 'Clearance is useful for',
    situations: [
      'Gardens that have been left to grow wild',
      'A house you have just bought or are selling',
      'Plots and sites ahead of building work',
      'Overgrown borders, banks and boundaries',
      'Land being prepared for landscaping',
      'Ongoing vegetation control around a property',
    ],
  },

  work: {
    title: 'Clearance',
    accent: 'work we undertake',
    intro: 'Clearing as much or as little as you need, from a single border to a whole site.',
    items: [
      {
        title: 'Vegetation removal',
        text: 'Scrub, brambles, nettles and overgrowth cut back and cleared.',
      },
      {
        title: 'Overgrown areas',
        text: 'Borders, banks, corners and boundaries brought back under control.',
      },
      {
        title: 'Land & garden clearance',
        text: 'Whole gardens and plots cleared back to usable ground.',
      },
      {
        title: 'Small trees & old hedging',
        text: 'Self-seeded trees and unwanted hedges removed as part of the clearance.',
      },
      {
        title: 'Wood chipping & green waste',
        text: 'Branches chipped on site and green waste removed, leaving far less to dispose of.',
      },
      {
        title: 'Vegetation management',
        text: 'Follow-up cutting to keep cleared ground and boundaries from growing back over.',
      },
    ],
  },

  why: 'Clearance is hard, heavy work, and the difference is in how the site is left. You get an experienced team, one clear price and ground that is ready for what comes next.',

  photos: {
    title: 'Clearance from',
    accent: 'our own jobs',
    intro: 'Genuine photographs of clearance work carried out by the Cawley’s team.',
    items: [
      {
        src: borderBefore,
        alt: 'An overgrown border and gravel path running between a hedge and a house.',
        caption: 'An overgrown border, before clearance',
        focus: '50% 55%',
      },
      {
        src: borderAfter,
        alt: 'The border cleared and finished with fresh decorative gravel and a neat timber edge.',
        caption: 'Cleared and finished with gravel',
        focus: '50% 60%',
      },
      {
        src: driveAfter,
        alt: 'A gravel driveway after an overgrown beech hedge was cleared, opening the boundary to the road.',
        caption: 'A boundary cleared along a driveway',
        focus: '45% 60%',
      },
    ],
  },

  process: {
    title: 'How clearance',
    accent: 'works',
    steps: [
      {
        title: 'Get in touch',
        text: 'Tell us roughly how big the area is and what is growing on it. Photos help a lot.',
      },
      {
        title: 'We walk the site',
        text: 'Where needed we look at the area, the access and what you want kept or removed.',
      },
      {
        title: 'Free quotation',
        text: 'One clear price for the clearance, including chipping and taking waste away.',
      },
      {
        title: 'Cleared in one go',
        text: 'The area is cleared, the green waste dealt with and the ground left ready to use.',
      },
    ],
  },

  areas: 'From our base in Athlone we clear gardens, plots and sites across five counties.',

  faqs: [
    {
      question: 'Do you take all the green waste away?',
      answer:
        'Yes, as agreed in the quotation. Branches are put through the wood chipper on site, which greatly reduces the volume, and the rest of the green waste is taken away.',
    },
    {
      question: 'Can you keep some plants or trees while clearing the rest?',
      answer:
        'Of course. Just show us or mark what you would like kept, and we will clear around it.',
    },
    {
      question: 'Can you clear a site before building work?',
      answer:
        'Yes. We clear vegetation, scrub, small trees and hedging so the ground is ready for the next stage. If larger trees are involved, we can quote for their removal too.',
    },
    {
      question: 'Are there times of year when clearance should not be done?',
      answer:
        'Cutting hedgerows and vegetation on uncultivated land is restricted from 1 March to 31 August under the Wildlife Acts, with some exemptions, and nesting birds are protected all year. We will talk through timing with you when we quote.',
    },
  ],

  cta: {
    title: 'Ready to get your',
    accent: 'ground back?',
    text: 'Tell us about the area and what is growing on it. We will give you one clear, free quotation to clear it.',
  },

  related: ['hedge-cutting', 'landscaping', 'tree-removal', 'stump-grinding'],
};
