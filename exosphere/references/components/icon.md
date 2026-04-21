---
id: "components-icon--overview"
title: "Components/Icon"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-icon--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:31.081Z"
built_at: "2026-04-21T08:48:27.296Z"
---
# Icons

> **Note:** **Note:** In order to reduce the bundle size, we are using **\[ Symbol.for($$EXOSPHERE\_ICON$$) \]** property in window to store all our icons in browser, make sure you don't overwrite the value.

Icons are symbols that can be used to represent various options within an application.

## Category

-   Actions and Operations
-   Alerts And Status
-   Country Flags
-   Data and Tables
-   DCP Icons
-   Folders
-   Formatting
-   Navigational
-   Numerics
-   Publishing
-   Security
-   Service
-   UI Elements
-   User

## Usage

```

<!-- It is essential to import icon.js before utilizing any component -->
import "@boomi/exosphere/dist/icon.js";

```

```

<ex-icon
  icon="<icon-name-here>"
  label="<icon-label-here>"
  variant="<icon-variant-here>"
>
</ex-icon>

```

## Examples

### Icon variant

```

<!-- Icon Variant -->
<ex-icon icon="eye-open" label="eye" variant="icon"></ex-icon>

```

### Danger Variant

```

<!-- Danger variant -->
<ex-icon icon="trash" label="trash" variant="danger"></ex-icon>

```

### Hide Browser Tooltip

```

<!-- Hide Browser Tooltip -->
<ex-icon icon="circle-warning" hide-browser-tooltip="" variant="icon"/>

```

### Custom Color

```

<!-- Custom Color using style attribute -->
<ex-icon style="color: red;" icon="flow" label="Flow"></ex-icon>

```

```

<!-- Custom Color using css classes -->
<style>
  .custom__icon {
    color: red;
  }
</style>
<ex-icon class="custom__icon" icon="flow" label="Flow"></ex-icon>

```

### Size Variant

```

<!-- Four Different Size Variants -> L , M , S , XS -->
<ex-icon size="S" variant="icon" icon="Binoculars"/>

```

AgentStudio

L

Ai

L

M

S

XS

Arrange alt

L

M

S

XS

Arrange

L

M

S

XS

Arrows merge

L

M

S

XS

Binoculars

L

M

S

XS

Cards

L

M

S

XS

Chatcircletext

L

M

S

XS

Close

L

M

S

XS

Company

L

M

S

XS

Compass

L

M

S

XS

Component

L

M

S

XS

Cube

L

M

S

XS

Dotsnine

L

M

S

XS

Down arrow

L

M

S

XS

Down caret

L

M

S

XS

Download

L

M

S

XS

Edit

L

M

S

XS

Enter fullscreen

L

M

S

XS

Exit fullscreen

L

M

S

XS

Favorite

L

M

S

XS

Favorited

L

M

S

XS

Filter simple

L

M

S

XS

Hash

L

M

S

XS

Headset

L

M

S

XS

Hide

L

M

S

XS

Lab

L

M

S

XS

Left arrow

L

M

S

XS

Left caret

L

M

S

XS

Library

L

M

S

XS

Lightning

L

M

S

XS

Lightningslash

L

M

S

XS

Like

L

M

S

XS

Liked

L

M

S

XS

Menu

L

M

S

XS

Message unread

L

M

S

XS

Message urgent

L

M

S

XS

Message

L

M

S

XS

Move down

L

M

S

XS

Move left

L

M

S

XS

Move right

L

M

S

XS

Move up

L

M

S

XS

Plugin

L

M

S

XS

Properties

L

M

S

XS

Read

L

M

S

XS

Reset

L

M

S

XS

Right arrow

L

M

S

XS

Right caret

L

M

S

XS

Rocket

L

M

S

XS

Search

L

M

S

XS

Settings

L

M

S

XS

Show

L

M

S

XS

Sign in

L

M

S

XS

Sign out

L

M

S

XS

Skip backward

L

M

S

XS

Skip forward

L

M

S

XS

Sort

L

M

S

XS

String

L

M

S

XS

Toggle

L

M

S

XS

Treestructure

L

M

S

XS

Up arrow

L

M

S

XS

Up caret

L

M

S

XS

Users four

L

M

S

XS

XCircle

L

M

S

XS

Archive

M

S

XS

Attachment

M

S

XS

Auditing

M

S

XS

Auto arrange

M

S

XS

Bookmark

M

S

XS

M

S

XS

Create

M

S

