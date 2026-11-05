import sys
from PIL import Image, ImageEnhance, ImageFilter
logo_dir, hero, out = sys.argv[1], sys.argv[2], sys.argv[3]
CHAR = (23, 23, 23)
mark = Image.open(f'{logo_dir}/logo-tree.png')
stacked = Image.open(f'{logo_dir}/logo-stacked.png')

def icon(size, pad=0.12):
    canvas = Image.new('RGBA', (size, size), CHAR + (255,))
    inner = round(size * (1 - 2 * pad))
    m = mark.copy()
    m.thumbnail((inner, inner), Image.LANCZOS)
    canvas.paste(m, ((size - m.width) // 2, (size - m.height) // 2), m)
    return canvas

icon(32, 0.0).save(f'{out}/favicon-32.png')
icon(180, 0.08).convert('RGB').save(f'{out}/apple-touch-icon.png')
icon(192, 0.08).save(f'{out}/icon-192.png')
icon(512, 0.08).save(f'{out}/icon-512.png')
icon(48, 0.0).save(f'{out}/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])

# Social share image (1200x630): darkened hero photograph + logo.
W, H = 1200, 630
photo = Image.open(hero).convert('RGB')
scale = max(W / photo.width, H / photo.height)
photo = photo.resize((round(photo.width * scale), round(photo.height * scale)), Image.LANCZOS)
left = (photo.width - W) // 2
photo = photo.crop((left, 0, left + W, H))
photo = ImageEnhance.Brightness(photo).enhance(0.32).filter(ImageFilter.GaussianBlur(1.2))
s = stacked.copy()
s.thumbnail((720, 380), Image.LANCZOS)
photo.paste(s, ((W - s.width) // 2, (H - s.height) // 2), s)
photo.save(f'{out}/og-image.jpg', quality=86, optimize=True, progressive=True)
print('done')
