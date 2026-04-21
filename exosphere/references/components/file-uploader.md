---
id: "components-file-uploader--overview"
title: "Components/File Uploader"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-file-uploader--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:27.864Z"
built_at: "2026-04-21T08:48:27.295Z"
---
# File Uploader

-   Overview
-   Props
-   Usage
-   Variants

## Overview

File uploaders allow users to select one or more files to upload to a specific location. This could be within a form or as a stand alone component on a page that allows a user to upload the relevant files to perform further actions. This component could also be used in an ‘import’ scenario. This component supports single and multiple file uploading.

## Types:

-   Empty without Icon
    
-   Empty with Icon
    
-   Drag & Drop
    
    -   D&D Interactive
    -   D&D Error

## States:

-   Default
-   Hover
-   Focus
-   Disabled

## Props

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| icon | 
Icon can be shown or not

boolean

 | \- |  |
| disabled | 

File Uploader state is disabled or not

boolean

 | \- |  |
| allowUndetectedMimeTypes | 

Allows file extensions whose MIME types does not get detected by the browser (e.g., .jmx, .enc). Extension should also be added to fileTypes prop to get it accept.

boolean

 | 

false

 |  |
| interactive | 

hover state for file uploader

boolean

 | \- |  |
| maxSize | 

Maximum size limit in MegaByte(MB)

string

 | 

2MB

 | 2 |
| fileTypes | 

Accepted file types in coma separator

string

 | 

.jpg,.jpeg,.pdf

 | .jpg,.jpeg,.pdf,.svg |
| size | 

size of the element

string

 | 

large

 | `one of: medium | large` |
| errorState | 

File Uploader Error state or not

boolean

 | \- |  |
| maxSizeUnit | 

unit

string

 | 

MB

 | `one of: MB | KB` |
| singleFileUpload | 

Single file upload at a time

boolean

 | 

false

 |  |
| header | 

File Uploader Header Text

string

 | \- | Attachment |
| help-text | 

Help text for File Uploader

string

 | 

""

 |  |
| onChange | 

The onchange event occurs when the value of an HTML element is changed.

\-

 | 

@onChange

 | \- |
| iconLabel | 

Custom native tooltip label for the icon in file uploader

string

 | \- |  |
| error-msg | 

Error message for File Uploader

\-

 | 

error-msg

 | \- |

## Usage

-   Do: Only use this component when a user is required to upload files from their computer to complete an action or complete a process.
-   Don't: This is not for uploading assets from within the platform.

**Note:** If the file extension for fileTypes isn't working, try using the file's MIME type with a comma-separated list.

## Variants

### Single File Upload

### Large Size

### Medium Size

### With SizeUnit KB

### Hover

### Error State

### With Error message

### Disabled
