---
id: "components-date-picker--overview"
title: "Components/Date Picker"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-date-picker--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:26.859Z"
built_at: "2026-04-21T08:48:27.293Z"
---
### Date Picker

Date pickers let people select a date, or a range of dates

### Style Properties:

Style PropertiesUsage

```

--exo-component-date-picker-margin-bottom | Token to adjust the date picker margin bottom.

```

  

### Sample code

Web componentReact

```

<ex-date-picker label="Date" error-msg="Error message" placeholder="mm/dd/yyyy" required="" value="" type="single" start-date="" end-date="" min-date="" max-date="" format="mm/dd/yyyy" footertype="info" info-text="Select Date">
    </ex-date-picker>

```

  
  

### Prerequisites

Before using the Date Picker component, make sure to include the required CSS for the component theme:

```

import "@boomi/exosphere/dist/exo-component-theme.css";

```

  
  

### Properties

| Name | Description | Default Value |
| --- | --- | --- |
| **label** | Date Picker label. | `""` |
| **helpText** | Help text for Date Picker. | `""` |
| **errorMsg** | Error text for Date Picker. | `""` |
| **placeholder** | Date Picker placeholder text. | `mm/dd/yyyy` |
| **name** | Date Picker name attribute. | `""` |
| **type** | Date Picker type (reload if type is changed). | `single` |
| **disabled** | Disable the Date Picker. | `false` |
| **readonly** | Readonly the Date Picker. | `false` |
| **invalid** | Date Picker invalid attribute. | `false` |
| **required** | Date Picker required attribute. | `false` |
| **optional** | Date Picker optional attribute. | `false` |
| **value** | Date Picker date value attribute. | `""` |
| **startDate** | Date Range Picker start date value. | `mm/dd/yyyy` |
| **endDate** | Date Range Picker end date value. | `mm/dd/yyyy` |
| **minDate** | Date Range Picker minimum date value. | `mm/dd/yyyy` |
| **maxDate** | Date Range Picker maximum date value. | `mm/dd/yyyy` |
| **clearable** | Adds a clear button. | `false` |
| **open** | Show or hide the date picker. | `false` |
| **showStatusIcon** | Show status icon. | `false` |
| **footerType** | Input Footer Type. | `info` |
| **infoText** | Info text for Input label. | `""` |
| **format** | Date Picker Format. | `mm/dd/yyyy` |
| **useIconButton** | Date Picker Icon Button. | `mm/dd/yyyy` |
| **tooltipText** | Date Picker icon button tooltip. | `mm/dd/yyyy` |

  
  

# Events

| Name | description |
| --- | --- |
| onChange | The onchange event occurs when the value of an HTML element is changed. |
| onClose | The OnClose event occurs when the dialog is closed. |

  
  

# Date Formatting Tokens

Here are the date formatting tokens used for representing dates:

| Token | Description | Example |
| --- | --- | --- |
| `d` | Day of the month without leading zero | 1, 2, ..., 31 |
| `dd` | Day of the month with leading zero | 01, 02, ..., 31 |
| `D` | Shortened day name of the week | Sun, Mon, ..., Sat |
| `DD` | Full day name of the week | Sunday, Monday, ..., Saturday |
| `m` | Numeric month without leading zero | 1, 2, ..., 12 |
| `mm` | Numeric month with leading zero | 01, 02, ..., 12 |
| `M` | Shortened month name | Jan, Feb, ..., Dec |
| `MM` | Full month name | January, February, ..., December |
| `y` | Year without leading zero | 1, 645, 1900, 2020 |
| `yy` | 2-digit year with leading zero | 01, 45, 00, 20 |
| `yyyy` | 4-digit year with leading zero | 0001, 0645, 1900, 2020 |

**Note:** The `yy` format is used for 2-digit years and should be interpreted according to the context of the date handling system. For example, `20` could represent either 1920 or 2020 depending on the system's configuration.

### Keyboard Operation

