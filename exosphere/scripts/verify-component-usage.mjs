#!/usr/bin/env node
// verify-component-usage.mjs — flag raw HTML elements that should be Exosphere
// components (e.g., <button> instead of ExButton or <ex-button>).
//
// Only scans TSX / JSX / Vue SFC / HTML / Svelte. For TS/JS, it would need
// a real parser (beyond the scope here) and the signal-to-noise ratio drops.
//
// Exits 1 on findings, 0 if clean.
//
// Usage:
//   node verify-component-usage.mjs [paths...]
//   node verify-component-usage.mjs --since HEAD

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

// Elements that almost always should be Exosphere components in a Boomi app
const RAW_TO_COMPONENT = {
  button:   'ExButton / <ex-button>',
  input:    'ExInput / <ex-input>',
  select:   'ExSelect or ExCombobox / <ex-select>',
  textarea: 'ExTextarea / <ex-textarea>',
  dialog:   'ExDialog / <ex-dialog>',
};

// Less certain but often still suspicious
const SOFT_FLAGS = {
  a:      'ExLink / <ex-link> when it is a navigation link',
  table:  'ExTable or ExStructuredList',
  nav:    'ExLeftMenubar / ExNavigationDrawer / ExBreadcrumb / ExTab depending on purpose',
};

const EXTS = new Set(['.tsx', '.jsx', '.vue', '.html', '.htm', '.svelte']);
const IGNORE_DIRS = new Set(['node_modules', 'dist', 'build', 'out', '.next', '.nuxt', '.svelte-kit', '.cache', 'coverage', '.git']);

function walk(root, out = []) {
  let stat;
  try { stat = fs.statSync(root); } catch { return out; }
  if (stat.isFile()) { out.push(root); return out; }
  if (!stat.isDirectory()) return out;
  for (const e of fs.readdirSync(root)) {
    if (IGNORE_DIRS.has(e)) continue;
    walk(path.join(root, e), out);
  }
  return out;
}

function gitChangedFiles(ref) {
  try {
    return execSync(`git diff --name-only ${ref}...HEAD`, { encoding: 'utf8' })
      .split(/\r?\n/).filter(Boolean);
  } catch { return null; }
}

function scanFile(file, { soft }) {
  const text = fs.readFileSync(file, 'utf8');
  // crude: look for opening tags "<tag" (not <tag>/< TagName or <ex- / <Ex)
  const hits = [];
  const lines = text.split(/\r?\n/);
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) return;

    const pairs = soft
      ? { ...RAW_TO_COMPONENT, ...SOFT_FLAGS }
      : RAW_TO_COMPONENT;

    for (const [tag, suggest] of Object.entries(pairs)) {
      // match "<button" but not "<buttons" or "<Button" or "<ex-button"
      const re = new RegExp(`<${tag}(?=[\\s>/])`, 'g');
      if (re.test(line)) {
        hits.push({ line: idx + 1, text: line, tag, suggest });
      }
    }
  });
  return hits;
}

function parseArgs(argv) {
  const args = { paths: [], since: null, soft: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--since')     args.since = argv[++i];
    else if (a === '--soft') args.soft  = true;
    else                     args.paths.push(a);
  }
  if (args.paths.length === 0) args.paths.push(process.cwd());
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  let files;
  if (args.since) {
    files = gitChangedFiles(args.since) || [];
    if (files.length === 0) {
      console.log('[verify-components] no changed files (or git unavailable); falling back to full scan');
      files = args.paths.flatMap(p => walk(p));
    }
  } else {
    files = args.paths.flatMap(p => walk(p));
  }

  files = files.filter(f => EXTS.has(path.extname(f)));

  let total = 0;
  for (const file of files) {
    let hits;
    try { hits = scanFile(file, args); } catch { continue; }
    if (hits.length === 0) continue;
    console.log(`\n${file}`);
    for (const h of hits) {
      total++;
      console.log(`  ${h.line}: <${h.tag}> → ${h.suggest}`);
      console.log(`        ${h.text.trim().slice(0, 160)}`);
    }
  }

  if (total > 0) {
    console.log(`\n[verify-components] ${total} finding(s) in ${files.length} scanned file(s).`);
    console.log(`                    If the raw element is inside a flagged custom component,`);
    console.log(`                    it's probably fine. Otherwise replace with the suggested Exosphere component.`);
    process.exit(1);
  }
  console.log(`[verify-components] ✓  no obvious raw elements in ${files.length} scanned file(s).`);
  process.exit(0);
}

main();
