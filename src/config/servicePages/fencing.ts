/**
 * Fencing: confirmed by the owner (Nov 2026) - "we do all sorts of fencing",
 * including composite, PVC and timber fencing. Heights, brands and
 * guarantees are NOT confirmed, so none are claimed.
 *
 * PHOTOS: the owner's own fencing jobs (supplied Nov 2026, cropped from
 * phone screenshots and lightly sharpened). Locations were not given, so
 * captions describe the work only. Panel material is named only where the
 * photo clearly shows it (timber; woodgrain composite).
 *
 * Remaining before/after pairs are empty slots: add each photo to
 * src/assets/images/work/, import it here, set `src` and `alt`, and update
 * the pair's title/summary. Empty pairs show as "Photo to come" in
 * previews and are hidden on the launched site.
 */
import type { ServicePage } from './types';
import heroFence from '@/assets/images/work/slatted-fence-concrete-posts-new-boundary.jpg';
import postsSet from '@/assets/images/work/concrete-fence-posts-set-new-boundary.jpg';
import longFence from '@/assets/images/work/long-slatted-boundary-fence-finished.jpg';
import timber from '@/assets/images/work/timber-fence-patio-and-lawn.jpg';
import charcoal from '@/assets/images/work/charcoal-composite-fence-along-driveway.jpg';
import greyComposite from '@/assets/images/work/grey-composite-fence-dark-posts.jpg';
import gravelGarden from '@/assets/images/work/slatted-fence-concrete-posts-gravel-garden.jpg';
import woodgrain from '@/assets/images/work/woodgrain-composite-fence-gravel-yard.jpg';

