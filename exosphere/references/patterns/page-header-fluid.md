---
id: "patterns-page-header-fluid--overview"
title: "Patterns/Page Header/Fluid"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=patterns-page-header-fluid--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:10.040Z"
built_at: "2026-04-21T08:48:27.313Z"
---
## Page Header Fluid Template

  

BundlesParent Page TitleName of Page

Status badge

You are currently on a limited plan. Update to Enterprise to access the complete suite of tools. Learn more

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna.

PrimarySlot: Swap me!Tellus enimAugue idFringilla posuere

  
  

The **Fluid Template** is built for more flexible and responsive layouts, allowing the header to adapt to various screen sizes and use cases. It supports the same slots as the Default Template:

-   **Breadcrumb (slot):** Display a breadcrumb trail for improved navigation.
-   **Info Icon Button:** Optionally add an info icon to provide additional guidance.
-   **Badge (slot):** Add a status badge (e.g., "In Progress", "Completed").
-   **Alert Banner (slot):** Use this slot to highlight critical alerts or notifications.
-   **Description Text:** Provide a brief description to give context to the page.
-   **Action Buttons (slot):** Insert action buttons for key functions such as "Save", "Edit", or "Delete".
-   **Tabs (slot):** Add tabs to switch between different page sections.

This template is best suited for pages that need to adapt seamlessly across devices, offering a fluid experience that adjusts to varying screen sizes.

### Sample code

  

Web componentReactStyle

```

const isBreadcrumbFluid = window.innerWidth < 996;
<div class="page-header__fluid">
  <div class="page-header">
    <div className="page-header-wrap">
      <span class="icon-button-wrapper">
        <ex-icon-button
          icon="Left arrow"
          flavor="branded"
          type="secondary"
          tooltiptext="Back"
          size="small"
        ></ex-icon-button>
      </span>
      <ex-breadcrumb
        class="breadcrumb-wrap"
        variant={this.isBreadcrumbFluid ? "fluid" : "collapsed"}
      >
        <ex-breadcrumb-item link="https://example.com/">
          Bundles        </ex-breadcrumb-item>
        <ex-breadcrumb-item>Parent Page Title</ex-breadcrumb-item>
        <ex-breadcrumb-item>Name of Page</ex-breadcrumb-item>
      </ex-breadcrumb>
    </div>
    <ex-page-header pagetitle="Page Title Goes Here" info-text="Title">
      <ex-badge color="blue" shape="squared" size="small" slot="badge">
        Status badge      </ex-badge>
    <div className="alert-banner-wrap" slot="alert-banner">
      <ex-alert-banner
        type="info"
        open=""
        variant="subtle"
        tooltipText="Action"
      >
        You are currently on a limited plan. Update to Enterprise to access the        complete suite of tools. Learn more      </ex-alert-banner>
      </div>
      <div slot="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor        incididunt ut labore et dolore magna.      </div>
      <ex-button slot="buttons" flavor="branded" type="primary" size="default">
        Primary      </ex-button>
      <ex-button
        slot="buttons"
        flavor="branded"
        type="secondary"
        size="default"
      >
        Slot: Swap me!      </ex-button>
      <ex-tab slot="tabs">
        <ex-tab-item selected>
          <ex-icon icon="Dashboard"></ex-icon>Tellus enim
        </ex-tab-item>
        <ex-tab-item>
          <ex-icon icon="Document"></ex-icon>
          Augue id          <ex-dropdown
            class="dropdown"
            flavor="tab"
            text=" "
            tabindex="-1"
            hide-prefix="true"
            type="tertiary"
            tooltipText="Action"
          >
            <ex-menu variant="action">
              <ex-menu-item-group>
                <ex-menu-item variant="checkbox" value="option1">
                  Option 1                </ex-menu-item>
                <ex-menu-item variant="checkbox" value="option2">
                  Option 2                </ex-menu-item>
              </ex-menu-item-group>
            </ex-menu>
          </ex-dropdown>
        </ex-tab-item>
        <ex-tab-item>
          <ex-icon icon="Document"></ex-icon>
          Fringilla posuere          <ex-dropdown
            class="dropdown"
            flavor="tab"
            text=" "
            tabindex="-1"
            hide-prefix="true"
            type="tertiary"
            tooltipText="Action"
          >
            <ex-menu variant="action">
              <ex-menu-item-group>
                <ex-menu-item variant="checkbox" value="option1">
                  Option 1                </ex-menu-item>
                <ex-menu-item variant="checkbox" value="option2">
                  Option 2                </ex-menu-item>
              </ex-menu-item-group>
            </ex-menu>
          </ex-dropdown>
        </ex-tab-item>
      </ex-tab>
    </ex-page-header>
  </div>
</div>;

```
