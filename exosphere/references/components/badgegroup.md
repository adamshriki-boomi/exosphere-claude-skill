---
id: "components-badgegroup--overview"
title: "Components/BadgeGroup"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-badgegroup--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:17.737Z"
built_at: "2026-04-21T08:48:27.289Z"
---
# BadgeGroup

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| Appearance |  |
| color | 
Color for +n badge in the group

string

 | \- | `one of: gray | red | navy | green | yellow | blue | orange | white` |
| size | 

Size applied to +n badge in the group

string

 | 

regular

 | `one of: default | small | extrasmall | tiny` |
| shape | 

Shape applied to +n badge in the group

string

 | 

round

 | `one of: round | squared` |
| Behavior |  |
| overflow | 

Controls badge visibility on +n click: 'wrap' shows all badges, 'tooltip' hides badges in tooltip

string

 | 

wrap

 | `one of: tooltip | wrap` |
| useLinkTrigger | 

Controls whether to use a link trigger for the +n additional badges

boolean

 | 

false

 |  |
| usePillTrigger | 

Controls whether to use a pill trigger for the +n additional badges (Recommended).

boolean

 | 

false

 |  |
| Content |  |
| values | 

Array of badge objects to display in the group. Each badge object can contain: label (string), icon (string), color (BadgeColor), size (BadgeSize), shape (BadgeShape)

\-

 | \- |  |

## Stories

### Overflow Wrap

### Overflow Tooltip
