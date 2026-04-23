#!/usr/bin/env node
// run-icon-tests.mjs — browser-level verification of the Exosphere icon.js root-import contract.
//
// What this checks: that `dist/icon.js`, when imported at the app root,
// populates `window[Symbol.for("$$EXOSPHERE_ICON$$")]` with the shipped icon
// catalog. That registry is the mechanism every Exosphere component uses to
// look up its glyph at render time — so if this contract is broken, every
// icon in the app silently renders empty.
//
// Runs two fixtures in a headless Chromium (via playwright-core):
//   - /with:    loads styles.css AND icon.js → expects populated registry.
//   - /without: loads styles.css only → expects absent / empty registry.
//
// Why we don't render components here: Exosphere's web-component registration
// happens lazily when a React wrapper is mounted (the package's `main` is a
// React bundle). Pure web-component registration requires a separate setup
// that the skill's official install path doesn't document. The registry
// contract tested below is the actual load-bearing failure mode — every icon
// lookup resolves against this registry at render time regardless of framework.
//
// Runtime deps: playwright-core + @boomi/exosphere (both already installed in
// build-tools/node_modules). A chromium binary must be installed:
//   npx playwright install chromium
//
// Usage:
//   cd exosphere/build-tools && node browser-tests/run-icon-tests.mjs
//
// Exits 0 if all assertions pass, 1 if any fail, 2 on infrastructure error.

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Serve Exosphere from the local install under build-tools/node_modules.
// Using a real npm install (vs. CDN) avoids cross-origin CORS issues and
// resolves every transitive file deterministically.
const PKG_ROOT = path.resolve(__dirname, "..", "node_modules", "@boomi", "exosphere");

if (!fs.existsSync(path.join(PKG_ROOT, "dist", "icon.js"))) {
  console.error(`[run-icon-tests] @boomi/exosphere not installed at ${PKG_ROOT}`);
  console.error("                Run once from build-tools/:");
  console.error("                  npm install --no-save @boomi/exosphere@7.8.3");
  process.exit(2);
}

const MIME = {
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".map": "application/json",
  ".html": "text/html; charset=utf-8",
};

