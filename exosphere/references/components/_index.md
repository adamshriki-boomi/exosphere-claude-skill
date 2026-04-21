# Exosphere component catalog

Built from `@boomi/exosphere@7.8.3`. Every shipped component, paired with the scraped docs page at `components/<name>.md` when available.

## Actions

- **`ExButton`** · `<ex-button>` · [docs](button.md) · props: ButtonType, ButtonSize, ButtonFlavor, ButtonAs
- **`ExIconButton`** · `<ex-icon-button>` · [docs](icon-button.md) · props: IconButtonType, IconButtonSize, IconButtonFlavor
- **`ExLink`** · `<ex-link>` · [docs](link.md) · props: LinkSize, TargetVariant

## Form Inputs

- **`ExInput`** · `<ex-input>` · [docs](input.md) · props: InputFooterType, SearchSize, SearchFlavor
- **`ExTextarea`** · `<ex-textarea>` · [docs](textarea.md) · props: TextareaFooterType
- **`ExRichInput`** · `<ex-rich-input>` · [docs](rich-input.md) · props: RichInputType
- **`ExRichInputSuggestion`** · `<ex-rich-input-suggestion>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-rich-input-suggestion--overview` · props: RichInputSuggestionType
- **`ExSelect`** · `<ex-select>` · [docs](select.md) · props: SelectType
- **`ExCombobox`** · `<ex-combobox>` · [docs](combobox.md) · props: ComboboxSize, ComboboxSelect, ComboboxType, ComboboxSearchSize
- **`ExDropdown`** · `<ex-dropdown>` · [docs](dropdown.md)
- **`ExCheckbox`** · `<ex-checkbox>` · [docs](checkbox.md) · props: CheckboxFooterType, CheckboxSize
- **`ExCheckboxGroup`** · `<ex-checkbox-group>` · [docs](checkbox-group.md) · props: CheckboxGroupHeaderType, CheckboxGroupAlignment
- **`ExNestedCheckboxGroup`** · `<ex-nested-checkbox-group>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-nested-checkbox-group--overview`
- **`ExRadio`** · `<ex-radio>` · [docs](radio.md) · props: RadioSize, RadioFooterType
- **`ExRadioGroup`** · `<ex-radio-group>` · [docs](radio-group.md) · props: RadioGroupAlignment, RadioHeaderType
- **`ExToggle`** · `<ex-toggle>` · [docs](toggle.md)
- **`ExDatePicker`** · `<ex-date-picker>` · [docs](date-picker.md) · props: DateType, DatePickerFooterType
- **`ExTimeRangePicker`** · `<ex-time-range-picker>` · [docs](time-range-picker.md)
- **`ExFileUploader`** · `<ex-file-uploader>` · [docs](file-uploader.md) · props: ElementSize, SizeUnit
- **`ExLabel`** · `<ex-label>` · [docs](label.md) · props: LabelType, LabelWidth

## Feedback

- **`ExAlertBanner`** · `<ex-alert-banner>` · [docs](alert-banner.md) · props: AlertBannerType, AlertBannerVariant
- **`ExAlertPopup`** · `<ex-alert-popup>` · [docs](alert-popup.md) · props: AlertPopupType
- **`ExAlertToast`** · `<ex-alert-toast>` · [docs](alert-toast.md) · props: AlertToastType — Use with exported ToastController helper for programmatic toasts.
- **`ExLoader`** · `<ex-loader>` · [docs](loader.md) · props: LoaderSize, LoaderVariant, SpinnerSize, LoaderState
- **`ExEmptyState`** · `<ex-empty-state>` · [docs](empty-state.md)
- **`ExPill`** · `<ex-pill>` · [docs](pill.md) · props: PillColor, PillSize
- **`ExPillGroup`** · `<ex-pill-group>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-pill-group--overview`
- **`ExBadge`** · `<ex-badge>` · [docs](badge.md) · props: BadgeColor, BadgeShape, BadgeSize
- **`ExBadgeGroup`** · `<ex-badge-group>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-badge-group--overview` · props: OverflowMode

## Navigation

