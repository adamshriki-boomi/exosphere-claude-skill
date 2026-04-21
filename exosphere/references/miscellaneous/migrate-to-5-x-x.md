---
id: "miscellaneous-migrate-to-5-x-x--overview"
title: "Miscellaneous/Migrate to 5.x.x"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=miscellaneous-migrate-to-5-x-x--overview&viewMode=docs"
scraped_at: "2026-04-21T08:44:05.741Z"
built_at: "2026-04-21T08:48:27.311Z"
---
# Migrating to 5.x.x

  

This guide outlines the steps and changes required to migrate your Exosphere project from version 4.x.x to 5.x.x. It covers key updates, deprecated features, and new additions to help you transition smoothly.

## Table of Contents

1.  Components
    
    -   Accordion
    -   Accordion Item
    -   Avatar
    -   Button
    -   Carousel
    -   Checkbox
    -   Combobox
    -   Date Picker
    -   Dialog
    -   Empty State
    -   Icon Button
    -   Input
    -   JSON Editor
    -   Left Menubar
    -   Segmented Control
    -   Segmented Controls
    -   Select
    -   Tab Item
    -   Tab
    -   Table
    -   Textarea
    -   Tile
    -   Wizard

## Components

This section will help you migrate your Components.

### Accordion

-   UI updates to enhance accessibility.
-   `version` property has been removed, use `variant` property, of type `AccordionVariant`, instead.

  

### Accordion Item

-   UI updates to enhance accessibility.
-   `accordion-item-toggle` event name has been renamed to `on-toggle`.
-   `leading-icon` property has been introduced to add icons before the accordion item title.
-   `version` property has been removed, use `variant` property, of type `AccordionVariant`, instead.

  

### Avatar

-   `size` property, of type `AvatarSize`, has been introduced with two options - `large` and `small`.
-   UI updates.

  

### Button

-   `BOOMI_AI` Button Flavor has been removed. use `PERIWINKLE` instead.

  

### Carousel

-   UI updates.
-   Added Carousel with new four different `layouts`.

  

### Checkbox

-   `allowControlledOnChange` property has been removed.

  

### Combobox

The Combobox component has undergone several changes to improve usability and flexibility:

-   **UI Enhancements**: The Combobox component has been updated with a more modern and accessible design. These changes are aimed at improving the user experience and visual consistency across the application.
    
-   **New Property**:
    
    -   **`selectAllMenuItem`**: This property can be used to enable/disable selectAll option inside dropdown.
    -   **`footerType`**: This property is added to to change appearance of help text. It has four options `info, success, error, warning`.
    -   **`type`**: This property introduces two options `INPUT` and `STANDARD`, `ComboboxType.INPUT` is for when you dont need Up/Down Caret inside combobox, `ComboboxType.STANDARD` is when you want to have Up/Down Caret inside combobox.
    -   **`select`**: This property introduces three options `SINGLE` , `MULTI` and `DEFAULT`. `ComboboxSelect.MULTI` is for multiple selection of values inside dropdown , `ComboboxSelect.SINGLE` is for single selection of value type and `ComboboxSelect.DEFAULT` is for multiple selection of values shown outside the dropdown(By default).
    -   **`noResultText`**: This property is to configure the text which is shown inside dropdown when you search something and doesn't have any results to show.
    -   **`noOptionText`**: This property is to configure the text which is shown inside dropdown when you select every options under dropdown and it doesn't have any options to show.
    -   **`searchSize`**: This property introduces two options `MEDIUM` and `LARGE`, `ComboboxSearchSize.LARGE` is for when you want to use bigger size of Combobox.
    -   **`autoComplete`**: This property by default is "on" , it shows automated assistance from browser but it can be disabled by passing "off".
-   **Removal of `singleSelect` and `removeMarginBottom` Property**: The `singleSelect` property have been removed. Instead, we’ve introduced `select` property using `select` as `ComboboxSelect.SINGLE` , we can achieve similar functionality as singleSelect. `removeMarginBottom` property has been removed as we have removed default margin-bottom which was present before, so now there is no need to have this property.
    
-   **`showClear`** - this property default value has been changed to `false`, previously it was `true`.
    

  

### Date Picker

