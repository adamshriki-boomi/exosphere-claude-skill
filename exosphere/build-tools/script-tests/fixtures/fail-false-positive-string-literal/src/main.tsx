import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// This fixture reproduces the false-positive the other agent hit: the literal
// strings "@boomi/exosphere/dist/styles.css" and "@boomi/exosphere/dist/icon.js"
// appear inside a markdown/memory body, but neither is actually imported.
// A naive grep would find these; the script must not.

export const SKILL_DOCS = `
## Root imports

\`\`\`ts
import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere/dist/icon.js";
\`\`\`

Both are required. Missing either one causes silent rendering bugs.
`;

export const SAMPLE_CODE_SNIPPET =
  'import "@boomi/exosphere/dist/styles.css"; import "@boomi/exosphere/dist/icon.js";';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
