#!/usr/bin/env bash
# install-exosphere.sh — install @boomi/exosphere into the target project
# and print framework-specific next steps.
#
# Does NOT edit source files automatically — that's intentional.
# Editing entry files programmatically is risky (formatter conflicts,
# partial rewrites, unexpected merges). Instead the script prints the
# exact snippet to add so Claude (or the user) can apply it via Edit.
#
# Usage:
#   bash install-exosphere.sh [project_root]

set -euo pipefail

project_root="${1:-$(pwd)}"
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$project_root"

# Detect framework
framework="$(bash "$script_dir/detect-framework.sh" "$project_root" 2>/dev/null || echo unknown)"
echo "==> Detected framework: $framework"

# Detect package manager by lockfile
if   [[ -f pnpm-lock.yaml ]]; then pm="pnpm"
elif [[ -f yarn.lock      ]]; then pm="yarn"
elif [[ -f bun.lock       ]] || [[ -f bun.lockb ]]; then pm="bun"
else                               pm="npm"
fi
echo "==> Package manager: $pm"

# Check if already installed
if [[ -f package.json ]] && node -e "const p=require('$project_root/package.json');process.exit(((p.dependencies&&p.dependencies['@boomi/exosphere'])||(p.devDependencies&&p.devDependencies['@boomi/exosphere']))?0:1)"; then
  echo "==> @boomi/exosphere is already in package.json. Skipping install."
else
  echo "==> Installing @boomi/exosphere ..."
  case "$pm" in
    pnpm) pnpm add @boomi/exosphere ;;
    yarn) yarn add @boomi/exosphere ;;
    bun)  bun add @boomi/exosphere ;;
    npm)  npm install @boomi/exosphere ;;
  esac
fi

echo ""
echo "==> Next steps for $framework:"
echo ""

case "$framework" in
  react|next)
    cat <<'EOF'
Add this line to your app root (src/main.tsx for Vite, src/index.tsx for CRA,
or app/layout.tsx for Next.js App Router):

  import "@boomi/exosphere/dist/styles.css";

For Next.js: every file that imports from '@boomi/exosphere' must start with:
  'use client';
(Lit-based web components cannot server-render.)

For Jest, add to package.json:

  "jest": {
    "transformIgnorePatterns": ["<rootDir>/node_modules/(?!@boomi/exosphere/)"],
    "moduleNameMapper": {
      "^@boomi/exosphere": "<rootDir>/node_modules/@boomi/exosphere/dist/react/index.mjs"
    }
  }

Full details: references/frameworks/react.md  (Next: references/frameworks/next.md)
EOF
    ;;
  angular)
    cat <<'EOF'
1. Import the CSS once. In src/main.ts (or a .css file listed in angular.json > styles):

  import "@boomi/exosphere/dist/styles.css";
  import "@boomi/exosphere";

2. Add CUSTOM_ELEMENTS_SCHEMA to your root module OR every standalone component
   that uses <ex-*> tags:

  import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

  @NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    // ...
  })
  export class AppModule {}

Full details: references/frameworks/angular.md
EOF
    ;;
  vue|nuxt)
    cat <<'EOF'
1. Import the CSS once. In src/main.ts (Vue) or nuxt.config.ts (Nuxt):

  import "@boomi/exosphere/dist/styles.css";
  import "@boomi/exosphere";

2. Tell the Vue compiler to allow <ex-*> tags. Either:

   a) In vite.config.ts, pass compilerOptions to the Vue plugin:

      vue({ template: { compilerOptions: { isCustomElement: t => t.startsWith("ex-") } } })

   b) Or at runtime in src/main.ts:

      app.config.compilerOptions.isCustomElement = t => t.startsWith("ex-");

   For Nuxt, place the @boomi/exosphere side-effect import in a .client.ts
   plugin so it doesn't run during SSR.

Full details: references/frameworks/vue.md
EOF
    ;;
  svelte)
    cat <<'EOF'
Svelte isn't officially documented by Exosphere as a first-class target, but
the web components work. Import styles once in src/app.html or your root layout
+ register via 'import "@boomi/exosphere";' once.

Svelte will warn about unknown elements; silence with:
  // svelte.config.js
  vitePreprocess({ unknownElement: 'ex-' })

Or cast the element as a generic in your component. If you hit friction, check
with your Exosphere contact — this stack isn't part of the snapshot.
EOF
    ;;
  html|unknown)
    cat <<'EOF'
For plain HTML / CDN:

  <link rel="stylesheet" href="https://unpkg.com/@boomi/exosphere@7.8.3/dist/styles.css">
  <script type="module" src="https://unpkg.com/@boomi/exosphere@7.8.3/dist/index.mjs"></script>

Then use <ex-button>, <ex-dialog>, etc. directly.

Always pin a version (@7.8.3) in production URLs.
EOF
    ;;
esac

echo ""
echo "==> Done. Verify by adding <ex-button>Hello</ex-button> somewhere and reloading."
