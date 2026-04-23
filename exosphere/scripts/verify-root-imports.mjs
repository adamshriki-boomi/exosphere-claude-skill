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
// Indirection (added in alpha.6): the two imports don't have to be direct
// statements in the entry file. Exosphere's own next.md describes a Recipe B
// pattern that moves `icon.js` into a client-only Providers wrapper; the
// common Tailwind+Exosphere setup pulls `styles.css` in via CSS @import.
// Both patterns are now recognized:
//   - styles.css: if the entry imports a local CSS file (e.g. `./globals.css`),
//     follow it one level and accept any `@import "@boomi/exosphere/dist/styles.css"`
//     (package-name, versioned, or relative node_modules path all count).
//   - icon.js: if the entry imports a local JS/TS module (relative path or
//     `@/...` → `src/` alias), follow it one level and accept when that module
//     begins with `'use client'` AND contains either a top-level static
//     `import "@boomi/exosphere/dist/icon.js"` or a dynamic
//     `import("@boomi/exosphere/dist/icon.js")` anywhere in its body. The
//     `'use client'` directive is load-bearing: without it, the same imports
//     would execute server-side and crash on `customElements is not defined`.
//
// Exits 0 if at least one entry file satisfies BOTH imports (direct or via
// one level of indirection). Exits 1 otherwise.
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

// ——— indirection helpers (alpha.6) ———
// Resolve a JS/TS module specifier from an entry file to an absolute path.
// Returns null for npm packages. Handles relative paths (`./x`, `../x`) and
// the default Next.js `@/x` alias (tries `<root>/src/x` first, falls back to
// `<root>/x` to cover projects without a `src/` layout).
function existsAnyJsExtension(base) {
  if (fs.existsSync(base) && fs.statSync(base).isFile()) return base;
  for (const ext of ['.tsx', '.ts', '.jsx', '.js']) {
    const p = base + ext;
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  }
  for (const ext of ['.tsx', '.ts', '.jsx', '.js']) {
    const p = path.join(base, 'index' + ext);
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  }
  return null;
}

function resolveLocalJsImport(specifier, entryFilePath, projectRoot) {
  if (specifier.startsWith('./') || specifier.startsWith('../')) {
    return existsAnyJsExtension(path.resolve(path.dirname(entryFilePath), specifier));
  }
  if (specifier.startsWith('@/')) {
    const rest = specifier.slice(2);
    return existsAnyJsExtension(path.join(projectRoot, 'src', rest))
        ?? existsAnyJsExtension(path.join(projectRoot, rest));
  }
  return null;
}

function resolveLocalCssImport(specifier, entryFilePath, projectRoot) {
  if (!/\.(css|scss|sass|less)$/i.test(specifier)) return null;
  const exists = (p) => fs.existsSync(p) && fs.statSync(p).isFile() ? p : null;
  if (specifier.startsWith('./') || specifier.startsWith('../')) {
    return exists(path.resolve(path.dirname(entryFilePath), specifier));
  }
  if (specifier.startsWith('@/')) {
    const rest = specifier.slice(2);
    return exists(path.join(projectRoot, 'src', rest))
        ?? exists(path.join(projectRoot, rest));
  }
  return null;
}

// Extract local JS/TS import specifiers from an entry file (first N lines,
// real code only — reuses the lexer mask to skip strings / comments).
function findLocalJsImportSpecifiers(text) {
  const haystack = topNLines(text, JS_IMPORT_WINDOW);
  const mask = buildLexerMask(haystack);
  const re = /^\s*import\s+(?:[^'";]*?\s+from\s+)?(['"])([^'"]+)\1\s*;?\s*(?:\/\/.*)?$/gm;
  const out = [];
  let m;
  while ((m = re.exec(haystack)) !== null) {
    const importPos = m.index + m[0].indexOf('import');
    if (mask[importPos] !== 'code') continue;
    out.push(m[2]);
  }
  return out;
}

