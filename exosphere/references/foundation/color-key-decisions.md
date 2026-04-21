---
id: "system-foundation-color-key-decisions--overview"
title: "System Foundation/Color/Key decisions"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=system-foundation-color-key-decisions--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:02.560Z"
built_at: "2026-04-21T08:48:27.314Z"
---
# Color

The application of our color guidelines brings consistency, manageability, and compliance with accessibility standards to our product set and code bases.

## Color constants

Boomi defined a system of theme and usage based color constants, allowing for quick changes to colors as the system evolves. In our system, constants specify the usage based function of colors, while themes specify the [hex codes](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) or [RGBA](https://en.wikipedia.org/wiki/RGBA_color_model) values of those constants.

## Usage

-   Use color constants at all times.

-   If you are asked by UX to use a color that is not part of this chart:
    
    -   DO NOT hard-code the color hex code or RGBA value into the css on the page or in the component.
    -   DO NOT pick another constant with that color value but a different usage.
    -   DO talk with your UX designer about the intent and either:
        
        -   Choose a standard color constant (i.e. change the color), or
        -   Work with your UX Designer and the Design Systems element to define a new, approved color constant with a description of when and why it’s used

## Function

Each color constant name represents:

-   That this is a color constant as compared to a font or border
-   The item it colors
    
    -   Background
    -   Border
    -   Font (color)
    -   Icon (fill color)
    -   Link (font color in an anchor tag)
    -   Shadow
    -   Specialty usages
-   The variant by location, type, or state
    
    -   Example: alert background colors have the states of Success, Info, Warning, Error, and Highlight
    -   Note that the default does not include a variant, so the default background is $color-background

If you needed to color a new alert’s border type, for example, the constant would be named $color-border-\[new alert type\].

## Style

Constants are declared in [hex codes](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) (#FFFFFF) unless an alpha value (opacity) is required, in which case it is declared in [RGBA](https://en.wikipedia.org/wiki/RGBA_color_model) (rgba(0, 0, 0, 0.2);).

## Implementation

Ensure that color constants are used appropriately. For example, a border color should be used for a border and a background color should be used as a background.

Contact a Design Systems developer if you have any additional implementation questions.

## Accessibility

### WCAG Guidelines impacting color

The [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) outline multiple guidelines regarding color.

-   [WCAG 1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/quickref/#use-of-color) indicates that color cannot be the only visual means of conveying information. For example, a red border is not enough to indicate a field is in error; a green dot is not enough to indicate that a server is available. Color can be used in conjunction with other methods to convey information. A red border on a field and an error icon, to indicate the field is in error, meets this criteria.
-   [WCAG 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum) indicates that text and images must have a foreground to background contrast ratio of 4.5:1 except in specific situations.
-   [WCAG 1.4.6 Contrast (Enhanced)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced) is a Level AAA guideline that we are not required to adhere to, however it’s included here for completeness. It indicates that text and images must have a foreground to background contrast ratio of 7:1. In a future release, we may provide a theme that adheres to WCAG 1.4.6 so that low-vision users have a high-contrast theme available.
-   [WCAG 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast) indicates that user interface components and graphical objects have to have a contrast of at least 3:1 between the foreground and background of the component or object. For example, our standard buttons have a white background and are also on a white foreground, therefore the border between the edge of the button and its background has to have at least a 3:1 contrast ratio, otherwise some users can’t see where the button ends and the background begins.

### Contrast requirement compliance

Adhering to our system’s guidelines and using the color constants as intended ensures that [WCAG 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum) and [WCAG 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast) requirements are met, as foreground and background colors are selected to adhere to these requirements.

### Accessible text color combinations

Consult with your UX Designer to determine whether your usage is accessible and within Brand standards.

  

## Core colors

Ten core colors form the foundation of our color palette. Tints and shades of the core colors are used to create both our light and dark themes. Tints, shades, and transparencies are not referenced in our core color palette.

### Background and text

Background and text colors come from our gray color family.

White

Gray 10

Gray 20

Gray 30

Gray 40

Gray 50

Gray 60

Gray 70

Gray 80

Gray 90

Gray 100

Black

### Interactive

Interactive colors come from our navy and aqua color families. Buttons, links and forms are the main types of interactive elements.

Navy

Aqua

### Alert

Alert colors come from our red, yellow, green and blue families. They are used to provide system feedback and are associated with error, warning, success, and informational messages.

Red

Yellow

Green

Blue

### Accent

Accent colors come from our coral, purple, and magenta families. They are used sparingly and purposefully for iconography and multi-color color sets.

Coral

Purple

Magenta
