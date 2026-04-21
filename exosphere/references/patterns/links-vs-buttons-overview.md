---
id: "patterns-links-vs-buttons-overview--overview"
title: "Patterns/Links vs Buttons/Overview"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=patterns-links-vs-buttons-overview--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:06.425Z"
built_at: "2026-04-21T08:48:27.312Z"
---
# Links vs Buttons Overview

When should you use a link, and when should you use a button?

> Links go places. Buttons do things.  
> ~Anonymous

The key to the decision is not based on the visual design of the element, or how much visual hierarchy the element needs. The key to deciding when to use a button and when to use a link is context:

-   A **link** sets the expectation that users who trigger it will be moved to a new context.
-   A **button** sets the expectation that the current context is maintained.

## Links go places

An activated link moves the user from the current context to a new context. That might mean:

-   Moving from one area of the site to another.
-   Moving from one site to another.

Links are most associated with navigation: global navigation such as the masthead, local navigation such as left menu bars, and in-page navigation such as anchor tags. They can be used to deep-link into both content and application resources.

**Images to be added**

## Buttons do things

An activated button transforms or transmits the information the user receives on the page. That might mean:

-   Submitting a form or clearing the form of data.
-   Displaying a menu or toggling an interface.
-   Playing media content.

Buttons are most associated with forms. These days, thanks to JavaScript, a button can do almost anything. This includes hiding, displaying, adding, removing, editing, rearranging, and reordering elements on a page

## Links must look like links, and buttons like buttons

[Jakob's Law](https://lawsofux.com/jakobs-law.html) tells us that users want our site to behave like all the other sites they use, so that they can transfer their expectations. We are roughly 25 years into the World Wide Web, so expectations are already set that links are inline text, generally with an underline, generally blue. Buttons have become more creative over the years, but they are always rectangular-ish with some sort of border or contrasting background color.

Both links and buttons confer "clickability" with their visual designs, because users have learned to recognize them as clickable objects. The further their visual designs stray from "underlined blue text" or "rectangle with words," the more usability testing we need to do to confirm users still understand them.

Links must not look like buttons and buttons must not look like links. If nothing else, ensuring that both a Customer Support representative and the customer they are talking to agree that the item on the page is a link or a button also ensures faster call times and less frustration for both parties.

## So why's this so confusing?

The biggest challenge choosing between links and buttons occurs when we ask ourselves, "Does this change the context?" and the answer is "eeeh, sort of?"

For example, it's pretty easy to argue that an Action Menu should be triggered by a button: the trigger does something (displays content) but does not change the context or leave the page.

But what about AtomSphere's global navigation? The first entry, "Home," is a link, because it goes somewhere, but its sibling entry, "Services," displays a submenu of services available. The items in the Services menu are links the same way that Home is, but Services itself doesn't go anywhere, it does something. On the other hand, having the first thing in a complex menu read out to assistive technology that it's a link and the second thing read out that it's a button is even more confusing.

Similar arguments can be made for a lot of our complex web components. The problem goes deeper ﹘ to the specifications themselves. A user who's about to click on a tab in a tabset doesn't expect the item to be either a link or a button. They expect it to be a tab. "Tab" isn't a native HTML element, though, so when we're trying to build semantic HTML, we don't have that tool in the toolbox.

## Enter ARIA

[ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), or Accessible Rich Internet Applications, is a set of attributes that help people with disabilities or using assistive technology better identify what a website is displaying. It gives us the opportunity to label a tab as a tab, and the container that it's in as a tabset. It can identify whether an accordion is opened or closed, and whether the item that currently has focus is a dialog.

  

The First Rule of ARIA Use is "If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible then do so."

That means we don't create divs (or worse, links) and then put an ARIA role of button on them, for example. We use ARIA to extend, not recreate, what HTML already provides.

Now that ARIA is available, however, the angst of "what is a link vs what is a button" is (somewhat) lessened. Extending our tab example, it doesn't much matter whether we use a link or a button, so long as whatever we use identifies itself as a tab and whether or not it's selected. We will still research the consensus on the most accessible and usable implementations, choose a standard, and apply it.

## Where does that leave us now?

Historically, Boomi didn't put much thought into what was a link and what was a button, relying on our developers' skills and the pre-built GWT components to do most of the work for us.

We've since learned that path leads to significant inconsistency. Should a dialog be opened as a link or a button? Right now, it might be opened by either one -- or by a wholly inaccessible div that ignores keyboard input and other concerns. Moving forward, we must be more consistent.

We're working to both clearly define what interactions should be links, and what interactions should be buttons. As those decisions are made, the Decisions and Guidance page will be updated with the decisions.