- **`ExBreadcrumb`** · `<ex-breadcrumb>` · [docs](breadcrumb.md) · props: BreadcrumbVariant
- **`ExBreadcrumbItem`** · `<ex-breadcrumb-item>` · [docs](breadcrumb-item.md) · props: BreadcrumbLinkRel, BreadcrumbLinkTarget
- **`ExLeftMenubar`** · `<ex-leftmenubar>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-leftmenubar--overview`
- **`ExLeftMenubarItem`** · `<ex-leftmenubar-item>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-leftmenubar-item--overview`
- **`ExLeftMenubarTableCol`** · `<ex-leftmenubar-table-col>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-leftmenubar-table-col--overview`
- **`ExLeftMenubarTableRow`** · `<ex-leftmenubar-table-row>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-leftmenubar-table-row--overview`
- **`ExLeftmenubarCategoryTitle`** · `<ex-leftmenubar-category-title>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-leftmenubar-category-title--overview`
- **`ExLeftmenubarLink`** · `<ex-leftmenubar-link>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-leftmenubar-link--overview`
- **`ExLeftmenubarAdjustable`** · `<ex-leftmenubar-adjustable>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-leftmenubar-adjustable--overview`
- **`ExLeftmenubarDropdown`** · `<ex-leftmenubar-dropdown>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-leftmenubar-dropdown--overview`
- **`ExLeftmenubarDivider`** · `<ex-leftmenubar-divider>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-leftmenubar-divider--overview`
- **`ExNavigationDrawer`** · `<ex-navigationdrawer>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-navigationdrawer--overview`
- **`ExTab`** · `<ex-tab>` · [docs](tab.md)
- **`ExTabItem`** · `<ex-tab-item>` · [docs](tab-item.md) · props: TabItemVariant
- **`ExPagination`** · `<ex-pagination>` · [docs](pagination.md) · props: PaginationType
- **`ExWizard`** · `<ex-wizard>` · [docs](wizard.md) · props: WizardStep, WizardType
- **`ExWizardItem`** · `<ex-wizard-item>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-wizard-item--overview`
- **`ExMenu`** · `<ex-menu>` · [docs](menu.md) · props: MenuWidth, MenuVariant
- **`ExMenuItem`** · `<ex-menu-item>` · [docs](menu-item.md) · props: MenuItemVariant
- **`ExMenuItemGroup`** · `<ex-menu-item-group>` · [docs](menu-item-group.md) · props: MenuCategoryVariant
- **`ExPageHeader`** · `<ex-page-header>` · [docs](page-header.md)
- **`ExFooter`** · `<ex-footer>` · [docs](footer.md)
- **`ExFooterLinkGroup`** · `<ex-footer-link-group>` · [docs](footer-link-group.md) · props: FooterLinkGroupVariant
- **`ExFooterLink`** · `<ex-footer-link>` · [docs](footer-link.md) · props: FooterLinkVariant
- **`ExSegmentedControls`** · `<ex-segmentedcontrols>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-segmentedcontrols--overview`
- **`ExSegmentedControl`** · `<ex-segmentedcontrol>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-segmentedcontrol--overview` · props: SegmentPlace, SegmentVariant, SegmentTooltipPosition

## Layout

- **`ExAccordion`** · `<ex-accordion>` · [docs](accordion.md) · props: AccordionVariant
- **`ExAccordionItem`** · `<ex-accordion-item>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-accordion-item--overview`
- **`ExCard`** · `<ex-card>` · [docs](card.md)
- **`ExTile`** · `<ex-tile>` · [docs](tile.md) · props: TileVariant
- **`ExContainer`** · `<ex-container>` · [docs](container.md)
- **`ExPanel`** · `<ex-panel>` · [docs](panel.md)
- **`ExResizeHandle`** · `<ex-resize-handle>` · [docs](resize-handle.md) · props: ResizerPosition

## Overlays

- **`ExDialog`** · `<ex-dialog>` · [docs](dialog.md) · props: DialogHeaderContent, DialogVariant
- **`ExSideDrawer`** · `<ex-side-drawer>` · [docs](side-drawer.md)
- **`ExTooltip`** · `<ex-tooltip>` · [docs](tooltip.md) · props: TooltipAlignment, TooltipPosition, TooltipVariant
- **`ExFilter`** · `<ex-filter>` · [docs](filter.md)

## Data

- **`ExTable`** · `<ex-table>` · [docs](table.md) — Wraps AG-Grid Community. Heavy component — load CSS from dist/exo-table-styles.css and consider zone handling in Angular (ngZone.runOutsideAngular).
- **`ExStructuredList`** · `<ex-structured-list>` · [docs](structured-list.md) · props: StructuredListCellType
- **`ExStructuredListBody`** · `<ex-structured-list-body>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-structured-list-body--overview`
- **`ExStructuredListRow`** · `<ex-structured-list-row>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-structured-list-row--overview`
- **`ExStructuredListCol`** · `<ex-structured-list-col>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-structured-list-col--overview`
- **`ExStructuredListColGroup`** · `<ex-structured-list-col-group>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-structured-list-col-group--overview`
- **`ExStructuredListSubheader`** · `<ex-structured-list-subheader>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-structured-list-subheader--overview`
- **`ExTree`** · `<ex-tree>` · [docs](tree.md)