You can operate date picker using keyboard. Here are the available keyboard operations.

##### When picker is hidden

-   **↓ (ArrowDown) / Esc** \- Show the picker
    
-   **(Enter)** \- Update the picker with the input field's value
    

##### When picker is shown

-   **Esc** \- Hide the picker
    
-   **← (ArrowLeft) / → (ArrowRight)** \- Move focused date/month/year/decade 1 step horizontally
    
-   **↑ (ArrowUp) / ↓ (ArrowDown)** \- Move focused date/month/year/decade 1 step vertically
    
-   **Ctrl (or Meta) + ← (ArrowLeft)** \- Move to previous month/year/decade/century
    
-   **Ctrl (or Meta) + → (ArrowRight)** \- Move to next month/year/decade/century
    
-   **Ctrl (or Meta) + ↑ (ArrowUp)** \- Change the view upward
    
-   **Enter** \- Select the focused date otherwise Change the view downward for the focused decade/year/month
    
-   **Ctrl (or Meta) + .** \- Go to the current date *(Shortcut of the Jump to Today button)*
    

### Playground

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| label | 
Date Picker label

string

 | 

""

 | Event |
| disabled | 

Disable the Date Picker

boolean

 | 

false

 |  |
| readonly | 

readonly the Date Picker

boolean

 | 

false

 |  |
| invalid | 

Date Picker invalid attribute

boolean

 | 

false

 |  |
| required | 

Date Picker required attribute

boolean

 | 

false

 |  |
| placeholder | 

Date Picker placeholder text

string

 | 

mm/dd/yyyy

 | mm/dd/yyyy |
| value | 

Date Picker date value attribute

string

 | 

""

 |  |
| clearable | 

Adds a clear button

boolean

 | 

false

 |  |
| type | 

Date Picker type (Please Reload if type is changed)

string

 | 

single

 | `one of: single | range` |
| start-date | 

Date Range Picker start date value attribute

string

 | 

mm/dd/yyyy

 |  |
| end-date | 

Date Range Picker end date value attribute

string

 | 

mm/dd/yyyy

 |  |
| min-date | 

Date Range Picker minimum date value attribute

string

 | 

mm/dd/yyyy

 |  |
| max-date | 

Date Range Picker maximum date value attribute

string

 | 

mm/dd/yyyy

 |  |
| open | 

Show or hide the date picker

boolean

 | 

false

 |  |
| format | 

Date Picker Format

string

 | \- | `one of: mm/dd/yyyy | dd/mm/yyyy | dd M yyyy | dd MM yyyy` |
| showStatusIcon | 

Show status icon

boolean

 | 

false

 |  |
| useIconButton | 

Date Picker Icon Button

boolean

 | 

false

 |  |
| error-msg | 

Error text for Date Picker

string

 | 

""

 | Error message |
| footerType | 

Input Footer Type

string

 | 

info

 | `one of: info | success | error | warning` |
| info-text | 

Info text for Input label

string

 | 

""

 | Select Date |
| showClearButton | 

boolean

 | \- |  |
| synchronizeUiWithInput | 

boolean

 | \- |  |
| enablePlaceholder | 

boolean

 | \- |  |
| onChange | 

The onchange event occurs when the value of an HTML element is changed.

\-

 | 

@on-change

 | \- |
| onClose | 

The OnClose event occurs when the dialog is closed.

\-

 | 

@on-close

 | \- |
| help-text | 

Help text for Date Picker

\-

 | 

""

 |  |
| name | 

Date Picker name attribute

\-

 | \- | \- |
| optional | 

Date Picker optional attribute

\-

 | 

false

 |  |
| tooltipText | 

Tooltip text for icon button

\-

 | 

""

 |  |
| statusIconLabel | 

Custom native tooltip label for the icon in ex-date-picker

string

 | \- |  |

### Date Range Picker

### Single Date Picker Icon Button

### Range Date Picker Icon Button
