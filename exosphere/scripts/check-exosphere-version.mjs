#!/usr/bin/env node
// check-exosphere-version.mjs — compare the project's installed @boomi/exosphere
// against the version this skill was built from, and print a drift warning
// if they diverge meaningfully.
//
// Exits 0 always (advisory; never blocks work).
//
// Usage:
//   node check-exosphere-version.mjs [project_root]

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = process.argv[2] || process.cwd();
const skillRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

const manifest = readJson(path.join(skillRoot, 'manifest.json'));
if (!manifest) {
  console.error('[exosphere] could not read skill manifest.json');
  process.exit(0);
}
const snapshotVersion = manifest.exosphere_version;

const pkg = readJson(path.join(projectRoot, 'package.json'));
if (!pkg) {
  console.log(`[exosphere] no package.json at ${projectRoot}. Skill snapshot: ${snapshotVersion}. Can't compare.`);
  process.exit(0);
}

const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
const declared = deps['@boomi/exosphere'];
if (!declared) {
  console.log(`[exosphere] @boomi/exosphere is not in this project's package.json.`);
  console.log(`             Skill snapshot version: ${snapshotVersion}. Install via scripts/install-exosphere.sh.`);
  process.exit(0);
}

// Try to find the installed version via the lockfile or node_modules
let installed = null;
const nmPkg = readJson(path.join(projectRoot, 'node_modules', '@boomi', 'exosphere', 'package.json'));
if (nmPkg) installed = nmPkg.version;
// Fallback: parse the declared range (strip ^, ~, etc.)
if (!installed) installed = declared.replace(/^[^0-9]*/, '') || declared;

// Compare major/minor only — patch diffs aren't drift-worthy
function parse(v) {
  const m = /^(\d+)\.(\d+)\.(\d+)/.exec(v);
  if (!m) return null;
  return { major: +m[1], minor: +m[2], patch: +m[3] };
}

const a = parse(snapshotVersion);
const b = parse(installed);

if (!a || !b) {
  console.log(`[exosphere] snapshot ${snapshotVersion} vs project ${installed}. Cannot parse — using snapshot as-is.`);
  process.exit(0);
}

const projectNewer = (b.major > a.major) || (b.major === a.major && b.minor > a.minor);
const projectOlder = (b.major < a.major) || (b.major === a.major && b.minor < a.minor);

if (projectNewer) {
  console.log(`[exosphere] ⚠  Drift: this project uses Exosphere ${installed}, snapshot is ${snapshotVersion}.`);
  console.log(`             New components/props since ${snapshotVersion} may be missing from local refs.`);
  console.log(`             Use scripts/fetch-storybook-doc.mjs <story-id> for live docs when needed.`);
} else if (projectOlder) {
  console.log(`[exosphere] ℹ  This project uses Exosphere ${installed} (older than snapshot ${snapshotVersion}).`);
  console.log(`             Components or props introduced after ${installed} won't exist in this project.`);
  console.log(`             Check assets/component-exports.json 'since_version' field before using anything new.`);
} else {
  console.log(`[exosphere] ✓  Project matches skill snapshot: ${installed}`);
}

process.exit(0);
