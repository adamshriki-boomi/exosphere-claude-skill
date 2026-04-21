---
id: "components-table-configuration--overview"
title: "Components/Table/Configuration"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-table-configuration--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:53.727Z"
built_at: "2026-04-21T08:48:27.304Z"
---
# Documentation

Refer the [full documentation here](https://www.ag-grid.com/javascript-data-grid/grid-interface/)

  

## Configuration Required

Import Component theme CSS as well as Table Styles CSS in a global file such as `index.(jsx|tsx)` or `App.(jsx|tsx)`

```

// index.(jsx|tsx) or App.(jsx|tsx)
import "@boomi/exosphere/dist/exo-component-theme.css";
import "@boomi/exosphere/dist/exo-table-styles.css";

```

  

### Style Properties:

Style PropertiesUsage

```

--exo-component-table-body-min-height  | Token to adjust the minimum height of table component body component.
--exo-component-table-body-margin-bottom  | Token to adjust the margin bottom of the body of the table component.
--exo-component-table-cell-padding-top  | Token to adjust the padding top of  table cell.
--exo-component-table-row-default-alt-background  | Token to adjust the default alt row background.
--exo-component-table-select-height  | Token to adjust the height of the editable table cells.
--exo-component-table-header-left  | Token to adjust the table header left for flush right header.
--exo-component-table-edit-cell-top | Token to adjust the top of the editable table cells
--exo-component-table-selected-indicator-display | Token to hide selected indicator in bulk select table
--exo-component-table-body-height | Token to adjust table body height
--exo-component-table-header-cell-hover-background-color | Token to adjust table header cell hover background color

```

## Sanitization to avoid XSS (Cross Site Scripting)

When using custom cell renderers in table component Ensure any dynamic content inserted into the cell templates is sanitized using DOMPurify or similar sanitization process to prevent XSS vulnerabilities.

```

Example:
  const customData = '<i onwheel=alert(244)> Scroll over me </i>'; // Example of untrusted data
  const sanitizedData = DOMPurify.sanitize(customData); // Sanitize the data before passing it to the custom cell renderer
  const createColumnDefs = () => {
  return [
    {
       headerName: "Name",
        field: "name",
        maxWidth: 300,
        cellRenderer: nameRendererWithExoTooltip,
        // ... other column configuration
      },
    ];
  };

```
