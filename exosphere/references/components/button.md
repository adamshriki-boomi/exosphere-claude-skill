---
id: "components-button--overview"
title: "Components/Button"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-button--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:17.940Z"
built_at: "2026-04-21T08:48:27.290Z"
---
# Button

-   Overview
-   Props
-   Usage
-   Variants
-   Change log

## Overview

Buttons allow users to trigger an action or event with a single click. For example, you can use a button for allowing the functionality of submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Features:

-   Shadow DOM
-   Defaults to `<div>`
-   Redefine element using `as` prop

Button

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Behavior |  |
| as | 
Renders the component as a button or an anchor tag.

string

 | 

button

 | `one of: button | anchor` |
| Button type | 

Specifies the native HTML button type: 'button', 'submit', or 'reset'.

string

 | 

button

 | `one of: button | submit | reset` |
| href | 

The URL for the link. Only used when `as` is `anchor`.

\-

 | 

""

 |  |
| target | 

Tells the browser where to open the link. Only used when `as` is `anchor`.

\-

 | 

""

 | `one of: _blank | _self | _parent | _top` |
| rel | 

The relationship of the linked URL. Only used when `href` is set.

\-

 | 

""

 |  |
| Appearance |  |
| flavor | 

Specifies the color or theme of the button.

string

 | 

base

 | `one of: base | periwinkle | branded | risky | tab` |
| type | 

Specifies the visual style of the button, like primary or secondary.

string

 | 

primary

 | `one of: primary | secondary | tertiary` |
| size | 

Sets the size (height and width proportionally) of the button (e.g., small, medium, large).

string

 | 

default

 | `one of: small | default | large` |
| on | 

When true, applies on styling. Only works with BRANDED flavor and SECONDARY/TERTIARY buttons.

boolean

 | 

false

 |  |
| Content |  |
| text | 

The text displayed inside the button.

string

 | 

button

 | Button |
| State |  |
| disabled | 

Disables the button, making it non-interactable.

boolean

 | 

false

 |  |
| Indicators |  |
| indicator | 

Controls the notification indicator. Attribute values: 'true' (dot), number (count), 'false' (hide), empty (dot). Property values: true (dot), number (count), false/0/undefined (hide).

object

 | 

undefined

 |  |
| Events |  |
| onClick | 

Function that is triggered when the button is clicked.

\-

 | 

@click

 | \- |
| onContextMenu | 

Function that is triggered when the user right-clicks the button to open the context menu.

\-

 | 

@contextmenu

 | \- |

## Usage

-   Buttons may contain icon, on the left side
-   Use 8 px spacing between buttons
-   Replace text with a loader if action is submitted, but still processing
    
-   Button width is set by it’s content, avoid changing it width
-   Use only one primary button, and any remaining calls to action should be represented as lower emphasis buttons
    

If you need to use icon as button with no text, check out component

## Variants

### Button Flavors

There can be more than one button in a screen, but to create the hierarchy of actions we need to use button flavor.

Base Branded Risky Periwinkle

### Button Types

There can be more than one button in a screen, but to create the hierarchy of actions we need to use button kinds.

Primary Secondary Tertiary

### Button Sizes

Small Default Large

### Button Fluid

Fluid

### Disabled

Set disable button for something that isn’t usable. Use a tooltip on hover in order to indicate the reason of the disabled action.

Primary Secondary Tertiary

### Button With Icons

Save Rename Warning PERIWINKLE

### Button With Indicators

#### Dot Indicator (indicator = true)

Message Filter Risky Dot

#### Count Indicator (indicator = number)

Filter (3) Downloads (12) Show (1) Count (99)

#### No Indicator (indicator = false, 0, undefined)

Indicator False Indicator Zero Indicator Undefined