// Extract specifiers from CSS @import rules — `@import "path";`,
// `@import 'path';`, `@import url("path");`, `@import url(path);`.
function findCssImportSpecifiers(text) {
  const stripped = text.replace(/\/\*[\s\S]*?\*\//g, '');
  const out = [];
  const reStr = /@import\s+(['"])([^'"]+)\1\s*[^;]*;/g;
  const reUrl = /@import\s+url\s*\(\s*(['"]?)([^'")\s]+)\1\s*\)\s*[^;]*;/g;
  let m;
  while ((m = reStr.exec(stripped)) !== null) out.push(m[2]);
  while ((m = reUrl.exec(stripped)) !== null) out.push(m[2]);
  return out;
}

// Matches every legitimate shape of the exosphere styles.css specifier we've
// seen: bare package name, versioned, or a relative path through node_modules.
function specifierIsExosphereStyles(spec) {
  return /(?:^|\/)@boomi\/exosphere(?:@[^/]+)?\/dist\/styles\.css$/.test(spec);
}

function cssFileReferencesExosphere(cssFilePath) {
  let text;
  try { text = fs.readFileSync(cssFilePath, 'utf8'); } catch { return false; }
  return findCssImportSpecifiers(text).some(specifierIsExosphereStyles);
}

// True if the file begins with `'use client'` / `"use client"` as its own
// directive statement (allowing leading blank lines or `//` line comments —
// Next.js accepts both). Checks the first ~20 lines.
function hasUseClientDirective(text) {
  const head = text.split(/\r?\n/).slice(0, 20).join('\n');
  return /^\s*(?:\/\/[^\n]*\n\s*)*['"]use client['"]\s*;?\s*$/m.test(head);
}

// True if the file contains a dynamic `import('@boomi/exosphere/dist/icon.js')`
// call that is real code (not inside a string / comment / template literal).
function hasDynamicIconImport(text) {
  const mask = buildLexerMask(text);
  const re = /\bimport\s*\(\s*(['"`])@boomi\/exosphere\/dist\/icon\.js\1\s*\)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const importPos = m.index + m[0].indexOf('import');
    if (mask[importPos] === 'code') return true;
  }
  return false;
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

function scanJsEntry(filePath, projectRoot) {
  const text = fs.readFileSync(filePath, 'utf8');
  const cssLine = findRealImport(text, CSS_PATH, JS_IMPORT_WINDOW);
  const iconLine = findRealImport(text, ICON_PATH, JS_IMPORT_WINDOW);
  let cssVia = null;
  let iconVia = null;

  // Follow one level of indirection for whichever contract isn't already
  // satisfied by a direct import in the entry file.
  if (!cssLine || !iconLine) {
    for (const spec of findLocalJsImportSpecifiers(text)) {
      if (!cssLine && !cssVia) {
        const cssPath = resolveLocalCssImport(spec, filePath, projectRoot);
        if (cssPath && cssFileReferencesExosphere(cssPath)) {
          cssVia = path.relative(projectRoot, cssPath);
        }
      }
      if (!iconLine && !iconVia) {
        const jsPath = resolveLocalJsImport(spec, filePath, projectRoot);
        if (jsPath) {
          let modText;
          try { modText = fs.readFileSync(jsPath, 'utf8'); } catch { continue; }
          // Recipe B REQUIRES 'use client' — without the directive the same
          // imports would still execute server-side.
          if (hasUseClientDirective(modText)) {
            const staticHit = findRealImport(modText, ICON_PATH, JS_IMPORT_WINDOW);
            if (staticHit || hasDynamicIconImport(modText)) {
              iconVia = path.relative(projectRoot, jsPath);
            }
          }
        }
      }
      if ((cssLine || cssVia) && (iconLine || iconVia)) break;
    }
  }

  return { cssLine, iconLine, cssVia, iconVia };
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

function statusLine(label, line, via) {
  const padded = label.padEnd(10);
  if (line) return `✓ ${padded} (line ${line})`;
  if (via)  return `✓ ${padded} (via ${via})`;
  return    `✗ ${padded} MISSING`;
}

function formatResult(entries) {
  const lines = [];
  for (const e of entries) {
    lines.push(`  ${e.relPath}`);
    lines.push(`    ${statusLine('styles.css', e.cssLine, e.cssVia)}`);
    lines.push(`    ${statusLine('icon.js', e.iconLine, e.iconVia)}`);
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
    let result;
    try {
      result = isHtml ? scanHtmlEntry(abs) : scanJsEntry(abs, root);
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
        stylesCssLine: e.cssLine ?? null,
        stylesCssVia: e.cssVia ?? null,
        iconJsLine: e.iconLine ?? null,
        iconJsVia: e.iconVia ?? null,
      })),
      pass: foundEntries.some(e => (e.cssLine || e.cssVia) && (e.iconLine || e.iconVia)),
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

  const passingEntry = foundEntries.find(e => (e.cssLine || e.cssVia) && (e.iconLine || e.iconVia));
  if (passingEntry) {
    if (!args.json) {
      const cssDesc = passingEntry.cssLine ? `L${passingEntry.cssLine}` : `via ${passingEntry.cssVia}`;
      const iconDesc = passingEntry.iconLine ? `L${passingEntry.iconLine}` : `via ${passingEntry.iconVia}`;
      console.log(`[verify-root-imports] ✓  ${passingEntry.relPath} satisfies both required imports (styles.css ${cssDesc}, icon.js ${iconDesc}).`);
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
    const missingCss = foundEntries.every(e => !e.cssLine && !e.cssVia);
    const missingIcon = foundEntries.every(e => !e.iconLine && !e.iconVia);
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
      console.log(``);
      console.log(`                      Alternative patterns this script also recognizes`);
      console.log(`                      (one level of indirection from the entry file):`);
      if (missingCss) {
        console.log(`                        • styles.css via CSS @import — e.g. a \`./globals.css\` with`);
        console.log(`                          \`@import "@boomi/exosphere/dist/styles.css";\` (or a relative`);
        console.log(`                          node_modules path).`);
      }
      if (missingIcon) {
        console.log(`                        • icon.js in a 'use client' Providers wrapper — Recipe B from`);
        console.log(`                          references/frameworks/next.md. Static or dynamic import both`);
        console.log(`                          work; the 'use client' directive is required so the module`);
        console.log(`                          doesn't execute server-side.`);
      }
      console.log(``);
      console.log(`                      If you're using a custom pattern this check can't reach,`);
      console.log(`                      grep for '@boomi/exosphere/dist/icon.js' anywhere under src/`);
      console.log(`                      to confirm the registry is actually loaded somewhere.`);
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
