---
id: "system-foundation-typography-key-decisions--overview"
title: "System Foundation/Typography/Key Decisions"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=system-foundation-typography-key-decisions--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:04.652Z"
built_at: "2026-04-21T08:48:27.315Z"
---
# Typography

A standardized typography system ensures that applications are consistent and meet legibility and readability standards.

## Key Decisions

Our typographical standards are upgrading to better serve our users as part of the 2022 standards. Use the newest standards available for your project.

## Core Font Properties

| Font Family | Sizing | Line height | Weight |
| --- | --- | --- | --- |
| $font-brand: Poppins | $font-size-micro: 0.75rem // 12px | $line-height-heading: 1.25em | $font-weight-regular: 400 |
| $font-family: Noto Sans | $font-size-x-small: 0.813rem // 13px | $line-height-body: 1.5em | $font-weight-semi-bold: 600 |
| $font-monospace: Fira Mono | $font-size-small: 0.875rem // 14px |  | $font-weight-bold: 700 |
|  | $font-size-medium: 1rem // 16px |  |  |
|  | $font-size-large: 1.12rem // 18px |  |  |
|  | $font-size-x-large: 1.25rem // 20px |  |  |
|  | $font-size-2x-large: 1.37rem // 22px |  |  |
|  | $font-size-3x-large: 1.5rem // 24px |  |  |
|  | $font-size-4x-large: 1.62rem // 26px |  |  |
|  | $font-size-5x-large: 1.75rem // 28px |  |  |
|  | $font-size-6x-large: 2rem // 32px |  |  |
|  | $font-size-7x-large: 2.5rem // 40px |  |  |

## Application and Documentation Font Properties

