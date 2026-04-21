---
id: "system-foundation-grid-system-guidelines--overview"
title: "System Foundation/Grid System/Guidelines"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=system-foundation-grid-system-guidelines--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:02.759Z"
built_at: "2026-04-21T08:48:27.314Z"
---
# Guideline Overview

Exosphere uses grid systems to organize UI elements and information, ensuring visual consistency across experiences.

#### Types of Grids

**Default Grid**

Grid that has a max width of of 1440px for main content and centered in the screen

**Fluid Grid**

Grid that spans 100% of the screen.

**Icon Grid**

Grid and keylines for responsive icon designs

#### Usage & setup

Layout Grid styles are included in Foundations. Refer to the following table when setting up Default Grids.

\*= Recommended sizing for designs

**For web or platform screens that DO NOT require full-screen UI:**

| Screen | Breakpoint | ex-size | Margin | Artboard (Design) | Layout Grid |
| --- | --- | --- | --- | --- | --- |
| \*Mobile | 544px | em-sm | 20px | 360 x 800px | Default / SM |
| \*Tablet | 768px | em-md | 48px | 768 x 1024px | Default / MD |
| \*Tablet / Desktop | 996px | em-lg | 48px | 768 x 1024px | Default / MD |
| \*Desktop - small | 1200px | ex-xl | 48px | 1024 x 768px | Default / LG |
| \*Desktop - Default | 1440px | ex-xxl | 80px | 1440 x 900px | Default / XL |
| \*Desktop - HD | \>1440px | ex-xxl | Auto | 1920 x 1080px | Default / XXL |

**For full-screen UI:**

| Screen | Breakpoint | ex-size | Margin | Artboard (Design) | Layout Grid |
| --- | --- | --- | --- | --- | --- |
| \*Mobile | 544px | em-sm | 24px | 360 x 800px | Default / SM |
| \*Tablet | 768px | em-md | 24px | 768 x 1024px | Fuild / MD |
| \*Tablet / Desktop | 996px | em-lg | 24px | 768 x 1024px | Fuild / MD |
| \*Desktop - small | 1200px | ex-xl | 24px | 1024 x 768px | Fuild / LG |
| \*Desktop - Default | 1440px | ex-xxl | 24px | 1440 x 900px | Fuild / XL |
| \*Desktop - HD | \>1440px | ex-xxl | 24px | 1920 x 1080px | Fuild / XXL |

When paired with left nav / side panels with fixed width, adjust the grid setup to include adjusted offset values for main content, e.g. set fixed width for side panels and apply layout grids to content frame.
