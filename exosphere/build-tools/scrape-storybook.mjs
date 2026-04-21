#!/usr/bin/env node
// scrape-storybook.mjs — render every docs page in Exosphere's Storybook and
// save each as markdown in ./scraped/<category>/<id>.md.
//
// Usage:
//   node scrape-storybook.mjs                 # full run against 7.8.3 snapshot host
//   node scrape-storybook.mjs --pilot         # curated ~8 entries for spot-check
//   node scrape-storybook.mjs --limit 50      # first N docs entries (debug)
//   node scrape-storybook.mjs --base-url https://exosphere.boomi.com
//   node scrape-storybook.mjs --concurrency 6 # default 4
//   node scrape-storybook.mjs --filter components-button
//                                             # only scrape ids matching this substring
//
// Output layout (example):
//   scraped/getting-started/getting-started-about--overview.md
//   scraped/components/components-button--1-overview.md
//   ...
//
// Each file includes YAML frontmatter with:
//   id, title, name, category, source_url, scraped_at.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import pLimit from 'p-limit';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DEFAULT_BASE_URL = 'https://exosphere.boomi.com';
const PILOT_IDS = [
  'getting-started-about--overview',
  'getting-started-installation--overview',
  'frameworks-react--overview',
  'system-foundation-color-key-decisions--overview',
  'system-foundation-design-tokens--overview',
  'patterns-links-vs-buttons-overview--overview',
  'components-button--overview',
  'components-dialog--overview',
];

function parseArgs(argv) {
  const args = {
    baseUrl: DEFAULT_BASE_URL,
    pilot: false,
    limit: null,
    filter: null,
    concurrency: 4,
    outDir: path.join(__dirname, 'scraped'),
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--base-url')       args.baseUrl    = argv[++i];
    else if (a === '--pilot')     args.pilot      = true;
    else if (a === '--limit')     args.limit      = parseInt(argv[++i], 10);
    else if (a === '--filter')    args.filter     = argv[++i];
    else if (a === '--concurrency') args.concurrency = parseInt(argv[++i], 10);
    else if (a === '--out')       args.outDir     = argv[++i];
  }
  return args;
}

function categoryOf(id) {
  // IDs are kebab-case like "components-button--1-overview" or "getting-started-about--overview".
  // First path component becomes the folder.
  const m = /^([a-z0-9-]+?)(?:-|--)/.exec(id);
  if (!m) return 'misc';
  const first = m[1];
  // Collapse common multi-word first segments.
  if (id.startsWith('getting-started')) return 'getting-started';
  if (id.startsWith('system-foundation')) return 'system-foundation';
  if (id.startsWith('development-standards')) return 'development-standards';
  if (id.startsWith('utility-classes')) return 'utility-classes';
  return first;
}

async function fetchIndex(baseUrl) {
  const url = `${baseUrl}/index.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
  return res.json();
}

function buildTurndown() {
  const t = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    hr: '---',
    emDelimiter: '*',
    strongDelimiter: '**',
  });
  t.use(gfm);

  // Keep Storybook's color swatches readable.
  t.addRule('swatch', {
    filter: (node) => node.classList?.contains?.('docblock-colorpalette-swatch'),
    replacement: (_, node) => {
      const color = node.getAttribute('title') || node.innerText?.trim() || '';
      return color ? `\`${color}\`` : '';
    },
  });

  // Storybook wraps code snippets in `pre > div[class*=language-]` etc.
  // GFM plugin handles `<pre><code>`; we add a fallback for `<pre>` without inner `<code>`.
  t.addRule('preFallback', {
    filter: (node) => node.nodeName === 'PRE' && !node.querySelector('code'),
    replacement: (content) => '\n```\n' + content + '\n```\n',
  });

  // Storybook `<a href="#">` intra-doc anchors are noise; strip the link, keep the text.
  t.addRule('hashLinks', {
    filter: (node) => node.nodeName === 'A' && (node.getAttribute('href') || '').startsWith('#'),
    replacement: (content) => content,
  });

  return t;
}

