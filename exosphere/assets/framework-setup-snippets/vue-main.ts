// src/main.ts — Vue 3 entry with Exosphere wired in.
// Prefer declaring isCustomElement in vite.config.ts at compile time
// (see below); this runtime fallback is included for clarity.

import { createApp } from "vue";

// Load Exosphere styles + register custom elements.
import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere";

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
