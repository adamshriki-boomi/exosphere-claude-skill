---
id: "components-loader--overview"
title: "Components/Loader"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-loader--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:35.213Z"
built_at: "2026-04-21T08:48:27.298Z"
---
# Loader

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| spinnerSize | 
\[for spinnerLoader only\] Controls how large or small the loading spinner appears. Choose from different predefined sizes to match your layout needs.

string

 | 

medium

 | `one of: xx-small | x-small | small | medium | large` |
| backdrop | 

\[for spinnerLoader only\] Adds a semi-transparent overlay behind the loader to block interaction with the content underneath while loading.

boolean

 | \- |  |
| inline | 

\[for spinnerLoader only\] Displays the loader inline with other content instead of as a standalone block element.

boolean

 | \- |  |
| variant | 

Selects the loader's visual style or type.

\-

 | 

spinner

 | `one of: default | spinner | radar | skeleton | progress-bar | progress-bar-compact | general-loader | component-level-small | component-level-medium | inline-dots | platform-animate | graph` |
| label | 

\[for spinnerLoader only\] Text label displayed alongside the spinner.

string

 | \- |  |
| value | 

\[for progress bar and progress bar compact only\] Sets the progress value (percentage) for the progress bar.

number

 | \- |  |
| color | 

\[for component-level loader only\] Sets the color of the loader.

\-

 | \- | 

 |
| icon | 

\[for progress bar only\] Icon displayed at the start of the progress bar.

string

 | \- |  |
| errormsg | 

\[for progress bar only\] Error message shown when the loader is in the error state.

string

 | \- |  |
| state | 

\[for progress bar only\] Current state of the progress bar (e.g., to-start, in-progress, completed, error, interrupted).

\-

 | \- | `one of: to-start | in-progress | completed | error | interrupted` |
| hideCloseIcon | 

\[for progress bar only\] Hides the close icon on the progress bar.

boolean

 | \- |  |
| hideIcon | 

\[for progress bar only\] Hides the leading icon on the progress bar.

boolean

 | \- |  |
| leadingIcon | 

\[for progress bar only\] Icon or label displayed at the start of the progress bar.

string

 | \- |  |
| leadingIconLabel | 

\[for progress bar only\] Text that appears when hovering over the leading icon, helping users understand what the icon represents.

string

 | \- |  |
| helpText | 

\[for progress bar only\] Additional text displayed below the progress bar to provide context or feedback.

string

 | \- |  |
| showActions | 

\[for progress bar only\] Shows action buttons (e.g., close, restart) on the progress bar.

boolean

 | \- |  |
| fluidWidth | 

\[for progress bar only\] @deprecated Makes the progress bar loader take full width of its container. This property is deprecated and will be removed in next major version.

boolean

 | 

false

 |  |
| onClose | 

\[for progress bar only\] Function that is triggered when the user clicks the close button or takes an action to close the loader. Use this to handle any cleanup or follow-up actions.

\-

 | 

@onClose

 | \- |
| onRestart | 

\[for progress bar only\] Function that is triggered when the user clicks to restart or retry an action that was previously interrupted or failed.

\-

 | 

@onRestart

 | \- |

## Stories

### Default

### Component Level

Loading..

### Radar Type

Default Small Medium Large

### Skeleton Type

### Compact Progress Bar

### Progress Bar Medium Size

### Progress Bar Large Size

### Progress Bar Custom State

## Progress Bar

### Medium

### Large

## Progress Bar Compact

### Compact

### Progress Bar To Start State

### Progress Bar Interrupted State

### Progress Bar Completed State

### Progress Bar Error State

### Progress Bar Without Icons

### Progress Bar Interactive

30% 80% Interrupted Completed Error

### General Skeleton

### Inline Dots

### Graph Loader

### Platform Animate

Default (100px)

Small (64px)

Large (150px)

With Label
