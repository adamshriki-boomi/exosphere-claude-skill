---
id: "components-combobox--overview"
title: "Components/Combobox"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-combobox--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:23.352Z"
built_at: "2026-04-21T08:48:27.292Z"
---
# Combobox

-   Overview
-   Props
-   Variants
-   FAQ's

## Overview

Combobox combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.

## Types:

-   Default Combobox
-   Single Combobox
-   Multi Combobox

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| placeholder | 
Combobox placeholder text

string

 | \- | Select items |
| disabled | 

Disable the Combobox

boolean

 | 

false

 |  |
| readonly | 

Readonly Combobox

boolean

 | 

false

 |  |
| invalid | 

Combobox invalid attribute

boolean

 | 

false

 |  |
| required | 

Combobox required attribute

boolean

 | 

false

 |  |
| optional | 

Combobox optional attribute

boolean

 | 

false

 |  |
| loader | 

Combobox with loader

boolean

 | 

false

 |  |
| showClear | 

Combobox with show clear all button

boolean

 | 

false

 |  |
| selectAllMenuItem | 

Combobox with selectAllMenuItem

boolean

 | 

false

 |  |
| label | 

Combobox label

string

 | 

""

 | Place your order |
| info-text | 

Info text for Combobox label

string

 | 

""

 | Select items from the dropdown list |
| help-text | 

Help text for Combobox

string

 | 

""

 | You can choose multiple items. |
| size | 

width of the combobox

string

 | 

default

 | `one of: default | large | standard | medium | small` |
| comboboxOptions | 

Combobox options

array

 | \- | 

comboboxOptions : \[

0 : {...} 3 keys

1 : {...} 2 keys

2 : {...} 2 keys

3 : {...} 2 keys

4 : {...} 2 keys

5 : {...} 2 keys

6 : {...} 2 keys

7 : {...} 2 keys

8 : {...} 2 keys

9 : {...} 2 keys

10 : {...} 2 keys

11 : {...} 2 keys

12 : {...} 2 keys

13 : {...} 2 keys

14 : {...} 2 keys

15 : {...} 2 keys

16 : {...} 2 keys

17 : {...} 2 keys

18 : {...} 2 keys

\]

 |
| defaultValues | 

Default selected option/options

array

 | \- | 

defaultValues : \[

\]

 |
| inputValue | 

Combobox value attribute

string

 | 

""

 |  |
| searchIcon | 

Add search icon

boolean

 | 

false

 |  |
| menuHeight | 

Height of the combobox menu

string

 | 

default

 | `one of: default | medium | large` |
| tooltipText | 

tooltipText for clear button

string

 | 

""

 | Clear |
| strategy | 

Determines how the popup is positioned

string

 | 

absolute

 | `one of: absolute | fixed` |
| showStatusIcon | 

Show status icon in help text

boolean

 | 

false

 |  |
| autoComplete | 

Automated assistance from browser in filling out combobox field

string

 | 

on

 | off |
| type | 

Combobox Variant Type

string

 | 

input

 | `one of: input | standard` |
| select | 

Combobox Select Type

string

 | 

DEFAULT

 | `one of: single | multi | default` |
| expand | 

string

 | \- | medium |
| footerType | 

Combobox Footer Type

string

 | 

info

 | `one of: info | success | error | warning` |
| noResultText | 

text to show for incorrect search

string

 | 

""

 | Please select valid option |
| noOptionText | 

text to show under menu when there are no options left

string

 | 

""

 | No more options available |
| hideClearIcon | 

hide clear Icon button in combobox input field

boolean

 | 

false

 |  |
| enableTransition | 

Enables smooth transitions when opening and closing the combobox menu. When true, applies smooth movement animation with opacity transitions.

boolean

 | 

false

 |  |
| maxLength | 

Specifies the maximum number of characters allowed in the search input field.

object

 | 

null

 |  |
| onChange | 

The onchange event occurs when the value of an HTML element is changed.

\-

 | 

@on-change

 | \- |
| onInput | 

The oninput event occurs when an element gets input.

\-

 | 

@on-input

 | \- |
| onRemove | 

The remove event occurs when we remove any selected pill

\-

 | 

@remove

 | \- |
| onClear | 

The clear event occurs when clear all button is clicked

\-

 | 

@clear

 | \- |
| onSelectionChange | 

The event occurs when the selected values in the combobox change.

\-

 | 

@on-selection-change

 | \- |
| error-msg | 

Help text for Combobox

\-

 | 

""

 |  |
| searchSize | 

Combobox expand the search size

\-

 | 

medium

 | `one of: medium | large` |
| searchIconLabel | 

Custom native tooltip label for the search icon in ex-combobox

string

 | \- |  |
| statusIconLabel | 

Custom native tooltip label for the status icon in ex-combobox

string

 | \- |  |
| dynamicMenuItemWidth | 

Allow menu items to have dynamic width based on content

\-

 | 

false

 |  |

## Variants

### Default Combobox

Default Combobox allows users to select multiple options from a dropdown list. Upon selection, the chosen values are displayed as pills outside the Combobox, providing a clear and organized view of the selections.

### Single Combobox

Single Combobox is designed to function as a single-select component with a built-in search feature. When a selection is made, the selected value is displayed within the Combobox input field but not in pill form.

### Multi Combobox

Multi Combobox allows users to choose multiple options from a list, displaying the selected values in pill form inside the dropdown itself. This provides a clear and organized way to review selected items directly within the Combobox dropdown area.

## FAQ's

To retrieve the key of an item after making a selection from the ExCombobox dropdown, you can use the data-key property in the comboboxOptions or menu items. When the on-change event is triggered, the selected item's key value can be accessed under `data: { key: "your key value" }`.

  

To show options grouped under specific categories in the combobox dropdown, you can use the category property in the comboboxOptions array. Each option can be assigned to a category, and the combobox will display them accordingly. Example:

```

const ComboboxOptions = [
  {
    value: "corn-quesadilla",
    label: "Corn Quesadilla",
    category: "Category1",
  },
  {
    value: "flour-quesadilla",
    label: "Flour Quesadilla",
    category: "Category1",
  },
  {
    value: "stuffed-quesadilla",
    label: "Stuffed Quesadilla",
    category: "Category2",
  },
  {
    value: "premium-quesadilla",
    label: "Premium Quesadilla",
    category: "Category2",
  },
];

```

  

The `defaultValues` property is used for preselection of values in both single-select and multi-select combobox components. By setting this property, you can specify which value(s) should be preselected when the combobox is rendered.

  

No, the combobox component is not slot-based. Instead of using slots, you pass the data directly through the comboboxOptions property. This allows you to define the options programmatically, which are then rendered in the dropdown. You can pass the data like this in comboboxOptions property:

```

const ComboboxOptions = [
  {
    value: "corn-quesadilla",
    label: "Corn Quesadilla",
  },
  {
    value: "flour-quesadilla",
    label: "Flour Quesadilla",
  },
  {
    value: "stuffed-quesadilla",
    label: "Stuffed Quesadilla",
  },
  {
    value: "premium-quesadilla",
    label: "Premium Quesadilla",
  },
];

```

  

Yes, the combobox component supports a search functionality. When users type into the combobox, it filters and displays options that match the entered text. This feature is built-in, enabling a seamless search experience within the dropdown options.

  

Yes, the combobox component supports asynchronous data handling. This means you can dynamically populate the comboboxOptions after fetching data from an API. You can initially render the combobox without options and later update it with data from the server.
