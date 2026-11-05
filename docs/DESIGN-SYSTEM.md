# Design system

Source of truth: `src/styles/tokens.css`. Live reference: `/styleguide`
(internal, never indexed).

Direction: **premium, confident, modern, established**, a specialist
practice rather than a generic trade website.

## Colour

| Role           | Token            | Hex       |
| -------------- | ---------------- | --------- |
| Brand orange   | `--orange-500`   | `#F58216` |
| Brand charcoal | `--charcoal-900` | `#171717` |
| Brand ivory    | `--ivory-100`    | `#F2EEE6` |

Supporting neutrals are derived from the brand colours for borders, raised
surfaces and secondary text. Each text tone is contrast-checked.

### Contrast rules (WCAG 2.2 AA)

| Pair                | Ratio     | Use                                                                                                                    |
| ------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| Charcoal on ivory   | 15.5:1    | All text                                                                                                               |
| Orange on charcoal  | 6.9:1     | Text, buttons, focus rings                                                                                             |
| Charcoal on orange  | 6.9:1     | Text on orange panels/buttons                                                                                          |
| **Orange on ivory** | **2.2:1** | **Decoration only**: rules, underlines, markers. Never text, icons that carry meaning, or button fills with ivory text |

### Surfaces

Wrap regions in `surface-light` (default), `surface-dark` or `surface-accent`.
Semantic tokens (`--color-text`, `--color-accent-text`, `--button-primary-bg`…)
re-map automatically, so components stay correct on any surface.

## Typography

| Role                       | Typeface                          | Token                                                   |
| -------------------------- | --------------------------------- | ------------------------------------------------------- |
| Display                    | Instrument Serif                  | `.text-display` · `--text-5xl` (52→100px)               |
| H1                         | Instrument Serif                  | `--text-4xl` (44→76px)                                  |
| H2                         | Instrument Serif                  | `--text-3xl` (36→56px)                                  |
| H3                         | Instrument Serif                  | `--text-2xl` (28→36px)                                  |
| H4–H6                      | Inter Semibold                    | `--text-xl` / `--text-lg` / `--text-base`               |
| Body                       | Inter                             | `--text-base` (16→18px), line height 1.65, 65ch measure |
| Lead                       | Inter                             | `.lead` · `--text-lg`                                   |
| Eyebrow / labels           | Inter Semibold, uppercase, 0.14em | `.eyebrow` · `--text-xs`                                |
| Navigation, buttons, forms | Inter                             | `--text-sm` / `--text-base`                             |
| Large figures              | Instrument Serif                  | `.figure` (confirmed figures only)                      |

Rules:

- Instrument Serif has **one weight**. Never bold it (faux bold is disabled).
  Hierarchy comes from size, space and contrast.
- **Signature device:** one italic word in a serif heading (`<em>`); it takes
  the accent colour on dark surfaces. Use sparingly.
- All sizes are fluid between 360px and 1440px viewports; no breakpoint jumps.
- Lining numerals by default; `.tabular` for aligned figures (prices, tables).

## Space & layout

- Fluid spacing scale `--space-3xs` … `--space-3xl`; sections use `--section-space`.
- `.container` (1280px), `.container-wide` (1440px), `.container-prose` (672px);
  gutter 16px on phones → 48px on desktop.
- Primitives: `.stack`, `.cluster`, `.auto-grid` (responsive without media queries).
- Breakpoints when genuinely needed: 40em, 64em, 80em.

## Shape, motion, interaction

- Radius 2px (buttons/inputs) / 4px (cards): crisp, architectural.
- Easing `--ease-out`; 150/250/500ms. All motion respects `prefers-reduced-motion`.
- Focus: 2px ring + halo, ≥3:1 on every surface. Primary controls ≥44px tall.

## Components (so far)

- `Button`: `primary | secondary | text`, `md | lg`, optional arrow; `<a>` or `<button>`.
- `SkipLink`, `SEO`, `JsonLd`.
