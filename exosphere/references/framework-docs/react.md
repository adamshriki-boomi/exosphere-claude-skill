---
id: "frameworks-react--overview"
title: "Frameworks/React"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=frameworks-react--overview&viewMode=docs"
scraped_at: "2026-04-21T08:42:59.895Z"
built_at: "2026-04-21T08:48:27.310Z"
---
# React

ExoSphere offers first-class support for React in Javascript and Typescript. Web components are wrapped with React wrappers for seamless developer experience out of the box.

## Install

```

npm i @boomi/exosphere

```

## Configuration

Import CSS in a global file such as `index.(js|ts)` or `App.(jsx|tsx)`

```

// App.(jsx|tsx)
import "@boomi/exosphere/dist/styles.css";

```

For running Jest unit tests, add the following entry in your `package.json`

```

{
    ... Other Configs ...
    "jest" : {
            "transformIgnorePatterns": [ "<roodDir>/node_modules/(?!@boomi/exosphere/)" ],
            "moduleNameMapper": {
                "^@boomi/exosphere": "<rootDir>/node_modules/@boomi/exosphere/dist/react/index.mjs"
            }
    }
    ... Other Configs ...
  }

```

**Configuration for Typescript:**

Set `isolatedModules` to `false` in `tsconfig.json`. Read more about this [here](https://www.typescriptlang.org/tsconfig#isolatedModules).

```

// tsconfig.json
{
  "compilerOptions": {
    ...
    "isolatedModules": false,
    ...
  }
}

```

## All set!

Start using ExoSphere components in your React app

**Javascript**

```

// src/App.jsx
import {ExButton} from '@boomi/exosphere';
function App() {
  return (
    <div>
        <ExButton flavor="base" type="primary"> Hello from ExoSphere!</ExButton>
    </div>
  );
}
export default App;

```

**Typescript**

```

// src/App.tsx
import {ExButton, ButtonFlavor, ButtonType} from '@boomi/exosphere';
function App() {
  return (
    <div>
        <ExButton flavor={ButtonFlavor.BASE} type={ButtonType.PRIMARY}> Hello from ExoSphere!</ExButton>
    </div>
  );
}
export default App;

```

**Notes for usage of Types:**

-   Types are available as part of the `@boomi/exosphere` (as shown in the example above)
    
-   Your IDE may trick you into importing Types from a different path and this may cause compilation errors like:
    
    `Module not found: Error: Package path ./types/react/COMPONENT is not exported from package`
    
    So be mindful of imports as we keep improving support & developer experience for Typescript.
    
-   Types for props follow a naming convention for ease of use in the format of **\[ComponentName\]\[PropName\]**.
    
    Few examples:
    
    -   `flavor` prop in a **button** would have type called `ButtonFlavor`
    -   `variant` prop in a **icon** would have type called `IconVariant`
    -   `type` prop in a **icon button** would have type called `IconButtonType`
    -   `size` prop in a **loader** would have type called `LoaderSize`
