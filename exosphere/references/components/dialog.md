---
id: "components-dialog--overview"
title: "Components/Dialog"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-dialog--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:25.161Z"
built_at: "2026-04-21T08:48:27.293Z"
---
Dialog

This will permanently delete the atom Cancel Delete

  

### Style Properties:

  

Style PropertiesUsage

```

--exo-component-dialog-footer-padding   | Token to modify the padding of footer of the dialog.
--exo-component-dialog-min-height       | Token to modify minimum height of the dialog.
--exo-component-dialog-max-height       | Token to modify maximum height of the dialog.
--exo-component-dialog-body-max-height  | Token to modify maximum height of the body of the dialog.
--exo-component-dialog-body-align-items | Token to modify the alignment of items in the body of the dialog.

```

  

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| dialogTitle | 
The main heading text that appears at the top of the dialog window

string

 | 

""

 | Delete this Atom? |
| dialogHeader | 

string

 | \- | Hello From Exosphere |
| subHeader | 

Additional text that appears below the main heading in uppercase letters to provide more context

string

 | 

""

 | Guided Tour |
| variant | 

Changes the overall layout and spacing of the dialog content. 'Spaced' adds comfortable padding between elements

string

 | 

spaced

 | `one of: spaced` |
| headerContent | 

Sets the style and icon of the dialog header to match different types of messages (e.g., info, positive, media, announcement)

string

 | 

info

 | `one of: info | warning | positive | negative | critical | announcement | media` |
| body | 

string

 | \- | This will permanently delete the atom |
| icon | 

string

 | \- | Delete |
| open | 

Controls whether the dialog window is visible or hidden on the screen

boolean

 | \- |  |
| staticBackdrop | 

When enabled, prevents the dialog from closing when clicking outside of it - useful for important messages that need user attention

boolean

 | \- |  |
| hideClose | 

Removes the X button from the top-right corner of the dialog - useful when you want users to take specific actions using the provided buttons

boolean

 | 

false

 |  |
| hideLeadingIcon | 

boolean

 | \- |  |
| animated | 

Controls whether opening and closing animations are enabled

boolean

 | 

true

 |  |
| onCancel | 

Defines what happens when you close the dialog by clicking the X button in the top-right corner.

\-

 | 

@on-cancel

 | \- |
| statusIconLabel | 

Custom text that appears when hovering over the status icon - helps explain the icon's meaning

string

 | \- |  |
| padding | 

Adjusts the space between the dialog's content and its edges - useful for custom layouts

\-

 | 

""

 |  |
| hideMultipleScroll | 

Prevents extra scroll bars from appearing when the dialog content is zoomed in above 100%

\-

 | 

false

 |  |

View Source
```

```

<ex-dialog dialogTitle="Delete this Atom?" open @onCancel=${action("onCancel")}>
  "This will permanently delete the atom"
  <ex-icon slot="icon" icon="Delete" variant="danger"></ex-icon>
  <ex-button slot="footer" flavor="base" type="secondary" size="large"
  >Cancel</ex-button>
  <ex-button slot="footer" flavor="risky" type="primary" size="large">Delete</ex-button>
</ex-dialog>

```

```

## Default & Variants

Dialogs have the following options:

1.  Title with and without icon
2.  Dialog with and without background scrim
3.  Dialog types

Dialog Types:

1.  Confirmation
2.  Decision
3.  Acknowledgment

## Dialog With Banner

Dialog Banner

![Banner](../../../docs/assets/images/Dialog-Banner.svg)

### Connect NetSuite with Shopify

Boomi is a cloud-based integration platform that enables organizations to connect their applications, data, and people. With Boomi, businesses can streamline their operations, automate workflows, and enhance their customer experience. Boomi offers a variety of solutions, including application integration, data management, B2B/EDI management, and workflow automation. The platform is designed to be scalable, flexible, and easy-to-use, making it ideal for organizations of all sizes and...

Close Open Recipe

## Pre-built dialogs

### Decision

Dialog Decision

Sample approved content: There are unsaved changes to this process. What would you like to do before testing?

Discard changes Save and continue

### Confirmation

Dialog Confirmation

Sample approved content: There are unsaved changes to this process. What would you like to do after automation deployed.

Close

### Media

Dialog Media

![Banner](../../../docs/assets/images/dialog/media.png)

Orci felis faucibus integer tristique tempus eget morbi tellus cursus. Egestas pretium et at duis vulputate lacus in dui. Ultrices odio erat amet mi massa non.

Duration: 20 mins | Skill level: Beginner

Get started >

### Acknowledgement

Dialog Acknowledgement

Welcome to the March 2022 release of the AtomSphere. Here are a few of the notable new features:

Runtime Configuration Management: A new API object enables developers to programatically apply Atomand connector updates.

Atomsphere API: With the new OpenAPI document, developers can easily discover, consume, and generate client applications.

Micosoft Azure Service Bus connectivity: Effectively process messages FIFO in a multi-node environment with the new singleton mode option.

low Library: A set of new sample flows show builders how to satisfy common use cases.

Flow Resources: Explore useful resources and content from within Boomi Flow in the new Resource Center.

Welcome to the March 2022 release of the AtomSphere. Here are a few of the notable new features:

Runtime Configuration Management: A new API object enables developers to programatically apply Atomand connector updates.

Atomsphere API: With the new OpenAPI document, developers can easily discover, consume, and generate client applications.

Micosoft Azure Service Bus connectivity: Effectively process messages FIFO in a multi-node environment with the new singleton mode option.

low Library: A set of new sample flows show builders how to satisfy common use cases.

Flow Resources: Explore useful resources and content from within Boomi Flow in the new Resource Center.

For more on what’s included in this release, see the Release Highlights blog or the detailed release notes .

Close

### Carousel

Dialog Carousel    ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg) ![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)

### Custom Padding

Dialog Custom Padding

![Banner](../../../docs/assets/images/dialog/media.png)
