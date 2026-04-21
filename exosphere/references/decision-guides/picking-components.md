# Picking the right Exosphere component

Quick lookup: given a UX need the user described, which component(s) fit.

If the user describes something that isn't on this page, fall through to [`component-vs-custom.md`](component-vs-custom.md) and walk the suggest → ask → flag flow.

---

## Actions & triggers

| User wants …                                          | Use                                         |
|-------------------------------------------------------|---------------------------------------------|
| A primary action button (submit, confirm)             | `ExButton type="primary" flavor="branded"`  |
| A secondary/outline button                            | `ExButton type="secondary"`                 |
| A text-only button (tertiary, low emphasis)           | `ExButton type="tertiary"` or `type="ghost"`|
| A destructive action (delete, remove)                 | `ExButton type="primary"` with danger styling (via prop) |
| An icon-only action (toolbar, close, copy)            | `ExIconButton`                              |
| A link inside paragraph text                          | `ExLink`                                    |
| Navigation between pages (route link)                 | `ExLink` (never `ExButton`)                 |
| A whole card that's clickable as one unit             | `ExTile` (a tile is a clickable card)       |

See [`patterns/links-vs-buttons.md`](../patterns/links-vs-buttons.md) for the decision rule.

---

## Form fields

| User wants …                                            | Use                                      |
|---------------------------------------------------------|------------------------------------------|
| Plain text field (name, title)                          | `ExInput`                                |
| Email / password / number / search                      | `ExInput` with `type` prop               |
| Search box specifically                                 | `ExInput` with search variant            |
| Multi-line text (comment, notes)                        | `ExTextarea`                             |
| Rich-text / WYSIWYG                                     | `ExRichTextEditor` (only if necessary)   |
| Chips input with suggestions                            | `ExRichInput` + `ExRichInputSuggestion`  |
| Dropdown, ≤10 known options                             | `ExSelect`                               |
| Dropdown, many options / async / typeahead              | `ExCombobox`                             |
| "Pick 1 of these 2-5 visible options"                   | `ExRadioGroup` with `ExRadio` items      |
| "Pick several of these visible options"                 | `ExCheckboxGroup` with `ExCheckbox` items|
| Nested / tree-like multi-select                         | `ExNestedCheckboxGroup`                  |
| Instant on/off setting                                  | `ExToggle`                               |
| Commit-on-save boolean                                  | `ExCheckbox`                             |
| Single date                                             | `ExDatePicker` (with `type="date"`)      |
| Date + time                                             | `ExDatePicker` (with `type="datetime"`)  |
| Time range (start + end)                                | `ExTimeRangePicker`                      |
| File upload                                             | `ExFileUploader`                         |
| Standalone label (detached from input)                  | `ExLabel`                                |

---

## Presenting data

| User wants …                                            | Use                                       |
|---------------------------------------------------------|-------------------------------------------|
| Lightweight list of rows × columns                      | `ExStructuredList`                        |
| Full-featured data grid (sort, filter, pin, virtualize) | `ExTable` (+ `exo-table-styles.css`)      |
| Tree of nested items (files, taxonomies)                | `ExTree`                                  |
| Horizontal swipe gallery                                | `ExCarousel` + `ExCarouselItem`           |
| Chart (bar, line, area, donut / half-donut, spider / radar) | `ExChart` — supported variants documented in [`components/chart.md`](../components/chart.md) |
| Chart of a shape ExChart doesn't support (heatmap, treemap, sankey, gauge, etc.) | Verify via `fetch-storybook-doc.mjs components-chart--overview`. If truly unsupported, enter the custom flow. |

---

## Navigation