export const fencing: ServicePage = {
  slug: 'fencing',
  navLabel: 'Fencing',
  teaser: 'Composite, PVC and timber fencing, new or replacing old fences.',
  services: ['fencing'],
  seoTitle: "Fencing & Boundary Fences in Athlone & Westmeath | Cawley's",
  description:
    'Composite, PVC and timber fencing: new boundary fences and replacements across Westmeath, Roscommon, Longford, Offaly and Galway. Free quotes.',

  hero: {
    eyebrow: 'Fencing',
    title: 'Fencing that finishes the',
    accent: 'boundary',
    end: 'properly.',
    intro:
      'Composite, PVC and timber fencing, new or replacing old and damaged fences, from the team that can also clear the hedge or trees in the way first. Across Westmeath, Roscommon, Longford, Offaly and Galway, with a free quotation first.',
    image: {
      src: heroFence,
      alt: 'A new boundary fence of dark grey slatted panels between concrete posts and gravel boards, beside a white house.',
      caption: 'A new slatted boundary fence on concrete posts',
      focus: '60% 50%',
    },
  },

  overview: {
    title: 'A boundary you can',
    accent: 'rely on',
    paragraphs: [
      'A fence marks your boundary, keeps children and pets in, and gives the garden privacy and a finished look. When it is leaning, broken or simply old, it lets the whole garden down.',
      'We put up all sorts of fencing, including composite, PVC and timber, on new boundaries and in place of fences that are past repair. Because we also cut and remove hedges and trees, the whole job can be done by one team: an old hedge or a fallen tree cleared first, then the new fence put in, and the site left tidy.',
    ],
    situationsTitle: 'Fencing jobs we are asked about',
    situations: [
      'An old fence that is leaning, rotten or broken',
      'Fencing damaged by a storm or a fallen tree',
      'A new boundary after an overgrown hedge is removed',
      'A new garden or site that needs its boundary finished',
      'More privacy for a garden or patio area',
      'Fencing as part of a wider landscaping job',
    ],
  },

  work: {
    title: 'Fencing',
    accent: 'work we undertake',
    intro: 'Fencing on its own, or as part of hedge, tree or landscaping work in the same garden.',
    items: [
      {
        title: 'Composite fencing',
        text: 'Modern composite panels, including woodgrain finishes, for a clean, low-maintenance boundary.',
      },
      {
        title: 'PVC fencing',
        text: 'PVC fencing for a neat, uniform finish along gardens and driveways.',
      },
      {
        title: 'Timber fencing',
        text: 'Traditional timber fencing and gates for gardens and boundaries.',
      },
      {
        title: 'New boundary fencing',
        text: 'New fences along garden and property boundaries, from the posts up.',
      },
      {
        title: 'Replacing old fencing',
        text: 'Old, rotten or broken fencing taken down and replaced.',
      },
      {
        title: 'Storm-damaged fencing',
        text: 'Fallen trees cleared first, then the damaged fencing replaced.',
        href: '/emergency-tree-services',
      },
      {
        title: 'Hedge removed, fence put in',
        text: 'An unwanted hedge taken out and the boundary fenced, quoted as one job.',
        href: '/hedge-cutting',
      },
      {
        title: 'Part of a landscaping job',
        text: 'Fencing alongside planting, lawns and paving for a finished garden.',
        href: '/landscaping',
      },
      {
        title: 'Residential & commercial',
        text: 'Fencing for homes as well as business premises and sites.',
      },
    ],
  },

  why: 'A fence is only as good as the work that goes into it. You get an experienced, fully insured team, a clear price up front and a site left clean.',

  photos: {
    title: 'Fencing from',
    accent: 'our own jobs',
    intro:
      'Genuine photos of composite, PVC and timber fencing put up by the Cawley’s team, from the posts going in to the finished boundary.',
    items: [
      {
        src: woodgrain,
        alt: 'A long run of new grey woodgrain composite fence panels on concrete posts and gravel boards, beside a gravel yard.',
        caption: 'Woodgrain composite fencing, just finished',
        focus: '40% 45%',
      },
      {
        src: charcoal,
        alt: 'Charcoal composite fence panels between concrete posts along a curving brick-paved driveway.',
        caption: 'Charcoal composite fencing along a driveway',
        focus: '55% 50%',
      },
      {
        src: timber,
        alt: 'A timber close-board fence with concrete posts and a matching timber gate around a patio and lawn.',
        caption: 'Timber fencing with a matching gate',
        focus: '50% 30%',
      },
      {
        src: gravelGarden,
        alt: 'Dark grey slatted fence panels on concrete posts in a gravel garden with potted plants.',
        caption: 'Slatted fencing on concrete posts',
        focus: '50% 45%',
      },
      {
        src: greyComposite,
        alt: 'Light grey slatted fence panels with dark posts in front of trees and shrubs.',
        caption: 'Grey slatted fencing with dark posts',
        focus: '50% 50%',
      },
    ],
  },

  beforeAfter: {
    pairs: [
      {
        title: 'New boundary fence, posts to finish',
        summary:
          'Concrete posts set along a new boundary, then finished with dark slatted panels on gravel boards.',
        before: {
          src: postsSet,
          label: 'During',
          alt: 'A line of new concrete fence posts set into freshly dug ground along a boundary beside a house.',
          focus: '45% 50%',
        },
        after: {
          src: longFence,
          alt: 'The finished boundary: a long run of dark slatted fence panels on concrete posts beside a house.',
          focus: '45% 55%',
        },
      },
      { title: 'Old fencing replaced', before: {}, after: {} },
      { title: 'Hedge removed and fenced', before: {}, after: {} },
      { title: 'Storm-damaged fencing replaced', before: {}, after: {} },
    ],
  },

  process: {
    title: 'How a fencing job',
    accent: 'works',
    steps: [
      {
        title: 'Tell us about the boundary',
        text: 'Roughly how long it is, what is there now, and a photo or two.',
      },
      {
        title: 'We look at the site',
        text: 'Where needed we visit to measure up and check what needs clearing first.',
      },
      {
        title: 'Free quotation',
        text: 'One clear price, including any hedge or tree removal and taking the old fence away.',
      },
      {
        title: 'Fence put in',
        text: 'The new fencing goes in on the agreed day and the site is left tidy.',
      },
    ],
  },

  areas:
    'From our base in Athlone we put up and replace fencing throughout Westmeath, Roscommon, Longford, Offaly and Galway',

  faqs: [
    {
      question: 'Can you remove an old hedge and put up a fence instead?',
      answer:
        'Yes. The hedge is cut and removed, the ground cleared, and the new fence put in, all quoted as one job by the same team.',
    },
    {
      question: 'Can you replace fencing damaged by a fallen tree?',
      answer:
        'Yes. We make the tree safe and clear it first, then quote for replacing the damaged fencing. If your home insurance may cover the damage, check with your insurer and take photos before work starts.',
    },
    {
      question: 'Will you take the old fence away?',
      answer:
        'Removing and taking away the old fencing can be included in the quotation, so you are left with a clean site.',
    },
    {
      question: 'Do I need planning permission for a fence?',
      answer:
        'Many garden fences do not, but it depends on the height, where the fence is (front or rear) and the property, and some properties have extra restrictions. If you are unsure, check with your county council before work is booked. We cannot give legal or planning advice.',
    },
    {
      question: 'How much does fencing cost?',
      answer:
        'It depends mainly on the length of the boundary, what has to be cleared or removed first and the access. Quotations are free, so send us a few photos and a rough length, or ask us to come and look.',
    },
    {
      question: 'Which areas do you cover?',
      answer:
        'We are based in Athlone, Co. Westmeath, and put up fencing throughout Westmeath, Roscommon, Longford, Offaly and Galway. If you are unsure whether we reach you, just ask.',
    },
  ],

  cta: {
    title: 'Need a new',
    accent: 'fence?',
    text: 'Tell us about the boundary, with a photo or two. We cover Westmeath, Roscommon, Longford, Offaly and Galway, and every quotation is free.',
  },

  related: ['landscaping', 'hedge-cutting', 'site-clearance', 'tree-removal'],
};
