---
id: "components-tooltip-design-docs--overview"
title: "Components/Tooltip/Design Docs"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-tooltip-design-docs--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:58.458Z"
built_at: "2026-04-21T08:48:27.306Z"
---
# Tooltip

OverviewGuidelinesAccessibility

Tooltips and toggletips display additional contextual information about things that are displayed on the screen, such as, supplemental information, help text, or definitions. They are positioned next to the item that they are referencing. You should never use tooltips or toggletips for information that is necessary for users to understand in order to complete their workflow. Consider something like helper text instead.

#### What is a tooltip?

-   Tooltips differ from toggletips because they CANNOT contain operable elements within and are triggered by HOVER or FOCUS
    
-   Use tooltips when you need to display nice to have, additional information only. No additional interactions needed.
    
-   When you need links or buttons within, then use a toggletip instead
    

![tooltip image](https://exosphere.boomi.com/assets/tt1-273a9cd3.svg)

Tooltip

#### **What is a toggletip?**

-   Toggletips can be used to display nice to have, additional information that may provide an interaction such as a link
    
-   If you just have informational content with no interactions, use a tooltip instead
    

![tooltip image](https://exosphere.boomi.com/assets/tt1-273a9cd3.svg)

Toggletip

### External links

-   [Figma link](https://www.figma.com/file/5pcDxnIHcN8uaggjQ1Erlg/branch/SdEozM3UxBsSgjoGtufdDU/Core-Components?node-id=7193%3A2330&t=AblTyFsTBEUvmWSw-1)
    
-   Storybook Link ([Toggletip](https://exosphere.boomi.com/?path=/docs/components-toggletip--default) and [Tooltip](https://exosphere.boomi.com/?path=/docs/components-tooltip--default))
