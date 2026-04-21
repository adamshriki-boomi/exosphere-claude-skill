---
id: "patterns-table--overview"
title: "Patterns/Table"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=patterns-table--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:07.823Z"
built_at: "2026-04-21T08:48:27.313Z"
---
# Table Pattern

  

## What is a table?

A table is a static structure with rows and cells, not an interactive widget. Its cells cannot be focused or selected. For interactive tabular structures, a grid pattern is used instead.  
  
However, tables often include both information and interactive elements. Since a table itself is not a widget, each interactive element inside it becomes a separate stop in the tab sequence. When there are many widgets, replacing the table with a grid can significantly shorten the tab sequence because a grid is a composite widget that can contain other widgets.

  

## Usage

Use a table when:

-   Information is best understood in a grid format (e.g., numerical data, schedules, comparison lists)
-   Users need to scan or compare multiple data points quickly
-   Sorting, filtering, or pagination will enhance usability
-   The content has a clear structure with column headers

  

Avoid using a table when:

-   A simple list or card layout is more readable
-   Content is primarily textual without structured relationships
-   Mobile usability is a priority (tables can be hard to read on small screens)

  

## WAI-ARIA Roles, States, and Properties

-   The table container has role table.
-   Each row container has role row and is either a DOM descendant of or owned by the table element or an element with role rowgroup.
-   Each cell is either a DOM descendant of or owned by a row element and has one of the following roles:
-   columnheader if the cell contains a title or header information for the column.
-   rowheader if the cell contains title or header information for the row.
-   cell if the cell does not contain column or row header information.
-   If there is an element in the user interface that serves as a label for the table, aria-labelledby is set on the table element with a value that refers to the labelling element. Otherwise, a label is specified for the table element using aria-label.
-   If the table has a caption or description, aria-describedby is set on the table element with a value referring to the element containing the description.
-   If the table contains sortable columns or rows, aria-sort is set to an appropriate value on the header cell element for the sorted column or row as described in the Grid and Table Properties Practice.
-   If there are conditions where some rows or columns are hidden or not present in the DOM, e.g., there are widgets on the page for hiding rows or columns, the following properties are applied as described in the Grid and Table Properties Practice.
-   aria-colcount or aria-rowcount is set to the total number of columns or rows, respectively.
-   aria-colindex or aria-rowindex is set to the position of a cell within a row or column, respectively.
-   If the table includes cells that span multiple rows or multiple columns, then aria-rowspan or aria-colspan is applied as described in the Grid and Table Properties Practice.
