#!/usr/bin/env node
// diff-changelog.mjs — pull Exosphere's own changelog (published as the
// Miscellaneous/CHANGELOG Storybook MDX page) and synthesize a human-readable
// diff block for our skill CHANGELOG.md.
//
// Usage:
//   node diff-changelog.mjs --from 7.8.3 --to 7.9.0
//     # print the changelog subset between versions
//   node diff-changelog.mjs --from 7.8.3 --to 7.9.0 --append
//     # prepend a section to ../CHANGELOG.md under [Unreleased]
//
// Requires the same Playwright setup as scrape-storybook.mjs.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import semver from 'semver';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_BASE_URL = 'https://exosphere.boomi.com';
const CHANGELOG_STORY_ID = 'miscellaneous-changelog--overview';

function parseArgs(argv) {
  const args = { from: null, to: null, baseUrl: DEFAULT_BASE_URL, append: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--from') args.from = argv[++i];
    else if (a === '--to') args.to = argv[++i];
    else if (a === '--base-url') args.baseUrl = argv[++i];
    else if (a === '--append') args.append = true;
  }
  if (!args.from || !args.to) {
    console.error('Usage: node diff-changelog.mjs --from <ver> --to <ver> [--append]');
    process.exit(2);
  }
  return args;
}

async function fetchChangelogMarkdown(baseUrl) {
  const browser = await chromium.launch({ headless: true });
  try {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const url = `${baseUrl}/iframe.html?id=${CHANGELOG_STORY_ID}&viewMode=docs`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    try {
      await page.waitForFunction(() => {
        const el = document.querySelector('.sbdocs-content, #storybook-docs');
        return el && el.innerText.length > 500;
      }, { timeout: 30_000 });
    } catch { /* fall through */ }
    await page.waitForTimeout(500);
    const html = await page.evaluate(() => {
      const el = document.querySelector('.sbdocs-content, #storybook-docs');
      if (!el) return '';
      const clone = el.cloneNode(true);
      clone.querySelectorAll('script, style, button').forEach(n => n.remove());
      return clone.outerHTML;
    });
    const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
    td.use(gfm);
    return td.turndown(html);
  } finally {
    await browser.close();
  }
}

// Pull the sections for each version between `from` (exclusive) and `to` (inclusive).
// Expects a keep-a-changelog-ish shape with `## [7.9.0] - 2026-...` headings.
function sliceChangelog(md, from, to) {
  const lines = md.split('\n');
  const sections = []; // { version, date, lines[] }
  let current = null;
  const VERSION_RE = /^(##+)\s*\[?([0-9]+\.[0-9]+\.[0-9]+[^\]]*?)\]?(?:\s*[-–—]\s*(.+))?$/;
  for (const line of lines) {
    const m = VERSION_RE.exec(line);
    if (m) {
      if (current) sections.push(current);
      current = { heading: line, version: m[2].trim(), date: (m[3] || '').trim(), lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) sections.push(current);

  // Filter to versions strictly > from and <= to
  return sections.filter(s => {
    try {
      return semver.gt(s.version, from) && semver.lte(s.version, to);
    } catch {
      return false;
    }
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const md = await fetchChangelogMarkdown(args.baseUrl);
  const sections = sliceChangelog(md, args.from, args.to);

  const out = [];
  out.push(`### Exosphere changes ${args.from} → ${args.to}`);
  out.push('');
  if (sections.length === 0) {
    out.push(`_No changelog entries found between \`${args.from}\` (exclusive) and \`${args.to}\` (inclusive)._`);
    out.push(`_Check the Storybook changelog manually: ${args.baseUrl}/?path=/docs/${CHANGELOG_STORY_ID}_`);
  } else {
    for (const s of sections) {
      out.push(`#### ${s.version}${s.date ? ` · ${s.date}` : ''}`);
      out.push('');
      // Normalize heading levels inside the section to h5 to avoid clashes.
      for (const l of s.lines) {
        if (/^#{1,3}\s/.test(l)) out.push('##### ' + l.replace(/^#+\s*/, ''));
        else out.push(l);
      }
      out.push('');
    }
  }
  const block = out.join('\n').trim() + '\n';

  if (args.append) {
    const clPath = path.resolve(__dirname, '..', 'CHANGELOG.md');
    const cl = fs.readFileSync(clPath, 'utf8');
    const inject = `\n${block}\n`;
    // Insert right under [Unreleased] header.
    const updated = cl.replace(/## \[Unreleased\]\s*\n\s*_[^\n]*_\s*\n/, match => `## [Unreleased]\n${inject}`);
    if (updated === cl) {
      // Fallback: prepend just above the next version header.
      const lines = cl.split('\n');
      const i = lines.findIndex(l => /^## \[[0-9]/.test(l));
      if (i === -1) fs.writeFileSync(clPath, cl + '\n' + block);
      else fs.writeFileSync(clPath, [...lines.slice(0, i), block, ...lines.slice(i)].join('\n'));
    } else {
      fs.writeFileSync(clPath, updated);
    }
    console.error(`[diff-changelog] appended to ${clPath}`);
  } else {
    console.log(block);
  }
}

main().catch(e => { console.error(e); process.exit(99); });
