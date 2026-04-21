// Vite + React + TypeScript entry.
// Drop-in template for a new app. For CRA, use src/index.tsx instead.

import React from "react";
import ReactDOM from "react-dom/client";
import "@boomi/exosphere/dist/styles.css"; // <- required; without this components are unstyled

// If you use ExTable anywhere, also:
// import "@boomi/exosphere/dist/exo-table-styles.css";

// If you use the AI-surface kit:
// import "@boomi/exosphere/dist/ui-kit/ai.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