## Media

- **`ExCarousel`** · `<ex-carousel>` · [docs](carousel.md) · props: CarouselLayout — Wraps Swiper.
- **`ExCarouselItem`** · `<ex-carousel-item>` · no doc bundled — run `node scripts/fetch-storybook-doc.mjs components-carousel-item--overview`

## Charts

- **`ExChart`** · `<ex-chart>` · [docs](chart.md) — Wraps D3. In 7.8.3 ships bar, line, area, donut / half-donut, and spider / radar variants — see [`chart.md`](chart.md). For other chart shapes (heatmap, treemap, sankey, gauge, etc.) verify via fetch-storybook-doc before assuming, and fall back to the custom-component flow if truly absent.

## Editors

- **`ExJsonEditor`** · `<ex-json-editor>` · [docs](json-editor.md) — Wraps jsoneditor.
- **`ExRichTextEditor`** · `<ex-rich-text-editor>` · [docs](rich-text-editor.md) — Wraps SunEditor + @livingdocs/editable.js.

## Utility

- **`ExIcon`** · `<ex-icon>` · [docs](icon.md) · props: IconVariant, IconSize — 4 icon sets available: v1/v2/v3/FullColor. See references/foundation/iconography.md.
- **`ExAvatar`** · `<ex-avatar>` · [docs](avatar.md) · props: AvatarType, AvatarSize

## Alphabetical

`ExAccordion`, `ExAccordionItem`, `ExAlertBanner`, `ExAlertPopup`, `ExAlertToast`, `ExAvatar`, `ExBadge`, `ExBadgeGroup`, `ExBreadcrumb`, `ExBreadcrumbItem`, `ExButton`, `ExCard`, `ExCarousel`, `ExCarouselItem`, `ExChart`, `ExCheckbox`, `ExCheckboxGroup`, `ExCombobox`, `ExContainer`, `ExDatePicker`, `ExDialog`, `ExDropdown`, `ExEmptyState`, `ExFileUploader`, `ExFilter`, `ExFooter`, `ExFooterLink`, `ExFooterLinkGroup`, `ExIcon`, `ExIconButton`, `ExInput`, `ExJsonEditor`, `ExLabel`, `ExLeftMenubar`, `ExLeftmenubarAdjustable`, `ExLeftmenubarCategoryTitle`, `ExLeftmenubarDivider`, `ExLeftmenubarDropdown`, `ExLeftMenubarItem`, `ExLeftmenubarLink`, `ExLeftMenubarTableCol`, `ExLeftMenubarTableRow`, `ExLink`, `ExLoader`, `ExMenu`, `ExMenuItem`, `ExMenuItemGroup`, `ExNavigationDrawer`, `ExNestedCheckboxGroup`, `ExPageHeader`, `ExPagination`, `ExPanel`, `ExPill`, `ExPillGroup`, `ExRadio`, `ExRadioGroup`, `ExResizeHandle`, `ExRichInput`, `ExRichInputSuggestion`, `ExRichTextEditor`, `ExSegmentedControl`, `ExSegmentedControls`, `ExSelect`, `ExSideDrawer`, `ExStructuredList`, `ExStructuredListBody`, `ExStructuredListCol`, `ExStructuredListColGroup`, `ExStructuredListRow`, `ExStructuredListSubheader`, `ExTab`, `ExTabItem`, `ExTable`, `ExTextarea`, `ExTile`, `ExTimeRangePicker`, `ExToggle`, `ExTooltip`, `ExTree`, `ExWizard`, `ExWizardItem`.

## Also exported
- `ToastController` from `@boomi/exosphere/dist/react/alert-toast` — Programmatic controller for opening/closing toasts without rendering JSX for each one..

## Using the catalog

1. User describes a UX need.
2. Find the matching entry in the category above (or look at [`decision-guides/picking-components.md`](../decision-guides/picking-components.md)).
3. Open the component's docs file for props / usage.
4. If nothing fits, walk [`decision-guides/component-vs-custom.md`](../decision-guides/component-vs-custom.md).
