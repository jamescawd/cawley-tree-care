/**
 * Finds every `placeholder('…')` in the source, i.e. business information
 * still awaiting confirmation. Shared by `pnpm placeholders` and the build.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SCAN = ['src'];
const EXTENSIONS = /\.(ts|mts|js|mjs|astro|md|mdx)$/;
const PATTERN = /placeholder\(\s*(['"`])((?:(?!\1).)+)\1/g;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (EXTENSIONS.test(entry.name)) yield path;
  }
}

export async function findPlaceholders() {
  const found = [];
  for (const dir of SCAN) {
    for await (const file of walk(join(ROOT, dir))) {
      if (file.endsWith('lib/placeholder.ts')) continue;
      const source = await readFile(file, 'utf8');
      for (const match of source.matchAll(PATTERN)) {
        const line = source.slice(0, match.index).split('\n').length;
        found.push({ file: relative(ROOT, file), line, label: match[2] });
      }
    }
  }
  return found;
}

export function formatReport(items) {
  if (!items.length) return 'No outstanding placeholders. All business information is confirmed.';
  const byFile = Object.groupBy(items, (item) => item.file);
  const lines = [`${items.length} business details still need confirming:`];
  for (const [file, entries] of Object.entries(byFile)) {
    lines.push(`\n  ${file}`);
    for (const { line, label } of entries) lines.push(`    L${line}  ${label}`);
  }
  return lines.join('\n');
}
