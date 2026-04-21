# Exosphere in Angular

Exosphere's web components drop into Angular with one setup step: tell Angular's schema system that `ex-*` tags are custom elements. Then use them in templates directly.

## Install

```bash
npm i @boomi/exosphere --save
```

## Wire the CSS + register the custom elements

Register Exosphere's JS once (this triggers custom element registration) and import its CSS:

```ts
// src/main.ts  or  app.module.ts
import '@boomi/exosphere/dist/styles.css';
import '@boomi/exosphere';
```

The import of `@boomi/exosphere` (without destructuring) runs the `register` side-effect that defines every `<ex-*>` custom element. Do this exactly once, at application bootstrap.

## Module-based apps: add `CUSTOM_ELEMENTS_SCHEMA`

```ts
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import '@boomi/exosphere/dist/styles.css';
import '@boomi/exosphere';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // <- this line
})
export class AppModule {}
```

Without `CUSTOM_ELEMENTS_SCHEMA`, Angular will error on every `<ex-*>` tag: *"ex-button is not a known element"*.

## Standalone components (Angular 15+)

```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ex-button type="primary" flavor="branded" (click)="save()">Save</ex-button>
  `,
})
export class ProfileComponent {
  save() { /* ... */ }
}
```

Every standalone component that uses `<ex-*>` tags needs `schemas: [CUSTOM_ELEMENTS_SCHEMA]`.

## Template syntax

Web-component tags directly. Props are plain attributes:

```html
<ex-button type="primary" flavor="branded" size="large">
  Save
</ex-button>

<ex-alert-banner type="info" variant="persistent">
  Maintenance window tonight.
</ex-alert-banner>
```

### Events

Event names are kebab-case. Use `(event-name)` syntax:

```html
<ex-dialog
  [open]="isOpen"
  (open-change)="handleOpenChange($event)"
  header-content="Confirm delete"
>
  Are you sure?
</ex-dialog>
```

The `$event` is a `CustomEvent`; the payload is on `$event.detail`:

```ts
handleOpenChange(event: CustomEvent<{ open: boolean }>) {
  this.isOpen = event.detail.open;
}
```

### Property vs. attribute binding

For simple scalar values (strings, booleans), attribute binding works:

```html
<ex-button [attr.disabled]="isDisabled ? 'true' : null">Save</ex-button>
```

For complex values (arrays, objects), use property binding:

```html
<ex-table [rowData]="users" [columnDefs]="columns"></ex-table>
```

Angular's `[propertyName]` syntax sets the JS property directly, which is what you want for non-string values. Web components handle both, but property binding is less error-prone.

## NgZone and heavy components

`ExTable` (AG-Grid wrapper), `ExChart` (D3), `ExJsonEditor`, and `ExRichTextEditor` do a lot of internal DOM work. When rendered inside Angular's zone, they trigger change detection on every internal tick. For big datasets or frequent updates, run them outside the zone:

```ts
import { Component, NgZone } from '@angular/core';

@Component({ /* ... */ })
export class DashboardComponent {
  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      // heavy setup, e.g. wiring up chart data updates
    });
  }
}
```

Then re-enter the zone (`ngZone.run(() => ...)`) only when you need Angular to notice a change.

## Forms interop

Exosphere form components (`ExInput`, `ExCheckbox`, `ExCombobox`, etc.) don't implement Angular's `ControlValueAccessor` out of the box — they're framework-agnostic. Two patterns work:

1. **Template-driven**: read `(input)` or `(value-change)` events and push into a model. Simple, no extra deps.
2. **Reactive**: wrap the component in a custom `ControlValueAccessor` directive that proxies to the web component's property. Pattern shown in Storybook's Angular examples.

For most apps, the template-driven pattern is enough. See the Storybook Angular framework story for reactive-form examples.

## Two-way binding

Angular's `[(ngModel)]` only works with `ControlValueAccessor`-compatible components. For `ex-input`:

```html
<!-- Manual two-way -->
<ex-input
  [value]="name"
  (input)="name = $event.target.value"
></ex-input>
```

Or use a custom CVA directive.

## TypeScript

Angular's strict template checker (`strictTemplates`) may complain about unknown attributes on `ex-*` tags. Two options:

1. Leave `strictTemplates: false` for components that use Exosphere.
2. Declare type augmentations for the tags you use:
   ```ts
   // types/exosphere-angular.d.ts
   declare global {
     interface HTMLElementTagNameMap {
       'ex-button': HTMLElement;
       // ...
     }
   }
   export {};
   ```

## Starter file

See [`assets/framework-setup-snippets/angular-app.module.ts`](../../assets/framework-setup-snippets/angular-app.module.ts).

## Troubleshooting

**"ex-button is not a known element"** — `CUSTOM_ELEMENTS_SCHEMA` missing from the module or standalone component.

**Events don't fire** — Event names are kebab-case. `(click)` works on most `<ex-*>` tags (they fire native click), but for Exosphere-specific events check the story.

**Styles missing / components look plain** — The `@boomi/exosphere/dist/styles.css` import isn't loading. Add it to `angular.json` under `styles`, or import in `main.ts`.

**`ExTable` renders no grid** — Also import `@boomi/exosphere/dist/exo-table-styles.css`.

**Change detection tanking on dashboards** — Use `ngZone.runOutsideAngular` around heavy component setup.
