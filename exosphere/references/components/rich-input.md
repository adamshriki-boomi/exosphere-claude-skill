---
id: "components-rich-input--overview"
title: "Components/Rich Input"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-rich-input--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:44.757Z"
built_at: "2026-04-21T08:48:27.301Z"
---
### Rich Input

Rich input component is a textarea element with option to add highlighted mentions using a filterable suggestion dropdown and autocomplete. Inorder to stay as generic as possible it doesn't expect you to provide a list of autocomplete and mentions upfront.

### Style Properties:

Style PropertiesUsage

```

--exo-component-rich-input-width          | Token to modify width of rich-input.
--exo-component-rich-input-padding-top    | Token to modify padding at the top of rich-input.
--exo-component-rich-input-padding-right  | Token to modify padding at the right of rich-input.
--exo-component-rich-input-padding-bottom | Token to modify padding at the bottom of rich-input.
--exo-component-rich-input-padding-left   | Token to modify padding at the left of rich-input.
--exo-component-rich-input-action-width   | Token to modify action width of rich-input.
--exo-component-rich-input-action-max-height | Token to modify max-height of rich-input

```

### Sample code

  

Web componentReact

```

<ex-rich-input></ex-rich-input>

```

  
  

### Suggetion list

Suggestion list let you show autocomplete and available mentionable items in a dropdown right below or above the input. In order to give more freedom to the consumer to customize the look of the suggestions it is implmented as a slot. The given suggestion list will show up only when the input is in focused state and there is content in the suggestion slot.

To show a suggestion in the component add an element with slot `suggestion`

  

Web componentReact

```

<ex-rich-input>
  <div slot="suggestion"></div>
</ex-rich-input>

```

  
  

Now to add a list of `autocomplete` or `mention` suggestion. Add a `ex-rich-input-suggestion` element with following properties

1.  `label` - For `mention`, this is the value that should be shown in the pill.
2.  `value` - For `autocomplete`, the value of the input and for `mention`, the value that should be present in the input text instead of the pill.
3.  `type` -
    -   `mention` - Selecting this type of suggestion will replace the filter block if any.
    -   `autocomplete` - Selecting this type of suggestion will replace the entire text.

  

Web componentReact

```

<ex-rich-input>
  <div slot="suggestion">
    <ex-rich-input-suggestion label="Process-name" value="d32afsd-fsdf23r-fsdf22" type="mention">
      Process-name
    </ex-rich-input-suggestion>
    <ex-rich-input-suggestion label="Process-name1" value="dasd33-fsdf23r-fsdf22" type="mention">
      Process-name1
    </ex-rich-input-suggestion>
  </div>
</ex-rich-input>

```

  
  

# Properties

| Name | description |
| --- | --- |
| type | **String** - `brand` or `default` |
| disabled | **Boolean** - disables the input and the send button |
| invalid | **Boolean** - sets the input invalid |
| placeholder | **String** - placehodler text |
| help-text | **String** - info message to be shown at the bottom |
| error-message | **String** - errorMessage message to be shown at the bottom |
| allow-undo | **Boolean** - enables undo functionality with Command+Z/Ctrl+Z (default: false) |

  

# Events

| Name | description |
| --- | --- |
| onChange | Fired when a text entered inside the input, except when user is filtering mentions |
| onFocus | Fired when input is focused |
| onBlur | Fired when input is blurred |
| onSend | Fired when send button is clicked or enter is pressed |
| onSuggestionSelect | Fired when a suggestion is selected |

  

# Component instance property

  

You can get hold of the instance of the component using `document.querySelector("ex-input")`. Following funtion(s) are present in the instance

| Name | description |
| --- | --- |
| getValue | returns the current value of the input. It replaces the mention with given id. |

  
  

### Playground

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| type | 
Refers to the type of the Rich input

string

 | \- | `one of: default | brand` |
| disabled | 

Disable the input

boolean

 | \- |  |
| invalid | 

Input invalid attribute

boolean

 | \- |  |
| placeholder | 

Input placeholder text

string

 | \- | How can I help you? |
| help-text | 

Help text for Input

string

 | \- |  |
| error-message | 

Error text for Input

string

 | \- |  |
| clearOnSend | 

Editor text is cleared on send (clicking the send button button or pressing the enter key)

boolean

 | \- |  |
| allowShiftEnter | 

New line is added when SHIFT + ENTER key is pressed

boolean

 | \- |  |
| allowUndo | 

Enables undo functionality with Command+Z/Ctrl+Z

boolean

 | \- |  |
