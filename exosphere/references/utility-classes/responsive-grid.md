---
id: "utility-classes-responsive-grid--overview"
title: "Utility Classes/Responsive Grid"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=utility-classes-responsive-grid--overview&viewMode=docs"
scraped_at: "2026-04-21T08:44:02.676Z"
built_at: "2026-04-21T08:48:27.315Z"
---
# Responsive Grid

Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at ex-xs, ex-sm, ex-md, ex-lg, ex-xl & ex-xxl viewport widths.

```

<div class="ex-container">
  <div class="ex-row">
    <div class="ex-col-xs-12">
      <div class="ex-box">12</div>
    </div>
  </div>
</div>

```

### Fluid

Percent based widths allow fluid resizing of columns and rows

### Simple Syntax

All you need to remember is row, column, content.

```

<div class="ex-container-fluid">
  <div class="ex-row">
    <div class="ex-col-xs-12">
      <div class="ex-box">12</div>
    </div>
  </div>
</div>

```

### Offsets

Offset a column

```

<div class="ex-row">
  <div class="ex-col-xs-offset-3 ex-col-xs-9">
    <div class="ex-box">offset</div>
  </div>
</div>

```

### Auto Width

Add any number of auto sizing columns to a row. Let the grid figure it out.

```

<div class="ex-row">
  <div class="ex-col-xs">
    <div class="ex-box">auto</div>
  </div>
</div>

```

### Nested Grids

Nest grids inside grids inside grids.

```

<div class="ex-row">
  <div class="ex-col-xs">
    <div class="ex-box">
      <div class="ex-row">
        <div class="ex-col-xs">
          <div class="ex-box">auto</div>
        </div>
      </div>
    </div>
  </div>
</div>

```

### Alignment

Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column

#### .ex-start-

```

<div class="ex-row ex-start-xs">
  <div class="ex-col-xs-6">
    <div class="ex-box">
      start
    </div>
  </div>
</div>

```

#### .ex-center-

```

<div class="ex-row ex-center-xs">
  <div class="ex-col-xs-6">
    <div class="ex-box">
      center
    </div>
  </div>
</div>

```

#### .ex-end-

```

<div class="ex-row ex-end-xs">
  <div class="ex-col-xs-6">
    <div class="ex-box">
      end
    </div>
  </div>
</div>

```

Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.

Example

```

<div class="ex-row ex-center-xs ex-end-sm ex-start-lg">
  <div class="ex-col-xs-6">
    <div class="ex-box">
      All together now
    </div>
  </div>
</div>

```

#### .ex-top-

```

<div class="ex-row ex-top-xs">
  <div class="ex-col-xs-6">
    <div class="ex-box">
      top
    </div>
  </div>
</div>

```

#### .ex-middle-

```

<div class="ex-row ex-middle-xs">
  <div class="ex-col-xs-6">
    <div class="ex-box">
      center
    </div>
  </div>
</div>

```

#### .ex-bottom-

```

<div class="ex-row ex-bottom-xs">
  <div class="ex-col-xs-6">
    <div class="ex-box">
      bottom
    </div>
  </div>
</div>

```

### Distribution

Add classes to distribute the contents of a row or column.

#### .ex-around-

```

<div class="ex-row ex-around-xs">
  <div class="ex-col-xs-2">
    <div class="ex-box">
      around
    </div>
  </div>
  <div class="ex-col-xs-2">
    <div class="ex-box">
      around
    </div>
  </div>
  <div class="ex-col-xs-2">
    <div class="ex-box">
      around
    </div>
  </div>
</div>

```

#### .ex-between-

```

<div class="ex-row ex-between-xs">
  <div class="ex-col-xs-2">
    <div class="ex-box">
      between
    </div>
  </div>
  <div class="ex-col-xs-2">
    <div class="ex-box">
      between
    </div>
  </div>
  <div class="ex-col-xs-2">
    <div class="ex-box">
      between
    </div>
  </div>
</div>

```

### Reordering

Add classes to reorder columns.

#### .ex-first-

1

2

3

4

5

6

```

<div class="ex-row">
  <div class="ex-col-xs-2">
    <div class="ex-box">
      1
    </div>
  </div>
  <div class="ex-col-xs-2">
    <div class="ex-box">
      2
    </div>
  </div>
  <div class="ex-col-xs-2 ex-first-xs">
    <div class="ex-box">
      3
    </div>
  </div>
</div>

```

#### .ex-last-

1

2

3

4

5

6

```

<div class="ex-row">
  <div class="ex-col-xs-2 ex-last-xs">
    <div class="ex-box">
      1
    </div>
  </div>
  <div class="ex-col-xs-2">
    <div class="ex-box">
      2
    </div>
  </div>
  <div class="ex-col-xs-2">
    <div class="ex-box">
      3
    </div>
  </div>
</div>

```

### Reversing

#### .ex-reverse

1

2

3

4

5

6

```

<div class="ex-row ex-reverse">
  <div class="ex-col-xs-2">
    <div class="ex-box">
       1
    </div>
  </div>
  <div class="ex-col-xs-2">
    <div class="ex-box">
      2
    </div>
  </div>
  <div class="ex-col-xs-2">
    <div class="ex-box">
      3
    </div>
  </div>
</div>

```
