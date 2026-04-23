// src/main.ts — Vue 3 entry with Exosphere wired in.
// Prefer declaring isCustomElement in vite.config.ts at compile time
// (see below); this runtime fallback is included for clarity.

import { createApp } from "vue";

// Load Exosphere: styles, icon registry, and custom-element registration.
// Order matters: icon.js populates the icon store before custom elements render.
import "@boomi/exosphere/dist/styles.css"; // component styling
import "@boomi/exosphere/dist/icon.js";    // icon registry — required 7.x+
import "@boomi/exosphere";                  // side-effect: registers every <ex-*> custom element

// If your app uses ExTable:
// import "@boomi/exosphere/dist/exo-table-styles.css";

import App from "./App.vue";

const app = createApp(App);

// Runtime fallback — can be removed if vite.config.ts configures isCustomElement
app.config.compilerOptions.isCustomElement = (tag: string) =>
  tag.startsWith("ex-");

app.mount("#app");

/*
-- Preferred: compile-time config in vite.config.ts --

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ex-"),
        },
      },
    }),
  ],
});
*/
