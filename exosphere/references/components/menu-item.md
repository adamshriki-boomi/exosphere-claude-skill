---
id: "components-menu-item--overview"
title: "Components/Menu Item"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-menu-item--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:37.008Z"
built_at: "2026-04-21T08:48:27.299Z"
---
# Menu Item

  

### Style Properties:

| Name | Description |
| --- | --- |
| \--exo-component-menu-item-label-white-space | Token to modify the white space of label in menu item. |

-   Usage:
    
    ```
    
    
    ```
    
    
    .your-class-name {
    \--exo-component-menu-item-label-white-space: nowrap;
    }
    
    
    ```
    
    
    
    
    ```
    

Integration

Build processes that transform and integrate data between systems.

Integration

Build processes that transform and integrate data between systems.

Option 1

Kangaroo

Kangaroo

Kangaroo

Integration

Build processes that transform and integrate data between systems.

Integration

Build processes that transform and integrate data between systems.

Option 1

Action variant

Menu Item as Link

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| selected | 
menu item selected or not

boolean

 | \- |  |
| variant | 

menu item variant

string

 | 

standard

 | `one of: standard | checkbox | navigation | radio | option | risky | basic | flex` |
| disabled | 

menu item disabled or not

boolean

 | \- |  |
| onItemSelect | 

The onchange event occurs when the value of an HTML element is selected.

\-

 | 

@onItemSelect

 | \- |
| prefixIconLabel | 

Custom native tooltip label for the prefix icon in ex-menu-item

string

 | \- |  |
| href | 

URL to navigate to when menu item is clicked (enables link behavior)

string

 | \- |  |

## Stories

### Default

Integration

Build processes that transform and integrate data between systems.

Integration

Build processes that transform and integrate data between systems.

Option 1

Kangaroo

Kangaroo

Kangaroo

Integration

Build processes that transform and integrate data between systems.

Integration

Build processes that transform and integrate data between systems.

Option 1

Action variant

Menu Item as Link

### Variants

Standard Risky Option

Standard Variant Risky Variant Option Variant

### Flex Variant

The **flex variant** allows arbitrary content in a `slot="flex"` that is vertically center-aligned with the label.

**Key Features:**

-   The slot width is auto by default but will not exceed 50% of the total menu-item width
-   The label will wrap or truncate as needed when the slot content grows
-   Inherits all standard variant behaviors (hover, focus, selected, disabled states)
-   Works with icons, secondary text, and all other standard properties
-   If no flex slot is provided, behaves exactly like the standard variant

**Use Cases:**

-   Adding badges or status indicators
-   Displaying keyboard shortcuts
-   Including toggle switches or other controls
-   Showing metadata or additional information alongside the label

Menu Item with Badge New

Short Label

Integration

Active

Very Long Label That Will Wrap When The Flex Slot Content Becomes Large

Custom Content

User Profile

Disabled Item Disabled

With Icon ⌘K

No Flex Slot (behaves like standard)
