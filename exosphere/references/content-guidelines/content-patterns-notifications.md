---
id: "content-content-patterns-notifications--overview"
title: "Content/Content Patterns/Notifications"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=content-content-patterns-notifications--overview&viewMode=docs"
scraped_at: "2026-04-21T08:42:58.089Z"
built_at: "2026-04-21T08:48:27.308Z"
---
# Notifications

#### Purpose

Textual design element to communicate with users and typically appear as alerts and banners.

#### Function

Notifications provide feedback to users in response to user actions or system wide messages

#### General Use

For, When

-   For letting users know when there is an update or status change they need to know
-   For use in *informational, success, or warnings.*
-   For establishing transparency and usability
-   When information needs to be relayed as minimally invasive as possible
-   For use in *task generated or system generated messages only*

#### Details

-   Use numbers like 1, 2, 3 etc when absolutely necessary. For example, 1 notification, 2 notifications, 3 notifications, and so on
-   Avoid popups whenever possible as it can be invasive and not seen if user has popups disabled, negatively impacting usability
-   Avoid use of timers for critical messages for accessibility purposes
-   Write easy to read sentences with punctuation in under 15-20 words. If it is more than 3 lines, it is too long. Work on simplifying your message to what they need to know.
-   Do not include personal or sensitive information in case the user is in a public setting
-   Avoid showing more than one notification at a time, like an inline and toast on same page
-   See design guidance on what our labels are and look like at [https://boomi.zeroheight.com/styleguide/s/99851/p/465dc0-alert-banners](https://boomi.zeroheight.com/styleguide/s/99851/p/465dc0-alert-banners).

## Examples

#### Notification Types & Usage

| Type | Usage | Examples |
| --- | --- | --- |
| Task generated notifications | generated in response to user action in a workflow or task. They give users immediate feedback. | A form is successfully submitted  
Credentials cant be found  
A form needs to be updated before it can be saved |
| System generated notifications | initiated by the application or system and provide system updates or status. | User loses network connection  
Scheduled system maintenance  
Session is about to expire |

#### What We Use

| Type | Usage |
| --- | --- |
| Alert Banners | 4 types:  
• Errors  
• Warnings  
• Success  
• Information  
  
See design system guidelines for more. |

#### Do not be wordy or use exclamation points

![Example showing concise notification without exclamation points](https://exosphere.boomi.com/assets/Notifications1-19fe4845.png)

#### Do be clear and direct

Replace Token? An authentication token already exists. If you generate a new token, it may break existing integrations that depend on it. CTA Cancel ReplaceReplace Token?

An authentication token already exists. If you generate a new token, it will may break existing integrations that depend on it

#### Do let the user know in as few words as possible with problem + solution format

![Example showing clear and direct notification message](https://exosphere.boomi.com/assets/Notifications2-aa7e393b.png)
