---
id: "components-pillgroup--overview"
title: "Components/PillGroup"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-pillgroup--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:42.057Z"
built_at: "2026-04-21T08:48:27.300Z"
---
# PillGroup

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Behavior |  |
| overflow | 
Controls pill visibility on +n click: 'wrap' shows all pills, 'tooltip' hides pills in tooltip

string

 | 

wrap

 | `one of: tooltip | wrap` |
| showClear | 

Whether to show the clear all button

boolean

 | 

false

 |  |
| interactive | 

Whether pills are interactive by default

boolean

 | 

false

 |  |
| removable | 

Whether pills are removable by default

boolean

 | 

false

 |  |
| selected | 

Whether pills are selected by default

boolean

 | 

false

 |  |
| Content |  |
| values | 

Array of pill objects to display in the group. Each pill object can contain: label (string), icon (string), color (PillColor), size (PillSize), interactive (boolean), removable (boolean), selected (boolean)

\-

 | \- |  |
| Events |  |
| onRemove | 

Event fired when a pill is removed

\-

 | 

@onRemove

 | \- |
| onClear | 

Event fired when clear all button is clicked

\-

 | 

@onClear

 | \- |
| onClick | 

Event fired when a pill is clicked

\-

 | 

@onClick

 | \- |
| Appearance |  |
| disableFocusStyle | 

If true, disables the focus state styling

\-

 | 

false

 |  |
| size | 

Size applied to +n pill in the group

\-

 | 

regular

 | `one of: regular | large | small` |

## Stories

### Overflow Wrap

### Overflow Tooltip