| User wants …                                            | Use                                               |
|---------------------------------------------------------|---------------------------------------------------|
| Main left sidebar nav                                   | `ExLeftMenubar` (+ its sub-components)            |
| Persistent multi-panel drawer                           | `ExNavigationDrawer`                              |
| In-page tabs                                            | `ExTab` + `ExTabItem`                             |
| View switcher (Day / Week / Month)                      | `ExSegmentedControls` + `ExSegmentedControl`      |
| Step-by-step flow (onboarding, setup)                   | `ExWizard` + `ExWizardItem`                       |
| Paginated list controls                                 | `ExPagination`                                    |
| Breadcrumb trail                                        | `ExBreadcrumb` + `ExBreadcrumbItem`               |
| Context / overflow menu                                 | `ExMenu` + `ExMenuItem` (+ `ExMenuItemGroup`)     |
| Standard page header (title + breadcrumbs + actions)    | `ExPageHeader`                                    |
| App footer                                              | `ExFooter` + `ExFooterLinkGroup` + `ExFooterLink` |

---

## Feedback & status

| User wants …                                            | Use                                              |
|---------------------------------------------------------|--------------------------------------------------|
| Persistent page banner                                  | `ExAlertBanner` variant=persistent               |
| Dismissable inline alert                                | `ExAlertBanner` variant=dismissable              |
| Transient auto-dismiss "Saved" confirmation             | `ExAlertToast` (or use `ToastController`)        |
| Mid-screen popup alert                                  | `ExAlertPopup`                                   |
| Loading indicator                                       | `ExLoader` with the right variant                |
| "No data yet" / empty state                             | `ExEmptyState`                                   |
| Status chip ("Active", "Draft")                         | `ExPill`                                         |
| Numeric/ count badge                                    | `ExBadge`                                        |
| Group of many badges (with overflow)                    | `ExBadgeGroup`                                   |

---

## Overlays & surfaces

| User wants …                                            | Use                                              |
|---------------------------------------------------------|--------------------------------------------------|
| Confirmation dialog / modal                             | `ExDialog`                                       |
| Side-sliding detail/form drawer                         | `ExSideDrawer`                                   |
| Hover tooltip                                           | `ExTooltip`                                      |
| Filter builder for a data grid                          | `ExFilter`                                       |
| Collapsible inline sections                             | `ExAccordion` + `ExAccordionItem`                |

Dialog vs. drawer decision: dialog for a focused task that must block interaction; drawer for detail views, forms, and multi-step content where user should still see the underlying page.

---

## Layout

| User wants …                                            | Use                                              |
|---------------------------------------------------------|--------------------------------------------------|
| Card surface                                            | `ExCard`                                         |
| Selectable / hoverable tile                             | `ExTile`                                         |
| Page content wrapper with consistent width              | `ExContainer`                                    |
| Collapsible / resizable in-page pane                    | `ExPanel` (+ `ExResizeHandle`)                   |
| Split-pane divider                                      | `ExResizeHandle`                                 |

---

## Media & identity

| User wants …                                            | Use                              |
|---------------------------------------------------------|----------------------------------|
| User avatar (initials / image / icon)                   | `ExAvatar`                       |
| Icon (by name)                                          | `ExIcon` (see `foundation/iconography.md`) |

---

## Editors

| User wants …                                            | Use                              |
|---------------------------------------------------------|----------------------------------|
| Interactive JSON editing                                | `ExJsonEditor`                   |
| WYSIWYG rich text                                       | `ExRichTextEditor`               |

---

## Pattern-level decisions

For composite patterns, don't start from individual components — start from the pattern reference:

- Confirmation dialogs → [`patterns/dialogs.md`](../patterns/dialogs.md)
- Data tables with actions → [`patterns/tables.md`](../patterns/tables.md)
- Page headers → [`patterns/page-headers.md`](../patterns/page-headers.md)
- Auth screens → [`patterns/authentication.md`](../patterns/authentication.md)
- Links vs. buttons decision → [`patterns/links-vs-buttons.md`](../patterns/links-vs-buttons.md)

---

## When nothing on this page fits

Walk the suggest → ask → flag flow in [`component-vs-custom.md`](component-vs-custom.md). Remember: the answer is never "I'll just build a div." If there's genuinely no Exosphere component, the user approves a flagged custom extension first.
