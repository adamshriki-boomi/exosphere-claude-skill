---
id: "components-select--overview"
title: "Components/Select"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-select--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:48.528Z"
built_at: "2026-04-21T08:48:27.302Z"
---
# Select

-   Overview
-   Props
-   Variants
-   FAQ's

## Overview

Single select allows users to choose one option from a list of values.

## Types:

-   Single Select
-   Multi Select
-   Icon Type

Apple Banana Grape

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| label | 
The text shown above the select field that tells users what to pick.

string

 | 

""

 | Choose your Favorite Fruit |
| disabled | 

If true, users cannot open or change the select. It looks grayed out.

boolean

 | 

false

 |  |
| invalid | 

If true, the select shows an error style (like a red border).

boolean

 | 

false

 |  |
| required | 

If true, users must pick an option before submitting a form.

boolean

 | 

false

 |  |
| placeholder | 

The text shown inside the select before anything is picked.

string

 | 

Select

 | Select |
| selected | 

The value of the option that should be selected when the select first appears.

string

 | 

""

 |  |
| help-text | 

Extra text shown below the select to help users make a choice.

string

 | 

""

 | You can choose only single item. |
| showStatusIcon | 

If true, shows a status icon (like a checkmark or error) next to the help text.

boolean

 | 

false

 |  |
| footerType | 

Controls the style of the message below the select (info, success, warning, error).

string

 | 

info

 | `one of: info | success | error | warning` |
| info-text | 

Info text shown in a tooltip when hovering over the info icon next to the label.

string

 | 

""

 | Select a fruit |
| type | 

Lets you choose if users can pick one option or many.

string

 | 

false

 | `one of: SINGLE | MULTI` |
| hideClearIcon | 

If true, hides the clear (X) button that lets users remove their selection.

boolean

 | 

false

 |  |
| showSelectAll | 

If true, shows a "Select All" option when users can pick many options.

boolean

 | 

false

 |  |
| selectAllLabel | 

The label for the "Select All" option in multi-select mode.

string

 | 

""

 | All |
| enableTransition | 

Enables smooth transitions when opening and closing the select menu. When true, applies smooth movement animation with opacity transitions.

boolean

 | 

false

 |  |
| change | 

The change event occurs when the value of an HTML element is changed.

\-

 | 

@on-change

 | \- |
| error-msg | 

The message shown in red below the select when something is wrong.

\-

 | 

invalid input

 |  |
| name | 

The name used to identify this select field when submitting a form.

\-

 | \- | \- |
| supress-menu-width | 

Changes the width of the dropdown menu that appears when clicking the select.

\-

 |  |  |
| icon-type | 

Displays selected options as icons instead of text.

\-

 | 

false

 |  |
| statusIconLabel | 

Text that explains the status icon for people using screen readers.

string

 | \- |  |
| show-rich-content | 

If true, displays rich content (badges, pills) in the select options.

\-

 | 

false

 |  |

## Variants

### Multi Select

Multi select allows users to choose more than one option from a list of values.

### Icon Type

Icon type select enables users to select a single option from a list of icons, and upon making a selection, only the chosen icon is displayed.

India Copy community

## FAQ's

You can close the dropdown programmatically by calling the `closeDropdown()` public method on the component instance. This is particularly useful when you need to close open menus when a parent container scrolls.

Example:

```

import React, { useEffect } from "react";
import { ExSelect, ExMenuItem } from "@boomi/exosphere";

function App() {

  // Function to close dropdown
  const handleScroll = () => {
    const selectElement = document.querySelector("ex-select");
    // Check if element exists and method is available
    if (selectElement && typeof selectElement.closeDropdown === 'function') {
      selectElement.closeDropdown();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <div className="App" style={{ height: "200vh", padding: "20px" }}>
      <ExSelect label="Scroll to close me" placeholder="Select">
        <ExMenuItem value="Option 1">Option 1</ExMenuItem>
        <ExMenuItem value="Option 2">Option 2</ExMenuItem>
      </ExSelect>
    </div>
  );
}
export default App;

```

  

