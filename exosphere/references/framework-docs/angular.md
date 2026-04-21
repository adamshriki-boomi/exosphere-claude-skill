---
id: "frameworks-angular--overview"
title: "Frameworks/Angular"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=frameworks-angular--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:00.850Z"
built_at: "2026-04-21T08:48:27.310Z"
---
# Angular

ExoSphere web components can be directly used in Angular. There are some additional configurations that are needed.

## Install

```

npm i @boomi/exosphere

```

## Configuration

Apply custom elements schema as shown below.

```

// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

```

Next, import ExoSphere assets.

```

// app.component.ts
import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere";

```

## All set!

Start using ExoSphere components in your Angular app

```

<div>
  <ex-button (click)="doSomething()" type="primary" flavor="branded">Hello Angular!</ex-button>
</div>

```
