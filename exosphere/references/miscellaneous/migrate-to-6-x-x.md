---
id: "miscellaneous-migrate-to-6-x-x--overview"
title: "Miscellaneous/Migrate to 6.x.x"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=miscellaneous-migrate-to-6-x-x--overview&viewMode=docs"
scraped_at: "2026-04-21T08:44:05.958Z"
built_at: "2026-04-21T08:48:27.312Z"
---
# Migrating to 6.x.x

  

This guide outlines the steps and changes required to migrate your Exosphere project from version 5.x.x to 6.x.x. It covers key updates, deprecated features, and new additions to help you transition smoothly.

## Table of Contents

1.  Installation & registration
    
2.  Components
    
    -   File Uploader
    -   Page Header
    -   Rich Text Editor
    -   Table

# Installation & Registration

  

We have a made an important update to the way exosphere components gets registered. Exosphere components are web components, so they need to be registed with the browser `customElementRegistry` for the browser to know how to render them. Up until previous version, the components were registered as soon as you load them into your application. This posed some difficulties as developer doesn't have control when and what component gets registered. Suppose you want to install two different version of exosphere, you won't be able to as we cannot register duplicate components in `customElementRegistry`

So from 6.0.0 version , we are exporting another function from the bundled file as well as the individual component file, `register`. Calling this function will register the component(s).

```

import register from "@boomi/exosphere";
register();

```

Browser won't know how to render exosphere components without the `register` call.

  
  

you can also pass a string that should be used as suffix while registering the component with `customElementRegistry`.

```

import register from "@boomi/exosphere";
register("beta");

```

in the above example we have passed `beta` as the suffix, so you need to append append this suffix to the component name when you use it

```

<ex-button-beta>Click me!</ex-button-beta>

```

## Components

This section will help you migrate your Components.

### File Uploader

-   UI updates.

  

### Page Header

-   UI updates.

  

### Rich Text Editor

-   UI updates to enhance accessibility.
-   Selected state added on selection of toolbar buttons.

  

### Table

-   UI updates.