XS

Delete

M

S

XS

Filter

M

S

XS

Group

M

S

Link break

M

S

XS

Link

M

S

XS

Lock file

M

S

XS

Merge

M

S

XS

Monitor

M

S

More options

M

S

XS

Note

M

S

XS

Open in new window

M

S

XS

Outcome

M

S

XS

Paste

M

S

XS

Payment card

M

S

Pin

M

S

XS

Power

M

S

XS

Preview

M

S

XS

Print

M

S

XS

Queue

M

Redo

M

S

XS

Refresh

M

S

XS

Reorder

M

S

XS

Retry

M

S

XS

Return

M

S

XS

Run

M

S

XS

Save

M

S

XS

Scan

M

S

XS

Select empty

M

S

Select

M

S

Selected mix

M

S

Selected

M

S

Send filled

M

S

XS

Send

M

S

XS

Share

M

S

XS

Sort ascending

M

S

XS

Sort descending

M

S

XS

Start

M

S

XS

Step

M

S

Stop

M

S

XS

Tag

M

S

XS

Toolbox

M

S

XS

Undo

M

S

XS

Ungroup

M

S

Unmerge

M

S

XS

Unpin

M

S

XS

Zoom to fit graph

M

S

XS

Radio empty

S

Radio selected

S

Process

XS

AmazonQ-Color

L

M

S

XS

AmazonQ

L

M

S

XS

MCP

L

M

S

XS

Boomiplatform

L

M

S

XS

Check

L

M

S

XS

Disabled

L

M

S

XS

Error

L

M

S

XS

Help

L

M

S

XS

In progress

L

M

S

XS

Maptrifold

L

M

S

XS

Notification

L

M

S

Notifications off

L

M

S

Offline

L

M

S

Online

L

M

S

Snooze notifications

L

M

S

Success

L

M

S

XS

Thumbsdown

L

M

S

XS

Thumbsup

L

M

S

XS

Warning

L

M

S

XS

BarGraph

L

M

S

XS

BarGraphHorizontal

L

M

S

XS

DonutGraph

L

M

S

XS

LineGraph

L

M

S

XS

PieGraph

L

M

S

XS

ScatterGraph

L

M

S

XS

Add folder

L

M

S

XS

Delete folder

L

M

S

XS

File upload

L

M

S

XS

Files

L

M

S

XS

Folder

L

M

S

XS

Locked folder

L

M

S

XS

Newspaper

L

M

S

XS

Open folder

L

M

S

XS

Storage

L

M

S

XS

Arrows out

L

M

S

XS

Expand

L

M

S

XS

Grab

L

M

S

XS

Hand

L

M

S

XS

Lightning filled

L

M

S

XS

Location

L

M

S

XS

Minus

L

M

S

XS

Plus

L

M

S

XS

Pointer

L

M

S

XS

Zoom in

L

M

S

XS

Zoom out

L

M

S

XS

Add new

L

M

S

XS

Dashboard

L

M

S

XS

Day

L

M

S

XS

Earth east

L

M

S

XS

Earth west

L

M

S

XS

Function

L

M

S

XS

History

L

M

S

XS

Macros

L

M

S

XS

Night

L

M

S

XS

Opertator

L

M

S

XS

Remove

L

M

S

XS

Restore

L

M

S

XS

Time

L

M

S

XS

Timer

L

M

S

XS

Values

L

M

S

XS

Vector

L

M

S

XS

Wait

L

M

S

XS

Branch

L

M

S

XS

Database

L

M

S

XS

Decision

L

M

S

XS

Fork

L

M

S

XS

Gitfork

L

M

S

XS

Gitmerge

L

M

S

XS

Gitpullrequest

L

M

S

XS

Players

L

M

S

XS

Publish

L

M

S

XS

Stack

L

M

S

XS

Terminal

L

M

S

XS

Types

L

M

S

XS

Upload

L

M

S

XS

Authenticated

L

M

S

XS

Certificate

L

M

S

XS

Encrypt

L

M

S

Information

L

M

S

XS

Key

L

M

S

XS

Locked

L

M

S

XS

Password

L

M

S

XS

Secure

L

M

S

XS

Security warning

L

M

S

XS

Unlocked

L

M

S

XS

Unsecure

L

M

S

XS

ACP

L

M

S

XS

AIAgent

L

M

S

XS

API

L

M

S

XS

Assets

L

M

S

XS

Atom

L

M

S

XS

BookOpenUser

L

M

S

XS

