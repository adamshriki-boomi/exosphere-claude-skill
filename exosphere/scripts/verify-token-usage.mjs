#!/usr/bin/env node
// verify-token-usage.mjs — flag raw hex/rgb/px literals in source files that
// should be using --exo-* tokens instead.
//
// Scope: .ts .tsx .js .jsx .vue .css .scss .html files at paths you pass.
// By default, scans the current working directory recursively.
//
// Exit codes:
//   0 — clean scan, no findings
//   1 — findings reported
//   2 — no files matched any passed path (likely a glob/path typo)
//
// Usage:
//   node verify-token-usage.mjs [paths...]
//     # Scan specific files, directories, or simple globs.
//   node verify-token-usage.mjs --since HEAD
//     # Scan files changed vs. the given git ref (falls back to full scan on error)
//   node verify-token-usage.mjs --allow-list .exosphere-allow
//     # Skip lines matched by a simple allow file (see ALLOW LIST below)
//
// PATHS
//   Each positional arg may be:
//     - a file           (scanned if its extension matches)
//     - a directory      (walked recursively)
//     - a simple glob    (matched manually — see below)
//
//   Supported glob form:        root/**/*.ext     or    root/**/*.{ext1,ext2}
//   Anything fancier is NOT supported; the script will warn and skip it.
//   Remember to unquote the glob in your shell (or this script parses it manually):
//     ✅ node verify-token-usage.mjs src/**/*.{ts,tsx,css,scss}
//     ⚠️  node verify-token-usage.mjs 'src/**/*.{ts,tsx,css,scss}'   # quoted — script parses it
//   Any path that resolves to zero files prints a warning. If NO path matches any
//   file at all, the script exits 2 so a CI job will fail instead of passing silently.
//
// ALLOW LIST (--allow-list FILE)
//   File format: one pattern per line; `#` starts a comment; blank lines ignored.
//   Matching is SUBSTRING-ON-LINE, not path-based. If any pattern appears anywhere
//   in a source line's text, that entire line is skipped for all checks.
//   This is intentional — you can silence a specific inline literal ("#1a1a1a") or
//   a specific file pattern ("src/legacy/") in the same file with the same mechanism.
//   Example:
//     # tolerate mocked colors in Storybook stories
//     .stories.
//     # tolerate a one-off legacy constant
//     LEGACY_HEX = '#1a1a1a'
//
// SHADOW COMPOSITIONS
//   Exosphere 7.8.3 ships shadow *colors* (--exo-color-shadow-weak|moderate|strong)
//   but no offset/spread tokens. A line like:
//     box-shadow: 0 2px 8px var(--exo-color-shadow-weak);
//   is treated as compliant — raw px on a line that references --exo-color-shadow-*
//   is not flagged. (If Exosphere ships full --exo-shadow-* tokens later, switch.)

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const HEX   = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/;
const RGBRGBA = /\brgba?\s*\(/;
// Raw px / rem / em in CSS property values or JSX style={{}}. We allow `1px` for
// borders because it's near-universal, but flag anything else.
const PX     = /(?<!\w)(\d+(?:\.\d+)?)px\b/;
const ALLOWED_PX_EXACT = new Set(['1px', '0px']);
// Lines that reference a shadow-color token are composing a box-shadow. Exosphere
// doesn't ship --exo-shadow-* offset/spread tokens, so the px offsets on the same
// line are expected and not flagged. See the "SHADOW COMPOSITIONS" header comment.
const SHADOW_COLOR_TOKEN = /--exo-color-shadow-/;

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
      // Lines composing a box-shadow against a shadow-color token are exempt —
      // Exosphere doesn't ship offset/spread tokens in 7.8.3.
      if (bad.length && !SHADOW_COLOR_TOKEN.test(line)) {
        hits.push({ line: idx + 1, text: line, kind: `px (${bad.join(', ')})` });
      }
    }
  });
  return hits;
}

// Expand a user-supplied path arg into a concrete list of files.
// Returns { files, note } — `note` is a warning string when the arg is empty or unparseable.
// Supported glob form is deliberately minimal: `root/**/*.ext` or `root/**/*.{a,b,c}`.
// Anything more elaborate prints a warning and returns zero files.
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
      note: `unsupported glob "${arg}" — use a directory path or a simple pattern like src/**/*.{ts,tsx,css}`,
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

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const allowList = loadAllowList(args.allowList);

  let files;
  let pathWarnings = [];
  if (args.since) {
    files = gitChangedFiles(args.since) || [];
    if (files.length === 0) {
      console.log('[verify-tokens] no changed files (or git unavailable); falling back to full scan');
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
    if (w.note) console.warn(`[verify-tokens] ${w.note}`);
    else        console.warn(`[verify-tokens] no files matched: ${w.arg}`);
  }

  const preFilter = files.length;
  files = files.filter(shouldScan);
  // If we got args but nothing matched any scannable file, that's almost always a typo.
  if (preFilter === 0 && args.paths.length > 0) {
    console.error(`[verify-tokens] no files matched any passed path — check your paths/globs.`);
    process.exit(2);
  }

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