function fixtureHtml({ includeIconJs }) {
  const iconScript = includeIconJs
    ? `<script type="module" src="/pkg/dist/icon.js"></script>`
    : "<!-- icon.js intentionally omitted -->";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>icon.js contract test (${includeIconJs ? "with" : "without"})</title>
  <link rel="stylesheet" href="/pkg/dist/styles.css">
  ${iconScript}
</head>
<body>
  <script>
    // Allow 2s for icon.js to execute, then signal ready.
    setTimeout(() => { document.body.dataset.ready = "true"; }, 2000);
  </script>
</body>
</html>`;
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader("content-type", MIME[ext] ?? "application/octet-stream");
  res.setHeader("cache-control", "no-store");
  fs.createReadStream(filePath).pipe(res);
}

function startServer() {
  const server = http.createServer((req, res) => {
    try {
      if (req.url === "/with") {
        res.setHeader("content-type", MIME[".html"]);
        res.end(fixtureHtml({ includeIconJs: true }));
      } else if (req.url === "/without") {
        res.setHeader("content-type", MIME[".html"]);
        res.end(fixtureHtml({ includeIconJs: false }));
      } else if (req.url?.startsWith("/pkg/")) {
        // Resolve against the package root; refuse escape attempts.
        const rel = req.url.slice("/pkg/".length).split("?")[0];
        const full = path.resolve(PKG_ROOT, rel);
        if (!full.startsWith(PKG_ROOT + path.sep)) {
          res.statusCode = 400;
          res.end("bad path");
          return;
        }
        if (fs.existsSync(full) && fs.statSync(full).isFile()) {
          serveFile(res, full);
          return;
        }
        // Fallback: styles.css does `@import "swiper/swiper.css"` and similar
        // bare npm specifiers. The browser resolves those as relative paths
        // to `/pkg/dist/…`, which don't exist inside the Exosphere package.
        // Re-point those into the sibling node_modules tree.
        if (rel.startsWith("dist/")) {
          const sibling = path.resolve(PKG_ROOT, "..", "..", rel.slice("dist/".length));
          const nodeModulesRoot = path.resolve(PKG_ROOT, "..", "..");
          if (
            sibling.startsWith(nodeModulesRoot + path.sep) &&
            fs.existsSync(sibling) &&
            fs.statSync(sibling).isFile()
          ) {
            serveFile(res, sibling);
            return;
          }
        }
        console.error(`[server] 404 for ${req.url} (tried ${full})`);
        res.statusCode = 404;
        res.end();
      } else {
        res.statusCode = 404;
        res.end();
      }
    } catch (e) {
      console.error(`[server] 500 for ${req.url}: ${e.message}`);
      res.statusCode = 500;
      res.end();
    }
  });
  return new Promise((resolve) => {
    server.listen(0, () => resolve({ server, port: server.address().port }));
  });
}

async function loadPlaywright() {
  try {
    return await import("playwright-core");
  } catch {
    console.error("[run-icon-tests] playwright-core not importable from this cwd.");
    console.error("                Run from exosphere/build-tools/ so node_modules resolves:");
    console.error("                  cd exosphere/build-tools && node browser-tests/run-icon-tests.mjs");
    process.exit(2);
  }
}

async function inspect(page) {
  return page.evaluate(() => {
    const sym = Symbol.for("$$EXOSPHERE_ICON$$");
    const store = window[sym];

    function collectIconNames(obj, acc = [], depth = 0) {
      // The store shape is roughly { Icons: {...}, IconsV1: {...}, ... } but it
      // varies. Walk two levels deep and collect string keys at depth 1 and 2.
      if (!obj || typeof obj !== "object" || depth > 2) return acc;
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === "string" && v.length > 0) acc.push(k);
        else if (typeof v === "object" && v !== null && depth < 2) {
          collectIconNames(v, acc, depth + 1);
        }
      }
      return acc;
    }

    const names = store ? collectIconNames(store) : [];
    const dedup = Array.from(new Set(names));

    // Probe for a few well-known icon names we'd expect in the primary catalog.
    const probes = ["Trash", "Close", "Warning", "Download", "Edit"];
    const probeHits = probes.filter((n) =>
      dedup.some((found) => found.toLowerCase() === n.toLowerCase()),
    );

    return {
      windowSymbolPresent: !!store,
      windowSymbolType: store ? typeof store : "undefined",
      windowSymbolTopKeys: store ? Object.keys(store) : [],
      totalIconNames: dedup.length,
      sampleIconNames: dedup.slice(0, 10),
      probeHits,
    };
  });
}

function assert(results, failures, cond, label) {
  if (cond) {
    results.push(`✓ ${label}`);
  } else {
    results.push(`✗ ${label}`);
    failures.push(label);
  }
}

async function main() {
  const { chromium } = await loadPlaywright();

  const { server, port } = await startServer();
  const base = `http://localhost:${port}`;

  const browser = await chromium.launch({ headless: true }).catch((e) => {
    console.error(`[run-icon-tests] could not launch chromium: ${e.message}`);
    console.error("                Try: npx playwright install chromium");
    process.exit(2);
  });

  const snapshots = {};
  try {
    for (const [label, path] of [["with", "/with"], ["without", "/without"]]) {
      const ctx = await browser.newContext();
      const page = await ctx.newPage();
      page.on("pageerror", (e) => console.log(`  [${label}] pageerror: ${e.message}`));
      page.on("console", (m) => {
        const t = m.type();
        if (t === "error" || t === "warning") {
          console.log(`  [${label}] console.${t}: ${m.text()}`);
        }
      });
      await page.goto(base + path, { waitUntil: "load" });
      await page.waitForFunction(
        () => document.body.dataset.ready === "true",
        { timeout: 10000 },
      );
      snapshots[label] = await inspect(page);
      await ctx.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  // Report raw snapshots.
  console.log("\n=== Browser snapshot: WITH icon.js ===");
  console.log(JSON.stringify(snapshots.with, null, 2));
  console.log("\n=== Browser snapshot: WITHOUT icon.js ===");
  console.log(JSON.stringify(snapshots.without, null, 2));

  const results = [];
  const failures = [];
  const w = snapshots.with;
  const wo = snapshots.without;

  assert(
    results, failures,
    w.windowSymbolPresent,
    "with icon.js → window[Symbol.for('$$EXOSPHERE_ICON$$')] is present",
  );
  assert(
    results, failures,
    w.totalIconNames >= 100,
    `with icon.js → icon registry has >=100 entries (got ${w.totalIconNames})`,
  );
  assert(
    results, failures,
    w.probeHits.length >= 3,
    `with icon.js → registry contains at least 3 well-known icon names (found: ${w.probeHits.join(", ") || "none"})`,
  );
  assert(
    results, failures,
    !wo.windowSymbolPresent,
    "without icon.js → window icon registry symbol absent",
  );
  assert(
    results, failures,
    wo.totalIconNames === 0,
    `without icon.js → no icon names available (got ${wo.totalIconNames})`,
  );

  console.log("\n=== Assertions ===\n");
  for (const r of results) console.log(`  ${r}`);
  console.log(`\nPassed ${results.length - failures.length}/${results.length}`);

  if (failures.length > 0) {
    console.log("\nFailures indicate the icon.js contract is NOT behaving as documented.");
    console.log("Either the Exosphere 7.8.3 runtime changed, or the fixture setup is wrong.");
    process.exit(1);
  }
  console.log("\nicon.js contract verified end-to-end in headless chromium.");
  process.exit(0);
}

main().catch((e) => {
  console.error("[run-icon-tests] unexpected error:");
  console.error(e);
  process.exit(2);
});
