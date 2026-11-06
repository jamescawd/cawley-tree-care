"""
Build the service-area map data (src/data/ireland-map.json).

Sources (both public):
  - County boundaries (Republic of Ireland): click_that_hood
    ireland-counties.geojson (Code for Germany / Code for America).
  - Northern Ireland outline: world-atlas 2.0.2 countries-10m (Natural Earth).

Usage:
  python3 -I scripts/maps/build-ireland-map.py <counties.geojson> <countries-10m.json> src/data/ireland-map.json
"""
import json, math, sys

COUNTIES, WORLD, OUT = sys.argv[1:4]
SERVED = ['Westmeath', 'Roscommon', 'Longford', 'Offaly', 'Galway']

# Town centre coordinates (lat, lon), checked below to fall inside their county.
TOWNS = {
    'Westmeath': [('Mullingar', 53.526, -7.338), ('Athlone', 53.4239, -7.9407), ('Moate', 53.396, -7.719),
                  ('Kinnegad', 53.458, -7.102), ('Castlepollard', 53.680, -7.297), ('Kilbeggan', 53.369, -7.503),
                  ('Rochfortbridge', 53.414, -7.300)],
    'Roscommon': [('Roscommon Town', 53.633, -8.183), ('Boyle', 53.973, -8.299), ('Castlerea', 53.768, -8.492),
                  ('Ballaghaderreen', 53.901, -8.578), ('Strokestown', 53.775, -8.103), ('Elphin', 53.853, -8.196)],
    'Longford': [('Longford Town', 53.727, -7.798), ('Edgeworthstown', 53.699, -7.608), ('Granard', 53.779, -7.495),
                 ('Ballymahon', 53.565, -7.764), ('Lanesborough', 53.672, -7.991)],
    'Offaly': [('Tullamore', 53.2739, -7.4889), ('Birr', 53.091, -7.913), ('Edenderry', 53.345, -7.049),
               ('Clara', 53.342, -7.613), ('Kilcormac', 53.176, -7.726), ('Banagher', 53.189, -7.986),
               ('Ferbane', 53.270, -7.827)],
    'Galway': [('Galway City', 53.2707, -9.0568), ('Tuam', 53.515, -8.851), ('Ballinasloe', 53.328, -8.219),
               ('Loughrea', 53.197, -8.567), ('Athenry', 53.296, -8.744), ('Oranmore', 53.268, -8.928),
               ('Gort', 53.066, -8.817), ('Portumna', 53.089, -8.219), ('Clifden', 53.489, -10.019)],
}
BASE = 'Athlone'

K = math.cos(math.radians(53.4))          # longitude scale at Ireland's latitude
W = 600                                    # SVG width in user units
LON0, LON1, LAT0, LAT1 = -10.35, -6.75, 52.78, 54.22  # cropped to the service area
SCALE = W / ((LON1 - LON0) * K)
H = round((LAT1 - LAT0) * SCALE)

def proj(lon, lat):
    return ((lon - LON0) * K * SCALE, (LAT1 - lat) * SCALE)

def simplify(pts, tol):
    """Douglas–Peucker."""
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    norm = math.hypot(dx, dy) or 1e-9
    i_max, d_max = 0, 0
    for i in range(1, len(pts) - 1):
        d = abs(dy * pts[i][0] - dx * pts[i][1] + x2 * y1 - y2 * x1) / norm
        if d > d_max:
            i_max, d_max = i, d
    if d_max > tol:
        return simplify(pts[: i_max + 1], tol)[:-1] + simplify(pts[i_max:], tol)
    return [pts[0], pts[-1]]

def ring_path(ring, tol=0.7, min_area=6):
    raw = [proj(lon, lat) for lon, lat in ring]
    # A closed ring starts and ends on the same point, which Douglas–Peucker
    # treats as a zero-length line; simplify each half separately.
    mid = len(raw) // 2
    pts = simplify(raw[: mid + 1], tol)[:-1] + simplify(raw[mid:], tol)
    if len(pts) < 4:
        return ''
    area = abs(sum(pts[i][0] * pts[i - 1][1] - pts[i - 1][0] * pts[i][1] for i in range(len(pts)))) / 2
    if area < min_area:                    # drop tiny islands
        return ''
    if not any(-20 <= x <= W + 20 and -20 <= y <= H + 20 for x, y in pts):
        return ''                          # entirely outside the cropped view
    return 'M' + 'L'.join(f'{x:.0f},{y:.0f}' for x, y in pts) + 'Z'

