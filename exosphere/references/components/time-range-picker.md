---
id: "components-time-range-picker--overview"
title: "Components/Time Range Picker"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-time-range-picker--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:55.551Z"
built_at: "2026-04-21T08:48:27.305Z"
---
### Time Range Picker

### Style Properties:

Style PropertiesUsage

```

--exo-component-time-range-picker-width | Token to modify width of the time range picker.

```

### Sample code

  

Web componentReact

```

<ex-time-range-picker label="Time Range" required="" help-text="Help text" error-msg="Error message" info-text="Select Time Range Picker"></ex-time-range-picker>

```

  
  

### Playground

  
  

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| label | 
Label for the Time Range Picker

string

 | 

""

 | Time Range |
| required | 

Marks the Time Range Picker as required

boolean

 | 

false

 |  |
| optional | 

Marks the Time Range Picker as optional

boolean

 | 

false

 |  |
| disabled | 

Disables the Time Range Picker

boolean

 | 

false

 |  |
| help-text | 

Help text for the Time Range Picker

string

 | 

""

 | Help text |
| invalid | 

Time Range Picker invalid attribute

boolean

 | 

false

 |  |
| error-msg | 

Error text for Time Range Picker

string

 | 

""

 | Error message |
| info-text | 

Info text for the Time range picker label

string

 | 

""

 | Select Time Range Picker |
| startTime | 

Default start time for the time range picker

string

 | 

hh:mm:ss

 | 10:00:00 |
| endTime | 

Default end time for the time range picker

string

 | 

hh:mm:ss

 | 00:00:00 |
| onPopupStateChange | 

Triggered when the user clicks on the Time Range Picker popup element. This could be used for opening or interacting with the time picker dropdown.

\-

 | 

@popup-state-change

 | \- |
| onStartTime | 

Triggered when the start time is selected or changed by the user in the Time Range Picker. The event handler can capture and process the updated start time.

\-

 | 

@start-time

 | \- |
| onEndTime | 

Triggered when the end time is selected or changed by the user in the Time Range Picker. The event handler can capture and process the updated end time.

\-

 | 

@end-time

 | \- |
| onApply | 

Triggered when the user clicks the apply button to save the selected time range. This event is typically used to confirm the time range and close the picker.

\-

 | 

@apply

 | \- |