-   UI Enhancements
-   `footerType` property, of type `DatePickerFooterType`, has been introduced with two options - `info`, `success`, `erroe` and `warning`.
-   `useIconButton` property has been introduced to add date picker icon button
-   `showStatusIcon` property has been introduced to add status icon to help-text
-   `info-text` property has been introduced to add info icon to the label with tooltip
-   `tooltipText` property has been introduced to add tooltip text to icon button calender
-   `slot name="help-text"` slot has been removed. Instead, the help text is now passed directly through the help-text property.

  

### Dialog

-   `addBodyMargin` property has been removed.
-   `DEFAULT` Dialog Variant has been removed. use `SPACED` instead

  

### Empty State

The Empty State component has undergone several changes to improve usability and flexibility:

-   **UI Enhancements**: The Empty State component has been updated with a more modern and accessible design. These changes are aimed at improving the user experience and visual consistency across the application.
    
-   **New Property: `linkTarget`**: We've introduced a new property, `linkTarget`, which allows you to specify the target attribute for links within the Empty State component. This property determines where the linked document will open (e.g., in a new tab or the current window).
    
-   **Removal of `icon` and `hideIcon` Properties**: The `icon` and `hideIcon` properties have been removed. Instead, we’ve introduced a slot name `header` that allows you to define custom content for the empty state header. This change offers greater flexibility in customizing the Empty State component.
    

  

### Icon Button

-   `BOOMI_AI` Icon Button Flavor has been removed. use `PERIWINKLE` instead

  

### Input

-   `removeMarginBottom` property has been removed. Adding margin is not allowed.

  

### JSON Editor

-   `enableCode` property has been removed. use `dangerouslyUseHTML` instead.

  

### Left Menubar

-   Added `showAvatar` property to display the avatar.
-   Introduced `firstName` and `lastName` properties to show the user's name alongside the avatar.
-   UI updates.

  

### Segmented Control

-   Made UI updates.

  

### Segmented Controls

-   Made UI updates.
-   Added new [Info Text](?path=/docs/components-segmented-controls--docs) in label.

  

### Select

The Select component has undergone several changes to improve usability and flexibility:

-   **UI Enhancements**: The Select component has been updated with a more modern and accessible design. These changes are aimed at improving the user experience and visual consistency across the application.
    
-   **New Property**: **`type`** and **`footerType`**: We've introduced two new properties, `type` with two options `SINGLE` and [MULTI](?path=/story/components-select--multi-select). `MULTI` is for multiple select type , and `SINGLE` is for single select type which is by default value for select component.**`footerType`** property is added to to change appearance of help text. It has four options `info, success, error, warning`.
    
-   **Removal of `singleSelect` and `removeMarginBottom` Property**: The `singleSelect` property have been removed. Instead, we’ve introduced `type` property using `type` as `SelectType.SINGLE` , we can achieve similar functionality as singleSelect. `removeMarginBottom` property has been removed as we have removed default margin-bottom which was present before, so now there is no need to have this property.
    
-   Event name has been changed from `on-change` to `change`.
    
-   Previously we didn't need to pass any properties to `<ex-menu-item> or <ExMenuItem>` in slot, but as of this update we need to pass `value` for select to work properly.
    
-   The `strategy` property has been removed , it has been changed to fixed by default.
    

  

### Tab Item

-   Made UI updates.
-   Added [disabled](?path=/docs/components-tab-item--docs) property.

  

### Tab

-   Made UI updates.
-   Added new [Default](?path=/story/components-tab--default) and [Compact](?path=/story/components-tab--compact) variants.
-   Added Tabs with [divider](?path=/story/components-tab--with-divider) example.

  

### Table

-   `THead, TBody, Tr, Td, TSubheader, Th, TdGroup` have been removed.

  

### Textarea

-   `enablecode` property has been removed. use `dangerouslyUseHTML` instead.

  

### Tile

-   UI updates.
-   `borderless` and `removePadding` properties have been removed.
-   `variant` property, of type `TileVariant`, has been introduced with two options - `base` and `base-alt`.
-   `rel` property has been introduced. This functions same as the anchor rel property.
-   `click` event has been introduced. This event will be emitted when `href` is not provided.

  

### Wizard

-   `DEFAULT` Wizard Type has been removed.
-   `DEFAULT, INPROGRESS, ERROR, COMPLETE` Wizard Status have been removed.
-   `status` property has been removed.
