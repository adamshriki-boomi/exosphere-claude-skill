---
id: "components-chart--overview"
title: "Components/Chart"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-chart--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:21.036Z"
built_at: "2026-04-21T08:48:27.291Z"
---
Charts

Donut or Pie

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| showLegends | 
Legends of chart

boolean

 | 

true

 |  |
| hideLabel | 

Labels of donut chart

boolean

 | 

false

 |  |
| Height | 

Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| thickness | 

Thickness of the chart

number

 | 

80

 |  |
| legendShape | 

Shape of legend

string

 | 

square

 | `one of: square | circle` |
| title | 

Sub label of the chart

string

 | \- |  |
| showLegendValue | 

Show values of legends

boolean

 | 

false

 |  |
| showTotalEntitlement | 

Show total entitlement value in the center of the donut chart

boolean

 | 

false

 |  |
| totalEntitlementValue | 

Total entitlement value to show as denominator (used/total format)

object

 | 

undefined

 |  |
| tooltipHeader | 

Header of the tooltip

string

 | 

""

 | Course Catalog API |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Production |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| legendLength | 

Length of the legend label

number

 | \- |  |
| marginBottom | 

Margin at the bottom of the chart

object

 | \- |  |
| horizontalPlaceholder | 

Show legends horizontally when data is empty (mirrors new layout placement)

boolean

 | 

false

 |  |
| useNewLayout | 

Use the new layout for the donut chart

\-

 | 

false

 |  |

Spider / Radar Chart

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| height | 
Height of the chart

number

 | \- |  |
| width | 

Width of the chart

number

 | \- |  |
| unit | 

Unit of values in tooltip

string

 | 

stars

 | stars |
| foregroundColor | 

Color of inside chart

string

 | var(--exo-color-data-solid-blue) | var(--exo-color-data-solid-blue) |
| backgroundColor | 

Color in the background

string

 | var(--exo-color-background-secondary-selected-weak) | var(--exo-color-background-secondary-selected-weak) |
| strokeColor | 

Color of the stroke lines

string

 | var(--exo-color-border) | var(--exo-color-border) |
| maxValue | 

Maximum value of the chart

number

 | \- |  |
| tooltip | 

Shows tooltip

boolean

 | 

true

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |

Half Donut or Half Pie

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| showLegends | 
Legends of chart

boolean

 | 

false

 |  |
| height | 

Height of the chart

number

 | \- |  |
| width | 

Width of the chart

number

 | \- |  |
| tooltipHeader | 

Header of the tooltip

string

 | 

""

 | Course Catalog API |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Production |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| compactNumberInTitle | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| thickness | 

Thickness of the arc

number

 | \- |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |
| Note | 

The recommended minimum size for the half-donut chart is 240px. If you are using a size smaller than that, ensure the value text does not overlap with the chart.

\-

 | \- | \- |

Line with Time Scale

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Height | 
Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Response Time (Seconds) |
| hideXAxis | 

Hide X Axis for chart

boolean

 | 

false

 |  |
| hideYAxis | 

Hide Y Axis for chart

boolean

 | 

false

 |  |
| hideGrid | 

Hide grid for chart

boolean

 | 

false

 |  |
| scaleXType | 

Type of scale X

string

 | 

time

 | \- |
| paddingBottom | 

Add padding value on x axis in numbers

number

 | 

0

 |  |
| paddingRight | 

Add padding value on y axis in numbers

number

 | 

0

 |  |
| xAxisLabelDirection | 

x axis direction

string

 | 

slanted

 | `one of: straight | slanted` |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| showLegends | 

Show chart legend

boolean

 | 

true

 |  |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| legendLength | 

Length of the legend label

number

 | \- |  |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |

Line without Time Scale

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Height | 
Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Custom Tooltip Subheader |
| hideXAxis | 

Hide X Axis for chart

boolean

 | 

false

 |  |
| hideYAxis | 

Hide Y Axis for chart

boolean

 | 

false

 |  |
| hideGrid | 

Hide grid for chart

boolean

 | 

false

 |  |
| paddingBottom | 

