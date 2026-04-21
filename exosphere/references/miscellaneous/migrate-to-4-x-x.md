---
id: "miscellaneous-migrate-to-4-x-x--overview"
title: "Miscellaneous/Migrate to 4.x.x"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=miscellaneous-migrate-to-4-x-x--overview&viewMode=docs"
scraped_at: "2026-04-21T08:44:05.380Z"
built_at: "2026-04-21T08:48:27.311Z"
---
# Migrating to 4.x.x

  

This guide will help you to migrate exosphere from 3.x.x to 4.x.x.

  

## Table of contents

1.  Components
    
    1.  [Pagination](./?path=/docs/miscellaneous-migrate-to-4-x-x--docs#pagination)
    2.  [Table](./?path=/docs/miscellaneous-migrate-to-4-x-x--docs#table)

  

## Components

# Pagination

-   Made UI updates for `compact` and `default` types.
-   Addition of two new properties called `hideGoToPage` and `hideItemPerPage` to give users the option to hide navigation buttons separately.
-   In version 3.0.0, the pagination component used to automatically hide the navigation buttons when the screen width was below 990px (which has now been changed to 769px). However, the navigation buttons will no longer autohide, and you will need to explicitly pass properties such as `hideGoToPage`, `hideItemPerPage`, or `hideControls`. Additionally, the UI for the `compact` type has also been modified.

# Table

-   Updated the AG Grid version from 29 to 32 for the [Table](?path=/docs/components-table-general-anatomy--docs) component.
-   AG Grid [Migration](https://www.ag-grid.com/javascript-data-grid/upgrading-to-ag-grid-32/) Guide for further reference.

# Combobox

-   The name of the `value` attribute has been modified to `inputValue`.
