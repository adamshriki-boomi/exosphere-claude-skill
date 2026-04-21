---
id: "components-rich-text-editor--overview"
title: "Components/Rich Text Editor"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-rich-text-editor--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:45.390Z"
built_at: "2026-04-21T08:48:27.301Z"
---
Rich Text Editor

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| value | 
RTE value attribute

string

 | 

""

 |  |
| width | 

Width of the RTE

string

 | 

100%

 | 100% |
| height | 

Height of the RTE

string

 | 

300px

 | 300px |
| maxImageSize | 

Maximum image size limit in MegaByte(MB)

number

 | 

5

 |  |
| maxCharacterCount | 

Maximum number of characters allowed in the editor. When set, displays a character counter and prevents typing beyond the limit.

number

 | 

0

 |  |
| label | 

Label text displayed above the editor

string

 | 

""

 |  |
| infoText | 

Additional info text displayed when hovering over the info icon next to the label

string

 | 

""

 |  |
| required | 

Marks the editor as required

boolean

 | 

false

 |  |
| optional | 

Marks the editor as optional

boolean

 | 

false

 |  |
| invalid | 

Indicates that the editor is in an invalid state, triggering error styles and messages

boolean

 | 

false

 |  |
| errorMsg | 

Custom error message displayed when the editor is invalid

string

 | 

""

 |  |
| disabled | 

RTE state is disabled or not

boolean

 | \- |  |
| readonly | 

RTE state is readonly or not

boolean

 | \- |  |
| hidden | 

RTE state is hide or show

boolean

 | \- |  |
| toolbarHidden | 

RTE toolbar state is hide or show

boolean

 | \- |  |
| toolbarDisabled | 

RTE toolbar state is disabled or not

boolean

 | \- |  |
| placeholder | 

placeholder for RTE

string

 | \- |  |
| enableSafariSupport | 

Enable Safari support for RTE

boolean

 | \- |  |
| customButtons | 

Array of custom button configurations to add to the toolbar

array

 |  | 

customButtons : \[

0 : {...} 4 keys

\]

 |
| buttonList | 

Order of the buttons to show on the toolbar

array

 | \- |  |
| autoFocus | 

Enable Auto focus behavior on entering new line

boolean

 | \- |  |
| enableResize | 

Enable vertical resize handle for the editor

boolean

 |  |  |
| minHeight | 

string

 | \- | 200px |
| maxHeight | 

string

 | \- | 400px |
| disableBorder | 

Prevents double borders between toolbar and text area

boolean

 | 

false

 |  |
| onBlur | 

The onblur event occurs when an HTML element loses focus.

\-

 | 

@onBlur

 | \- |
| onFocus | 

The onfocus event occurs when an element gets focus.

\-

 | 

@onFocus

 | \- |
| onChange | 

The onchange event occurs when the value of an HTML element is changed.

\-

 | 

@onChange

 | \- |
| onInput | 

The oninput event occurs when an element gets input.

\-

 | 

@onInput

 | \- |
| custom-button-click | 

The onCustomButtonClick event occurs when a custom button is clicked.\[e.g. 'Auto arrange' Icon in the toolbar\]

\-

 | 

@onCustomButtonClick

 | \- |
| strictMode | 

Override strict mode for RTE

\-

 | \- |  |
