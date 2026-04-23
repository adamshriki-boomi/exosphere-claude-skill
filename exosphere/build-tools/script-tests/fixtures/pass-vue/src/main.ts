import { createApp } from "vue";

import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere/dist/icon.js";
import "@boomi/exosphere";

import App from "./App.vue";

const app = createApp(App);

app.config.compilerOptions.isCustomElement = (tag: string) =>
  tag.startsWith("ex-");

app.mount("#app");
