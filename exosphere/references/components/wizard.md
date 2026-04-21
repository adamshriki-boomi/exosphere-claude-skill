---
id: "components-wizard--overview"
title: "Components/Wizard"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-wizard--overview&viewMode=docs"
scraped_at: "2026-04-21T08:44:00.015Z"
built_at: "2026-04-21T08:48:27.306Z"
---
# Wizard

  

### Style Properties:

| Name | Description |
| --- | --- |
| \--exo-component-wizard-body-padding | Token to adjust the wizard body padding. |
| \--exo-component-wizard-steps-width | Token to adjust the wizard steps width. |

-   Usage:

```

```

.your-class-name {
 \--exo-component-wizard-body-padding: 2px 8px;
 \--exo-component-wizard-steps-width: 30%;
}

```

```

Lorem hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Save & Continue >

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| step | 
Type of Wizard step

string

 | 

Incomplete

 | `one of: Incomplete | Complete | Error | Warning | Disabled` |
| type | 

Type of Wizard

string

 | 

Vertical

 | `one of: Vertical | Horizontal | compact` |
| hideActions | 

show action option

boolean

 | 

false

 |  |
| divider | 

Controls the visibility of a divider in the wizard. When enabled ('true'), a vertical line is displayed to separate sections.

boolean

 | 

false

 |  |
| disableNavigation | 

Disables navigation between wizard steps via the header. When enabled ('true'), users cannot click on step titles to navigate, but programmatic navigation is still possible.

boolean

 | 

false

 |  |
| tooltipText | 

tooltipText for Action Icon-button

\-

 | 

""

 |  |
| stylable | 

Stylable to wizard content

\-

 | 

false

 |  |

## Stories

### Vertical Type

Lorem hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Save & Continue >

### Horizontal Type

Lorem hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Prev

Next

### Compact Type

Lorem hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Save & Continue >

### Disable Navigation

This example demonstrates how to disable navigation via the wizard steps header using the `disable-navigation` attribute. Navigation is controlled programmatically via the `selectItem` method invoked by the Next/Prev buttons.

Lorem hi Ipsum is simply dummy text of the printing and typesetting industry.

Lorem Ipsum is simply dummy text of the printing and typesetting industry.

Prev Next
