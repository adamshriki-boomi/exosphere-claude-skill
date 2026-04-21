---
id: "development-standards-block-element-modifier--overview"
title: "Development Standards/Block, Element, Modifier"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=development-standards-block-element-modifier--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:10.212Z"
built_at: "2026-04-21T08:48:27.309Z"
---
# Block, Element, Modifier

We're adopting a version of the [Block, Element, Modifier](http://getbem.com/) syntax as our Cascading Style Sheet (CSS) naming standard, though we reserve the right to make adjustments or exceptions. Note that we’re going over some advanced CSS decision-making here. If you need to refresh on CSS, start with the [MDN articles on Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS).

## BEM

Block, Element, Modifier is a syntax for your CSS classes that focuses on:

-   Single selectors vs. nested selectors
-   Clear syntactic descriptions of a component and its pieces
-   Clear syntactic descriptions of the available variants for a component
    

### Block

##### Structure Example:

`qm-block, qm-c-block, etc.`

A block is a “block” of related css – a button, a component, a form row, etc. The block is the base element of a purpose-built component that may contain several identifiable elements. For clarity: this essentially means “a bunch of related CSS” that may contain one or more [elements](https://developer.mozilla.org/en-US/docs/Glossary/Element).

##### A little side note about the word “Element”

The official definition of an element is that it is a part of the [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Glossary/Element) that displays the page in the browser. It’s tempting to think of elements as HTML tags (`<p></p>`, for example) but the element includes the content between the tags ( `<p>Hello I am a paragraph!</p>` is the element).

Unfortunately, like many terms in technology, “element” tends to be [overloaded](https://en.wikipedia.org/wiki/Operator_overloading) a lot. This can lead to sentences like “This button HTML element is an element of the alert component” where it’s unclear whether an element is an HTML element or something else.

For the purposes of BEM, an element is “any HTML element needed to build this block”. We’re clarifying because you could find a button (for example) represented in multiple blocks, because buttons are often part of larger components (such as alerts or dialogs).

##### 

But wait, if we’re styling a single HTML element, why would it have a class name in the first place?

When the only thing the block represents is an HTML element, not only do we represent the button as itself, we also provide a “helper” class in the (rare) case that we want to style something else to look like that element.

Example:

The block for button css is:

`button, qm-button { ... }`

##### Other types of blocks

We also produce blocks of code for page layout, page templates, components, and potentially other objects. For each of those cases, the block class is usually applied to a `<div></div>` containing other elements. Each of those blocks is

Example: `qm-c-alert`

Other block prefixes are listed in Inverted Triangle CSS Development Standards.

### Element

##### 

Structure Example: `qm-c-block__element`

As previously mentioned, an element is generally an HTML element that is the child of the block. A block may contain one or more elements. For example, while qm-button contains only one `<button></button>` element, `qm-c-alert` (an alert component) is made up of an icon ( `<img></img>`), some text (one or more `<p></p>` elements), and a button (`<button></button>`) to close it. Each of these elements is marked an \_\_element of the `qm-c-alert`.

Examples:

`qm-c-alert__icon`
`qm-c-alert__text`
`qm-c-alert__dismissal`

### Modifier

##### 

Structure Example: `qm-c-block–modifier`

A modifier is an endorsed variant of the CSS block. Not every component has variants. For example, our design system includes the default button, as well as a primary variant that catches the eye, and a few others. There are also multiple variants of the alert, one for success, another for errors, etc.

The default version of the button is:

`qm-button`

The variants are:

`qm-button--primary`
`qm-button--risky`

The default version of the alert is:

`qm-c-alert`

The variants are:

`qm-c-alert--error`
`qm-c-alert--info`
`qm-c-alert--warning`
`qm-c-alert--success`

## The Rationale

There are a few reasons to move away from our 2018 standard (which is basically "name things whatever, use nested selectors, but PLEASE USE UNDERSCORES!")

### Nested Selectors – Performance and Readability

Our 2018 standard used many nested selectors. As it turns out, single selectors are better for performance.

In other words, html that is styled like this:

```

<div class="somestyle">
  <ul>
    <li></li>
  </ul>
</div>

```

.somestyle {...}  
  
.somestyle ul {...}  
  
.somestyle ul li {...}  
  

does not perform as well as html like this:

```

<div class="qm-c-mydiv">
  <ul class="qm-c-mydiv__list">
    <li class="qm-c-mydiv__listitem"></li>
  </ul>
</div>

```

.qm-c-mydiv {...}  
  
.qm-c-mydiv\_\_list {...}  
  
.qm-c-mydiv\_\_listitem {...}

In many cases, BEM is also far less brittle, because if you move elements around in the markup hierarchy, they don’t lose their styling.

### CSS Collisions

There's not much worse than navigating through a few pages and having a page look different depending on how you got there. That's a typical symptom of CSS collision.

As such, we're prefixing all of our CSS with "`qm-`" to clearly namespace it, and we're adding to the prefix based on the section of ITCSS the styles come from.
