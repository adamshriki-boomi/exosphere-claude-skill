# UI kits — index

Exosphere ships themed higher-level kits on top of the base stylesheet. Load the kit CSS **in addition to** `dist/styles.css` when you're building inside one of these product surfaces.

## AI kit

For Boomi Intelligence / AI-surface features. Emphasizes the periwinkle palette.

```js
import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere/dist/ui-kit/ai.css"; // after the base
```

Relevant tokens shift to the periwinkle-led palette:

- `--exo-color-surface-ai-action`
- `--exo-color-surface-ai-action-hover`

**Phase B pending:** `ai-kit.md` with full guidance, component restrictions, usage patterns.

Live docs: `node scripts/fetch-storybook-doc.mjs --list | grep -i ai`

## Discover kit

For the Discover surface.

```js
import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere/dist/ui-kit/discover.css";
```

**Phase B pending:** `discover-kit.md`.

Live docs: `node scripts/fetch-storybook-doc.mjs --list | grep -i discover`

---

## Which kit should I use?

- Building AI / Intelligence features → AI kit.
- Building in the Discover product surface → Discover kit.
- General Boomi product UI → just `dist/styles.css` (no kit).

If you're unsure, default to no kit. A kit is a deliberate visual signal that a page belongs to a specific surface.
