---
id: "patterns-dialogs--overview"
title: "Patterns/Dialogs"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=patterns-dialogs--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:08.045Z"
built_at: "2026-04-21T08:48:27.312Z"
---
# Dialogs

When should you use a dialog and what is the correct way of doing the same?

  

## What is a Dialog?

A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

  

## When to use a dialog?

Dialogs are purposefully interruptive, so they should be used sparingly. A less disruptive alternative is to use a menu, which provides options without interrupting a user’s experience.

  

## Do's & Don'ts

### Do's

Use dialogs for prompts that block an app’s normal operation, and for critical information that requires a specific user task, decision, or acknowledgement.

### Don'ts

Don’t use dialogs for low- or medium-priority information. Instead use a snackbar, which can be dismissed or disappear automatically.

  

## Dialog vs Banner vs Toast Decisions and Guidance

| Component | Importance | Action Needed |
| --- | --- | --- |
| Toast | Low | Optional: Toasts may not have a button, and can disappear automatically |
| Banner | Medium | Optional: Banners remain on screen until acted on or dismissed, or if the state that caused the banner is resolved |
| Dialog | High | Required: Dialogs block the main content until an action is confirmed |
