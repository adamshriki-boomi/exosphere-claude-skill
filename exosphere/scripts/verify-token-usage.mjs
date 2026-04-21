#!/usr/bin/env node
// verify-token-usage.mjs — flag raw hex/rgb/px literals in source files that
// should be using --exo-* tokens instead.
//
// Scope: .ts .tsx .js .jsx .vue .css .scss .html files at paths you pass.
// By default, scans the current working directory recursively.
//
// Exits 1 if any violations found, 0 otherwise. Always prints findings.
//
// Usage:
//   node verify-token-usage.mjs [paths...]
//     # Scan specific files/dirs
//   node verify-token-usage.mjs --since HEAD
//     # Scan files changed vs. the given git ref (falls back to full scan on error)
//   node verify-token-usage.mjs --allow-list .exosphere-allow
//     # Skip lines/paths matched by a simple allow file (one pattern per line)

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const HEX   = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/;
const RGBRGBA = /\brgba?\s*\(/;
// Raw px / rem / em in CSS property values or JSX style={{}}. We allow `1px` for
// borders because it's near-universal, but flag anything else.
const PX     = /(?<!\w)(\d+(?:\.\d+)?)px\b/;
const ALLOWED_PX_EXACT = new Set(['1px', '0px']);

const EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.vue', '.css', '.scss', '.less', '.html', '.htm']);
const IGNORE_DIRS = new Set(['node_modules', 'dist', 'build', 'out', '.next', '.nuxt', '.svelte-kit', '.cache', 'coverage', '.git']);

function parseArgs(argv) {
  const args = { paths: [], since: null, allowList: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--since') args.since = argv[++i];
    else if (a === '--allow-list') args.allowList = argv[++i];
    else args.paths.push(a);
  }
  if (args.paths.length === 0) args.paths.push(process.cwd());
  return args;
}

function loadAllowList(p) {
  if (!p) return [];
  try { return fs.readFileSync(p, 'utf8').split(/\r?\n/).filter(l => l && !l.startsWith('#')); }
  catch { return []; }
}

function walk(root, out = []) {
  let stat;
  try { stat = fs.statSync(root); } catch { return out; }
  if (stat.isFile()) { out.push(root); return out; }
  if (!stat.isDirectory()) return out;
  for (const entry of fs.readdirSync(root)) {
    if (IGNORE_DIRS.has(entry)) continue;
    walk(path.join(root, entry), out);
  }
  return out;
}

function gitChangedFiles(ref) {
  try {
    const out = execSync(`git diff --name-only ${ref}...HEAD`, { encoding: 'utf8' });
    return out.split(/\r?\n/).filter(Boolean);
  } catch {
    return null;
  }
}

function shouldScan(file) {
  return EXTS.has(path.extname(file));
}

function matchesAllow(line, allowList) {
  return allowList.some(p => line.includes(p));
}

function scanFile(file, allowList) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);
  const hits = [];
  lines.forEach((line, idx) => {
    // Skip comment-only lines
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) return;
    // Skip lines already in --exo-* context (defining or using a token)
    // Allow lines that use var(--exo-*) even if they have an accompanying literal fallback
    if (matchesAllow(line, allowList)) return;

    if (HEX.test(line))    hits.push({ line: idx + 1, text: line, kind: 'hex' });
    if (RGBRGBA.test(line) && !line.includes('--exo-')) hits.push({ line: idx + 1, text: line, kind: 'rgb' });
    const pxMatch = line.match(new RegExp(PX.source, 'g'));
    if (pxMatch) {
      const bad = pxMatch.filter(v => !ALLOWED_PX_EXACT.has(v));
      if (bad.length) hits.push({ line: idx + 1, text: line, kind: `px (${bad.join(', ')})` });
    }
  });
  return hits;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const allowList = loadAllowList(args.allowList);

  let files;
  if (args.since) {
    files = gitChangedFiles(args.since) || [];
    if (files.length === 0) {
      console.log('[verify-tokens] no changed files (or git unavailable); falling back to full scan');
      files = args.paths.flatMap(p => walk(p));
    }
  } else {
    files = args.paths.flatMap(p => walk(p));
  }

  files = files.filter(shouldScan);

  let total = 0;
  for (const file of files) {
    let hits;
    try { hits = scanFile(file, allowList); } catch { continue; }
    if (hits.length === 0) continue;
    console.log(`\n${file}`);
    for (const h of hits) {
      total++;
      console.log(`  ${h.line}: [${h.kind}] ${h.text.trim().slice(0, 160)}`);
    }
  }

  if (total > 0) {
    console.log(`\n[verify-tokens] ${total} finding(s) in ${files.length} scanned file(s).`);
    console.log(`                Replace with --exo-* tokens — see references/foundation/design-tokens.md.`);
    process.exit(1);
  }
  console.log(`[verify-tokens] ✓  no raw hex/rgb/px literals in ${files.length} scanned file(s).`);
  process.exit(0);
}

main();
