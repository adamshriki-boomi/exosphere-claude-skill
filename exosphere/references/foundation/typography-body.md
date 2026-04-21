---
id: "system-foundation-typography-body--overview"
title: "System Foundation/Typography/Body"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=system-foundation-typography-body--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:04.850Z"
built_at: "2026-04-21T08:48:27.314Z"
---
# Body

Our style definitions provide standard sizing and colors for body copy and other text elements. Body copy naturally renders in the proper size and color, and other text elements are included in other components (like form validation informational text).

## Example

![Coming Soon](https://exosphere.boomi.com/?path=/docs/assets/images/comingSoon.svg)

## Key Decisions

Our typographical standards are upgrading to better serve our users as part of the 2022 standards.

## Body text

| Body Text | Font Color | Font Family | Font Weight | Font Size | Font Line Height |
| --- | --- | --- | --- | --- | --- |
| $text-body-small | $color-font | $font-family | $font-weight-regular | $font-size-x-small | $line-height-body |

## Standard Body text

| Body Text | Font Color | Font Family | Font Weight | Font Size | Font Line Height |
| --- | --- | --- | --- | --- | --- |
| $text-body-standard | $color-font | $font-family | $font-weight-regular | $font-size-small | $line-height-body |

## Design Notes

A site should have a consistent , in addition to a consistent visual display, of its body copy.

Note the following upgrades for the 2022 standards:

-   Line spacing (the height of the line of text plus the leading below it) in the 2022 standards has been increased to 150% because it provides better readability and legibility than tighter spacing, without losing the eye between lines.
-   Paragraphs have 24px (1.5rem) of space between them ensuring the user can identify paragraph breaks without losing the flow of the text.
-   Paragraphs are constrained to a maximum 40rem (roughly 640px) to ensure that line lengths don't get overly long. Long line lengths detract from legibility and readability, especially for people with reading disabilities.

## Accessibility

Font colors and sizes meet *at minimum* the AA accessibility standards as defined on the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1).

## Development Notes

The `<body></body>` element sets the correct font and size for the application, and all other elements inherit these attributes unless overridden. Don’t override them or redeclare them without consulting with the UI Architect, and/or your UX Designer.

Paragraphs require a `<p></p>` tag to ensure proper line height and paragraph spacing.

## Ordered Lists

Ordered lists allow us to provide information in a readable format when the order of information matters.

### Example

To log into an account:

1.  Provide your email address.
2.  Provide your password.
3.  Select the Sign In button.

### Usage

Ordered lists are used to provide concise structured lists of content where the order of the list matters. They're also known as numbered lists.

##### When to use

When providing content in a list form where the order matters, such as:

-   A list of steps the user needs to take in order.
    
-   A ranked list of items.
    

##### When not to use

-   If the order of the list items doesn't matter, use an unordered list.
    
-   If the list items are not concise and instead are full paragraphs, use paragraphs and appropriate headings.
    

##### How to use

Ordered lists are generally used in page content after such items as page headers or form headers or in the body of an alert. Lists may contain child lists. Seek guidance from your Technical Content Creator for the list content.

### Related patterns

There are no related patterns.

### Related components

Related components include:

-   Unordered lists (<ul>).
    
-   Description lists (<dl>).

### Function

For information about the functions of ordered lists, read [<ol>: The Ordered List Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) on the MDN website.

### Style

Ordered lists should inherit body copy styling with the following exceptions:

-   The <ol> has left and bottom padding of 1rem to separate it from the left edge of paragraphs and other content.
    
-   The <li> has left padding of 1rem to separate it from the bullet.
    

### Content

-   All list items must be parallel in structure.
    
-   The entire list must either be phrases or sentences, not a combination of the two.
    
    -   If the list is phrases, there is no punctuation.
        
    -   If the list is sentences, each list item ends in a period.
        
-   The content within list items must follow Boomi voice standards.
    

### Implementation

For information about implementing ordered lists, read <ol>: The Ordered List Element on the MDN website.

As with the body copy, the base CSS is provided for the correct font and size in the application, and all other elements inherit these attributes unless overridden. Don't override them or redeclare them without consulting with a UI Architect and/or your UX Designer.

### Accessibility

Font colors and sizes meet at minimum the AA accessibility standards as defined on the [Web Content Accessibility Guidelines.](https://www.w3.org/WAI/WCAG21/quickref/)

## Unordered Lists

Unordered lists allow us to provide information in a readable format when the order of information does not matter.

### Example

The fruit available today includes:

-   Bananas
-   Apples
-   Cherries

### Usage

Unordered lists are used to provide concise structured lists of content where the order of the list does not matter. They're also known as bulleted lists.

##### When to use

When providing content in a list form where the order does not matter, such as:

-   A list of things the user may need to proceed.
-   A list of errors present on the page.
-   A list of steps that can be completed in any order.
-   This list right here.

##### When not to use

-   If the order of the list items matters (such as in a set of instructions), use an ordered list.
-   If the list items are not concise and instead are full paragraphs, use paragraphs and appropriate headings.

##### How to use

Unordered lists are generally used in page content after such items as such as page headers, form headers, or in the body of an alert. Lists may contain child lists. Seek guidance from your Technical Content Creator for the list content.

The structure of unordered lists is also used for other components, such as tabs and navigation. Ensure you're using the proper CSS classes as outlined below to indicate an unordered list in content.

### Related patterns

There are no related patterns.

### Related components

Related components include:

-   Ordered lists (<ol>)
    
-   Description lists (<dl>)

### Function

For information about the functions of unordered lists, read [<ul>: The Unordered List Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) on the MDN website.

### Style

Unordered lists should inherit body copy styling with the following exceptions:

-   The <ul> has left and bottom padding of 1rem to separate it from the left edge of paragraphs and other content.
-   The <li> has left padding of 1rem to separate it from the bullet.

### Content

-   All list items must be parallel in structure.
-   The entire list must either be phrases or sentences, not a combination of the two.
    
    -   If the list is phrases, there is no punctuation.
    -   If the list is sentences, each list item ends in a period.
-   The content within list items must follow Boomi voice standards.

### Implementation

For information about implementing unordered lists, read <ul>: The Unordered List Element on the MDN website.

As with the body copy, the base CSS is provided for the correct font and size in the application, and all other elements inherit these attributes unless overridden. Don't override them or redeclare them without consulting with a UI Architect and/or your UX Designer.

### Accessibility

Font colors and sizes meet at minimum the AA accessibility standards as defined on the Web Content Accessibility Guidelines.
