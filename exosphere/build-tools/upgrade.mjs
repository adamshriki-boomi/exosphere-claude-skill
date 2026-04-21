#!/usr/bin/env node
// upgrade.mjs — one-shot orchestrator to bump the skill to a newer Exosphere
// release. Runs the full pipeline:
//   1. Query npm for the latest @boomi/exosphere
//   2. Fetch the new css-theme-variables.json + dist/react/index.d.ts
//   3. Re-scrape the Storybook
//   4. Rebuild the references/ tree
//   5. Generate a changelog diff block
//   6. Bump manifest.json + SKILL.md frontmatter + CHANGELOG.md
//
// Usage:
//   node upgrade.mjs                       # upgrade to npm latest, minor skill bump
//   node upgrade.mjs --skill-bump patch    # override skill bump type
//   node upgrade.mjs --force               # re-run even if versions match
//   node upgrade.mjs --to 7.9.0            # pin to a specific Exosphere version
//   node upgrade.mjs --dry-run             # plan only, write nothing

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import semver from 'semver';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILL_ROOT = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = { skillBump: 'minor', force: false, to: null, dryRun: false, baseUrl: 'https://exosphere.boomi.com' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--skill-bump') args.skillBump = argv[++i];
    else if (a === '--force') args.force = true;
    else if (a === '--to') args.to = argv[++i];
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--base-url') args.baseUrl = argv[++i];
  }
  if (!['patch', 'minor', 'major'].includes(args.skillBump)) {
    console.error(`invalid --skill-bump: ${args.skillBump} (expected patch|minor|major)`);
    process.exit(2);
  }
  return args;
}

function run(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: __dirname, ...opts });
}

function readJson(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }
function writeJson(p, v) { fs.writeFileSync(p, JSON.stringify(v, null, 2) + '\n'); }

