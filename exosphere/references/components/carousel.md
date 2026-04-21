---
id: "components-carousel--overview"
title: "Components/Carousel"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-carousel--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:20.639Z"
built_at: "2026-04-21T08:48:27.291Z"
---
# Carousel

  

### Style Properties:

| Name | Description |
| --- | --- |
| \--exo-component-carousel-slide-gap | Token to modify the sliding gap of carousel. |
| \--exo-component-carousel-wrapper-padding | Token to modify the wrapper padding of carousel. |
| \--exo-component-carousel-footer-container-width | Token to modify the width of footer container of carousel. |
| \--exo-component-carousel-custom-playpause-width | Token to modify the play & pause width of carousel. |

-   Usage:

```

```

.your-class-name {
  \--exo-component-carousel-slide-gap: var(\--exo-spacing-x-small);
}

```

```

    ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg) ![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| slideTimer | 
Set Slide Timing in milliseconds

number

 | 

0

 |  |
| loop | 

Enable looping of slides

boolean

 | 

false

 |  |
| nav | 

Show navigation arrows

boolean

 | 

false

 |  |
| autoplay | 

Enable autoplay

boolean

 | 

false

 |  |
| dots | 

Show pagination dots

boolean

 | 

true

 |  |
| enablePlayPause | 

enable play pause

boolean

 | 

false

 |  |
| dynamicBullets | 

Show pagination dots with dynamic Bullets

boolean

 | 

false

 |  |
| layout | 

string

 | \- | layout-1 |
| spaceBetween | 

Set space between slides in pixels

\-

 | 

10

 |  |
| slidesPerView | 

slides Per View

\-

 | 

1

 |  |
| paginationType | 

pagination Type

\-

 | 

bullets

 | `one of: bullets | fraction` |
| disableAtStart | 

Disable previous button at first slide

\-

 | 

false

 |  |
| disableAtEnd | 

Disable next button at last slide

\-

 | 

false

 |  |

## Stories

### Layout 1

    ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg) ![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)

### Layout 2

    ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg) ![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)

### Layout 3

    ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg) ![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)

### Layout 4

    ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg) ![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg)

### Slot Based Layout

Play ![Slide 1](../../../docs/assets/images/Dialog-Banner.svg) ![Slide 2](../../../docs/assets/images/comingSoon.svg) ![Slide 3](../../../docs/assets/images/Dialog-Banner.svg) ![Slide 4](../../../docs/assets/images/comingSoon.svg) ![Slide 5](../../../docs/assets/images/Dialog-Banner.svg)
