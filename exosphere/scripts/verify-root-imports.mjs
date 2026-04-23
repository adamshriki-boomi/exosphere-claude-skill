#!/usr/bin/env node
// verify-root-imports.mjs — assert that a project imports both mandatory
// Exosphere root files at an app-root entry point:
//   1. @boomi/exosphere/dist/styles.css — component styling
//   2. @boomi/exosphere/dist/icon.js    — icon registry (7.x+; missing this
//      silently renders every icon as an empty box)
//
// WHY this script exists: a naive `grep '@boomi/exosphere/dist/icon.js'` will
// happily match the path inside template literals, string constants, markdown
// bodies, JSDoc blocks, and test fixtures. That leads to false negatives —
// "looks like it's imported, but it actually isn't." This script uses four
// layers of defense:
//   1. It only scans files that are actually entry-point candidates by
//      framework convention (src/main.tsx, app/layout.tsx, pages/_app.tsx,
//      src/app/app.module.ts, etc.) — not arbitrary *.ts.
//   2. For JS/TS, it only scans the first N lines of the file (imports are
//      always near the top in a real module).
//   3. It matches a full `import '<path>';` side-effect-import statement
//      anchored to the start of a line, not just the bare string literal.
//   4. It builds a lexer-lite state mask and rejects any match whose
//      `import` keyword is actually inside a string / comment / template
//      literal — the specific shape of the false-positive that motivated
//      this script.
//
// Exits 0 if at least one entry file contains BOTH imports. Exits 1 otherwise.
//
// Usage:
//   node verify-root-imports.mjs [project_root]
//   node verify-root-imports.mjs --json [project_root]

import fs from 'node:fs';
import path from 'node:path';

const CSS_PATH = '@boomi/exosphere/dist/styles.css';
const ICON_PATH = '@boomi/exosphere/dist/icon.js';

// Candidate entry files by framework convention. Order doesn't change
// correctness — we scan all that exist — but is roughly most-common-first
// for readability in the "looked for" error message.
const CANDIDATES = [
  // Vite / CRA React
  'src/main.tsx', 'src/main.jsx', 'src/main.ts', 'src/main.js',
  'src/index.tsx', 'src/index.jsx', 'src/index.ts', 'src/index.js',
  // Next.js App Router
  'app/layout.tsx', 'app/layout.jsx', 'app/layout.ts', 'app/layout.js',
  'src/app/layout.tsx', 'src/app/layout.jsx', 'src/app/layout.ts', 'src/app/layout.js',
  // Next.js Pages Router
  'pages/_app.tsx', 'pages/_app.jsx', 'pages/_app.ts', 'pages/_app.js',
  'src/pages/_app.tsx', 'src/pages/_app.jsx', 'src/pages/_app.ts', 'src/pages/_app.js',
  // Angular
  'src/app/app.module.ts', 'src/app/app.config.ts', 'src/app/app.component.ts',
  'src/main.ts',
  // Plain HTML
  'index.html', 'public/index.html', 'src/index.html',
];

// How many lines from the top of a JS/TS file to scan. Imports in a real
// ES module are always at the top — this cap defeats string-literal false
// positives buried deep in the file (e.g., the constants.ts:289,294 case
// that motivated this script).
const JS_IMPORT_WINDOW = 200;

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Matches the path inside an HTML href="..." or src="..." attribute.
// Allows versioned specifiers like @boomi/exosphere@7.8.3/dist/....
function htmlAssetRegex(fileName) {
  const f = escapeRe(fileName);
  return new RegExp(
    `@boomi\\/exosphere(?:@[^"'\\s/]+)?\\/dist\\/${f}`,
    'i'
  );
}

function topNLines(text, n) {
  const lines = text.split(/\r?\n/);
  return lines.slice(0, n).join('\n');
}

