---
id: "components-alert-popup--overview"
title: "Components/Alert Popup"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-alert-popup--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:13.788Z"
built_at: "2026-04-21T08:48:27.288Z"
---
Alert Popup

Bubbles are always dismissible.

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| type | 
Type of alert popup

string

 | 

info

 | `one of: info | success | warning | error` |
| text | 

text of the alert popup

string

 | 

""

 | Bubbles are always dismissible. |
| showAlert | 

show hide alert popup

boolean

 | 

true

 |  |
| hideClose | 

Hides the close icon button from alert popup

boolean

 | 

false

 |  |
| onClose | 

The OnClose event occurs when the dialog is closed.

\-

 | 

@onClose

 | \- |
| alertPopupIconLabel | 

Custom native tooltip label for the icon in ex-alert-popup

string

 | \- |  |

## Default & Variants

Similar to Alert Banners alert popups have 4 main types.

1.  Error
2.  Information
3.  Warning
4.  Success

Important interaction details

-   It's not advised to place links or other interactable elements inside of Alert Popups due to their automatic dismissible behavior.
    

## Accessibility & responsiveness

-   One of the driving reasons for the impending deprecation of this component is that "toast" or "pop-up" messages like these are inherently difficult to make accessible. We can do it, but it's really resource-intensive, and there are much more accessible ways to message our users.
-   Consider using an Alert Banner or Dialog to convey the same message to the user.
