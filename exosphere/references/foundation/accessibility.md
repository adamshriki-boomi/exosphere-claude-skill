---
id: "system-foundation-accessibility--overview"
title: "System Foundation/Accessibility"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=system-foundation-accessibility--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:02.422Z"
built_at: "2026-04-21T08:48:27.313Z"
---
# Accessibility

 

### Overview

Accessibility is the responsibility of everyone within the organization, including Design, Engineering, Product, etc. and should be prioritized to ensure that we meet the needs of all users. Boomi's goal is to comply with WCAG 2.1 level AA and Revised 508 Standards.

As an organization, we should make sure to adhere to the [4 principles of accessibility:](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head)

1.  **Perceivable**

This means that users must be able to perceive the information being presented (it can't be invisible to all of their senses)

3.  **Operable**

This means that users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)

5.  **Understandable**

This means that users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding)

7.  **Robust**

This means that users must be able to access the content as technologies advance (as technologies and user agents evolve, the content should remain accessible)

### How do we reach our goals?

Making an accessible product requires everyone. Our content and documentation writers, user experience designers and researchers, developers, quality engineers, and product owners create accessible products. Our sales, support, training, and marketing staff communicate our accessibility upgrades to our customers.

The most reliable way for product teams to build accessible products is to:

-   Use standard components outlined here in the Design System. As the Schrodinger team upgrades standard components and fixes things, everyone using those components gets the upgrades automatically.
-   Work with the Schrödinger team closely when developing a new component or new code element (even if it's a one-off) to ensure that it's meeting our accessibility guidelines.
-   Test early and often.
-   Follow the #accessibility channel on Slack for news about accessibility, company-wide announcements, and links to people with disabilities talking about their lives and challenges.

### What are our priorities for fixing existing issues?

The three topics that most frequently cause issues for our disabled users are keyboard accessibility, image accessibility, and form accessibility.

-   **Keyboard:** Everyone should be able to use a keyboard (and only a keyboard) to complete all of their tasks within AtomSphere.
-   **Images:** Icons and images that convey meaning need to be labeled so that screen readers and other assistive technology (AT) ensure the user understands the meaning, typically through the use of alt tags with a written description of the image. Images that don't convey meaning need to be written so they don't "clutter" the experience for people using AT.
-   **Forms:** In addition to being keyboard accessible, forms need to be easy to use for people with low vision, motor disabilities, cognitive disabilities, and a whole host of other issues. This means ensuring that labels and instructions are available to everyone, alerts and errors are communicated clearly, people have time to complete a form, and we use techniques like progressive disclosure to make forms more effective for everyone.

### How the UX team ensures accessibility

Currently, we ensure accessibility by doing the following:

1.  Our color palette is based on color contrast which ensures our colors are accessible
2.  We review each design system component as a group to check that designs are accessible including using the proper color contrast, considering keyboard navigation, and considering screenreader compatibility
3.  All design system component documentation have accessibility guidelines attached (see individual components for Accessibility guidelines)
4.  Nancy has created an Accessibility guidelines document and checklist for Engineering teams to follow to ensure components are built in an accessible manner
5.  We also make sure to follow:
    1.  Write with screenreaders in mind, which includes using proper alt and aria labels
    2.  Create accessible audio and video, which includes using captions
    3.  Consider color and contrast, which includes not relying solely on color for conveying information and ensuring WCAG contrast guidelines are followed
