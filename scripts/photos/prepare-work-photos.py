"""
Prepare the business's own work photos for the website.

- Blurs third-party signage, logos and phone numbers (privacy / no
  other companies' branding). Boxes are in original-pixel coordinates.
- Optional crop (e.g. to remove a parked car at the frame edge).
- A gentle, consistent tonal lift: auto-contrast with a small clip,
  slightly richer colour. Nothing is added to or removed from the work.

Usage: python3 -I prepare-work-photos.py <raw-dir> <out-dir>
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

RAW, OUT = Path(sys.argv[1]), Path(sys.argv[2])

BLUR = {
    'hedge-2': [(955, 795, 1100, 860)],       # electrician's van lettering
    'hedge-3': [(1045, 775, 1240, 845)],      # same van
    'hedge-7': [(880, 622, 945, 688)],        # logo on worker's shirt
    'hedge-11': [(90, 845, 185, 910)],        # van phone number
    'removal-2': [(322, 1235, 368, 1262)],    # equipment hire company logo
    'removal-5': [(700, 945, 815, 1025)],     # building signs
    'removal-6': [(1030, 605, 1135, 680)],    # building signs
}
CROP = {
    'storm-6': (0, 0, 1120, 1600),            # parked car at right edge
}

for src in sorted(RAW.glob('*.jpg')):
    name = src.stem
    im = ImageOps.exif_transpose(Image.open(src)).convert('RGB')
    boxes = BLUR.get(name, [])
    if boxes:
        # Soft, feathered blur that blends into the photo (no hard blocks).
        blurred = im.filter(ImageFilter.GaussianBlur(14))
        mask = Image.new('L', im.size, 0)
        draw = ImageDraw.Draw(mask)
        for x0, y0, x1, y1 in boxes:
            draw.rounded_rectangle((x0, y0, x1, y1), radius=12, fill=255)
        mask = mask.filter(ImageFilter.GaussianBlur(8))
        im = Image.composite(blurred, im, mask)
    if name in CROP:
        im = im.crop(CROP[name])
    im = ImageOps.autocontrast(im, cutoff=0.4, preserve_tone=True)
    im = ImageEnhance.Color(im).enhance(1.08)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    im.save(OUT / f'{name}.jpg', quality=88, optimize=True, progressive=True)
    print(name, im.size)