// Build a per-character lexer state mask for a JS/TS source buffer.
// Each entry is one of: 'code' | 'sq' | 'dq' | 'tl' | 'lc' | 'bc'.
// (single-quote / double-quote / template-literal / line-comment / block-comment)
// Good enough to tell "this `import` keyword is real code" vs. "this `import`
// keyword is text inside a backtick-delimited string." Not a full parser —
// does not descend into `${}` interpolations (rare at the top of an entry file).
function buildLexerMask(text) {
  const mask = new Array(text.length);
  let state = 'code';
  let i = 0;
  while (i < text.length) {
    mask[i] = state;
    const ch = text[i];
    const nx = text[i + 1];
    if (state === 'code') {
      if (ch === '/' && nx === '/') state = 'lc';
      else if (ch === '/' && nx === '*') state = 'bc';
      else if (ch === "'") state = 'sq';
      else if (ch === '"') state = 'dq';
      else if (ch === '`') state = 'tl';
    } else if (state === 'lc') {
      if (ch === '\n') state = 'code';
    } else if (state === 'bc') {
      if (ch === '*' && nx === '/') { mask[i + 1] = 'bc'; i += 2; state = 'code'; continue; }
    } else if (state === 'sq') {
      if (ch === '\\' && nx !== undefined) { mask[i + 1] = 'sq'; i += 2; continue; }
      if (ch === "'") state = 'code';
    } else if (state === 'dq') {
      if (ch === '\\' && nx !== undefined) { mask[i + 1] = 'dq'; i += 2; continue; }
      if (ch === '"') state = 'code';
    } else if (state === 'tl') {
      if (ch === '\\' && nx !== undefined) { mask[i + 1] = 'tl'; i += 2; continue; }
      if (ch === '`') state = 'code';
    }
    i++;
  }
  return mask;
}

// Find a real, top-level side-effect import of `modulePath`. Returns the
// 1-based line number of the `import` keyword, or null if not found.
function findRealImport(text, modulePath, scanWindow) {
  const haystack = scanWindow ? topNLines(text, scanWindow) : text;
  const mask = buildLexerMask(haystack);
  const re = new RegExp(
    `^\\s*(import)\\s+(['"])${escapeRe(modulePath)}\\2\\s*;?\\s*(?://.*)?$`,
    'gm'
  );
  let m;
  while ((m = re.exec(haystack)) !== null) {
    // Position of the `import` keyword within the original buffer.
    const importPos = m.index + m[0].indexOf('import');
    if (mask[importPos] === 'code') {
      const prefix = haystack.slice(0, importPos);
      return prefix.split(/\n/).length;
    }
    // Otherwise: the hit is inside a string / comment / template literal.
    // Keep searching — an earlier-in-file template literal could be
    // followed by a real import lower down.
  }
  return null;
}

function scanJsEntry(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const cssLine = findRealImport(text, CSS_PATH, JS_IMPORT_WINDOW);
  const iconLine = findRealImport(text, ICON_PATH, JS_IMPORT_WINDOW);
  return { cssLine, iconLine };
}

function scanHtmlEntry(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  // For HTML, it's fine to scan the whole <head> — but to stay consistent
  // with the JS path and avoid matching inline string examples inside a
  // <pre><code> block, we cap to the first N lines too.
  const haystack = topNLines(text, JS_IMPORT_WINDOW);
  const cssMatch = haystack.match(htmlAssetRegex('styles.css'));
  const iconMatch = haystack.match(htmlAssetRegex('icon.js'));
  const toLine = (m) => {
    if (!m) return null;
    return haystack.slice(0, m.index).split(/\n/).length;
  };
  return { cssLine: toLine(cssMatch), iconLine: toLine(iconMatch) };
}

function parseArgs(argv) {
  const args = { root: null, json: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--json') args.json = true;
    else if (!args.root) args.root = a;
  }
  if (!args.root) args.root = process.cwd();
  return args;
}

