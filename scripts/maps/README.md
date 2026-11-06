# Service-area map

`build-ireland-map.py` generates `src/data/ireland-map.json`, which
`AreaMap.astro` draws as an inline SVG (no Google scripts or cookies).

Inputs (download once):

- `ireland-counties.geojson` from github.com/codeforgermany/click_that_hood
  (`public/data/ireland-counties.geojson`)
- `countries-10m.json` from the `world-atlas@2.0.2` npm package (`npm pack world-atlas@2.0.2`)

To add or move a town, edit `TOWNS` in the script and re-run it. The build
fails if any town falls outside its county.
