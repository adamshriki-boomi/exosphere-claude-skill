#!/usr/bin/env node
// build-references.mjs — take the scraped/*.md output and produce the
// exosphere/references/**/*.md tree.
//
// One file per scraped entry (Storybook stems are already single-page in
// current @boomi/exosphere@7.8.3, so no merging needed). Phase-A hand-
// authored files are protected — we don't overwrite them.
//
// Usage:
//   node build-references.mjs
//   node build-references.mjs --scraped ./scraped --out ../references
//   node build-references.mjs --dry-run   # just print what it would do

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const args = {
    scraped: path.join(__dirname, 'scraped'),
    out: path.resolve(__dirname, '..', 'references'),
    dryRun: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--scraped') args.scraped = argv[++i];
    else if (a === '--out') args.out = argv[++i];
    else if (a === '--dry-run') args.dryRun = true;
  }
  return args;
}

function parseFrontmatter(text) {
  if (!text.startsWith('---\n')) return { meta: {}, body: text };
  const end = text.indexOf('\n---\n', 4);
  if (end === -1) return { meta: {}, body: text };
  const raw = text.slice(4, end);
  const body = text.slice(end + 5);
  const meta = {};
  for (const line of raw.split('\n')) {
    const m = /^(\w+):\s*(.*)$/.exec(line);
    if (!m) continue;
    let val = m[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      try { val = JSON.parse(val); } catch {}
    }
    meta[m[1]] = val;
  }
  return { meta, body };
}

function walkScraped(root) {
  const files = [];
  for (const category of fs.readdirSync(root)) {
    const catDir = path.join(root, category);
    if (!fs.statSync(catDir).isDirectory()) continue;
    for (const f of fs.readdirSync(catDir)) {
      if (!f.endsWith('.md')) continue;
      files.push({ category, file: f, fullPath: path.join(catDir, f) });
    }
  }
  return files;
}

// id → { targetDir, name }
function targetFor(id, scrapedCategory) {
  // Strip the "--<story-name>" suffix. Current Storybook uses "--overview" or
  // "--docs" for docs pages.
  const stem = id.replace(/--[a-z0-9-]+$/, '');
  let m;
  if ((m = /^components-(.+?)(-design-docs)?$/.exec(stem))) {
    const name = m[1];
    const suffix = m[2] ? '-design-docs' : '';
    return { targetDir: 'components', name: name + suffix };
  }
  if ((m = /^system-foundation-(.+)$/.exec(stem)))      return { targetDir: 'foundation', name: m[1] };
  if ((m = /^patterns-(.+)$/.exec(stem)))               return { targetDir: 'patterns', name: m[1] };
  if ((m = /^content-(.+)$/.exec(stem)))                return { targetDir: 'content-guidelines', name: m[1] };
  if ((m = /^development-standards-(.+)$/.exec(stem)))  return { targetDir: 'development-standards', name: m[1] };
  if ((m = /^getting-started-(.+)$/.exec(stem)))        return { targetDir: 'getting-started', name: m[1] };
  if ((m = /^frameworks-(.+)$/.exec(stem)))             return { targetDir: 'framework-docs', name: m[1] };
  if ((m = /^utility-classes-?(.*)$/.exec(stem)))       return { targetDir: 'utility-classes', name: m[1] || 'overview' };
  if ((m = /^miscellaneous-(.+)$/.exec(stem)))          return { targetDir: 'miscellaneous', name: m[1] };
  return { targetDir: scrapedCategory, name: stem };
}

// Phase-A hand-authored files we must not overwrite.
const PROTECTED_PATHS = new Set([
  'installation.md',
  'components/_index.md',
  'frameworks/react.md',
  'frameworks/next.md',
  'frameworks/angular.md',
  'frameworks/vue.md',
  'foundation/design-tokens.md',
  'foundation/iconography.md',
  'foundation/_index.md',
  'patterns/_index.md',
  'content-guidelines/_index.md',
  'development-standards/_index.md',
  'kits/_index.md',
  'decision-guides/picking-components.md',
  'decision-guides/component-vs-custom.md',
]);

function isProtected(relPath) {
  return PROTECTED_PATHS.has(relPath.replaceAll(path.sep, '/'));
}