function toFrontmatter(obj) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    const val = typeof v === 'string' ? JSON.stringify(v) : String(v);
    lines.push(`${k}: ${val}`);
  }
  lines.push('---');
  return lines.join('\n') + '\n\n';
}

async function scrapeEntry(page, { id, title, name, importPath }, { baseUrl }) {
  const url = `${baseUrl}/iframe.html?id=${encodeURIComponent(id)}&viewMode=docs`;
  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  if (!response || !response.ok()) {
    throw new Error(`navigate ${url} → ${response?.status()}`);
  }

  // Wait until docs content is substantial (Storybook 8 renders async).
  // Fall back after 15s to whatever is there — some pages are intentionally
  // sparse (a component demo with no prose) and never exceed the threshold.
  try {
    await page.waitForFunction(() => {
      const el = document.querySelector('.sbdocs-content, #storybook-docs, #docs-root');
      return el && el.innerText && el.innerText.trim().length > 80;
    }, { timeout: 15_000 });
  } catch {
    // Sparse page — fall through and capture whatever is present.
    await page.waitForFunction(() => {
      const el = document.querySelector('.sbdocs-content, #storybook-docs, #docs-root');
      return el && el.innerText && el.innerText.trim().length > 0;
    }, { timeout: 10_000 }).catch(() => {});
  }

  // Give a small tick for async color swatches / images to settle.
  await page.waitForTimeout(400);

  const html = await page.evaluate(() => {
    const el = document.querySelector('.sbdocs-content')
            || document.querySelector('#storybook-docs')
            || document.querySelector('#docs-root');
    if (!el) return '';
    // Clone + strip Storybook chrome we don't want in markdown.
    const clone = el.cloneNode(true);
    // Remove story preview iframes, all buttons (copy/expand/tabs are noise),
    // and a11y-hidden decorative elements.
    clone.querySelectorAll('.sbdocs-preview-iframe, button, .sbdocs-expander').forEach(n => n.remove());
    clone.querySelectorAll('[aria-hidden="true"]').forEach(n => n.remove());
    clone.querySelectorAll('script, style, noscript').forEach(n => n.remove());
    // Remove internal story/doc navigation links that clutter the overview pages.
    clone.querySelectorAll('a[href^="/?path="]').forEach(a => a.remove());
    // Remove dangling "Copy" text nodes (Storybook renders a Copy button next
    // to code blocks; we removed the button above, but sometimes a sibling
    // span with the text remains).
    clone.querySelectorAll('span, div').forEach(n => {
      if (n.children.length === 0 && /^(Copy|Copied)$/.test((n.textContent || '').trim())) n.remove();
    });
    // Replace <select><option>...</option></select> with a readable "one of: ..." line
    // so the Props table shows accepted values instead of concatenated option text.
    clone.querySelectorAll('select').forEach(sel => {
      const opts = Array.from(sel.querySelectorAll('option'))
        .map(o => o.textContent.trim())
        .filter(v => v && v !== 'Choose option...' && !/^Choose /.test(v));
      const replacement = document.createElement('code');
      replacement.textContent = opts.length ? `one of: ${opts.join(' | ')}` : '';
      sel.replaceWith(replacement);
    });
    // Storybook's argType control rows often include a tabbed sub-table bar like
    //   <div>Core Colors Semantic Opacity Fonts Spacing...</div>
    // with zero spaces between tabs. Drop them — they're not useful in markdown.
    clone.querySelectorAll('[role="tablist"]').forEach(n => n.remove());
    // Normalize image URLs to absolute.
    clone.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('/')) img.setAttribute('src', new URL(src, window.location.origin).href);
    });
    return clone.outerHTML;
  });

  return { html, url };
}