Add padding value on x axis in numbers

number

 | 

0

 |  |
| paddingRight | 

Add padding value on y axis in numbers

number

 | 

0

 |  |
| xAxisLabelDirection | 

x axis direction

string

 | 

slanted

 | `one of: straight | slanted` |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| showLegends | 

Legends of chart

boolean

 | 

true

 |  |
| legendLength | 

Length of the legend label

number

 | \- |  |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| compactNumberYaxis | 

Shows K, M, B, T for big Y axis numbers

boolean

 | 

false

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |

Line with Ordinal scale

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Height | 
Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Custom Tooltip Subheader |
| hideXAxis | 

Hide X Axis for chart

boolean

 | 

false

 |  |
| hideYAxis | 

Hide Y Axis for chart

boolean

 | 

false

 |  |
| hideGrid | 

Hide grid for chart

boolean

 | 

false

 |  |
| scaleXType | 

Type of scale X

string

 | 

ordinal

 | \- |
| paddingBottom | 

Add padding value on x axis in numbers

number

 | 

0

 |  |
| paddingRight | 

Add padding value on y axis in numbers

number

 | 

0

 |  |
| xAxisLabelDirection | 

x axis direction

string

 | 

slanted

 | `one of: straight | slanted` |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| legendLength | 

Length of the legend label

number

 | \- |  |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |
| showLegends | 

Legends of chart

\-

 | 

true

 |  |

Area With Scales

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Height | 
Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Custom Tooltip Subheader |
| hideXAxis | 

Hide X Axis for chart

boolean

 | 

false

 |  |
| hideYAxis | 

Hide Y Axis for chart

boolean

 | 

false

 |  |
| hideGrid | 

Hide grid for chart

boolean

 | 

false

 |  |
| paddingBottom | 

Add padding value on x axis in numbers

number

 | 

0

 |  |
| paddingRight | 

Add padding value on y axis in numbers

number

 | 

0

 |  |
| xAxisLabelDirection | 

x axis direction

string

 | 

slanted

 | `one of: straight | slanted` |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| legendLength | 

Length of the legend label

number

 | \- |  |
| compactNumberYaxis | 

Shows K, M, B, T for big Y axis numbers

boolean

 | 

false

 |  |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

false

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |
| showLegends | 

Legends of chart

\-

 | 

true

 |  |

Area with Ordinal scale

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Height | 
Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Custom Tooltip Subheader |
| hideXAxis | 

Hide X Axis for chart

boolean

 | 

false

 |  |
| hideYAxis | 

Hide Y Axis for chart

boolean

 | 

false

 |  |
| hideGrid | 

Hide grid for chart

boolean

 | 

false

 |  |
| scaleXType | 

Type of scale X

string

 | 

ordinal

 | \- |
| paddingBottom | 

Add padding value on x axis in numbers

number

 | 

0

 |  |
| paddingRight | 

Add padding value on y axis in numbers

number

 | 

0

 |  |
| xAxisLabelDirection | 

x axis direction

string

 | 

slanted

 | `one of: straight | slanted` |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| legendLength | 

Length of the legend label

number

 | \- |  |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |
| showLegends | 

Legends of chart

\-

 | 

true

 |  |

Area Without Scales

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Height | 
Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Custom Tooltip Subheader |
| hideXAxis | 

Hide X Axis for chart

boolean

 | 

true

 |  |
| hideYAxis | 

Hide Y Axis for chart

boolean

 | 

true

 |  |
| hideGrid | 

Hide grid for chart

boolean

 | 

true

 |  |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| legendLength | 

Length of the legend label

number

 | \- |  |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |
| showLegends | 

Legends of chart

\-

 | 

true

 |  |

Area With Scales

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Height | 
Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Custom Tooltip Subheader |
| hideXAxis | 

Hide X Axis for chart

boolean

 | 

false

 |  |
| hideYAxis | 

Hide Y Axis for chart

boolean

 | 

false

 |  |
| hideGrid | 

Hide grid for chart

boolean

 | 

false

 |  |
| paddingBottom | 

Add padding value on x axis in numbers

number

 | 

