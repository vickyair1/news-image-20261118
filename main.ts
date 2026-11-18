// News-image 18 November 2026 — handover program (Node 22, stdlib only).
// The entry is the newspaper front page beside this file (entry.png,
// 1024x1024, nine verified stories from Wednesday 18 November 2026).
// This program copies it to the output directory so the gate and the
// judge see exactly those bytes. It runs twice and both runs must
// produce identical bytes: a plain copy, no clock, no randomness,
// no network.
//
// Locally:  MAKEFUN_OUTPUT_DIR=out node main.ts
// The scorer runs it with /output as the destination.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));

// The gate takes at most 1 MiB; fail loudly here rather than hand in
// a truncated copy.
const bytes = statSync(join(outDir, 'entry.png')).size;
if (bytes === 0 || bytes > 1048576) throw new Error(`entry.png is ${bytes} bytes, expected 1..1048576`);

console.log(`Front page handed over to ${outDir}`);
