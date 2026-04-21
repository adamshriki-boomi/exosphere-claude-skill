---
id: "frameworks-vue--overview"
title: "Frameworks/Vue"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=frameworks-vue--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:01.014Z"
built_at: "2026-04-21T08:48:27.310Z"
---
# Vue

ExoSphere web components can be directly used in Vue with some minimal configurations.

## Install

```

npm i @boomi/exosphere

```

## Configuration

Import ExoSphere assets in `main.js`

```

// src/main.js
import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere";

```

## All set!

Start using ExoSphere components in your Vue app

```

// src/App.vue
<template>
    <ex-button type="primary" flavor="branded" @click="doSomething">Hello Vue!<ex-button>
</template>

```
