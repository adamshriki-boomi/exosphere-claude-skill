#!/usr/bin/env node
// fetch-storybook-doc.mjs — pull a single Exosphere Storybook docs page
// on demand, convert to markdown, print to stdout.
//
// Requires playwright-core at runtime. If not available, prints a clear
// install hint rather than failing silently.
//
// Usage:
//   node fetch-storybook-doc.mjs <story-id>
//   node fetch-storybook-doc.mjs components-button--1-overview
//   node fetch-storybook-doc.mjs "?path=/docs/components-dialog--1-overview"
//   node fetch-storybook-doc.mjs --list   # print known story IDs
//
// Defaults to the Storybook snapshot matching this skill (see manifest.json).
// Override with --base-url https://exosphere.sandbox.boomi.com (or similar).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node fetch-storybook-doc.mjs <story-id> [--base-url URL]');
  console.error('       node fetch-storybook-doc.mjs --list');
  process.exit(2);
}

const skillRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

let baseUrl = 'https://exosphere.boomi.com';
let storyId = null;
let listOnly = false;
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--base-url') baseUrl = args[++i];
  else if (a === '--list') listOnly = true;
  else if (a.startsWith('?path=')) {
    const m = /\/docs\/([^&]+)/.exec(a);
    if (m) storyId = m[1];
  } else {
    storyId = a;
  }
}

async function fetchIndex() {
  const res = await fetch(`${baseUrl}/index.json`);
  if (!res.ok) throw new Error(`Storybook index.json: ${res.status}`);
  return res.json();
}

if (listOnly) {
  try {
    const idx = await fetchIndex();
    for (const [id, entry] of Object.entries(idx.entries || {})) {
      if (entry.type !== 'docs') continue;
      console.log(`${id}\t${entry.title}/${entry.name || ''}`);
    }
    process.exit(0);
  } catch (e) {
    console.error(`[fetch-storybook] failed to fetch index.json: ${e.message}`);
    process.exit(1);
  }
}

if (!storyId) {
  console.error('[fetch-storybook] no story id resolved');
  process.exit(2);
}

// Verify story exists
try {
  const idx = await fetchIndex();
  if (!idx.entries[storyId]) {
    const candidates = Object.keys(idx.entries).filter(k => k.includes(storyId));
    console.error(`[fetch-storybook] story id "${storyId}" not found in Storybook index.`);
    if (candidates.length > 0) {
      console.error('                  Did you mean:');
      for (const c of candidates.slice(0, 10)) console.error(`                    ${c}`);
    }
    process.exit(2);
  }
} catch (e) {
  console.error(`[fetch-storybook] could not verify story id: ${e.message}`);
  // Proceed anyway — maybe the index is unreachable but the iframe is up.
}

// Playwright is only needed at this point.
let chromium;
try {
  ({ chromium } = await import('playwright-core'));
} catch {
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    console.error(`[fetch-storybook] Playwright is not installed.`);
    console.error(`                  Install it one-time:`);
    console.error(`                    npm i -D playwright-core`);
    console.error(`                    npx playwright install chromium`);
    console.error(`                  Or open the page manually:`);
    console.error(`                    ${baseUrl}/?path=/docs/${storyId}`);
    process.exit(3);
  }
}

const url = `${baseUrl}/iframe.html?id=${encodeURIComponent(storyId)}&viewMode=docs`;

// We need a headless browser with a system-installed chromium binary.
// If none is configured, error clearly.
const browser = await chromium.launch({ headless: true }).catch((e) => {
  console.error(`[fetch-storybook] could not launch chromium: ${e.message}`);
  console.error(`                  Try: npx playwright install chromium`);
  process.exit(3);
});

try {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });

  // Storybook 8 docs render into .sbdocs-content or #storybook-docs.
  // Wait for either to populate.
  await page.waitForFunction(() => {
    const el = document.querySelector('.sbdocs-content, #storybook-docs, #docs-root');
    return el && el.innerText && el.innerText.length > 100;
  }, { timeout: 30_000 }).catch(() => { /* fall through and try to get what we have */ });

  const html = await page.evaluate(() => {
    const el = document.querySelector('.sbdocs-content')
            || document.querySelector('#storybook-docs')
            || document.querySelector('#docs-root')
            || document.body;
    return el?.outerHTML || '';
  });

  // Minimal HTML → markdown conversion (good enough for on-demand reads).
  // For high-fidelity, use build-tools/scrape-storybook.mjs which uses turndown.
  const md = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<\/?(h1|h2|h3|h4|h5|h6|p|li|div|section|article|header|footer|aside|nav|main|tr)[^>]*>/gi, (m, tag) => {
      const t = tag.toLowerCase();
      if (/^h[1-6]$/.test(t)) return '\n\n' + '#'.repeat(+t[1]) + ' ';
      if (t === 'li') return '\n- ';
      return '\n';
    })
    .replace(/<\/?(strong|b)[^>]*>/gi, '**')
    .replace(/<\/?(em|i)[^>]*>/gi, '*')
    .replace(/<code[^>]*>([^<]+)<\/code>/gi, '`$1`')
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, body) => '\n```\n' + body.replace(/<[^>]+>/g, '') + '\n```\n')
    .replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([^<]*)<\/a>/gi, '[$2]($1)')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  console.log(`<!-- Source: ${url} -->\n`);
  console.log(md);
} finally {
  await browser.close();
}
