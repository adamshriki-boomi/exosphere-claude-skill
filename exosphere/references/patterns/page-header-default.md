---
id: "patterns-page-header-default--overview"
title: "Patterns/Page Header/Default"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=patterns-page-header-default--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:09.876Z"
built_at: "2026-04-21T08:48:27.313Z"
---
## Page Header Default Template

  

BundlesParent Page TitleName of PageStatus badge

You are currently on a limited plan. Update to Enterprise to access the complete suite of tools. Learn more

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna.

PrimarySlot: Swap me!Tellus enimAugue idFringilla posuere

  
  

The **Default Template** is ideal for a standard page header layout and supports the following slots:

-   **Breadcrumb (slot):** A breadcrumb trail to help users understand their current location in the app.
-   **Info Icon Button:** Optionally add an icon button for additional contextual information or help.
-   **Badge (slot):** A slot to add a status badge (e.g., "Draft", "Published").
-   **Alert Banner (slot):** An optional banner for alerts or notifications.
-   **Description Text:** A brief description that explains the page’s purpose.
-   **Action Buttons (slot):** Add buttons for quick actions (e.g., "Save", "Add New").
-   **Tabs (slot):** Tabs for section navigation within the page.

This template is designed for a structured layout, providing a clear hierarchy and functional controls for the page.

### Sample code

  

Web componentReactStyle

```

const isBreadcrumbFluid = window.innerWidth < 996;
      <div class="page-header__default">
        <div class="page-header">
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
              variant={this.isBreadcrumbFluid ? 'fluid' : 'collapsed'}
            >
              <ex-breadcrumb-item link="https://example.com/">
                Bundles              </ex-breadcrumb-item>
              <ex-breadcrumb-item>Parent Page Title</ex-breadcrumb-item>
              <ex-breadcrumb-item>Name of Page</ex-breadcrumb-item>
            </ex-breadcrumb>
          <ex-page-header pagetitle="Page Title Goes Here" info-text="Title">
            <ex-badge color="blue" shape="squared" size="small" slot="badge">
              Status badge            </ex-badge>
            <div class="alert-banner-wrap" slot="alert-banner">
            <ex-alert-banner
              type="info"
              open=""
              variant="subtle"
              tooltipText="Action"
             
            >
              You are currently on a limited plan. Update to Enterprise to              access the complete suite of tools. Learn more            </ex-alert-banner>
            </div>
            <div slot="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do              tempor incididunt ut labore et dolore magna.            </div>
            <ex-button
              slot="buttons"
              flavor="branded"
              type="primary"
              size="default"
            >
              Primary            </ex-button>
            <ex-button
              slot="buttons"
              flavor="branded"
              type="secondary"
              size="default"
            >
              Slot: Swap me!            </ex-button>
            <ex-tab slot="tabs">
              <ex-tab-item selected>
                <ex-icon icon="Dashboard"></ex-icon>Tellus enim
              </ex-tab-item>
              <ex-tab-item>
                <ex-icon icon="Document"></ex-icon>
                Augue id                <ex-dropdown
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
                        Option 1                      </ex-menu-item>
                      <ex-menu-item variant="checkbox" value="option2">
                        Option 2                      </ex-menu-item>
                    </ex-menu-item-group>
                  </ex-menu>
                </ex-dropdown>
              </ex-tab-item>
              <ex-tab-item>
                <ex-icon icon="Document"></ex-icon>
                Fringilla posuere                <ex-dropdown
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
                        Option 1                      </ex-menu-item>
                      <ex-menu-item variant="checkbox" value="option2">
                        Option 2                      </ex-menu-item>
                    </ex-menu-item-group>
                  </ex-menu>
                </ex-dropdown>
              </ex-tab-item>
            </ex-tab>
          </ex-page-header>
        </div>
      </div>

```