You can enable the 'Select All' option in the dropdown by passing the property `showSelectAll = {true}` to the component. By default, the label will display as 'All.' If you want to customize the text of the 'Select All' option, you can set the `selectAllLabel` property to your desired value, such as `selectAllLabel = 'Choose Everything'`.

  

You can enable multi-select functionality in the ex-select component by passing the property `type={SelectType.MULTI}`. This configuration allows users to select multiple options from the dropdown menu.

  

No, the ex-select component does not support search functionality. You can only select values from the predefined options in the dropdown. It does not allow users to type and search for an option.

  

You can preselect a value in the ex-select component by using the selected property. To set a default value, pass the desired menu item's value to selected, e.g., selected='Banana'. This ensures the value is preselected and displayed when the component renders for the first time.

Example:

```

<ExSelect label="Choose your Favorite Fruit" helpText="You can choose only single item." infoText="Select a fruit" placeholder="Select" type={SelectType.SINGLE} selected="Banana">
      <ExMenuItem data-id="firstMenuItem" value="Apple">Apple</ExMenuItem>
      <ExMenuItem data-id="secondMenuItem" value="Banana">Banana</ExMenuItem>
      <ExMenuItem data-id="thirdMenuItem" value="Grape">Grape</ExMenuItem>
    </ExSelect>

```

This configuration allows the value 'Banana' to be preselected in the dropdown.

  

You can retrieve the id of menu items in the onChange handler of the ex-select component by passing the data-id attribute to each ExMenuItem. When the onChange event is triggered, the selected item's data will be returned in the following format: `data: { index: Index of the selected menu item, id: The data-id value of the selected item }`

Here is an example showing how to implement and log the data-id of selected menu items:

```

import React from "react";
import "./App.css";
import { ExSelect, ExMenuItem, SelectType, ExButton,ButtonFlavor,ButtonType} from "@boomi/exosphere";

function App() {
  return (
    <ExSelect showSelectAll label="Choose your Favorite Fruit" helpText="You can choose only single item." infoText="Select a fruit" placeholder="Select" type={SelectType.SINGLE} onChange={(e)=>console.log(e)}>
      <ExMenuItem data-id="firstMenuItem" value="Apple">Apple</ExMenuItem>
      <ExMenuItem data-id="secondMenuItem" value="Banana">Banana</ExMenuItem>
      <ExMenuItem data-id="thirdMenuItem" value="Grape">Grape</ExMenuItem>
    </ExSelect>
  );
}
export default App;

```

This setup ensures that the onChange handler receives the data-id and index of the selected menu item whenever the selection changes.

  

You can clear or reset the selected value(s) of an ex-select component by calling the clear function. First, target the ex-select component using a DOM selector, then invoke the clear method to remove the selected value(s).

Example:

```

import React from "react";
import "./App.css";

import { ExSelect, ExMenuItem, SelectType, ExButton,ButtonFlavor,ButtonType} from "@boomi/exosphere";
import Select from "@boomi/exosphere/dist/components/select/select";

function App() {

  const handleClear = () => {
    const select = document.querySelector("ex-select") as Select;
      select?.clear();
  };

  return (
    <div className="App"> 
    <ExSelect showSelectAll label="Choose your Favorite Fruit" helpText="You can choose only single item." infoText="Select a fruit" placeholder="Select" type={SelectType.MULTI}>
      <ExMenuItem value="Apple">Apple</ExMenuItem>
      <ExMenuItem value="Banana">Banana</ExMenuItem>
      <ExMenuItem value="Grape">Grape</ExMenuItem>
    </ExSelect>
    <ExButton flavor={ButtonFlavor.PERIWINKLE} type={ButtonType.SECONDARY} slot="button" onClick={()=>handleClear()}>Action</ExButton>
    
    </div>
  );
}

export default App;

```

When the button is clicked, the handleClear function clears the selected values.