Brush

L

M

S

XS

Bug

L

M

S

XS

Calendar

L

M

S

XS

CalendarAlt

L

M

S

XS

CardsThree

L

M

S

XS

Cart

L

M

S

XS

Chats

L

M

S

XS

CubeAlt

L

M

S

XS

Cursor

L

M

S

XS

Desktop

L

M

S

XS

Environments

L

M

S

XS

FolderSimpleStar

L

M

S

XS

Home

L

M

S

XS

Laptop

L

M

S

XS

LinkBreak

L

M

S

XS

LinkSimple

L

M

S

XS

ListMagnifyingGlass

L

M

S

XS

Market

L

M

S

XS

Mobile

L

M

S

XS

Modal

L

M

S

XS

Number

L

M

S

XS

Plug

L

M

S

XS

PlugsConnected

L

M

S

XS

QR Code

L

M

S

XS

RefreshAlt

L

M

S

XS

Robot

L

M

S

XS

Runtime

L

M

S

XS

SubFlow

L

M

S

XS

Suitcase

L

M

S

XS

Tabs

L

M

S

XS

TrendDown

L

M

S

XS

TrendUp

L

M

S

XS

AddNewUser

L

M

S

XS

Community

L

M

S

XS

Community2

L

M

S

XS

IdentityProvider

L

M

S

XS

Language

L

M

S

XS

Partner

L

M

S

XS

Profile2

L

M

S

XS

RSSfeed

L

M

S

XS

RemoveUser

L

M

S

XS

Swimlane

L

M

S

XS

Tenant

L

M

S

XS

User

L

M

S

XS

## V2 ICONS (New Sizes)

#### Actions and Operations

Ai

Archive

Arrange alt

Arrange

Arrows merge

Attachment

Auditing

Auto arrange

Binoculars

Bookmark

Cards

Chatcircletext

Close

Company

Compass

Component

Create

Cube

Delete

Dotsnine

Down arrow

Down caret

Download

Edit

Enter fullscreen

Exit fullscreen

Favorite

Favorited

Filter simple

Filter

Group

Hash

Headset

Hide

Lab

Left arrow

Left caret

Library

Lightning

Lightningslash

Like

Liked

Link break

Link

Lock file

Menu

Merge

Message unread

Message urgent

Message

Monitor

More options

Move down

Move left

Move right

Move up

Note

Open in new window

Outcome

Paste

Payment card

Pin

Plugin

Power

Preview

Print

Properties

Radio empty

Radio selected

Read

Redo

Refresh

Reorder

Reset

Retry

Return

Right arrow

Right caret

Rocket

Run

Save

Scan

Search

Select empty

Select

Selected mix

Selected

Send filled

Send

Settings

Share

Show

Sign in

Sign out

Skip backward

Skip forward

Sort ascending

Sort descending

Sort

Start

Step

Stop

String

Tag

Toggle

Toolbox

Treestructure

Undo

Ungroup

Unmerge

Unpin

Up arrow

Up caret

Users four

XCircle

Zoom to fit graph

#### Additions

AmazonQ-Color

AmazonQ

MCP

#### Alerts and Status

Boomiplatform

Check

Disabled

Error

Help

In progress

Maptrifold

Notification

Notifications off

Offline

Online

Snooze notifications

Success

Thumbsdown

Thumbsup

Warning

#### Data and Tables

BarGraph

BarGraphHorizontal

DonutGraph

LineGraph

PieGraph

ScatterGraph

#### Folders, Files and Trees

Add folder

Delete folder

File upload

Files

Folder

Locked folder

Newspaper

Open folder

Storage

#### Navigation

Arrows out

Expand

Grab

Hand

Lightning filled

Location

Minus

Plus

Pointer

Zoom in

Zoom out

#### Numerics

Add new

Dashboard

Day

Earth east

Earth west

Function

History

Macros

Night

Opertator

Remove

Restore

Time

Timer

Values

Vector

Wait

#### Publishing

Branch

Database

Decision

Fork

Gitfork

Gitmerge

Gitpullrequest

Players

Publish

Stack

Terminal

Types

Upload

#### Security and Identity

Authenticated

Certificate

Encrypt

Information

Key

Locked

Password

Secure

Security warning

Unlocked

Unsecure

#### UI Elements

ACP

AIAgent

API

Assets

Atom

BookOpenUser

Brush

Bug

Calendar

CalendarAlt

CardsThree

Cart

Chats

CubeAlt

Cursor

