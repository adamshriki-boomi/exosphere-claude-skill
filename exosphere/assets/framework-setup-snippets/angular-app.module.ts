// app.module.ts — Angular module-based setup for Exosphere.
// For standalone components, copy the CUSTOM_ELEMENTS_SCHEMA line
// into the @Component decorator instead.

import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

// Load Exosphere styles + register custom elements.
import "@boomi/exosphere/dist/styles.css";
import "@boomi/exosphere";

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
