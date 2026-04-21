---
id: "components-side-drawer--overview"
title: "Components/Side Drawer"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-side-drawer--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:49.686Z"
built_at: "2026-04-21T08:48:27.303Z"
---
Side Drawer

  

## Introduction

Side drawers should be used in cases where the user wants to view more information while remaining on the same page. They are triggered by a call to action and can be closed out of. They should not be used for navigation / static panels.

## Side Drawer v Dialogs

Use side drawers when:

-   Users need to view information while remaining in the context of the page
-   Users need to view different pieces of information (clicking around to view details)

Use modals / dialogs when:

-   Users need to interact with something in order to move forwards / the system needs input from the user in order to proceed

## Anatomy

Side drawers are made up of:

-   Main header
-   Sections
-   Panel itself

  

# Style Properties:

  

Style PropertiesUsage

```

--exo-component-side-drawer-min-height            | Token to adjust the minimum height of the component.
--exo-component-side-drawer-margin-bottom         | Token to adjust the default margin bottom of the component.
--exo-component-side-drawer-header-padding-bottom | Token to adjust the default padding bottom of the header part
--exo-component-side-drawer-height                | Token to adjust the default height of the component.
--exo-component-side-drawer-header-height         | Token to adjust side drawer header height.
--exo-component-side-drawer-navigation-margin     | Token to adjust side drawer navigation icon margin.

```

  

Scroll Drawer to Top Scroll Drawer to 200px Scroll Drawer to 500px

Navigation Navigation Navigation

## Section Header

This is an example of content within each section. Content can be made up of any component and text. This is an example of content within each section. Content can be made up of any component and text.  
  
This is an example of content within each section. Content can be made up of any component and text.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

## Section Header

This is an example of content within each section. Content can be made up of any component and text. This is an example of content within each section. Content can be made up of any component and text.  
  
This is an example of content within each section. Content can be made up of any component and text.

## Section Header

This is an example of content within each section. Content can be made up of any component and text. This is an example of content within each section. Content can be made up of any component and text.  
  
This is an example of content within each section. Content can be made up of any component and text.

## Section Header

This is an example of content within each section. Content can be made up of any component and text. This is an example of content within each section. Content can be made up of any component and text.  
  
This is an example of content within each section. Content can be made up of any component and text.

Button Button

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| panelTitle | 
The title of side drawer

string

 | 

Main Header

 | Main HeaderMain HeaderMain HeaderMain Header |
| icon | 

Name of Icon

string

 | 

Integration

 | gauge |
| open | 

Side Drawer can be visible or not

boolean

 | \- |  |
| resize | 

Enable Resizing for side drawer

boolean

 | \- |  |
| hideClose | 

Close icon can be visible or not

boolean

 | \- |  |
| top | 

The top positioning for adjustment

number

 | 

0

 |  |
| navigation | 

Navigation icon can be visible or not

boolean

 | \- |  |
| infoText | 

Information Text for side drawer info icon

string

 | 

""

 | Add more info! |
| defaultMinResize | 

Default min size for side drawer

boolean

 | 

false

 |  |
| defaultMaxResize | 

Default max size for side drawer

boolean

 | 

false

 |  |
| minResize | 

Minimum resize width (px)

number

 | 

undefined

 |  |
| maxResize | 

Maximum resize width (px)

number

 | 

undefined

 |  |
| expandable | 

Enable Expand/Collapse button for side drawer

boolean

 | \- |  |
| headerTooltipPosition | 

Position of the header tooltip

string

 | \- | `one of: top | bottom | right | left` |
| width | 

Customizes the width of the side drawer. Use percentage values (25, 50, 75) or 'default' for responsive behavior.

string

 | 

default

 | `one of: 25 | 50 | 75 | default` |
| onCancel | 

Clicking the x button on a dialog triggers a dialog cancel event.

\-

 | 

@on-cancel

 | \- |
| leadingIconLabel | 

Custom native tooltip label for the leading icon in ex-side-drawer

string

 | \- |  |
| onClose | 

The OnClose event occurs when the dialog is closed.

\-

 | 

@onClose

 | \- |
| noMarginSlot | 

No margin for slot

\-

 | \- |  |
| preventStacking | 

When enabled, this side drawer will close other open side drawers when it opens, preventing stacking

\-

 | 

false

 |  |

View Source
```

```

<ex-side-drawer top="0" title="Main Header" open icon="Integration" @onCancel=${action("onCancel")}
      @onClose=${action("onClose")}>
  <div class="tile-wrapper-large">
    <div class="tab-container">
      <ex-tab id="tabs-sample" selectedindex="0">
        <ex-tab-item selected="">Navigation</ex-tab-item>
        <ex-tab-item>Navigation</ex-tab-item>
        <ex-tab-item>Navigation</ex-tab-item>
      </ex-tabs>
    </div>
    <section>
      <div class="section-header">
        <h2 class="section--title">
          <ex-icon icon="Integration" class="icon-color"></ex-icon>
          <span>Section Header</span>
          <ex-icon icon="Information" class="info-icon"></ex-icon>
        </h2>
      </div>
      <div class="section-body">
        This is an example of content within each section. Content can be
        made up of any component and text. This is an example of content
        within each section. Content can be made up of any component and
        text.<br /><br />
        This is an example of content within each section. Content can be
        made up of any component and text.
      </div>
    </section>
    <ex-accordion version="${args.version}">
      <ex-accordion-item label="Accordion Heading"
      ><div class="section-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </div></ex-accordion-item
      >
    </ex-accordion>
    <section>
      <div class="section-header">
        <h2 class="section--title">
          <ex-icon icon="Integration" class="icon-color"></ex-icon>
          <span>Section Header</span>
          <ex-icon icon="Information" class="info-icon"></ex-icon>
        </h2>
      </div>
      <div class="section-body">
        This is an example of content within each section. Content can be
        made up of any component and text. This is an example of content
        within each section. Content can be made up of any component and
        text.<br /><br />
        This is an example of content within each section. Content can be
        made up of any component and text.
      </div>
    </section>
    <section>
      <div class="section-header">
        <h2 class="section--title">
          <ex-icon icon="Integration" class="icon-color"></ex-icon>
          <span>Section Header</span>
          <ex-icon icon="Information" class="info-icon"></ex-icon>
        </h2>
      </div>
      <div class="section-body">
        This is an example of content within each section. Content can be
        made up of any component and text. This is an example of content
        within each section. Content can be made up of any component and
        text.<br /><br />
        This is an example of content within each section. Content can be
        made up of any component and text.
      </div>
    </section>
  </div>
</ex-side-drawer>

```

```

## Default

Side drawers are made up of:

-   Main header
-   Sections
-   Panel itself

Main header

The main header has a couple of variants / options that you can pick and choose from:

-   Title (required)
-   Icon in title v no icon
-   Back arrow (for side drawers that drill-in one level, the arrow is used to go back to the first level)
-   Close icon (required)

Sections

Side drawer sections can contain any combination of text and other components in the design system. The section can contain:

-   A header (required)
-   Icon v no icon
-   Info icon v no info icon

Panel itself

The panel itself is sized according to the screen width of the user:

-   For screens smaller than 576px: Panel will take over 100% of screen width
-   For screens smaller than 1400px and great equal to 576px: Panel will be fixed to 448px
-   For screens greater equal to 1400px: Panel will be set to 33% of screen width
