---
id: "miscellaneous-migrate-to-3-x-x--overview"
title: "Miscellaneous/Migrate to 3.x.x"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=miscellaneous-migrate-to-3-x-x--overview&viewMode=docs"
scraped_at: "2026-04-21T08:44:05.043Z"
built_at: "2026-04-21T08:48:27.311Z"
---
# Migrating to 3.x.x

  

This guide will help you to migrate exosphere from 2.x.x to 3.x.x.

  

## Table of contents

1.  Components
    
    1.  [Breadcrumbs](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#breadcrumb)
    2.  [Dialog](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#dialog)
    3.  [Input](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#input)
    4.  [Loader](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#loader)
    5.  [Menu](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#menu)
    6.  [Menu Item](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#menu-item)
    7.  [Page Header](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#pageheader)
    8.  [Pagination](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#pagination)
    9.  [Search](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#search)
    10.  [Side drawer](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#sidedrawer)
    11.  [Tree](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#tree)
2.  [Design tokens](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#design-tokens)
    
3.  [Others](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#others)
    
4.  [Miscellaneous](./?path=/docs/miscellaneous-migrate-to-3-x-x--docs#miscellaneous)
    

  

## Components

This section will help you migrate your Components.

# Breadcrumbs

-   Made UI updates.
-   Added new [Collapsed](?path=/story/components-breadcrumb--breadcrumb-collapsed) and [Fluid](?path=/story/components-breadcrumb--breadcrumb-fluid) variants.

# Dialog

-   Made UI updates.
-   `variant` - `default` has been deprecated and `spaced` has become the default value.

# Input

-   Minor UI updates has been done to the [readOnly](?path=/story/components-input--readonly-input) input.
-   Flavor enum has been renamed from `InputFlavor` to `SearchFlavor`.
-   Size enum has been renamed from `InputSize` to `SearchSize`.

# Loader

-   Made UI updates.
-   Added new [Compact](?path=/story/components-loader--compact-progress-bar) type progress bar.
-   Added new [TO\_START](?path=/story/components-loader--progress-bar-to-start-state) and [INTERRUPTED](?path=/story/components-loader--progress-bar-interrupted-state) states in Progress bar.

# Menu

-   Made UI updates.

# Menu Item

-   Made UI updates.
-   Added new [Option and Risky](?path=/story/components-menu-item--variants) variants.
-   Added `disabled` state.

# Page Header

-   Removed button slot spaces when there is no content.
-   Page title is slot-based now; we can add any semantic header tags.

# Pagination

-   Made UI updates.
-   Addition of a new property called `hideControls` which allows for the hiding of navigation buttons.
-   New `type` called `compact` has been introduced specifically for mobile view.
-   Responsiveness of the interface has been improved.

# Search

-   `Default` and `background` [Search](?path=/story/components-search--default) flavors are deprecated; instead, `white` and `gray` can be used.
-   Previously, the size property indicated the `width` of the search, but now it will refer to `height`.
-   `Default, small, medium, and large` sizes are deprecated; instead, `medium` and [large](?path=/story/components-search--large-size) can be used.

# Side drawer

-   Made UI updates.

# Tree

-   Made UI updates.
-   New `large` [size](?path=/docs/components-tree--docs) added.
-   Added `onCollapse` and `onExpand` events for expanding and collapsing the tree.

  
  

## Design tokens

-   `--exo-ai-typography-label-2` has been renamed as `--exo-ai-typography-label-3`.
-   Font family for header tokens `[text-h1 to text-h7]` has been changed from font family`[Noto Sans]` to [font brand](?path=/docs/system-foundation-typography-headings--docs)`[Poppins]`.
-   Font weight for header tokens `[text-h1 to text-h7]` has been changed from semi-bold`[600]` to regular`[400]`.
-   Removed the brand tokens `text-h1-brand` to `text-h7-brand`.

  
  

## Miscellaneous

-   Added types for the components

  
  

## Others

-   Removed Iconography from storybook foundation page.