| Application | Documentation |
| --- | --- |
| **Code** | **Code** |
| $text-code-small: $font-monospace, $font-weight-regular, $font-size-x-small, $line-height-body; | $doc-code: $color-font, $font-monospace, $font-weight-regular, $font-size-medium, $line-height-body; |
| $text-code-standard: $font-monospace, $font-weight-regular, $font-size-small, $line-height-body; |  |
| $text-code-small-color: $color-font |  |
| $text-code-standard-color: $color-font |  |
|  |  |
| **Links** | **Links** |
| $text-link-micro: $-font-family, $font-weight-semi-bold, $font-size-micro, $line-height-body; underlined | $doc-link-standard: $color-font-link, $font-family, $font-weight-semi-bold, $font-size-medium, $line-height-body; underlined |
| $text-link-micro-color: $color-font-link | $doc-link-alternative: $color-font, $font-family, $font-weight-semi-bold, $font-size-medium, $line-height-body; underlined |
| $text-link-small: $font-family, $font-weight-semi-bold, $font-size-x-small, $line-height-body; underlined |  |
| $text-link-small-color: $color-font-link |  |
| $text-link-standard: $font-family, $font-weight-semi-bold, $font-size-small, $line-height-body; underlined |  |
| $text-link-standard-color: $color-font-link |  |
|  |  |
| **Labels** | **Label** |
| $text-label-micro: $color-font, $font-family, $font-weight-regular, $font-size-micro, $line-height-body; | $doc-label: $color-font, $font-family, $font-weight-bold, $font-size-medium, $line-height-body; |
| $text-label-micro-color: $color-font |  |
| $text-label-standard: $color-font, $font-family, $font-weight-regular, $font-size-small, $line-height-body; |  |
| $text-label-standard-color: $color-font |  |
| $text-label-standard-semi-bold: $color-font, $font-family, $font-weight-semi-bold, $font-size-small, $line-height-body; |  |
| $text-label-standard-semi-bold-color: $color-font |  |
| $text-label-standard-bold: $color-font, $font-family, $font-weight-bold, $font-size-small, $line-height-body; |  |
| $text-label-standard-bold-color: $color-font |  |
| $text-label-medium: $color-font, $font-family, $font-weight-regular, $font-size-medium, $line-height-body; |  |
| $text-label-medium-color: $color-font |  |
| $text-label-medium-semi-bold: $color-font, $font-family, $font-weight-semi-bold, $font-size-medium, $line-height-body; |  |
| $text-label-medium-semi-bold-color: $color-font |  |
| $text-label-medium-bold: $color-font, $font-family, $font-weight-bold, $font-size-medium, $line-height-body; |  |
| $text-label-medium-bold-color: $color-font |  |
|  |  |
| **Paragraph** | **Paragraph** |
| $text-body-small: $color-font, $font-family, $font-weight-regular, $font-size-x-small, $line-height-body; | $doc-body-small: $color-font, $font-family, $font-weight-regular, $font-size-small, $line-height-body; |
| $text-body-standard: $color-font, $font-family, $font-weight-regular, $font-size-small, $line-height-body; | $doc-body-standard: $color-font, $font-family, $font-weight-regular, $font-size-medium, $line-height-body; |
|  |  |
| **Subheadings** |  |
| $text-sub-heading-standard: $color-font, $font-family, $font-weight-regular, $font-size-small, $line-height-body; |  |
| $text-sub-heading-standard-semi-bold: $color-font, $font-family, $font-weight-semi-bold, $font-size-small, $line-height-body; |  |
| $text-sub-heading-medium: $color-font, $font-family, $font-weight-regular, $font-size-medium, $line-height-body; |  |
| $text-sub-heading-medium-semi-bold: $color-font, $font-family, $font-weight-semi-bold, $font-size-medium, $line-height-body; |  |
|  |  |
| **Headings** | **Headings** |
| $text-h7: $color-font, $font-family, $font-weight-semi-bold, $font-size-medium, $line-height-heading; | $doc-h5: $color-font, $font-family, $font-weight-semi-bold, $font-size-large, $line-height-heading; |
| $text-h6: $color-font, $font-family, $font-weight-semi-bold, $font-size-large, $line-height-heading; | $doc-h4: $color-font, $font-family, $font-weight-semi-bold, $font-size-x-large, $line-height-heading; |
| $text-h5: $color-font, $font-family, $font-weight-semi-bold, $font-size-x-large, $line-height-heading; | $doc-h3: $color-font, $font-family, $font-weight-semi-bold, $font-size-3x-large, $line-height-heading; |
| $text-h4: $color-font, $font-family, $font-weight-semi-bold, $font-size-2x-large, $line-height-heading; | $doc-h2: $color-font, $font-family, $font-weight-semi-bold, $font-size-4x-large, $line-height-heading; |
| $text-h3: $color-font, $font-family, $font-weight-semi-bold, $font-size-3x-large, $line-height-heading; | $doc-h1: $color-font, $font-family, $font-weight-semi-bold, $font-size-5x-large, $line-height-heading; |
| $text-h2: $color-font, $font-family, $font-weight-semi-bold, $font-size-4x-large, $line-height-heading; |  |
| $text-h1: $color-font, $font-family, $font-weight-semi-bold, $font-size-5x-large, $line-height-heading; |  |
|  |  |
| **Headings Brand** |  |
| $text-h7-brand: $color-font, $font-brand, $font-weight-regular, $font-size-medium, $line-height-heading; |  |
| $text-h6-brand: $color-font, $font-brand, $font-weight-regular, $font-size-large, $line-height-heading; |  |
| $text-h5-brand: $color-font, $font-brand, $font-weight-regular, $font-size-x-large, $line-height-heading; |  |
| $text-h4-brand: $color-font, $font-brand, $font-weight-regular, $font-size-2x-large, $line-height-heading; |  |
| $text-h3-brand: $color-font, $font-brand, $font-weight-regular, $font-size-3x-large, $line-height-heading; |  |
| $text-h2-brand: $color-font, $font-brand, $font-weight-regular, $font-size-4x-large, $line-height-heading; |  |
| $text-h1-brand: $color-font, $font-brand, $font-weight-regular, $font-size-5x-large, $line-height-heading; |  |

### What are custom branded products?

