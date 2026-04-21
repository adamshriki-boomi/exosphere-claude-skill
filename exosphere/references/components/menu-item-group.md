---
id: "components-menu-item-group--overview"
title: "Components/Menu Item Group"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-menu-item-group--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:37.230Z"
built_at: "2026-04-21T08:48:27.299Z"
---
# Menu Item Group

  

### Style Properties:

| Name | Description |
| --- | --- |
| \--exo-component-menu-header-font | Token to adjust the menu item group header font. |
| \--exo-component-menu-header-min-height | Token to adjust the menu item group header min height. |
| \--exo-component-menu-height | Token to adjust the height of menu item group component. |
| \--exo-component-menu-header-gap | Token to adjust the menu item group header gap. |
| \--exo-component-menu-header-height | Token to adjust the menu item group header height. |
| \--exo-component-menu-item-padding-left | Token to adjust the padding left of menu item group component. |

-   Usage:
    
    ```
    
    
    ```
    
    
    .your-class-name {
    \--exo-component-menu-header-font: 50px;
    \--exo-component-menu-header-min-height: var(\--exo-spacing-none);
    \--exo-component-menu-height: calc(var(\--exo-size-1) / 4);
    \--exo-component-menu-header-gap: var(\--exo-spacing-4x-large);
    \--exo-component-menu-header-height: calc(
    (0.4 \* var(\--exo-size-1)) - var(\--exo-spacing-2x-small)
    );
    \--exo-component-menu-item-padding-left: var(\--exo-spacing-none);
    }
    
    
    ```
    
    
    
    
    ```
    

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| onSelect | 
The onselect event occurs after some text has been selected in an element.

\-

 | 

@onSelect

 | \- |