// Post-process markdown to remove the lingering artifacts turndown can't avoid:
//   - Inside code fences, turndown escapes `=`, `:`, `.` with backslashes
//     because Storybook wraps code in HTML nodes that look like prose-level
//     characters. We need to strip the escapes inside fenced blocks.
//   - Occasional stray "Copy" words left by Storybook's copy button.
function postProcess(md) {
  // Strip backslashes before ASCII punctuation inside fenced code blocks.
  const out = [];
  let inFence = false;
  for (const rawLine of md.split('\n')) {
    if (/^```/.test(rawLine)) {
      inFence = !inFence;
      out.push(rawLine);
      continue;
    }
    if (inFence) {
      out.push(rawLine.replace(/\\([=:;,.<>\-"'`*_{}[\]()#!|])/g, '$1'));
    } else {
      out.push(rawLine);
    }
  }
  let text = out.join('\n');
  // Stray trailing "Copy" line right after a closing fence.
  text = text.replace(/```\n\n?Copy\n/g, '```\n\n');
  // Collapse extra blank lines.
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim() + '\n';
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  console.log(`[scrape] base: ${args.baseUrl}`);
  console.log(`[scrape] out:  ${args.outDir}`);

  const idx = await fetchIndex(args.baseUrl);
  let entries = Object.values(idx.entries || {})
    .filter(e => e.type === 'docs')
    .map(e => ({ id: e.id, title: e.title, name: e.name, importPath: e.importPath }));

  if (args.pilot) {
    entries = entries.filter(e => PILOT_IDS.includes(e.id));
    console.log(`[scrape] pilot mode — ${entries.length} entries`);
  } else if (args.filter) {
    entries = entries.filter(e => e.id.includes(args.filter));
    console.log(`[scrape] filter "${args.filter}" — ${entries.length} entries`);
  } else if (args.limit) {
    entries = entries.slice(0, args.limit);
    console.log(`[scrape] limit ${args.limit}`);
  } else {
    console.log(`[scrape] full run — ${entries.length} entries`);
  }

  if (entries.length === 0) {
    console.error('[scrape] no entries to scrape — exiting');
    process.exit(1);
  }

  fs.mkdirSync(args.outDir, { recursive: true });

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (e) {
    console.error(`[scrape] failed to launch chromium: ${e.message}`);
    console.error(`[scrape] run once:  npx playwright install chromium`);
    process.exit(2);
  }

  const turndown = buildTurndown();
  const limit = pLimit(args.concurrency);
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1,
  });

  let done = 0, failed = 0;
  const start = Date.now();

  await Promise.all(entries.map(entry => limit(async () => {
    const page = await ctx.newPage();
    try {
      const { html, url } = await scrapeEntry(page, entry, args);
      const md = postProcess(turndown.turndown(html));

      const category = categoryOf(entry.id);
      const dir = path.join(args.outDir, category);
      fs.mkdirSync(dir, { recursive: true });
      const file = path.join(dir, `${entry.id}.md`);

      const fm = toFrontmatter({
        id: entry.id,
        title: entry.title,
        name: entry.name,
        category,
        source_url: url,
        scraped_at: new Date().toISOString(),
      });
      fs.writeFileSync(file, fm + md, 'utf8');
      done++;
      if (done % 20 === 0 || args.pilot) {
        const elapsed = ((Date.now() - start) / 1000).toFixed(1);
        console.log(`[scrape] ${done}/${entries.length}  (${elapsed}s)  ${entry.id}`);
      }
    } catch (e) {
      failed++;
      console.error(`[scrape] FAIL ${entry.id}: ${e.message}`);
    } finally {
      await page.close();
    }
  })));

  await ctx.close();
  await browser.close();

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n[scrape] done: ${done} ok, ${failed} failed, ${elapsed}s total`);
  console.log(`[scrape] output: ${args.outDir}`);
  if (failed > 0) process.exit(1);
}

main().catch(e => {
  console.error(e);
  process.exit(99);
});
