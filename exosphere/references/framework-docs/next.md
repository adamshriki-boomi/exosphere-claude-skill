---
id: "frameworks-next--overview"
title: "Frameworks/Next"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=frameworks-next--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:01.210Z"
built_at: "2026-04-21T08:48:27.310Z"
---
# Next

ExoSphere offers first-class support for Next in Javascript and Typescript. There are some additional configurations that are needed.

## Required

```

// Required node version
  Node.js 16.14 or later.
  // Install latest node version   nvm i node or nvm i 16.20.0

```

## Install

```

npm i @boomi/exosphere

```

## Configuration

Import CSS in a global file such as `page.(js|tsx)`

```

// page.(js|tsx)
import "@boomi/exosphere/dist/styles.css";

```

For running Exosphere Component, add the following entry in your `page.(js|tsx)`

```

//page.(js|tsx)
  "use client";
  import { useEffect } from "react";
function Boomi() {
useEffect(() => {
import("@boomi/exosphere");
}, []);
return (
<div>hello</div>
); }

```

**Configuration for Typescript:**

Set "moduleResolution": "node", `moduleResolution` to `node` in `tsconfig.json`.

```

// tsconfig.json
{
  "compilerOptions": {
    ...
    "moduleResolution": "node",
    ...
  }
}

```

## All set!

Start using ExoSphere components in your Next app

**Javascript**

```

// src/page.js
"use client";
import { useEffect } from "react";
import "@boomi/exosphere/dist/styles.css";
function Home() {
useEffect(() => {
import("@boomi/exosphere");
}, []);
return (
<>
  <ex-button flavor="branded" type="primary" size="large">
    Hello from Exosphere!  </ex-button>
</>
);
}
export default Home;

```

**Typescript**

```

// src/page.tsx
"use client";
import { useEffect } from "react";
import "@boomi/exosphere/dist/styles.css";
function Home() {
useEffect(() => {
import("@boomi/exosphere");
}, []);
return (
<>
  <ex-button flavor="branded" type="primary" size="large">
    Hello from Exosphere!  </ex-button>
</>
);
}
export default Home;

```

To use the component, we have to declare the type of component in **'JSX.IntrinsicElements'**. So we have to create a file in the name of **\[filename\].d.ts** for ex:- `declarations.d.ts`

```

// declarations.d.ts
declare namespace JSX {
    interface IntrinsicElements {
        "ex-button": any;
        "ex-accordion": any;
        etc...
    }
}

```