async function main() {
  const args = parseArgs(process.argv.slice(2));
  console.log(`[upgrade] skill root: ${SKILL_ROOT}`);

  const manifestPath = path.join(SKILL_ROOT, 'manifest.json');
  const manifest = readJson(manifestPath);
  const currentExo = manifest.exosphere_version;

  // Resolve target Exosphere version.
  let targetExo;
  if (args.to) {
    targetExo = args.to;
  } else {
    console.log(`[upgrade] querying npm for latest @boomi/exosphere ...`);
    targetExo = execSync('npm view @boomi/exosphere version', { encoding: 'utf8' }).trim();
  }
  console.log(`[upgrade] current: ${currentExo}  target: ${targetExo}`);

  if (semver.eq(currentExo, targetExo) && !args.force) {
    console.log(`[upgrade] already at ${targetExo}. Use --force to re-run against same version.`);
    return;
  }

  if (args.dryRun) {
    console.log(`\n[upgrade] DRY RUN plan:`);
    console.log(`  1. Download dist/css-theme-variables.json @ ${targetExo}`);
    console.log(`  2. Download dist/react/index.d.ts @ ${targetExo} (then regenerate component-exports.json)`);
    console.log(`  3. Scrape Storybook @ ${args.baseUrl}`);
    console.log(`  4. Rebuild references/`);
    console.log(`  5. diff-changelog.mjs --from ${currentExo} --to ${targetExo} --append`);
    console.log(`  6. Bump manifest.json + SKILL.md + CHANGELOG.md (skill ${args.skillBump})`);
    return;
  }

  // 1. Download new CSS tokens
  console.log(`\n[upgrade] step 1 — fetch css-theme-variables.json`);
  run(`curl -fsSL "https://unpkg.com/@boomi/exosphere@${targetExo}/dist/css-theme-variables.json" -o "${path.join(SKILL_ROOT, 'assets', 'css-theme-variables.json')}"`);

  // 2. Download d.ts and regenerate component-exports.json (best-effort parse)
  console.log(`\n[upgrade] step 2 — fetch dist/react/index.d.ts`);
  run(`curl -fsSL "https://unpkg.com/@boomi/exosphere@${targetExo}/dist/react/index.d.ts" -o "${path.join(SKILL_ROOT, 'assets', 'react-index.d.ts')}"`);
  // NOTE: component-exports.json regeneration from d.ts is best-effort — we
  // update the _meta.exosphere_version so downstream consumers see the bump.
  const expPath = path.join(SKILL_ROOT, 'assets', 'component-exports.json');
  const exp = readJson(expPath);
  exp._meta.exosphere_version = targetExo;
  exp._meta.generated_at = new Date().toISOString().slice(0, 10);
  exp._meta.note = (exp._meta.note || '') + ' (metadata bumped by upgrade.mjs — if components were added/removed in this release, re-run a manual reconciliation against dist/react/index.d.ts)';
  writeJson(expPath, exp);

  // 3. Scrape Storybook
  console.log(`\n[upgrade] step 3 — scrape Storybook`);
  run(`rm -rf "${path.join(__dirname, 'scraped')}"`);
  run(`node "${path.join(__dirname, 'scrape-storybook.mjs')}" --base-url "${args.baseUrl}" --concurrency 6`);

  // 4. Rebuild references
  console.log(`\n[upgrade] step 4 — rebuild references`);
  run(`node "${path.join(__dirname, 'build-references.mjs')}"`);

  // 5. Append changelog diff
  console.log(`\n[upgrade] step 5 — diff changelog ${currentExo} → ${targetExo}`);
  try {
    run(`node "${path.join(__dirname, 'diff-changelog.mjs')}" --from ${currentExo} --to ${targetExo} --append --base-url "${args.baseUrl}"`);
  } catch (e) {
    console.warn(`[upgrade] changelog diff failed (${e.message}); continuing with empty diff block`);
  }

  // 6. Bump versions
  console.log(`\n[upgrade] step 6 — bump skill ${manifest.skill_version} (${args.skillBump}) + Exosphere ${currentExo} → ${targetExo}`);
  const baseSkill = manifest.skill_version.replace(/-[a-z.0-9]+$/, ''); // drop prerelease
  const newSkill = semver.inc(baseSkill, args.skillBump) || baseSkill;
  manifest.skill_version = newSkill;
  manifest.exosphere_version = targetExo;
  manifest.built_at = new Date().toISOString();
  writeJson(manifestPath, manifest);

  // SKILL.md frontmatter update
  const skillMdPath = path.join(SKILL_ROOT, 'SKILL.md');
  let skillMd = fs.readFileSync(skillMdPath, 'utf8');
  skillMd = skillMd
    .replace(/^version:.*$/m, `version: ${newSkill}`)
    .replace(/^exosphere_version:.*$/m, `exosphere_version: ${targetExo}`)
    .replace(/^built_at:.*$/m, `built_at: ${new Date().toISOString().slice(0, 10)}`);
  fs.writeFileSync(skillMdPath, skillMd);

  // Prepend a CHANGELOG entry shell (diff-changelog already appended into [Unreleased]).
  const clPath = path.join(SKILL_ROOT, 'CHANGELOG.md');
  const today = new Date().toISOString().slice(0, 10);
  const cl = fs.readFileSync(clPath, 'utf8');
  const newEntry = `## [${newSkill}] — ${today}\n\n### Exosphere snapshot\n\n- Built from \`@boomi/exosphere@${targetExo}\`.\n\n### Added / Changed\n\n_Paste the diff-changelog output below here and annotate what changed in the skill itself._\n\n---\n\n`;
  // Insert right under the "_Nothing yet._" placeholder (or at the top of history).
  const updated = cl.includes('_Nothing yet._')
    ? cl.replace(/_Nothing yet._\s*\n/, `${newEntry}`)
    : cl.replace(/(## \[Unreleased\][\s\S]*?)(?=## \[)/, (m) => `${m}\n${newEntry}`);
  fs.writeFileSync(clPath, updated);

  console.log(`\n[upgrade] ✓  upgraded to Exosphere ${targetExo}, skill ${newSkill}`);
  console.log(`           review CHANGELOG.md, run evals, then re-package with package_skill.py`);
}

main().catch(e => { console.error(e); process.exit(99); });
