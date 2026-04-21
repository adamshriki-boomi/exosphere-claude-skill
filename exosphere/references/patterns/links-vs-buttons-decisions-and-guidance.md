---
id: "patterns-links-vs-buttons-decisions-and-guidance--overview"
title: "Patterns/Links vs Buttons/Decisions and Guidance"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=patterns-links-vs-buttons-decisions-and-guidance--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:07.397Z"
built_at: "2026-04-21T08:48:27.312Z"
---
# Links vs Buttons Decisions and Guidance

If the component that you're looking for is not listed here, either we haven't made a decision or we haven't updated the content. Ask the Design Systems team for more information.

Note: Making a link look like a button or a button like a link so that you can have the correct code or assistive technology semantics while simultaneously confusing sighted users is strictly forbidden.

  

## Alerts

The content in an alert could be anything, and it often includes a link. The interaction that allows you to clear an alert off the screen is a button.

## Breadcrumbs

Breadcrumbs are coded as links, because they are navigation elements that allow a user to jump backwards in the information architecture rapidly.

## Buttons

Interactive components that produce an action, such as form submission, adding or removing elements, etc. should use button elements as described on .

## Information Bubbles

Information bubbles are a form of dialog, and should be launched with a button. They're currently using links. The Design Systems team has plans to move them to buttons in the relatively near future.

## Links

Text or icons that clearly take a user to another context as described on Links, should use anchor elements as described on Links.

## Dialogs

The vast majority of our component contents provide alerts, content, or prompt for decisions that are specifically in the context of the originating base page. They're dialogs because we don't want to imply a separate context by sending the user to a new page. Therefore, a button launches a dialog.

Most of our dialogs are not currently implemented as buttons so this represents technical debt.

Note: The Side Panel Dialog, which often is its own big complex heap of content, is often loosely tied to the context of the calling process, process report item, etc. These large complex dialogs could arguably be their own contexts, and thus links may be appropriate for launching them. Decision is TBD.

## Global Navigation

The global header is made up of multiple sections: the Boomi logo, the services and element navigation bars, the mail icon, and the sign out button

-   The Boomi logo takes the user back to the homepage, and thus is a link.
-   We decided to code the vast majority of the elements in the Services and Element navigation as links because most of the interactions take you somewhere. Some items could arguably be buttons, but in this case we found erring on the side of link made coding, debugging, and understanding the navigation easier.
-   The Mail icon serves one purpose, to reveal the Mail dialog. As such, we coded it as a button.
-   The Sign Out button serves one purpose, to reveal the Confirm Sign Out dialog. It is also a button.

## Menus

Action menus, which display choices of actions the user can take, are coded as buttons, because they display a dialog-like list of choices. The content in the action menu could be either a link or a button depending on what it does.
