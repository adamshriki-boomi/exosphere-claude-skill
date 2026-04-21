---
id: "components-json-editor--overview"
title: "Components/Json Editor"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-json-editor--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:31.970Z"
built_at: "2026-04-21T08:48:27.297Z"
---
JSON Editor

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| value | 
Value for Editor

object

 | \- | 

value : {

-   firstName : "John"
-   lastName : "Smith"
-   isAlive : "true"
-   age : "27"

address : {...} 4 keys

phoneNumbers : \[...\] 3 items

-   children : "null"
-   spouse : "null"

}

 |
| label | 

Input label

string

 | 

""

 | JSON Editor |
| invalid | 

JsonEditor invalid attribute

boolean

 | 

false

 |  |
| required | 

Input required attribute

boolean

 | 

false

 |  |
| dangerouslyUseHTML | 

Enables direct HTML input without sanitization. Use with caution as it may pose security risks if not properly validated.

boolean

 | 

false

 |  |
| onGetData | 

Event for getting data from editor when we click on the save icon

\-

 | 

@onGetData

 | \- |
| onInputData | 

Event for getting data when user is typing

\-

 | 

@onInputData

 | \- |
| onChangeData | 

Blur event for json editor, triggered when the editor goes out of focus

\-

 | 

@onChangeData

 | \- |
| error-msg | 

Help text for Input

\-

 | 

""

 |  |
| name | 

Input name attribute

\-

 | 

""

 |  |
| hideSave | 

To hide save icon

\-

 | 

false

 |  |
| saveIconLabel | 

Custom native tooltip label for the icon in ex-json-editor

string

 | \- |  |
