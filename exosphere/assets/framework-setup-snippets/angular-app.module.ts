// app.module.ts — Angular module-based setup for Exosphere.
// For standalone components, copy the CUSTOM_ELEMENTS_SCHEMA line
// into the @Component decorator instead.

import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

// Load Exosphere: styles, icon registry, and custom-element registration.
// Order matters: icon.js populates the icon store before custom elements render.
import "@boomi/exosphere/dist/styles.css"; // component styling
import "@boomi/exosphere/dist/icon.js";    // icon registry — required 7.x+
import "@boomi/exosphere";                  // side-effect: defines every <ex-*> custom element

// If your app uses ExTable:
// import "@boomi/exosphere/dist/exo-table-styles.css";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
