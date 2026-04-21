---
id: "components-container--overview"
title: "Components/Container"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-container--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:23.766Z"
built_at: "2026-04-21T08:48:27.292Z"
---
# Container

  

### Style Properties:

| Name | Description |
| --- | --- |
| \--exo-component-container-background | Token to modify the background color of the container. |
| \--exo-component-container-padding | Token to modify padding of the container. |
| \--exo-component-container-min-width | Token to modify the minimum width of the container. |
| \--exo-component-container-min-height | Token to modify the minimum height of the container. |
| \--exo-component-container-box-shadow | Token to modify the box-shadow of the container. |
| \--exo-component-container-border-radius | Token to modify the radius of the border of the container. |
| \--exo-component-container-border | Token to modify the border of the container. |

-   Usage:
    
    ```
    
    
    ```
    
    
    .your-class-name {
    \--exo-component-container-background: var(\--exo-color-background);
    \--exo-component-container-padding: calc(2 \* var(\--exo-spacing-medium));
    \--exo-component-container-min-width: calc(0.5 \* var(\--exo-size-1));
    \--exo-component-container-min-height: calc(0.5 \* var(\--exo-size-1));
    \--exo-component-container-box-shadow: var(\--exo-color-shadow-weak);
    \--exo-component-container-border-radius: calc(
      var(\--exo-radius-large) - var(\--exo-radius-small)
    );
    \--exo-component-container-border: var(\--exo-spacing-4x-small) solid  var(\--exo-color-border-secondary);
    }
    
    
    ```
    
    
    
    
    ```
    

Sign in

Welcome to Boomi, named as the leader in Gartner Magic Quadrant

Forgot your password?

Sign In Remember me

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| animated | 
Enable entrance and exit animations

boolean

 |  |  |
| animationDirection | 

Direction of the animation

string

 |  | `one of: top | right | bottom | left` |
| visible | 

Whether the component is visible

boolean

 |  |  |
| animateContainer | 

Whether to animate the container itself (not just content)

boolean

 |  |  |

## Stories

### Login Example

Sign in

Welcome to Boomi, named as the leader in Gartner Magic Quadrant

Forgot your password?

Sign In Remember me

### Survey Example

2/2

What are your primary goals?

Banana Banana Guava Banana

Integration AI (Artificial Intelligence) API Managementiger Master Data Hub Flow API Managementiger

Back

Skip Continue >
