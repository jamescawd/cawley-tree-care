# Brand asset scripts

Regenerate the logo variants, icons and social share image from the
supplied logo (`src/assets/brand/logo-original.webp`). Requires Python 3
with Pillow and NumPy.

```bash
python3 -I scripts/brand/make-logo-variants.py src/assets/brand/logo-original.webp <out-dir>
python3 -I scripts/brand/make-icons-and-share-image.py <out-dir> src/assets/images/home/hero-arborist-oak.webp <out-dir>
```

The tree-only icon crop (`logo-tree.png`) is cut from `logo-mark.png`
(box 105,8 → 825,389). Copy results into `src/assets/brand/` and `public/`.

For print, signage and vehicle livery, ask the logo designer for the
original **vector** file (SVG/PDF/AI): these PNGs are for screen only.
