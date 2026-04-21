---
id: "components-menu--overview"
title: "Components/Menu"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-menu--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:36.584Z"
built_at: "2026-04-21T08:48:27.298Z"
---
Menu

  

### Style Properties:

Style PropertiesUsage

```

--exo-component-menu-header-overflow-y | Token to adjust the overflow of menu group component.

```

  

### Navigation

Option 1 Option 2

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| width | 
width of the menu

string

 | 

default

 | `one of: default | medium | large | x-large | xx-large | fluid | full-fluid` |
| height | 

height of the menu

string

 | 

default

 | `one of: default | medium | large` |
| onSelect | 

The onselect event occurs after some text has been selected in an element.

\-

 | 

@onSelect

 | \- |
| customWidth | 

Custom Width of the menu. for example 120

\-

 | \- |  |

## Default & Variants

Menus can be customized to contain any other existing component in Exosphere, but we've prebuilt the following for you for ease:

1.  Navigation (prebuilt)
2.  Completing actions (prebuilt)
3.  Custom (blank)

## Navigation menus

Navigation menus are used to navigate to different pages. Navigation menus have the option of having a header and toggle along with the body text:

Integration 1

Build processes that transform and integrate data between systems.

Integration 2

Build processes that transform and integrate data between systems.

## Completing actions

Menus that help complete actions have the following variants:

## Standard

## Option

## Radio

## Checkbox

## Menu category navigation variant

## With category

## With select all

## With search

## With pill

## With Long label

## With Non Interactive label

If you want to have a menu with label which have no interactions(no select all, no collapse/expand functionality) then you can pass one property in "ex-menu-item" component => "category-without-arrow" and it will be applied to every "ex-menu-item" that is present in "ex-menu-item-group" component.

## With Secondary Text

## With Icon
