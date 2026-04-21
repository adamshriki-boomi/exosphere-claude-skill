---
id: "development-standards-measurement-standards--overview"
title: "Development Standards/Measurement Standards"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=development-standards-measurement-standards--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:10.452Z"
built_at: "2026-04-21T08:48:27.310Z"
---
# Measurement Units

In the Boomi Design System, we’re shifting from a mixture of pixels and percentages to a standardized measure of rems and ems. This change brings with it updated coding standards, including how and when to apply various measures -- specifically their interactions within common components.

## Our standard and how to apply it

We declare component size with `rem`, and we declare component internals with `em`.

The following rules should be applied when styling an element or creating a new component:

-   The component or element should declare a 1rem (or other root em relative size) at its Block (see Block, Element, Modifier)
    
-   Padding, border, margin, elements, etc. which are “children” of the component should declare their sizing in em measure so that their design proportions stay relative to the component basis.
    

## Absolute Measures

Through 2018, much of our application was written using pixels ( `px`), which are an explicit and [absolute measurement definition](https://en.wikipedia.org/wiki/Absolute_scale). In other words, a pixel is always the size of a pixel, regardless of what the size of the other elements around that pixel are.

Pixels do not cleanly account for various aspects such as screen size or zoom, and they do not preserve the integrity of individual component design and scale on a variety of devices and conditions.

Given our intent to invest in responsive and inclusive design, pixels as a unit of measurement are no longer the best standard for us moving forward. There is one exception: the base font size of the system. At the `<html></html>` level, we define the base font size as 16px so that all relative units of measure are relative to that absolute value.

## Relative Measures

Relative units are measurement units based on something outside of the item being measured. For example, setting a table cell’s width to 50% percent is setting the width relative to the size of the whole table -- if the table doubles in overall width, the cell scales with it. CSS provides multiple relative measurement units, including percent, `rem`, and `em`.

We’re shifting from use of pixels and percentages to both `rem` and `em`.

### Rem

A `rem` (root em) measurement is based on the size of the letter m at the *root*(`<html></html>`) element. Most browsers today default to a font size of 16px.

For example, let’s say we’re writing the CSS for a button. In the design spec, we see that the font size is set to 16px, and that the padding is set to 4px top and bottom, and 8px left and right. If the user zooms the browser window up or down, we want the padding to scale with the font size -- we don’t want the user to zoom 200%, where the font would display display at 64px, and still have padding of 4px and 8px respectively. That would look weird.

Instead, we can use the `rem` unit of measure to ensure that when the font size changes, so does the padding. To set the font size in `rem` we divide the intended size by the root font size: 4px / 16px = 0.25rem and 8px/16px = 0.if the root page font size is 16px, padding of 0.25rem calculates to 4px (16px \* 0.25) and 0.5rem calculates to 8px (16px \* 0.5).

This is ideal, except in cases where the button’s font size isn’t set to 16px. If the text has been scaled down to, say, 12px for legalese small print and the user zooms, we want the text to scale at the same rate as its padding. This can be resolved by using `ems`, as we’ll discuss momentarily.

The benefits of using `rem` are:

-   Root measurement standard -- Everything on the page is based on a single absolute measurement. This is fairly straightforward to work with.
    
-   Adapts by user preference -- If a user has their default font sizing scaled, elements scale with that root page font size.
    
-   Easy to calculate -- rems are always the thing you’re trying to size divided by the font size of the root element.
    

The drawbacks of using `rem` are:

-   Hard to size components independently -- If, for example, we want to resize a single button to be double the normal size, we must resize the font size as well as the padding for that specific button.  
    Otherwise the font would grow but the padding would remain relative to the root page size.
    
-   Not as robust browser support as we’d like -- rems were only adopted by Microsoft with Internet Explorer 11, so using them prior to the last few years required lots of polyfills
    

### Em

An `em` is based on the size of the letter m in the element’s *current* font. Going back to our button example, we could set the font to a different value -- 12px (or -- gasp -- 0.75rem). If the padding is based on 16px (1 rem) and the font on the component is based on 12px (0.75rem), then as we scale up, the padding will grow faster than the text. Pretty soon we’ll have an odd looking button.

When we set the button padding to `ems`, we’re telling the browser to use the font size for the element it’s in, not the root element. To set the font size in `em` we divide the intended size by the element font size: 4px / 12px = 0.333333em and 8px/12px = 0.666666em. (Computers are great at math but lousy at rounding, so don’t hesitate to enter long decimal values for precision!) Now the padding will scale with the font size of the button, even if the root font size is changed.

So why not use ems for everything? Well, that’s where we started, and as the article [Elastic Design](https://alistapart.com/article/elastic/), written in 2004 on A List Apart pointed out, it worked very poorly. For example, let’s say that our root font size was 16px, but we want our table text to be 12px - 0.75ems of the page container. Then we want to put our button in that table… but our button’s font size is set to 0.75ems. Now the button’s font is 16px \* 0.75 \* 0.75 or 9px. That way lies either thousands of CSS overrides or madness (or both).

The benefits of using `em` are:

-   Component / design consistency -- A component’s layout and structure are always based on that component’s base font size, so if the component is scaled, its design and layout is preserved.
    
-   Font-size basis -- A simple change in font size for a component means the component will scale proportionally. In other words, you don’t have to rewrite every measure in a component’s CSS when you want to make it slightly larger, you just need to change the font size.
    
-   Robust browser support -- ems have been around a long time

The drawbacks of using `em` are:

-   Nested ems are contextual -- Nesting ems means an exponential application of scaling, which can be difficult to work with and leads to unintended scaling of nested components and lots of frustrated people
    
-   Frustrating to calculate when nested -- the calculation is the same as the rem as long as the component itself specifies a rem basis at its root.
    
-   Design consistency -- A component should not need to care where it’s used to understand how to encode its design and scaling.
    

## Our Usage

We declare component size with `rem`, and we declare component internals with `em`.

### Button Example

Going back to our original 16px font button, we start by declaring the button to have a font size of 1rem. While this may seem redundant (since it’s already declared at the root level), this step confirms that in our design system, buttons are always sized relative to the root font size of the page. It also ensures that even if a button is included in a nested em construct, it will declare itself to match the root document’s font size.

We then declare the button padding in `ems` because padding is internal to the button component.

When we’re done, we get something like this:

```

button {
  font-size: 1rem;
  padding: 0.25em 0.5em // 4px/16px, 8px/16px
}

```

(Note that it’s good practice to put your calculations in the comments, not only because it helps the next person understand what you did, but also because it’s great for catching math mistakes.)

The end result: a button that, by default, scales with the root font size, and keeps its proportions even if the root font size is changed. It’s easier to update than using all rems, and easier to use than all ems. It’s based on one absolute measurement (the font size of the root element in pixels), and it’s supported by all the browsers we currently support.

Additionally, if a single button on a page needed to be more prominent -- let’s say its font was set to 2rem -- the padding for that button would scale proportionally.
