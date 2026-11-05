#!/usr/bin/env node
// Usage: pnpm placeholders [--strict]   (--strict exits 1 if any remain; use before launch)
import { findPlaceholders, formatReport } from './placeholders.mjs';

const items = await findPlaceholders();
console.log(formatReport(items));
if (process.argv.includes('--strict') && items.length) process.exit(1);
