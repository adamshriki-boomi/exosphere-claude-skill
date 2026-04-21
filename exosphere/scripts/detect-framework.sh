#!/usr/bin/env bash
# detect-framework.sh — identify which framework a project uses.
#
# Prints one of: react, next, angular, vue, nuxt, svelte, html, unknown
# Exits 0 unless it can't find a package.json at all (exits 2 in that case).
#
# Usage:
#   bash detect-framework.sh [project_root]
#
# If project_root is omitted, defaults to the current working directory.

set -euo pipefail

project_root="${1:-.}"
pkg="$project_root/package.json"

if [[ ! -f "$pkg" ]]; then
  # No package.json — treat as plain HTML if an index.html exists, else unknown.
  if [[ -f "$project_root/index.html" ]]; then
    echo "html"
    exit 0
  fi
  echo "unknown" >&2
  exit 2
fi

# Use node to parse (every supported framework has node available).
# `node -` reads script from stdin; the first positional arg sits at argv[2]
# (argv[1] is the literal "-").
node - "$pkg" <<'NODE'
const fs = require('fs');
const pkgPath = process.argv[2];
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const deps = Object.assign({}, pkg.dependencies || {}, pkg.devDependencies || {});

// Order matters — more specific before general (next before react, nuxt before vue).
const pick = (() => {
  if (deps['next']) return 'next';
  if (deps['nuxt'] || deps['nuxt3']) return 'nuxt';
  if (deps['@angular/core']) return 'angular';
  if (deps['svelte']) return 'svelte';
  if (deps['vue']) return 'vue';
  if (deps['react']) return 'react';
  return 'unknown';
})();
console.log(pick);
NODE