def polys(geom):
    return geom['coordinates'] if geom['type'] == 'MultiPolygon' else [geom['coordinates']]

def inside(lon, lat, geom):
    hit = False
    for poly in polys(geom):
        ring = poly[0]
        for i in range(len(ring)):
            (x1, y1), (x2, y2) = ring[i - 1], ring[i]
            if (y1 > lat) != (y2 > lat) and lon < (x2 - x1) * (lat - y1) / (y2 - y1) + x1:
                hit = not hit
    return hit

# --- Republic counties (merge "X City" into "X County") ---
counties = {}
for f in json.load(open(COUNTIES))['features']:
    name = f['properties']['name']
    key = name.replace(' County', '').replace(' City', '')
    key = {'Dún Laoghaire-Rathdown': 'Dublin', 'Fingal': 'Dublin', 'South Dublin': 'Dublin',
           'North Tipperary': 'Tipperary', 'South Tipperary': 'Tipperary'}.get(key, key)
    counties.setdefault(key, []).append(f['geometry'])

# --- Northern Ireland from the UK outline ---
topo = json.load(open(WORLD))
tf = topo['transform']
def arc_coords(i):
    arc = topo['arcs'][i if i >= 0 else ~i]
    x = y = 0
    out = []
    for dx, dy in arc:
        x += dx; y += dy
        out.append((x * tf['scale'][0] + tf['translate'][0], y * tf['scale'][1] + tf['translate'][1]))
    return out if i >= 0 else out[::-1]
uk = next(g for g in topo['objects']['countries']['geometries'] if g.get('id') == '826')
ni_paths = []
for poly in (uk['arcs'] if uk['type'] == 'MultiPolygon' else [uk['arcs']]):
    ring = []
    for a in poly[0]:
        c = arc_coords(a)
        ring.extend(c if not ring else c[1:])
    lons = [p[0] for p in ring]; lats = [p[1] for p in ring]
    if max(lons) < -5.3 and min(lats) > 53.9 and max(lats) < 55.5:
        ni_paths.append(ring_path(ring))

# --- Build output ---
data = {'width': W, 'height': H, 'other': [], 'served': [], 'towns': []}
for key, geoms in counties.items():
    d = ''.join(ring_path(poly[0]) for g in geoms for poly in polys(g))
    if key in SERVED:
        ring = max((poly[0] for g in geoms for poly in polys(g)), key=len)
        pts = [proj(*p) for p in ring]
        a = cx = cy = 0.0
        for i in range(len(pts)):
            (x0, y0), (x1, y1) = pts[i - 1], pts[i]
            cr = x0 * y1 - x1 * y0
            a += cr; cx += (x0 + x1) * cr; cy += (y0 + y1) * cr
        cx, cy = cx / (3 * a), cy / (3 * a)
        cx, cy = {'Galway': (cx + 40, cy - 25), 'Westmeath': (cx + 12, cy - 22), 'Longford': (cx + 22, cy - 36)}.get(key, (cx, cy))
        data['served'].append({'county': key, 'd': d, 'label': [round(cx, 1), round(cy, 1)]})
    else:
        data['other'].append(d) if d else None
data['other'].append(''.join(p for p in ni_paths if p))

errors = []
for county, towns in TOWNS.items():
    for name, lat, lon in towns:
        if not any(inside(lon, lat, g) for g in counties[county]):
            errors.append(f'{name} not inside Co. {county}')
        x, y = proj(lon, lat)
        data['towns'].append({'name': name, 'county': county, 'x': round(x, 1), 'y': round(y, 1),
                              'base': name == BASE})
if errors:
    sys.exit('Town check failed: ' + '; '.join(errors))

json.dump(data, open(OUT, 'w'), separators=(',', ':'))
print(f'{W}x{H}, {len(data["towns"])} towns verified inside their counties, '
      f'{len(json.dumps(data)) // 1024} KB')
