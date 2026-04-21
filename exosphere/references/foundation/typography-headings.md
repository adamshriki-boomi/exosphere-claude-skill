---
id: "system-foundation-typography-headings--overview"
title: "System Foundation/Typography/Headings"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=system-foundation-typography-headings--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:05.064Z"
built_at: "2026-04-21T08:48:27.314Z"
---
# Headings

Our style definitions provide standard sizing and colors for <h1> through <h5> headings.

## Example

![Coming Soon](https://exosphere.boomi.com/?path=/docs/assets/images/comingSoon.svg)

## Key Decisions

We provide two sets of headings depending on whether the product being developed is on the Boomi Platform or the product is a custom branded project. **If you don't know which set to use, ask your UX Designer.**

“Poppins” in the following table refers to the font Poppins.

The Boomi Headings Standards table is most useful if you’re setting up a site (Developer Portal, etc.) or tool (Sketch, Axure, etc.) from scratch. For a table that makes comparison easier, see the Boomi Headings Comparison table below.

*Editor's note: Apologies to anyone using a screen reader. The Boomi Headings Standards table uses the heading tags to describe the heading tags.*

## Header text

| Heading | Font Color | Font Family | Font Weight | Font Size | Font Line Height |
| --- | --- | --- | --- | --- | --- |
| $text-h7: | $color-font | $font-brand | $font-weight-regular | $font-size-medium | $line-height-heading |
| $text-h6: | $color-font | $font-brand | $font-weight-regular | $font-size-large | $line-height-heading |
| $text-h5: | $color-font | $font-brand | $font-weight-regular | $font-size-x-large | $line-height-heading |
| $text-h4: | $color-font | $font-brand | $font-weight-regular | $font-size-2x-large | $line-height-heading |
| $text-h3: | $color-font | $font-brand | $font-weight-regular | $font-size-3x-large | $line-height-heading |
| $text-h2: | $color-font | $font-brand | $font-weight-regular | $font-size-4x-large | $line-height-heading |
| $text-h1: | $color-font | $font-brand | $font-weight-regular | $font-size-5x-large | $line-height-heading |

## What are custom branded products?

Custom branded products refer to products that are either unbranded (so it doesn't look like a Boomi product) or rebranded (so it looks like our customer's product). For example, the API Management Developer Portal can have its color theme updated to look like the customer's branding.

Because our corporate headings are in Poppins, a unique-looking and site-licensed font, we differentiate custom branded products. On custom branded products, we use the more generic-looking Google font, Noto Sans, instead of using the Poppins font.

## Usage

A page's headings are the markers of how a document is structured. The headings should read like a document outline, with an H1 containing all of the page's content, and H2 through H5 elements nested within the document where needed.

Headings are intended for everyone, and are especially helpful for people with visual, cognitive, and neurological accessibility needs. They also improve SEO and search engine results where applicable.

Headings should not be skipped; you can't go H1 H3 H4. Similarly, an H4 can't contain an H2. Poorly structured headings are a violation of WCAG [Guideline 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships). If you skip headings or put them in an illogical order, it confuses people (and software) attempting to understand the page.

Note that a heading's visual display is not necessarily tied to its architecture. Any heading can be styled to look smaller or larger if the page's visual design requires it.If you want to use a different style of text than the current heading structure allows for, contact your UX Designer (and if you are the UX Designer, make a proposal during UX Crit and then to the Design Systems team).

### When to use a heading

-   Every page should have an H1 that indicates the page title.Short pages where the content is all about the same task or concept should only have an H1.
-   Any dialog except very short alert message dialogs should have an H1 that indicates the dialog title.
-   Any page with enough information that dividing the content into sections results in better understanding should include headings.

### When not to use a heading

-   Alert message dialogs do not need an H1, but at the UX Designer or Content Writer’s discretion can contain an H1.
-   Dialogs. Any dialog long enough to require headings at the H2 level or lower is arguably too complex to go in a dialog; consider a base page.

## Related components

The following components have headings incorporated in them:

-   Heading with Information Icon
    
-   Form Headers
    

## Function

See Key decisions above

## Style

See Key decisions above

## Content

Descriptive headings and titles work together to give users an overview of the content and its organization. If there are no headings where headings are warranted, if the heading is not descriptive enough or if multiple headings are repetitive, the content fails [WCAG 2.4.6 Headings and Label](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels).

Headings may contain variable text. For example, the API Management approval dialog is entitled “Approve \[API name\] for \[application name\]”.

Note that in implementation today some headings are truncated and others wrap inside their containers. Especially when dealing with variable names, ensure that you test both long and short heading names and how they behave when the browser zoom is set to 200%-400%.

### H1 main headings

These heading are for sections of the application, such as the section heading at the top of [Integration Packs](https://platform.boomi.com/AtomSphere.html#integrationPacksDeploy). They typically identify where in the application you are as you navigate sub-menus. Many areas of the application do not have these headings.

Guidelines for writing section headings:

-   Sentence-style capitalization.
-   Keep it short and sweet.
-   Use the Headings with Help pattern to add an information icon that includes:
    
    -   A brief description of the section of the application (think shortdesc style description).
    -   A 'Learn more about...' sentence that includes a help link to the main page for that area of the product in the documentation. Only the relevant words in the sentence should be the link.

### H1 page headings

These are child page headings for a section of the site, such as the page heading at the top of [Deployments](https://platform.boomi.com/AtomSphere.html#deploy). They indicate the page that you are on and are often followed with a descriptive or informational paragraph about the page.

Guidelines for writing page headings:

-   Sentence-style capitalization.
-   Keep it short and sweet.
-   Optionally use the Headings with Help pattern to add an informational icon that includes a link to the reference topic for the page. (If the page has multiple tabs and each tab is documented separately, link the parent topic here.)
-   Add a introduction to the page that includes:
    
    -   A description of the page, similar to a shortdesc, which can include multiple paragraphs and links.
    -   If it mentions another area of the application, ensure that part is a link to the correct screen.
    -   If there is task information in the Documentation, include a link to that task at the end of the description that reads: Learn more about this process. Add your link to the entire sentence.

## Implementation

While these elements can be used directly, we typically use the form heading constructs since they provide more thorough page heading functionality. This may change over time. Check back on occasion to ensure you’re using the most recent standards.

## Accessibility

By default, headings created with `<h1></h1>` through `<h6></h6>` tags are accessible unless we do something to break them like skip levels or use the headings out of order.

People who use accessibility technology such as screen readers often have the option to navigate a page based on the headings alone -- whether it’s a key combination that navigates from one heading to the next, or a menu that lists all of the headings on a page.

Because these capabilities require the technology to be able to programmatically identify headings, the heading tags must be used. When we create something that looks like a heading via CSS styling but doesn’t use the heading tags, it’s an accessibility failure of [WCAG 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) and [WCAG 2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks).

As mentioned in the Content section, [WCAG 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) requires the use of descriptive headings where headings and titles are warranted.

Headings should stay readable if the user changed their browser text size either through an external CSS file or the browser zoom tool to meet [WCAG 1.4.4 Resize Text](https://www.w3.org/WAI/WCAG21/quickref/#resize-text).

The currently-set text color of #212121 on #FFFFFF or #F5F5F5 meets the contrast minimums outlined in [WCAG 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum). Do not change the color of the headings unless you meet these standards and receive permission from the UX team.

## Headings with Information Icon

New pages within AtomSphere should include an inline description of the page under the page title. When that is not possible and you can’t explain what the page is about in the body of the page, explain it in an info bubble, including a link to the related topic in the Documentation.

## Example

![Coming Soon](https://exosphere.boomi.com/?path=/docs/assets/images/comingSoon.svg)

## Usage

The 2016 and earlier designs for headings at Boomi used this pattern extensively, preferring to move help information off of the main page where it didn’t take up screen real estate. The UX team has since decided that, in conjunction with other key decisions regarding screen real estate and layout, putting contextual information about the page in the body of the page itself is the better choice. Keeping the user on the page results in faster time-to-value and higher ease-of-use than having the user toggle between the documentation and the page itself.

Thus, **this is not the preferred pattern** for explaining what the page or silo does, or where to go for more information. The preferred pattern is the Form Header which places a descriptive paragraph on the page.

### When to use a heading with an information icon

-   Due to other business goals (such as use cases requiring density of information) the UX Designer and Technical Content Writer determine that the best place for help is not on the page.
-   The page is an existing page and the project does not have the scope to redesign this pattern out of the page at the moment.

### When not to use a heading with an information icon

-   Any time that you can put guiding information on the page instead of in an info bubble (so that it’s not “hidden behind a click”) do so. In those situations, use a normal heading instead.
-   The UX Designer and Technical Content Writer hold the final decision on whether an information icon is warranted.

### Related Components

The following components have similar functionality to this component.

-   Headings
-   Information Bubble
-   Form Header

**Note** The Information Bubble component has details about what can be stored in the information bubble associated with this component’s information icon.

## Function

The Heading with Information Icon is literally a heading component with an information icon next to it. For the Heading variants, see Headings. For the information icon’s behavior, see Information Bubble.

### Variations

If the page was converted from a Help Icon (deprecated component) in 2020, the default text for the information bubble is “Learn more in our Documentation.” The words “Documentation” link to the appropriate page in the Documentation. An off-page icon displays to indicate that the link opens a new tab.

If the page was customized or created after the conversion, the information bubble may have anything allowed in an information bubble inside.

## Style

-   The Heading styles are outlined in Headings
-   The Info icon styles are outlined in Information Bubbles. Note that the info icon is an inline SVG with a hover state and associated behaviors.
-   In this component, a 2px left margin separates the Heading from the Information Icon.

## Content

-   The Heading content guidelines are outlined in Headings.
-   The Info icon content guidelines are outlined in Information Bubbles.

## Implementation

-   Use the `helpText` attribute inside the element tag in the ui.xml.
-   See the example `ui.xml` above in "View Source".

## Accessibility

-   The Heading accessibility guidelines are outlined in Headings.
-   The Info icon accessibility guidelines are outlined in Information Bubbles.
