---
id: "getting-started-installation--overview"
title: "Getting Started/Installation"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=getting-started-installation--overview&viewMode=docs"
scraped_at: "2026-04-21T08:42:52.947Z"
built_at: "2026-04-21T08:48:27.311Z"
---
# Installation

ExoSphere is buttoned up with everything that you need. You can install ExoSphere via CDN or do a local installation via NPM.

## CDN (quick)

Add the following script and css injections to your HTML page and start using the components.

### Version 5 and below

```

<link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/@boomi/exosphere@7.8.2/dist/styles.css' />
<script type="module" src="https://cdn.jsdelivr.net/npm/@boomi/exosphere@7.8.2/dist/index.mjs"></script>

```

### Version 6 and above

```

<link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/@boomi/exosphere@7.8.2/dist/styles.css' />
<script type="module">
    import register from "https://cdn.jsdelivr.net/npm/@boomi/exosphere@7.8.2/dist/index.mjs";
    register();
</script>

```

## Local Installation

You can install ExoSphere locally via NPM. Go to the root of your project and install ExoSphere.

```

npm i @boomi/exosphere

```

This will download all assets in your `node_modules` folder. It is up to you how you want to make the JS and CSS assets available to your HTML page. You can host the assets and include it in your HTML page by providing resource URLs to ExoSphere assets.

### Version 5 and below

```

<link rel="stylesheet" href="/@boomi/exosphere/dist/styles.css"/>
<script type="module" src="/node_modules/@boomi/exosphere/dist/index.mjs"></script>

```

### Version 6 and above

```

<link rel="stylesheet" href="/@boomi/exosphere/dist/styles.css"/>
<script type="module">
    import register from "/node_modules/@boomi/exosphere/dist/index.mjs";
    register();
</script>

```

## Cherry-picking web components

To improve performance and page load time of your web page, you can selectively import web components to your web page. Check out the example with CDN below.

### Version 5 and below

```

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@boomi/exosphere@7.8.2/dist/styles.css"/>
<script type="module" src="https://cdn.jsdelivr.net/npm/@boomi/exosphere@7.8.2/dist/components/button/button.js"></script>

```

### Version 6 and above

```

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@boomi/exosphere@7.8.2/dist/styles.css"/>
<script type="module">
    import register from "https://cdn.jsdelivr.net/npm/@boomi/exosphere@7.8.2/dist/components/button/button.js";
    register();
</script>

```

## All set!

You can now start using ExoSphere web components in your HTML page

```

<body>
    <ex-button type="primary" flavor="branded" size="large"> Hello Web Components from Exosphere!</ex-button>
</body>

```
