# Exosphere in Vue

Vue 3 handles web components natively — one compiler config, and you're in. This page covers Vue 3 (Composition or Options API). Vue 2 works similarly but is out of scope.

## Install

```bash
npm i @boomi/exosphere --save
```

## Wire the CSS + register the custom elements

Once, at application bootstrap:

```ts
// src/main.ts
import { createApp } from 'vue';
import '@boomi/exosphere/dist/styles.css';
import '@boomi/exosphere';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
```

The `@boomi/exosphere` side-effect import registers every `<ex-*>` custom element.

## Silence "unknown element" warnings

Tell Vue's template compiler which tags are custom elements. Two options:

### Option 1: Vite config (recommended, compile-time)

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ex-'),
        },
      },
    }),
  ],
});
```

### Option 2: Runtime app config

```ts
// src/main.ts
const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ex-');
```

Without one of these, Vue logs a warning on every `<ex-*>` render. Functionally the components still work, but your console gets noisy.

## Template syntax

```vue
<template>
  <ex-button type="primary" flavor="branded" @click="save">Save</ex-button>
  <ex-alert-banner type="info" variant="persistent">
    Maintenance tonight.
  </ex-alert-banner>
</template>

<script setup lang="ts">
function save() { /* ... */ }
</script>
```

## Property vs. attribute binding

Vue uses `.prop` or `.attr` modifiers to disambiguate. For web components, prefer property binding for non-string values:

```vue
<template>
  <!-- Simple string/boolean: attribute is fine -->
  <ex-button type="primary">Save</ex-button>

  <!-- Complex value: property -->
  <ex-table :rowData.prop="users" :columnDefs.prop="columns"></ex-table>

  <!-- Boolean with explicit prop binding -->
  <ex-button :disabled.prop="isLoading">Save</ex-button>
</template>
```

## Events

Web-component events are kebab-case and fire as `CustomEvent`. Vue's `@event-name` listens to them. Read the payload from `$event.detail`:

```vue
<template>
  <ex-dialog
    :open.prop="isOpen"
    @open-change="handleOpenChange"
    header-content="Confirm delete"
  >
    Are you sure?
  </ex-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

function handleOpenChange(event: CustomEvent<{ open: boolean }>) {
  isOpen.value = event.detail.open;
}
</script>
```

## Two-way binding with v-model

`v-model` on a web component binds to its `value` property and listens to the `input` event by default. For Exosphere inputs this works:

```vue
<template>
  <ex-input v-model="name" label="Name" />
</template>

<script setup>
import { ref } from 'vue';
const name = ref('');
</script>
```

For components with non-standard value props (e.g., a component that emits `value-change`), use a custom `v-model` definition:

```vue
<ex-combobox
  :value.prop="country"
  @value-change="country = $event.detail.value"
></ex-combobox>
```

## TypeScript

If you get "property doesn't exist on type" errors for `<ex-*>` custom props, declare the tags:

```ts
// src/shims-exosphere.d.ts
import type { DefineComponent } from 'vue';

declare module 'vue' {
  interface GlobalComponents {
    'ex-button': DefineComponent<{
      type?: string;
      flavor?: string;
      size?: string;
      disabled?: boolean;
    }>;
    // ...add tags you use
  }
}
```

Or set `compilerOptions.strict: false` in templates (not recommended for apps).

## Nuxt

Nuxt 3 is built on Vue 3. Same setup, but place it in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  css: ['@boomi/exosphere/dist/styles.css'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('ex-'),
    },
  },
});
```

And import the side-effect register in a client-only plugin:

```ts
// plugins/exosphere.client.ts
export default defineNuxtPlugin(() => {
  import('@boomi/exosphere');
});
```

`.client.ts` suffix ensures it doesn't run during SSR — Lit components can't server-render.

## Starter file

See [`assets/framework-setup-snippets/vue-main.ts`](../../assets/framework-setup-snippets/vue-main.ts).

## Troubleshooting

**"Failed to resolve component: ex-button"** — `isCustomElement` not configured. See the two options at the top of this page.

**Props don't update when you change them in script** — You're using attribute binding for a non-string value. Use `.prop` modifier.

**`v-model` doesn't work on a component** — That component doesn't emit on `input`. Switch to explicit `:value.prop` + `@value-change`.

**Nuxt SSR errors about `window is not defined`** — Move Exosphere imports into a `.client.ts` plugin; the component tree renders client-only.

**Styles missing** — `styles.css` not imported. In Nuxt, add to `css: []` in `nuxt.config.ts`. In Vite, import in `main.ts`.