Desktop

Environments

FolderSimpleStar

Home

Laptop

LinkBreak

LinkSimple

ListMagnifyingGlass

Market

Mobile

Modal

Number

Plug

PlugsConnected

QR Code

RefreshAlt

Robot

Runtime

SubFlow

Suitcase

Tabs

TrendDown

TrendUp

#### Users

AddNewUser

Community

Community2

IdentityProvider

Language

Partner

Profile2

RSSfeed

RemoveUser

Swimlane

Tenant

User

## V1 ICONS

#### Actions and Operations

Archive

Arrange

Attachment

Auditing

Auto arrange

Bookmark

BoomiPlatform

Close

Create

Delete

Down arrow

Down caret

Download

Edit

Favorite

Favorited

Filter

Group

Hide

Left arrow

Left caret

Like

Liked

Link break

Link

Lock file

MapTrifold

Menu

Merge

Message

Monitor

More options

Move down

Move left

Move right

Move up

Note

Open in new window

Paste

Pause

Pin

Power

Print

Process

Properties

Read

Redo

Refresh

Reorder

Retry

Return

Right arrow

Right caret

Run

Save

Scan

Search

Select

Send

Settings

Share

Show

Sign in

Sign out

Skip backward

Skip forward

Sort ascending

Sort descending

Sort

Start

Step

Stop

Tag

ThumbsDown

ThumbsUp

Toolbox

Undo

Ungroup

Unmerge

Unpin

Up arrow

Up caret

Zoom to fit graph

#### Alerts and Status

Check

Disabled

Error

Help

In progress

Notification

Notifications off

Offline

Online

Selected

Snooze notifications

Success

Warning

#### Country Flags

Afghanistan

Albania

Algeria

Andorra

Angola

Antigua and Barbuda

Argentina

Armenia

Aruba

Australia

Austria

Azerbaijan

Bahamas

Bahrain

Bangladesh

Barbados

Belarus

Belgium

Belize

Benin

Bhutan

Bolivia

Bosnia and Herzegovina

Botswana

Bouvet Island

Brazil

Brunei

Bulgaria

Burkina Faso

Burundi

Cabo Verde

Cameroon

Canada

Cayman Islands

Central African Republic

Chad

Chile

China

Christmas Island

Cocos (Keeling) Islands

Colombia

Comoros

Congo

Cook Islands

Costa Rica

Croatia

Curaçao

Cyprus

Czechia

Denmark

Djibouti

Dominica

Dominican Republic

Ecuador

Egypt

El Salvador

Equatorial Guinea

Eritrea

Estonia

Eswatini

Ethiopia

Falkland Islands

Faroe Islands

Fiji

Finland

France

French Guiana

French Polynesia

French Southern Territories

Gabon

Gambia

Georgia

Germany

Ghana

Gibraltar

Greece

Greenland

Grenada

Guadeloupe

Guam

Guatemala

Guinea-Bissau

Guinea

Guyana

Haiti

Heard Island and McDonald Islands

Honduras

Hong Kong

Hungary

India

Indonesia

Iran

Iraq

Ireland

Israel

Italy

