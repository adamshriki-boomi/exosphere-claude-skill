---
id: "content-content-patterns-ctas--overview"
title: "Content/Content Patterns/CTAs"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=content-content-patterns-ctas--overview&viewMode=docs"
scraped_at: "2026-04-21T08:42:56.265Z"
built_at: "2026-04-21T08:48:27.307Z"
---
# CTAs

#### Purpose

Interactive design element used to navigate a process.

#### Function

Buttons are used for actions the user wants or needs to take. They are essential visual cues that highlight a user's most important next step.

#### General Use

-   For launching or navigating through a step-by-step process
-   For completing a transaction or process
-   When there are 2 important actions a user can take, you may use 2 buttons as long as the most important action is highlighted or stands out. Best practices are to include the most important action on the right side, however, Boomi practices put these most important actions on the left
-   For letting the user know what to expect upon clicking the button
-   The best choices for the secondary action are using "Previous" or "Cancel" to help the user back out of destructive action

#### Details

-   For case rules, if there are more than 3 words, use sentence case. If 3 or less, use title case
-   Button copy should be limited to 14 characters with spaces or to a single line when viewed on a mobile device
-   Use concise, direct language that shows the purpose of the button so that the user knows what to expect
-   Buttons are stand alone components, as opposed to links, which can exist in-line.
-   In destructive action, button on right is the primary action, button on the left is secondary action. (see General use for how Boomi uses it)
-   Write phrases without articles like an, and a if the meaning of the sentence is unchanged. Avoid articles for clarity and brevity whenever possible. For example of no articles with same meaning, Create API vs Create an API, Add REST Endpoint vs Add a REST Endpoint.
-   Do not symbols (&, @, etc) in CTA buttons. Use full names whenever possible.
-   If CTA is a link, no more than 3-4 words whenever possible or condense for readability. Use case rules for buttons above

## Examples

#### Most commonly used buttons and what they mean

| CTA Button | When to use |
| --- | --- |
| Create | To refer to something that is saved, like a component, process or Atom |
| Add | To add a configuration or something to a component |
| Save | To finalize the current state or keep changes made |
| Close | To exit from a screen without saving |
| Next | To move to the next step in a process |
| Previous | To go back to a previous step in a process |
| Exit | To leave or exit entire program |
| Cancel | To cancel a process |
| Delete | To permanently remove from system |
| Remove | To set aside/ take away, still exists |
| Submit | To transmit a completed set of fields |
| Finish | To complete a process |
| Yes | To confirm a step |
| No | To cancel a transaction or avoid a destructive action |
| Print | To print a page |
| Return to my account | To start over |
| Not available | When date is uncertain or in the future; associated with dates |
| None | When data or field is left blank by user or system; associated with an action |

#### Do use Title case if 1-3 Words

![Example showing title case for 1-3 word CTAs](https://exosphere.boomi.com/assets/cta1-627234cf.png)

#### Do highlight the most important action

![Example showing highlighting the most important action](https://exosphere.boomi.com/assets/cta2-e2c31cc9.png)

#### Do use sentence case for more than 3 words

![Example showing sentence case for more than 3 words](data:image/png;base64,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)

#### Do use title case for 3 words or less

![Example showing title case for 3 words or less](data:image/png;base64,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)
