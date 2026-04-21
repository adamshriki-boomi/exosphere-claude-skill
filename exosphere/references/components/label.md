---
id: "components-label--overview"
title: "Components/Label"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-label--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:34.295Z"
built_at: "2026-04-21T08:48:27.297Z"
---
# Label

Default Label

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Content |  |
| text (or default slot) | 
The text content of the label. Alternatively, use the default slot.

string

 | \- | Default Label |
| Appearance |  |
| type | 

The type of label (default, parent), influencing its visual font weight and font size.

string

 | 

default

 | `one of: parent | default` |
| width | 

The width behavior of the label container.

Fluid: Takes up the entire horizontal width available.

Custom: Only takes up the specified width as per internal content

string

 | 

custom

 | `one of: fluid | custom` |
| text-color | 

Overrides the default text color of the label. Accepts any valid CSS color value in hexcode.

string

 | \- | 

 |
| State |  |
| required | 

Indicates if the label signifies a required field in a form. Leave this blank if you do not want to display this indicator.

boolean

 | 

""

 |  |
| toggletip |  |
| toggletip-content | 

Specifies the text content to be displayed in the toggletip popover. Leave this blank to disable the toggletip completely and hide the same.

string

 | \- |  |
| Slots |  |
| \[default\] | 

Alternative way to provide the label text content (overrides `text` property if used).

\-

 | \- | \- |

## Stories

### Default

Default Label

### Parent Type

Parent Label

### Fluid Width

Fluid Width Label

### Required

Required Label

### With Tooltip

Label with Tooltip

### Custom Color

Custom Color Label

### Combined

Important Section Title
