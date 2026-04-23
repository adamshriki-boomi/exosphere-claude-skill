# Iconography — ExIcon usage and the icon-bundle contract

Exosphere ships a shared icon library exposed through `<ex-icon>` / `ExIcon` and consumed internally by every component that renders a glyph (dialog close buttons, combobox chevrons, toast status markers, date-picker glyphs, pagination arrows, side-drawer chevrons, and many more). Getting icons to render correctly is a two-part contract: **the root import** and **the component usage**. Most icon bugs in Exosphere apps come from skipping the first part.

---

## Root imports — required, both

Every Exosphere app must import **both** of these at the root, not one or the other:

```ts
import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere/dist/icon.js";
```

Drop them in the app-root entry — `src/main.tsx` (Vite/CRA React), `app/layout.tsx` (Next.js App Router), `src/main.ts` (Vue), `app.module.ts` / standalone-root (Angular), or the first `<script>` tag in the document (plain HTML / CDN).

**Failure modes, silent in both directions:**

| Missing import | Symptom |
|---|---|
| `styles.css` | Components render as unstyled text — the most common "nothing works" bug |
| `icon.js` | Every `<ex-icon>` and every internal icon (dialog Xs, combobox chevrons, toasts, etc.) renders as empty. No error. No console warning. |

Treat both imports as a mandatory pair.

---

## Why `icon.js` is a separate module

Exosphere 7.0 pulled icons out of the main bundle to shrink it from 210MB to 38MB (per `references/miscellaneous/migrate-to-7-x-x.md`). Icons now live in a global store keyed by `Symbol.for("$$EXOSPHERE_ICON$$")` on `window`; `icon.js` populates that store at startup. Every component that renders an icon looks it up from the store at render time — if the store is empty (because `icon.js` never ran), nothing renders.

Don't overwrite `window[Symbol.for("$$EXOSPHERE_ICON$$")]` — it's Exosphere's registry slot.

---

## The shipped catalog — tiers

The icon library has three tiers plus an archive (see `references/components/icon.md` for the full 400+ name list across 14 categories):

- **Primary catalog** — the modern default icons used by all current Exosphere design. Most names ship in all four sizes (L / M / S / XS). Brand/product icons often pair a monochrome variant with a full-color variant suffixed `-Color` (e.g. `AmazonQ` + `AmazonQ-Color`); pick the color variant when rendering a brand mark, the monochrome when it needs to pick up surrounding text color.
- **V2 set** (`components/icon.md:2505+`) — added expanded sizing to icons that previously had only one or two sizes in V1.
- **V1 set** (`components/icon.md:3033+`) — pre-refresh icons, often limited sizing.
- **Archive** (`components/icon.md:4148+`) — legacy icons retained for backward compatibility. Don't use for new UI.

When an icon name exists in multiple tiers, the registry resolves to the most modern version by default.

> Note: older skill metadata described this as "4 icon sets v1/v2/v3/FullColor". The actual shipped structure is the three tiers + Archive above; "full-color" in practice is the `-Color` suffix pattern within the primary catalog, not a separate tier.

---

## Using an icon — web-component form

```html
<ex-icon icon="eye-open" label="Show password" variant="icon" size="S"></ex-icon>
```

See `references/components/icon.md` for more examples (variants, custom color, hide-browser-tooltip).

---

## Using an icon — React wrapper `ExIcon`

```tsx
import { ExIcon, IconVariant, IconSize } from "@boomi/exosphere";

<ExIcon icon="eye-open" label="Show password" variant={IconVariant.Icon} size={IconSize.S} />
<ExIcon icon="trash"    label="Delete"        variant={IconVariant.Danger} size={IconSize.M} />
```

String literals work too (`variant="icon"`, `size="S"`); the enums are a typed convenience. Prefer `ExIcon` over raw `<ex-icon>` in React code — the wrapper handles event translation and prop typing.

---

## Clickable icon-only actions — use `ExIconButton`

Don't wrap `<ex-icon>` in a raw `<button>`. Exosphere ships a dedicated `<ex-icon-button>` / `ExIconButton` for icon-only clickable actions (toolbar buttons, close buttons, row actions). Same `icon.js` root-import requirement applies. See `references/components/icon-button.md`.

---

## Sizes — `IconSize`

`L`, `M`, `S`, `XS`. Not every icon ships every size — the primary catalog almost always does; V1 and Archive are limited. Confirm in `references/components/icon.md` (each icon lists its available sizes).

---

## Variants — `IconVariant`

| Variant | Use when |
|---|---|
| `icon` *(default)* | Any neutral icon — most cases |
| `danger` | Destructive actions (Trash, Delete). Signals destructive intent with a danger-colored fill. |

```html
<ex-icon icon="trash" label="Delete" variant="danger"></ex-icon>
```

---

## Color customization

Icons inherit `color` from surrounding text. To override, use CSS — **with tokens, not hex**:

```html
<!-- inline -->
<ex-icon style="color: var(--exo-color-font-on-danger);" icon="circle-warning" label="Warning"></ex-icon>

<!-- via class -->
<style>
  .warning-icon { color: var(--exo-color-font-on-danger); }
</style>
<ex-icon class="warning-icon" icon="circle-warning" label="Warning"></ex-icon>
```

Using `--exo-color-*` tokens (instead of hex) is what makes the color flip correctly when the user switches light/dark theme. See `foundation/design-tokens.md` for the full palette.

---

## Accessibility — `label` is not optional

Always pass a `label`. Screen readers announce it as the icon's accessible name. Without it, the icon is invisible to assistive tech.

If the icon is purely decorative — sitting next to a text label that already carries the full semantic meaning — pass `aria-hidden` or an empty `label=""`. When in doubt, provide a label.

---

## Finding an icon by name

- **Text catalog** — `references/components/icon.md` (400+ names across 14 categories: Actions and Operations, Alerts and Status, Country Flags, Data and Tables, DCP Icons, Folders, Formatting, Navigational, Numerics, Publishing, Security, Service, UI Elements, User).
- **Visual gallery** — [exosphere.boomi.com](https://exosphere.boomi.com/?path=/docs/components-icon--overview). Scroll and click for live previews at each size.

---

## Common pitfalls

- **Skip `icon.js` root import** → all icons silent-empty. The #1 icon bug.
- **Use hex colors in CSS overrides** → theme switches break. Always `color: var(--exo-color-*)`.
- **Omit `label`** → a11y fail, invisible to screen readers.
- **Overwrite `window[Symbol.for("$$EXOSPHERE_ICON$$")]`** → nukes the registry for the whole page. Leave it alone.
- **Wrap `<ex-icon>` in a raw `<button>`** to make it clickable → use `ExIconButton` instead.