function titleCase(s) {
  return s.split(/[-_]/).map(w => w ? w[0].toUpperCase() + w.slice(1) : w).join(' ');
}

function buildContent(page) {
  const { meta, body } = page;
  const header = [
    '---',
    `id: ${JSON.stringify(meta.id)}`,
    `title: ${JSON.stringify(meta.title || '')}`,
    `name: ${JSON.stringify(meta.name || '')}`,
    `source_url: ${JSON.stringify(meta.source_url || '')}`,
    `scraped_at: ${JSON.stringify(meta.scraped_at || '')}`,
    `built_at: ${JSON.stringify(new Date().toISOString())}`,
    '---',
    '',
  ].join('\n');
  return header + body.trim() + '\n';
}

function rebuildComponentIndex(writtenComponentFiles) {
  const exportsPath = path.resolve(__dirname, '..', 'assets', 'component-exports.json');
  const exports_ = JSON.parse(fs.readFileSync(exportsPath, 'utf8'));

  const shipped = exports_.components;
  const byCategory = {};
  for (const c of shipped) {
    (byCategory[c.category] ||= []).push(c);
  }
  const categoryOrder = [
    'Actions', 'Form Inputs', 'Feedback', 'Navigation', 'Layout',
    'Overlays', 'Data', 'Media', 'Charts', 'Editors', 'Utility',
  ];

  const lines = [];
  lines.push('# Exosphere component catalog');
  lines.push('');
  lines.push(`Built from \`@boomi/exosphere@${exports_._meta.exosphere_version}\`. Every shipped component, paired with the scraped docs page at \`components/<name>.md\` when available.`);
  lines.push('');

  for (const cat of categoryOrder) {
    const list = byCategory[cat] || [];
    if (list.length === 0) continue;
    lines.push(`## ${cat}`);
    lines.push('');
    for (const c of list) {
      const docName = c.web_component_tag.replace(/^ex-/, '');
      const docLink = `${docName}.md`;
      const exists = writtenComponentFiles.has(docName + '.md') || writtenComponentFiles.has(`${docName}-design-docs.md`);
      const note = c.note ? ` — ${c.note}` : '';
      const enums = c.prop_enums?.length ? ` · props: ${c.prop_enums.join(', ')}` : '';
      const linkPart = exists ? `[docs](${docLink})` : `no doc bundled — run \`node scripts/fetch-storybook-doc.mjs components-${docName}--overview\``;
      lines.push(`- **\`${c.react_name}\`** · \`<${c.web_component_tag}>\` · ${linkPart}${enums}${note}`);
    }
    lines.push('');
  }

  lines.push('## Alphabetical');
  lines.push('');
  const alpha = shipped.slice().sort((a, b) => a.react_name.localeCompare(b.react_name));
  lines.push(alpha.map(c => `\`${c.react_name}\``).join(', ') + '.');
  lines.push('');

  lines.push('## Also exported');
  for (const x of exports_.non_component_exports || []) {
    lines.push(`- \`${x.name}\` from \`${x.module_path}\` — ${x.note || x.kind}.`);
  }
  lines.push('');

  lines.push('## Using the catalog');
  lines.push('');
  lines.push('1. User describes a UX need.');
  lines.push('2. Find the matching entry in the category above (or look at [`decision-guides/picking-components.md`](../decision-guides/picking-components.md)).');
  lines.push('3. Open the component\'s docs file for props / usage.');
  lines.push('4. If nothing fits, walk [`decision-guides/component-vs-custom.md`](../decision-guides/component-vs-custom.md).');

  return lines.join('\n') + '\n';
}