function formatResult(entries) {
  const lines = [];
  for (const e of entries) {
    lines.push(`  ${e.relPath}`);
    lines.push(`    ${e.cssLine ? '✓' : '✗'} styles.css${e.cssLine ? ` (line ${e.cssLine})` : ' MISSING'}`);
    lines.push(`    ${e.iconLine ? '✓' : '✗'} icon.js${e.iconLine ? `    (line ${e.iconLine})` : '    MISSING'}`);
  }
  return lines.join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const root = path.resolve(args.root);

  if (!fs.existsSync(root) || !fs.statSync(root).isDirectory()) {
    console.error(`[verify-root-imports] error: ${root} is not a directory`);
    process.exit(2);
  }

  const foundEntries = [];
  for (const rel of CANDIDATES) {
    const abs = path.join(root, rel);
    if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) continue;
    const isHtml = rel.endsWith('.html') || rel.endsWith('.htm');
    const scan = isHtml ? scanHtmlEntry : scanJsEntry;
    let result;
    try {
      result = scan(abs);
    } catch (err) {
      console.error(`[verify-root-imports] warn: could not read ${rel}: ${err.message}`);
      continue;
    }
    foundEntries.push({ relPath: rel, absPath: abs, ...result });
  }

  if (args.json) {
    console.log(JSON.stringify({
      root,
      entries: foundEntries.map(e => ({
        path: e.relPath,
        stylesCssLine: e.cssLine,
        iconJsLine: e.iconLine,
      })),
      pass: foundEntries.some(e => e.cssLine && e.iconLine),
    }, null, 2));
  }

  if (foundEntries.length === 0) {
    if (!args.json) {
      console.log(`[verify-root-imports] ⚠  no recognized entry file found under ${root}.`);
      console.log(`                      Looked for (first match wins by framework convention):`);
      for (const c of CANDIDATES) console.log(`                        ${c}`);
      console.log(``);
      console.log(`                      If this is a non-standard layout, pass the project root:`);
      console.log(`                        node verify-root-imports.mjs /path/to/your/app`);
      console.log(``);
      console.log(`                      Exosphere's two mandatory root imports must live in the app's entry file:`);
      console.log(`                        import "${CSS_PATH}";`);
      console.log(`                        import "${ICON_PATH}";`);
    }
    process.exit(1);
  }

  const passingEntry = foundEntries.find(e => e.cssLine && e.iconLine);
  if (passingEntry) {
    if (!args.json) {
      console.log(`[verify-root-imports] ✓  ${passingEntry.relPath} has both required imports (styles.css at L${passingEntry.cssLine}, icon.js at L${passingEntry.iconLine}).`);
      if (foundEntries.length > 1) {
        const others = foundEntries.filter(e => e !== passingEntry);
        console.log(`                      Other entry files scanned (FYI):`);
        console.log(formatResult(others));
      }
    }
    process.exit(0);
  }

  // No single entry has both. Report per-file status and actionable guidance.
  if (!args.json) {
    console.log(`[verify-root-imports] ✗  no entry file has both required imports.`);
    console.log(`                      Scanned:`);
    console.log(formatResult(foundEntries));
    console.log(``);
    const missingCss = foundEntries.every(e => !e.cssLine);
    const missingIcon = foundEntries.every(e => !e.iconLine);
    const splitAcrossFiles = !missingCss && !missingIcon;
    if (splitAcrossFiles) {
      console.log(`                      Both imports are present, but in SEPARATE entry files.`);
      console.log(`                      Move them so both land in a single app-root file — otherwise`);
      console.log(`                      whichever file the framework ignores will skip its import.`);
    } else {
      const suggestTarget = foundEntries[0].relPath;
      console.log(`                      Add the missing import(s) at the top of ${suggestTarget}:`);
      if (missingCss)  console.log(`                        import "${CSS_PATH}";`);
      if (missingIcon) console.log(`                        import "${ICON_PATH}";`);
      if (missingIcon) {
        console.log(``);
        console.log(`                      Note: missing icon.js silently renders every icon as an empty`);
        console.log(`                      box — dialog close X, combobox chevron, toast status markers,`);
        console.log(`                      <ex-icon>, <ex-icon-button>. No console warning. See`);
        console.log(`                      references/foundation/iconography.md.`);
      }
    }
  }
  process.exit(1);
}

main();
