import sys
import numpy as np
from PIL import Image

src, out = sys.argv[1], sys.argv[2]
im = np.asarray(Image.open(src).convert('RGB')).astype(np.float32) / 255.0

# Colour-to-alpha against black (as in GIMP): alpha = brightest channel,
# colour = un-premultiplied. Keeps anti-aliased edges clean on any background.
alpha = im.max(axis=2)
alpha = np.clip((alpha - 0.06) / 0.94, 0, 1)  # drop compression noise in the black (peaks at 12/255)
safe = np.where(alpha > 0, alpha, 1)[..., None]
rgb = np.clip(im / safe, 0, 1)
rgba = np.dstack([rgb, alpha])
img = Image.fromarray((rgba * 255).round().astype(np.uint8), 'RGBA')

full = img.crop((210, 56, 1462, 721))           # whole stacked lockup
mark = img.crop((360, 56, 1300, 470))           # tree + arc + ground line
word = img.crop((210, 470, 1462, 721))          # CAWLEY'S + strapline
full.save(f'{out}/logo-stacked.png')
mark.save(f'{out}/logo-mark.png')
word.save(f'{out}/logo-wordmark.png')

# Horizontal lockup for the header: mark beside the wordmark.
H = 400
m = mark.resize((round(mark.width * H / mark.height), H), Image.LANCZOS)
wh = round(H * 0.62)
w = word.resize((round(word.width * wh / word.height), wh), Image.LANCZOS)
gap = 40
horiz = Image.new('RGBA', (m.width + gap + w.width, H), (0, 0, 0, 0))
horiz.paste(m, (0, 0), m)
horiz.paste(w, (m.width + gap, (H - wh) // 2 + 18), w)
horiz.save(f'{out}/logo-horizontal.png')
for name, i in [('stacked', full), ('mark', mark), ('wordmark', word), ('horizontal', horiz)]:
    print(name, i.size)
