---
id: "miscellaneous-migrate-to-7-x-x--overview"
title: "Miscellaneous/Migrate to 7.x.x"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=miscellaneous-migrate-to-7-x-x--overview&viewMode=docs"
scraped_at: "2026-04-21T08:44:07.462Z"
built_at: "2026-04-21T08:48:27.312Z"
---
# Migrating to 7.x.x

  

> **🗓️ Note: Exosphere 7.0.0 version is released on June 19 2025. All Consuming Apps need to upgrade it and release as part of September 2025 release**

  

> **🗓️ Note: Please import icon.js and table styles into your root file, as icons and tables will not render correctly without these imports. Refer to instructions below**

  

This upgrade focuses on Build Performance and UI improvements.

Use this guide to understand the steps and component-specific changes needed to migrate seamlessly from version 6.x.x.

  

## 🔍 What's Changed? (At a Glance)

| Component | Change Type | Summary |
| --- | --- | --- |
| Button | Visual Styling | Updated hover, focus and pressed states styles |
| File Uploader | Visual Styling | Updated progress bar background |
| Icons | **Build Performance** | Changed the way to load icons |
| Icon Button | Visual Styling | Updated hover, focus and pressed states styles |
| Progress Bar Loader | Visual Styling | Updated background color |
| Side Drawer | UX Behavior | Footer fixed to bottom |
| Table Styles | **Build Performance** | Table styles now imported separately |
| Textarea | Visual Styling | Softer border colors for empty state |

This guide is meant to help you upgrade exosphere version to 7.x.x successfully!

  

## 🚀 Migration Steps

**Update your `package.json`**

```

```

"@boomi/exosphere": "7.0.0"

```

```
  

OR **Install via terminal:**

```

```

npm install @boomi/exosphere@7.0.0

```

```
  

## Component Specific Changes

  

### 1\. Icons

We've changed how icons are imported in Exosphere to reduce the bundle size from 210 MB to 38 MB, boosting performance (especially with CDNs). Due to this change, always import icons in your root file before using any Exosphere component.

### What You Need to Do:

-   Utilize the exosphere component as previously, but ensure to **import `icon.js` in your root file**.

  
```

```

// index.jsx/tsx or App.jsx/tsx
import "@boomi/exosphere/dist/icon.js";

```

```
  

### 2\. Table Styles Import

In version 7.x.x, table styles have been separated to reduce style size for applications that don't use tables.

If you use tables make sure to import these styles in your root file.

```

```

// index.jsx/tsx or App.jsx/tsx
import "@boomi/exosphere/dist/exo-component-theme.css";
import "@boomi/exosphere/dist/exo-table-styles.css";

```

```

You can see the updated import configuration [here](?path=/docs/components-table-configuration--overview).

### 3\. File Uploader

It is Essential to set the `allowUndetectedMimeTypes` boolean property to `true` for the fileUploader to function correctly with appropriate Mime Types. This setting permits file extensions with MIME types that are not recognized by the browser (for instance, .jmx, .tsx, .enc). Additionally, the extension must be included in the fileTypes property to ensure acceptance

```

```

<ExFileUploader fileTypes\=".yaml" allowUndetectedMimeTypes\={true}\></ExFileUploader\>

```

```

### What You Need to Do:

-   ✅ If your app uses tables: Add the additional table styles import
-   ✅ If your app doesn't use tables: No changes needed

  

## ❓ Need Help?

If you run into issues or have questions during the upgrade:

-   💬 Reach out to the team on \[#boomi-web-components\] Slack channel
-   📄 See examples and code snippets in the Storybook links above