Ivory Coast (Côte d'Ivoire)

Jamaica

Japan

Jordan

Kazakhstan-1

Kazakhstan

Kenya

Kiribati

Kuwait

Kyrgyzstan

Laos

Latvia

Lebanon

Lesotho

Liberia

Libya

Liechtenstein

Lithuania

Luxembourg

Macao

Madagascar

Malawi

Malaysia

Maldives

Mali

Malta

Marshall Islands-1

Marshall Islands

Martinique

Mauritania

Mauritius

Mayotte

Mexico

Micronesia

Moldova

Monaco

Mongolia

Montenegro

Montserrat

Morocco

Mozambique

Myanmar

Namibia

Nauru

Nepal

Netherlands Antilles

Netherlands

New Caledonia

New Zealand

Nicaragua

Niger

Nigeria

Niue

Norfolk

North Korea

Northern Mariana Islands

Norway

Oman

Pakistan

Palau

Palestine

Panama

Papua New Guinea

Paraguay

Peru

Philippines

Pitcairn Islands

Poland

Portugal

Puerto Rico

Qatar

Republic of North Macedonia

Reunion

Romania

Russia

Rwanda

Saint Helena

Saint Kitts and Nevis

Saint Lucia

Saint Pierre and Miquelon

Saint Vincent and the Grenadines

Samoa

San Marino

Sao Tome and Principe

Saudi Arabia

Senegal

Serbia

Seychelles

Sierra Leone

Singapore

Sint Maarten

Slovakia

Slovenia

Solomon Islands

Somalia

South Africa

South Georgia and the South Sandwich Islands

South Korea

South Sudan

Spain

Sri Lanka

Sudan

Suriname

Svalbard and Jan Mayen

Sweden

Switzerland

Syria

Taiwan

Tajikistan

Tanzania

Thailand

The Democratic Republic of Congo

Timor-Leste

Togo

Tokelau

Tonga

Trinidad and Tabago

Tunisia

Turkey

Turkmenistan

Turks and Caicos Islands

Tuvalu

Uganda

Ukraine

United Arab Emirates

United Kingdom

United States Minor Outlying Islands

United States of America

Uruguay

Uzbekistan

Vanuatu

Vatican

Venezuela

Vietnam

Virgin Islands U.S.

Wallis and Futuna

Western Sahara

Yemen

Zambia

Zimbabwe

#### DCP Icons

PII

attribute-col

boolean

business-glossary

city

database-dataset

dataset

datasource

date-time

date

dcp-profile

dcp-table

decimal

deprecated

email

filesystem-dataset

fullouterjoin

function

gender

genetic-sequence

geolocation

graph

hub-dataset

imei

innerjoin

integer

ip-address

key

leftouterjoin

maestro-card

mask

master-card

passport

phone-number

rightouterjoin

schema

security-ssn

security

service

state

string

thumb-down

thumb-up

trusted

visa-card

zipcode

#### Data and Tables

Bar graph horizontal

Bar graph

Donut graph

Line graph

Pie graph

Scatter graph

#### Folders

Add folder

Copy folder

Delete folder

Folder

Locked folder

Open folder

Storage

#### Formatting

Align bottom

Align horizontal center

Align left

Align right

Align text center

Align text justified

Align text left

Align text right

Align top

Align vertical center

Bold

Bullet list

CSS file

CSV file

Check list

Code Block

Code

Components

DOC file

Document

Erase

File

Grid view

HTML file

Indent

Italic

JPEG file

JXS file

Lettercase

List

Notepad

Numbered list

Outdent

PDF file

PNG file

PPT file

Pages

Paragraph

Repeat

SQL file

SVG file

Shared elements

Side navigation

Strikethrough

Table

Text Color

Text Highlight

Text columns

Text heading 1

Text heading 2

Text heading 3

Text heading 4

Text heading 5

Text heading 6

Text highlight

Text

Textbox

Underline

Video

X sub

X super

XLS file

Zip file

erase

horizontal

video

x-sub

x-super

#### Navigational

Expand

Grab

Location

Minus

Plus

Pointer

Rail

Stop

Zoom in

Zoom out

#### Numerics

Add new

Calendar

Dashboard

Day

Earth east

Earth west

Function

History

Macros

Night

Operator

Remove

Restore

Time

Timer

Values

Vector

Wait

#### Publishing

Database

Decision

Players

Publish

Stack

Terminal

Types

Upload

#### Security

Authenticated

Certificate

Encrypt

Information

Key

Locked

Password

Secure

Security warning

Unlocked

Unsecure

#### Service

AI

API Management

DCP

EDI

Event Streams

Flow

Hub

Integration

Task Automation

#### UI Elements

API

Assets

Atom

Bug

Cart

Connectors

Cursor

Desktop

Home

Laptop

Market place

Mobile

Modal

Qr code

Subflow

Suitcase

layout

#### User

Add new user

Identity providers

Language

Profile

RSS feed

Remove user

Swimlane

Tenant

User

  
  

# Archive

Old icons just kept as an archive.

#### UI Elements

component-fill

image

layout

squares

#### Actions And Operations

activity

ascending

book-bookmark

calendar

circular-arrow-single

circular-double-arrow

clarity-fill

clock-arrow

coaching

cog-fill

cog-outline

color

copy

cross-circle

cross

curved-arrow-right

delete

descending

direction-arrow-down

direction-arrow-left

direction-arrow-right

direction-arrow-up

direction-arrowhead-down

direction-arrowhead-left

direction-arrowhead-right

direction-arrowhead-up

direction-caret-down

direction-caret-left

direction-caret-right

direction-caret-up

direction-left

direction-right

document-search

double-arrow

double-caret

download

envelope-closed

envelope-open

eye-open

eye-slash

filter

flag-fill

flag-outline

floppy-disk

foundation-fill

foundation-outline

group

heart-fill

heart-outline

import-export

link-broken

link

magnifying-glass

menu

move-direction-arrow-move-down

move-direction-arrow-move-left

move-direction-arrow-move-right

move-direction-arrow-move-up

new-window

note

paperclip

path-fill

pattern-fill

pause-fill

pause-outline

pencil

play-fill

play-outline

plus-circle

plus

power

printer

reliability-fill

rename

rocket-fill

save

send-arrow

shop-front

shopping-cart

sliders-fill

sliders-outline

star-fill

star-outline

stop-filled

stop-outline

three-dots-horizontal-fill

three-dots-horizontal-outline

three-dots-vertical-fill

three-dots-vertical-outline

thumbs-up-fill

tick-box

trash

ungroup

upload

usage-and-billing

voice-and-tone

#### Alerts And Status

bell

circle-warning

clock

cloud-slash

cloud

gauge

in-progress

information

not-doing

planned

released

status-fail

status-success

status-warning

stop

stopwatch

success

#### Data And Tables

bar-chart-horizontal

bar-chart-vertical

columns

donut-chart

line-chart

piechart

rows

scatter-chart

table

values-flow

#### Flag Icons

AD

AE

AF

AG

AL

AM

AN

AO

AR

AT

AU

AW

AZ

BA

BB

BD

BE

BF

BG

BH

BI

BJ

BN

BO

BR

BS

BT

BV

BW

BY

BZ

CA

CC

CD

CF

CG

CH

CI

CK

CL

CM

CN

CO

CR

CS

CU

CV

CW

CX

CY

CZ

DE

DJ

DK

DM

DO

DZ

EC

EE

EG

EH

ER

ES

ET

FI

FJ

FK

FM

FO

FR

GA

GB

GD

GE

GF

GH

GI

GL

GM

GN

GP

GQ

GR

GS

GT

GU

GW

GY

HK

HM

HN

HR

HT

HU

ID

IE

IL

IN

IQ

IR

IS

IT

JM

JO

JP

KE

KG

KH

KI

KM

KN

KP

KR

KW

KY

KZ

LA

LB

LC

LI

LK

LR

LS

LT

LU

LV

LY

MA

MC

MD

ME

MG

MH

MK

ML

MM

MN

MO

MP

MQ

MR

MS

MT

MU

MV

MW

MX

MY

MZ

NA

NC

NE

NF

NG

NI

NL

NO

NP

NR

NU

NZ

OM

PA

PE

PF

PG

PH

PK

PL

PM

PN

PR

PS

PT

PW

PY

QA

RE

RO

RS

RU

RW

SA

SB

SC

SD

SE

SG

SH

SI

SJ

SK

SL

SM

SN

SO

SR

SS

ST

SV

SX

SY

SZ

TC

TD

TF

TG

TH

TJ

TK

TL

TM

TN

TO

TR

TT

TV

TW

TZ

UA

UG

UM

US

UY

UZ

VA

VC

VE

VI

VN

VU

WF

WS

YE

YT

ZA

ZM

ZW

#### Flow Icons

cloud-arrow-up

flow-decision

flow-operator

flow-shared-elements

flow-step

flow-subflow

flow-swimlane

flow-tenant

play

return

sliders

suitcase

vector

#### Folders Files And Trees

api

document

folder-closed-fill

folder-closed-outline

folder-group

folder-minus

folder-open-fill

folder-open-outline

folder-plus

#### Formatting

align-to-bottom

align-to-left

align-to-right

align-to-top

alignment-center

alignment-left

alignment-right

center-alignment-horizontal

center-alignment-vertical

code

horizontal

list-bulleted

list-numbered

plain-text

text-bold

text-italic

text-strikethrough

text-underline

typography

video

x-sub

x-super

#### Navigation

cursor

draggable

hand-closed

hand-open

hand-pointing

magnify-minus

magnify-plus

minus-circle

plus-circle

#### Publishing

console-screen

database

note-pencil

package

play-circle

plug

publish

stack

#### Security And Identity

fingerprint

globe-east

globe-west

key

lock-closed

lock-open

shield-slash

shield-warning

shield

#### Service Icons

api-management-color

api-management

dcp-color

dcp

edi-color

edi

event-stream

flow-color

flow

hub-color

hub

integration-color

integration

training

#### User

community

device-desktop

device-mobile

home

person-circle

person

pin-fill

pin-outline

pin-slash

rss

signin

signout

tag
