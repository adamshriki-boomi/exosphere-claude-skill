# Component vs. custom — the suggest → ask → flag flow

When you hit a need that seems like it might not fit any shipped Exosphere component, walk this flow. **Never** jump straight to building custom markup.

The whole point: Exosphere evolves. What looks like a missing component today is sometimes something that exists with a different name, sometimes something you can build from primitives, and occasionally a real gap that deserves a flagged custom. The flow surfaces which of those it is.

---

## Step 1: Suggest the closest official component

Before anything else, look in the catalog:

- [`components/_index.md`](../components/_index.md) — grouped by UX function.
- [`picking-components.md`](picking-components.md) — "user says X → use Y" lookup.
- [`assets/component-exports.json`](../../assets/component-exports.json) — authoritative list of exports.

If there's a plausible candidate, **propose it with a one-line justification**. Don't hide the suggestion inside a paragraph. Make it explicit so the user can say "no, that's not what I need" quickly.

**Example — "I need a gauge chart."**

> Exosphere ships `ExChart` with bar / line / area / donut (+half-donut) / spider-radar in 7.8.3. It doesn't have a named "gauge" variant, but depending on what you want visualized, either a half-donut or `ExLoader` with a determinate progress variant may give you the effect you're after. Want me to try one of those before we talk about a custom?

**Example — "I need a stepper."**

> Exosphere has `ExWizard` which is a full multi-step flow (onboarding, setup, etc.) with items, progress indication, and navigation. Would `ExWizard` fit, or do you specifically need a compact inline stepper that `ExWizard` doesn't cover?

**Example — "I need a color picker."**

> Exosphere doesn't ship a color picker in 7.8.3. Before going custom, one quick check: is the color choice bounded to the Exosphere palette (e.g., pill color, theme accent)? If so, `ExSelect` / `ExCombobox` with swatch options is cheaper than a custom. If users genuinely need an open RGB/HSV picker, that's the moment for the custom-component flow.

The goal of step 1 is to make the "does this exist already?" check **visible**, not to railroad the user. If they confirm the shipped component is insufficient, you proceed to step 2.

### Before concluding "not in Exosphere"

Two checks you must do:

1. **Re-query `component-exports.json`** using the user's terms *and* synonyms. (A "pill" is a "chip" is a "tag." A "stepper" is a "wizard." A "popover" is sometimes a "tooltip" or "menu.")
2. **If the user's project is on a newer Exosphere than the snapshot** (`scripts/check-exosphere-version.mjs` told you so), do a live Storybook lookup via `scripts/fetch-storybook-doc.mjs <candidate-id>` to see whether the newer release shipped something.

Only after both come up empty do you escalate.

---

## Step 2: Ask explicitly for approval

If the official options don't fit, **ask before building**. The literal phrasing to use:

> "Exosphere doesn't ship a dedicated `<feature>` today. I can build a custom component styled strictly with Exosphere tokens so it still fits the system, and flag it clearly in code as a custom extension. Proceed?"

Do not ask in a way that makes custom feel like the default. Phrasing like *"Should I just build it?"* or *"I'll make a custom…"* presumes approval. The phrasing above makes the trade explicit: the component won't be official; it's a workaround.

Wait for an affirmative answer. **Silence, hedging, or "sure, whatever you think best" is not approval** — press for a yes.

### If the user approves

Proceed to step 3.

### If the user declines

Options:

- Narrow the requirement (often the user realizes the official component can fit with a small compromise).
- File this as a feature request ("want me to draft a ticket for the Exosphere team?").
- Use nothing — sometimes the UI can simply omit the feature.

---

## Step 3: Flag the custom extension

On approval, build the component with three discipline layers:

### Layer 1: The banner

Every file for the custom starts with the banner from [`assets/custom-component-banner.md`](../../assets/custom-component-banner.md). Fill in:

- Approved by (user's name if known; otherwise the phrasing they used).
- Date (YYYY-MM-DD format).
- Reason (one line — the reason from step 2).

### Layer 2: Tokens only

The component's CSS/styles use `--exo-*` tokens exclusively. No hex. No pixel magic numbers (except borders at `1px`, which is near-universal). Consume Exosphere primitives (`ExIcon`, `ExPill`, `ExLabel`) inside the custom where possible so visual language is consistent.

Run `scripts/verify-token-usage.mjs` over the new file before reporting done.

### Layer 3: The project register

Append or create `EXOSPHERE-CUSTOM.md` at the project root. Template:

```markdown
# Custom Exosphere extensions in this project

Components here are NOT part of `@boomi/exosphere`. Each was approved for a specific reason when no shipped component fit. Revisit when the design system expands.

| Component file                                  | Approved on  | Reason                                              |
|-------------------------------------------------|--------------|-----------------------------------------------------|
| `src/components/color-picker/ColorPicker.tsx`   | 2026-04-21   | Exosphere doesn't ship an open RGB/HSV color picker |
```

The register gives future reviewers (design-system maintainers, code reviewers) a single place to see every custom. When a design-system release ships an equivalent, they can open the linked file, replace the custom with the official component, and remove the row.

---

## What not to do

- **Don't** propose custom alongside official — propose official first, custom only if insufficient.
- **Don't** rename a `<div>` soup "a component" without the banner / register — that defeats the purpose.
- **Don't** bury the approval moment inside a longer answer. Ask, wait for yes, then proceed.
- **Don't** skip the register. Without it the custom leaks into the codebase invisibly.
- **Don't** over-apologize. A flagged custom is a reasonable outcome — the flag just prevents pretending it's part of the system.

---

## Examples end-to-end

**Example A — user asks for a data density toggle.**

1. *Suggest:* "`ExSegmentedControls` gives you a two- or three-option density switch (Compact / Default / Comfortable). That's usually what people mean here — does that fit?"
2. User: "Yes, perfect." → Done. No custom.

**Example B — user asks for a custom color picker.**

1. *Suggest:* "Exosphere doesn't ship an open color picker. If the color choice is bounded to the Exosphere palette (e.g., tile accent, pill color), `ExSelect` with swatch options may be enough. Is the choice bounded, or do users genuinely need a full RGB/HSV picker?"
2. User: "Full picker — brand team needs to enter custom hex codes."
3. *Ask:* "OK, that goes beyond the shipped components. I can build a custom `ColorPicker` styled only with Exosphere tokens (inputs, swatches, preview) and flag it as a custom extension. Proceed?"
4. User: "Yes."
5. *Flag:* create `ColorPicker.tsx` with banner, use `--exo-color-background-*` + `--exo-spacing-*`, reuse `ExInput` for the hex field, add a row to `EXOSPHERE-CUSTOM.md`.

**Example C — user asks for a "cool 3D animated button."**

1. *Suggest:* "Exosphere keeps button styling system-consistent — `ExButton` supports primary/secondary/tertiary + sizes + flavors, but no 3D animations. If that's a marketing surface, we might layer on a CSS animation wrapper. If it's a product UI, I'd recommend sticking with `ExButton` so it matches everything else."
2. User: "Product UI."
3. Outcome: Use `ExButton`. No custom needed.