function rebuildDirIndex(dir, filesInDir, { title, intro }) {
  const lines = [`# ${title}`, ''];
  if (intro) { lines.push(intro); lines.push(''); }
  const sorted = filesInDir.slice().sort();
  for (const f of sorted) {
    const name = path.basename(f, '.md');
    if (name === '_index') continue;
    lines.push(`- [${titleCase(name)}](${f})`);
  }
  lines.push('');
  return lines.join('\n');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(args.scraped)) {
    console.error(`[build-refs] scraped dir not found: ${args.scraped}`);
    console.error(`             Run scrape-storybook.mjs first.`);
    process.exit(2);
  }

  const files = walkScraped(args.scraped);
  if (files.length === 0) {
    console.error(`[build-refs] no .md files in ${args.scraped}`);
    process.exit(2);
  }
  console.log(`[build-refs] ${files.length} scraped files`);

  const writtenByDir = new Map();
  let written = 0, skipped = 0;

  for (const f of files) {
    const text = fs.readFileSync(f.fullPath, 'utf8');
    const { meta, body } = parseFrontmatter(text);
    const id = meta.id;
    if (!id) { console.warn(`[build-refs] skip ${f.fullPath} — no id`); continue; }

    const target = targetFor(id, f.category);
    const outDir = path.join(args.out, target.targetDir);
    const outFile = path.join(outDir, `${target.name}.md`);
    const relPath = path.relative(args.out, outFile);

    if (isProtected(relPath)) {
      skipped++;
      if (args.dryRun) console.log(`[dry] SKIP (protected) ${relPath}`);
      continue;
    }

    const content = buildContent({ meta, body });
    if (args.dryRun) {
      console.log(`[dry] ${relPath}`);
    } else {
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, content, 'utf8');
      written++;
    }
    const key = target.targetDir;
    if (!writtenByDir.has(key)) writtenByDir.set(key, new Set());
    writtenByDir.get(key).add(`${target.name}.md`);
  }

  // Rebuild components/_index.md fresh (protected stub is overridden here —
  // its only content was "Phase B pending", and we just landed Phase B).
  const componentsOut = path.join(args.out, 'components');
  const componentsIdxContent = rebuildComponentIndex(writtenByDir.get('components') || new Set());
  const componentsIdxPath = path.join(componentsOut, '_index.md');
  if (args.dryRun) {
    console.log(`[dry] OVERRIDE ${path.relative(args.out, componentsIdxPath)} (regenerated component catalog)`);
  } else {
    fs.mkdirSync(componentsOut, { recursive: true });
    fs.writeFileSync(componentsIdxPath, componentsIdxContent);
    written++;
  }

  // Rebuild _index.md for other reference dirs with actual file listings.
  const dirIntros = {
    foundation: { title: 'System foundations', intro: 'Color, typography, iconography, accessibility, tokens. See also: [`design-tokens.md`](design-tokens.md) which is the hand-maintained complete token reference.' },
    patterns: { title: 'UX patterns', intro: 'Cross-component UX patterns — how components compose for common UI shapes.' },
    'content-guidelines': { title: 'Content guidelines', intro: 'Voice, tone, inclusive language, and microcopy patterns.' },
    'development-standards': { title: 'Development standards', intro: "Exosphere's CSS conventions — BEM, ITCSS, measurement. Applies when contributing to Exosphere itself or inside a custom extension." },
    'getting-started': { title: 'Getting started', intro: 'Introductory Exosphere docs as scraped from the Storybook getting-started section. Complement to the skill\'s own [`../installation.md`](../installation.md).' },
    miscellaneous: { title: 'Miscellaneous', intro: 'Release notes, migration guides, and supplementary docs from the Exosphere Storybook.' },
    'utility-classes': { title: 'Utility classes', intro: 'Exosphere\'s utility CSS classes.' },
    'framework-docs': { title: 'Framework overviews (from Storybook)', intro: 'Scraped framework pages from the Exosphere Storybook. The skill\'s own curated framework guides are at [`../frameworks/`](../frameworks/).' },
  };
  for (const [dir, filesSet] of writtenByDir.entries()) {
    if (dir === 'components') continue;
    const meta = dirIntros[dir] || { title: titleCase(dir), intro: '' };
    const idxPath = path.join(args.out, dir, '_index.md');
    const relIdx = path.relative(args.out, idxPath);
    if (isProtected(relIdx)) {
      // Leave Phase A stubs in place if content exists, but fall back to
      // regenerated index if no stub exists.
      if (fs.existsSync(idxPath)) continue;
    }
    const content = rebuildDirIndex(dir, Array.from(filesSet), meta);
    if (args.dryRun) {
      console.log(`[dry] ${relIdx}`);
    } else {
      fs.writeFileSync(idxPath, content);
      written++;
    }
  }

  console.log(`[build-refs] wrote ${written} reference file(s), skipped ${skipped} protected.`);
}

main().catch(e => {
  console.error(e);
  process.exit(99);
});
