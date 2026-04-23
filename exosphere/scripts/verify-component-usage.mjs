#!/usr/bin/env node
// verify-component-usage.mjs — flag raw HTML elements that should be Exosphere
// components (e.g., <button> instead of ExButton or <ex-button>).
//
// Only scans TSX / JSX / Vue SFC / HTML / Svelte. For TS/JS, it would need
// a real parser (beyond the scope here) and the signal-to-noise ratio drops.
//
// Exit codes:
//   0 — clean scan, no findings
//   1 — findings reported
//   2 — no files matched any passed path (likely a glob/path typo)
//
// Usage:
//   node verify-component-usage.mjs [paths...]    # files, dirs, or simple globs
//   node verify-component-usage.mjs --since HEAD  # files changed vs. ref
//   node verify-component-usage.mjs --soft        # also flag <a>, <table>, <nav>
//
// PATHS
//   Each positional arg may be a file, a directory (walked recursively), or a
//   simple glob in the form `root/**/*.ext` or `root/**/*.{ext1,ext2}`.
//   Fancier globs are not supported; the script warns and skips them.
//   Any path that resolves to zero files prints a warning; if NO path matches
//   any file at all, the script exits 2 so CI doesn't pass silently on a typo.

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

// See verify-token-usage.mjs for the same expander — we duplicate it here so each
// script stays dependency-free and self-contained.
const GLOB_CHARS = /[*?\[\{]/;
const SIMPLE_GLOB = /^([^*?\[\{]+?)\/\*\*\/\*\.(\{[^}]+\}|[^/]+)$/;

function expandArg(arg) {
  if (!GLOB_CHARS.test(arg)) {
    if (!fs.existsSync(arg)) return { files: [], note: `path does not exist: ${arg}` };
    return { files: walk(arg), note: null };
  }
  const m = arg.match(SIMPLE_GLOB);
  if (!m) {
    return {
      files: [],
      note: `unsupported glob "${arg}" — use a directory or a simple pattern like src/**/*.{tsx,jsx}`,
    };
  }
  const [, root, extSpec] = m;
  if (!fs.existsSync(root)) {
    return { files: [], note: `glob root does not exist: ${root}` };
  }
  const exts = extSpec.startsWith('{') && extSpec.endsWith('}')
    ? extSpec.slice(1, -1).split(',').map(e => '.' + e.trim().replace(/^\./, ''))
    : ['.' + extSpec.replace(/^\./, '')];
  const files = walk(root).filter(f => exts.includes(path.extname(f)));
  return { files, note: null };
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
  let pathWarnings = [];
  if (args.since) {
    files = gitChangedFiles(args.since) || [];
    if (files.length === 0) {
      console.log('[verify-components] no changed files (or git unavailable); falling back to full scan');
      const expanded = args.paths.map(p => ({ arg: p, ...expandArg(p) }));
      files = expanded.flatMap(e => e.files);
      pathWarnings = expanded.filter(e => e.note || e.files.length === 0);
    }
  } else {
    const expanded = args.paths.map(p => ({ arg: p, ...expandArg(p) }));
    files = expanded.flatMap(e => e.files);
    pathWarnings = expanded.filter(e => e.note || e.files.length === 0);
  }

  for (const w of pathWarnings) {
    if (w.note) console.warn(`[verify-components] ${w.note}`);
    else        console.warn(`[verify-components] no files matched: ${w.arg}`);
  }

  const preFilter = files.length;
  files = files.filter(f => EXTS.has(path.extname(f)));
  if (preFilter === 0 && args.paths.length > 0) {
    console.error(`[verify-components] no files matched any passed path — check your paths/globs.`);
    process.exit(2);
  }

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
