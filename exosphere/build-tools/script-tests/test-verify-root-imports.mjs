#!/usr/bin/env node
// test-verify-root-imports.mjs — regression harness for verify-root-imports.mjs.
//
// Runs the script against every fixture under ./fixtures/ and asserts the exit
// code matches the directory-name convention:
//   pass-*   → exit 0
//   fail-*   → exit 1
//   warn-*   → exit 1 (distinct name for clarity, but still failure)
//
// The most important case is fail-false-positive-string-literal: the fixture
// has the import paths inside a template literal only (no real imports). A
// naive grep-based check would call that "present" — the script's job is to
// reject it. If this case ever regresses, the script's lexer-lite state mask
// has broken.
//
// Usage (from repo root):
//   node exosphere/build-tools/script-tests/test-verify-root-imports.mjs
// Usage (from this folder):
//   node ./test-verify-root-imports.mjs
// Exits 0 if every fixture matches expectation, 1 otherwise.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SCRIPT = path.resolve(HERE, '../../scripts/verify-root-imports.mjs');
const FIXTURES_ROOT = path.resolve(HERE, 'fixtures');

function expectedExitFor(name) {
  if (name.startsWith('pass-')) return 0;
  if (name.startsWith('fail-') || name.startsWith('warn-')) return 1;
  return null;
}

function run(fixtureDir) {
  try {
    execFileSync(process.execPath, [SCRIPT, fixtureDir], { stdio: 'pipe' });
    return 0;
  } catch (err) {
    if (typeof err.status === 'number') return err.status;
    throw err;
  }
}

function main() {
  if (!fs.existsSync(SCRIPT)) {
    console.error(`[test-verify-root-imports] script not found at ${SCRIPT}`);
    process.exit(2);
  }
  if (!fs.existsSync(FIXTURES_ROOT)) {
    console.error(`[test-verify-root-imports] fixtures dir not found at ${FIXTURES_ROOT}`);
    process.exit(2);
  }

  const fixtureNames = fs.readdirSync(FIXTURES_ROOT)
    .filter(n => fs.statSync(path.join(FIXTURES_ROOT, n)).isDirectory())
    .sort();

  let failures = 0;
  for (const name of fixtureNames) {
    const expected = expectedExitFor(name);
    if (expected === null) {
      console.log(`SKIP  ${name}  (name doesn't start with pass-/fail-/warn-)`);
      continue;
    }
    const actual = run(path.join(FIXTURES_ROOT, name));
    if (actual === expected) {
      console.log(`PASS  ${name}  (exit ${actual})`);
    } else {
      failures++;
      console.log(`FAIL  ${name}  (expected ${expected}, got ${actual})`);
    }
  }

  console.log('');
  if (failures > 0) {
    console.log(`[test-verify-root-imports] ✗  ${failures} fixture(s) failed`);
    process.exit(1);
  }
  console.log(`[test-verify-root-imports] ✓  all ${fixtureNames.length} fixtures passed`);
  process.exit(0);
}

main();
