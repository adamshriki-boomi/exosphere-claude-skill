---
id: "development-standards-inverted-triangle-css--overview"
title: "Development Standards/Inverted Triangle CSS"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=development-standards-inverted-triangle-css--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:10.616Z"
built_at: "2026-04-21T08:48:27.310Z"
---
# Inverted Triangle CSS

Our design system uses a modified version of [Inverted Triangle CSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/), also known as ITCSS.

The Inverted Triangle is made up of a number of layers, each of which is more specific in scope than the last.

![An inverse equilateral triangle that is divided into six horizontal sections representing the seven layers of ITCSS. Numbered 0 to 6 (where 0 is the broadest, at the top, and 6 is narrowest at the bottom), they are 0 Settings, 1 Tools, 2 General, 3 Elements, 4 Structures, 5 Components, and 6 Utilities.](http://styleguide.boomi.design/images/itcss-triangle.png)

The benefit of this structure is that the top layers, which are the broadest in scope, should change less frequently than lower layers, and are also immediately recognized as having the most implications if they change.

For example, a change to the core color variable for body copy (near the very top) has a much broader impact than change to a variant font color for a specific component css.

## The Layers

An interesting feature of ITCSS is that the top two layers produce absolutely zero CSS. They are a centralized source for variables, mixins, and functions that are used throughout the other layers.

### Our Usage

We are following the basic standard fairly closely, and our design system has been organized with the tiers numbered so that the order of precedence is clear.

##### 0 - Settings

CSS variables go here. Colors, fonts, standardized breakpoints, etc. No application, just constant definition. It’s kind of like declaring all your globals at the top of the file.

##### 1 - Tools

Mixins go here. For example: standard focus outline definition, includes for base and branded font, color parameterization and variable lookup.

##### 2 - General

This is the first layer that actually produces CSS. Resets go here, as do standardizations of element margin behavior.

##### 3 - Elements (prefix: '`qm-`')

Applies standard element styling. Note that we include helper classes on the off chance we want to style one semantic element like another (i.e. qm-button makes something look like a button.)

###### A little side note about the word “Element”

The official definition of an element is that it is a part of the Document Object Model (DOM) that displays the page in the browser. It’s tempting to think of elements as HTML tags (`<p></p>`, for example) but the element includes the content between the tags (`<p>Hello I am a paragraph!</p>` is the element).

Unfortunately, like many terms in technology, “element” tends to be overloaded a lot. This can lead to sentences like “This button HTML element is an element of the alert component” where it’s unclear whether an element is an HTML element or something else.

For the purposes of this specific section of ITCSS, “Element” is meant to be understood as “An HTML element as represented by a specific HTML tag”, i.e. there’s only one declaration for `<button></button>` as an HTML tag. This is different from the Block-Element-Modifier (BEM) naming syntax, where the word “element” refers to anything within a block of related CSS.

##### 4 - Structures (prefixes: '`qm-l-`' for layouts, ‘`qm-p-`’ for page templates, possibly '`qm-o-`' for other objects)

We've called this structures instead of "objects" in part because “object” is another overloaded term, but we've also done this to reinforce that in many cases these structures produce no cosmetic effect. Structures should control stuff like responsiveness, flex mixins, etc. We do also include standard page templates in this layer.

##### 5 - Components (prefix: '`qm-c-`')

In this layer, we codify our common components such as alerts, compound buttons, form rows, etc.

##### 6 - Utilities (prefix: '`qm-u-`')

In this layer, we provide utility classes that explicitly override other behaviors. For example, qm-u-hidden will explicitly hide an element.