Custom branded products refer to products that are either unbranded (so it doesn't look like a Boomi product) or rebranded (so it looks like our customer's product). For example, the API Management Developer Portal can have its color theme updated to look like the customer's branding.

Because our corporate headings are in Poppins, a unique-looking and site-licensed font, we differentiate custom branded products. On custom branded products, we use the more generic-looking Google font, Noto Sans, instead of using the Poppins font.

## Accessibility

Font colors and sizes meet at minimum the AA accessibility standards as defined on the [Web Content Accessibility guidelines](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1).

## Accessing font files

2022 Standards: [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) and [Fira Code](https://fonts.google.com/specimen/Fira+Code) can be downloaded or linked to from [Google Fonts](https://fonts.google.com/). Poppins can be downloaded inside the Adobe suite for designers.

## Typographical Rhythm

Typographical rhythm (the spacing and proportions between the letters, between the words, and between the lines) plays a key part in increasing or decreasing the readability of text on the web.

Boomi's platform doesn't present a large amount of text content—we're neither the New York Times nor the IRS—but the content that we do present is generally technical and can be difficult to parse even with the best . Making content as readable as possible is a prioritiy.

To that end, we chose a line height of 1.5 (which allows the rows to breathe without making it difficult to track between lines) and a maximum text block width of 640px (40rem) to decrease eye strain.

Because we don't indent the first sentence of a paragraph, we leave 24px (1.5rem) between paragraphs.

Headings obviously need more space around them, and are adjusted accordingly to align with the [Principle of Proximity](https://lawsofux.com/law-of-proximity).

## Typographical Scale

Typographical scale refers to the proportions of each level of heading with the other levels.

To maintain visual hierarchy, the H1 is generally the largest text found on a page, followed by the H2, followed by the H3... if the designer were to make the H3 bigger than the H2 the user would have trouble understanding how sections broke down.

So text sizes should be ranked by hierarchy, but how much of a difference in size should an H1 be from its H2, and the H2 then from the H3? Different scales can be provided for different needs and uses. We chose a slightly modified version of the [1.125 Major Second scale](https://type-scale.com/?size=16&scale=1.125&text=A%20Visual%20Type%20Scale&font=Open%20Sans&fontweight=400&bodyfont=Poppins&bodyfontweight=400&lineheight=1.45&backgroundcolor=white&fontcolor=&preview=false) for our text because:

-   Boomi relies on the ability to condense a lot of data and content onto our screens, so scales with incredibly large H1s such as the [Golden Ratio](https://type-scale.com/?size=16&scale=1.618&text=A%20Visual%20Type%20Scale&font=Roboto&fontweight=400&bodyfont=Poppins&bodyfontweight=400&lineheight=1.45&backgroundcolor=white&fontcolor=#333&preview=false), were inappropriate for our use cases. Even the [Minor Third](https://type-scale.com/?size=16&scale=1.067&text=A%20Visual%20Type%20Scale&font=Roboto&fontweight=400&bodyfont=Poppins&bodyfontweight=400&lineheight=1.45&backgroundcolor=white&fontcolor=#333&preview=false) scale was too big for most of our uses.
    
-   We have found that very small difference between font sizes, such as what's found in the [Minor Second scale](https://type-scale.com/?size=16&scale=1.067&text=A%20Visual%20Type%20Scale&font=Roboto&fontweight=400&bodyfont=Poppins&bodyfontweight=400&lineheight=1.45&backgroundcolor=white&fontcolor=#333&preview=false), often get lost in the density of information on our data pages, and thus need to be augmented with font-weight or other decoration. We'd rather save "bold text" for other uses.
    
-   The Major Second scale provides eye-catching H1 and H2 levels of text size without getting too big. Its text size directly below our baseline of 16px is 14.22px, which is roughly the same size as our previous baseline text, so we know it's a comfortably readable "micro" font size.
    

We modified the Major Second scale to round numbers because it's easier for our UX designers to mock up accurate comps on round number font sizes.

## Theme constants (CSS)

Theme constants are defined for typography; use those constants unless directed otherwise by your UX Designer and Tech Lead.
