---
id: "components-table--overview"
title: "Components/Table"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-table--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:53.503Z"
built_at: "2026-04-21T08:48:27.304Z"
---
# Table

When to use a default table?

-   When you simply need to display mutliple pieces of data

1.  Title (optional)
2.  Toolbar (optional) - Some examples of capabilities include search, filter, adding a row, hiding / showing columns, and toggling the table view.
3.  Column Headers - Allows sorting and resizing of columns if applicable
4.  Table Rows - Displays relevant data.
5.  Pagination (optional) - Displays entry count, pagination controls, and capability to change number of rows to show

  

-   Below Table is using **Text flush right** header
-   Below Table is using **Default-Alt** row
-   **Creator column** in below Table is using **Cell content type Text**.

#### Title of the Table

## Stories

### Default

When to use a default table?

-   When you simply need to display mutliple pieces of data

1.  Title (optional)
2.  Toolbar (optional) - Some examples of capabilities include search, filter, adding a row, hiding / showing columns, and toggling the table view.
3.  Column Headers - Allows sorting and resizing of columns if applicable
4.  Table Rows - Displays relevant data.
5.  Pagination (optional) - Displays entry count, pagination controls, and capability to change number of rows to show

  

-   Below Table is using **Text flush right** header
-   Below Table is using **Default-Alt** row
-   **Creator column** in below Table is using **Cell content type Text**.

#### Title of the Table

### API Render

### Bulk Select Table

When to use bulk select?

-   When data points need to be manipulated in bulk

Default

1.  Bulk select - Selects all rows on page
2.  Individual select - Selects individual row

Selected

1.  Selected Active Toolbar

-   Below Table is using **Compact Size** \[48px height\] row.
-   Below Table is using **Default** row.
-   **Creator column** in below Table is using **Cell content type Link**.

#### Title of the Table

O Items selected

Cancel Delete

### Bulk Select Table In Dialog

When to use bulk select in Dialog?

-   When we want data point to open in dialog and also need to be manipulated in bulk

Table Dialog Box

O selected

Cancel Delete

### Editable Table

When to use editable tables?

-   When data should be easily editable on the page
-   For small chunks of data

Default

1.  Individual cells can be edited - Delinated by a pencil icon

Active

1.  Clicking on an editable cell will trigger an input box to appear
2.  **Contributers column** in below Table is using **Cell content type Multiple Avatars**.

Full row edit

1.  Clicking on Edit will make all fields in that row editable at once
2.  The Edit button will transform to **Save** and **Cancel** buttons in edit mode
3.  Below Table is using **Regular Size** \[64px height\] row.

### Horizontal Scroll

When to use horizontal scrolling?

-   If there are too many columns to display, then you can utilize horizontal scrolling
-   Consider using fixed columns as well to maintain context of information

Things to consider:

-   We should try not to use horizontal scrolling if possible as it is a poor user experience
-   If there are actions in the row, they will remain at the end of the row. This means that in cases where there are actions when horizontal scrolling is present, the action buttons can appear off screen.
-   Consider using fixed columns as well to maintain context of information

-   If there are actions in the row, they will remain at the end of the row. This means that in cases where there are actions when horizontal scrolling is present, the action buttons can appear off screen.

**Non Fixed Columns**

**Fixed Columns**

**Pinned Columns**

1.  **Name** column has been pinned in below table example

### Sticky Header

#### Title of the Table

-   Below Table is using **Sticky header**.
  

### Without Pagination

#### Title of the Table

-   Below Table is using **Regular Size** \[64px height\] row.
  

### Draggable Rows

When draggable rows is not work in tables?

-   Does not work if Pagination is enabled.
-   Does not work when sorting is applied. This is because the sort order of the rows depends on the data and moving the data would break the sort order.
-   Does not work when filtering is applied. This is because a filter removes rows making it impossible to know what 'real' order of rows when some are missing.
-   Does not work when row grouping or pivot is active. This is because moving rows between groups would require a knowledge of the underlying data which only your application knows.

Things to consider:

-   It is possible to drag multiple rows at the same time, when rowDragMultiRow is set to true in the gridOptions and it is combined with rowSelection='multiple'.
-   For this example note the following:
-   When you select multiple items and drag one of them, all items in the selection will be dragged.
-   When you drag an item that is not selected while other items are selected, only the unselected item will be dragged.