0

 |  |
| paddingRight | 

Add padding value on y axis in numbers

number

 | 

0

 |  |
| xAxisLabelDirection | 

x axis direction

string

 | 

slanted

 | `one of: straight | slanted` |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| legendLength | 

Length of the legend label

number

 | \- |  |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

false

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |
| showLegends | 

Legends of chart

\-

 | 

true

 |  |

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Height | 
Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| barWidth | 

width of the bar

string

 | 

large

 | `one of: small | medium | large` |
| compactNumberYaxis | 

Shows K, M, B, T for big Y axis numbers

boolean

 | 

false

 |  |
| tooltipSubHeader | 

Sub header of the tooltip

object

 | 

""

 |  |
| hideXAxis | 

Hide X Axis for chart

boolean

 | 

true

 |  |
| visible | 

Show the tooltip

boolean

 | 

true

 |  |
| paddingBottom | 

Add padding value on x axis in numbers

number

 | 

0

 |  |
| paddingRight | 

Add padding value on y axis in numbers

number

 | 

0

 |  |
| xAxisLabelDirection | 

x axis direction

string

 | 

slanted

 | `one of: straight | slanted` |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| Show legends | 

Show Legends of chart

boolean

 | 

true

 |  |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| legendLength | 

Length of the legend label

number

 | \- |  |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| reverse | 

In reverse case it shows from top to bottom

boolean

 | 

false

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |
| useNewLayout | 

Use the new layout for the stack bar chart

\-

 | 

false

 |  |

Bar Chart

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Height | 
Height of the chart

number

 | \- |  |
| Width | 

Width of the chart

number

 | \- |  |
| barWidth | 

width of the bar

string

 | 

large

 | `one of: small | medium | large` |
| compactNumberYaxis | 

Shows K, M, B, T for big Y axis numbers

object

 | 

false

 |  |
| tooltipSubHeader | 

Sub header of the tooltip

string

 | 

""

 | Frequency |
| hideXAxis | 

Hide X Axis for chart

boolean

 | 

true

 |  |
| visible | 

Show the tooltip

boolean

 | 

true

 |  |
| paddingBottom | 

Add padding value on x axis in numbers

number

 | 

0

 |  |
| paddingRight | 

Add padding value on y axis in numbers

number

 | 

0

 |  |
| xAxisLabelDirection | 

value can be default or straight

string

 | 

slanted

 | `one of: straight | slanted` |
| unit | 

Unit of values in chart

string

 | 

mg

 | mg |
| showLegends | 

Legends of chart

boolean

 | 

true

 |  |
| legendAlignment | 

Legend Alignment

string

 | 

center

 | `one of: left | center | right` |
| legendLength | 

Length of the legend label

number

 | \- |  |
| compactNumber | 

Shows K, M, B, T for big numbers

boolean

 | 

true

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |
| useNewLayout | 

Use the new layout for the stack bar chart

\-

 | 

false

 |  |

Grouped Bar Chart

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| height | 
height of the chart

number

 | \- |  |
| width | 

width of the chart

number

 | \- |  |
| barWidth | 

width of the bar

number

 | \- |  |
| enableSubcategoryTooltip | 

Separate the tooltip for each bar in grouped-bar chart

boolean

 | 

false

 |  |
| showXTicks | 

Show the tick on x axis

boolean

 | 

true

 |  |
| compactNumberYaxis | 

Shows K, M, B, T for big Y axis numbers

boolean

 | 

false

 |  |
| showYTicks | 

Show the tick on y axis

boolean

 | 

true

 |  |
| showLegends | 

Legends of chart

boolean

 | 

true

 |  |
| yTickInterval | 

Interval for y axis values

number

 | 

0.2

 |  |
| showGridLines | 

show/hide grid lines

boolean

 | 

true

 |  |
| tooltip | 

show/hide tooltip

boolean

 | 

true

 |  |
| legendShape | 

Shape of legend

\-

 | 

square

 | `one of: square | circle` |
| legendAlignment | 

Legend Alignment

\-

 | 

center

 | `one of: left | center | right` |
