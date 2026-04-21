---
id: "components-textarea--overview"
title: "Components/Textarea"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-textarea--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:54.877Z"
built_at: "2026-04-21T08:48:27.304Z"
---
# Textarea

  

### Style Properties:

| Name | Description |
| --- | --- |
| \--exo-component-textarea-margin-bottom | Token to modify the default bottom margin of the component. |

-   Usage:
    
    ```
    
    
    ```
    
    
    .your-class-name {
    \--exo-component-textarea-margin-bottom: var(\--exo-spacing-none);
    }
    
    
    ```
    
    
    
    
    ```
    

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| name | 
Textarea name attribute

string

 | \- | description\_text |
| placeholder | 

Textarea placeholder text

string

 | \- | This is placeholder text... |
| disabled | 

Disable the textarea

boolean

 | 

false

 |  |
| readonly | 

Readonly textarea

boolean

 | 

false

 |  |
| autofocus | 

Textarea autofocus attribute

boolean

 | 

false

 |  |
| invalid | 

Textarea invalid attribute

boolean

 | 

false

 |  |
| required | 

Textarea required attribute

boolean

 | 

false

 |  |
| spellcheck | 

Textarea spellcheck attribute

boolean

 | 

false

 |  |
| label | 

Textarea label

string

 | 

""

 | Description |
| info-text | 

Info text for Input label

string

 | 

""

 | Please enter full description related to the product |
| optional | 

Textarea optional attribute

boolean

 | 

false

 |  |
| rows | 

Number of rows on initial load or to set height

number

 | \- |  |
| help-text | 

Help text for Textarea

string

 | 

""

 |  |
| minlength | 

Minimum length of the textarea

number

 | \- |  |
| maxlength | 

Maximum length of the textarea

number

 | \- |  |
| enforceMaxLength | 

Whether to enforce the maximum length by truncating input

boolean

 | 

false

 |  |
| leadingIcon | 

name of icon

string

 | \- | `one of: ACPColor | AIAgentColor | AIControlTowerColor | AIStudioColor | APIM-APIGColor | B2B-EDIColor | BoomiEmbedColor | CAMColor | CommandCenterColor | ConnectColor | DataIntegrationColor | EventStreamsColor | FlowColor | HubColor | IntegrationColor | KnowledgeHub | LabsColor | MFTColor | MarketplaceColor | MetaHubColor | OrchestrateColor | Platform | TaskAutomationColor | component-fill | image | layout | squares | activity | ascending | book-bookmark | calendar | circular-arrow-single | circular-double-arrow | clarity-fill | clock-arrow | coaching | cog-fill | cog-outline | color | copy | cross-circle | cross | curved-arrow-right | delete | descending | direction-arrow-down | direction-arrow-left | direction-arrow-right | direction-arrow-up | direction-arrowhead-down | direction-arrowhead-left | direction-arrowhead-right | direction-arrowhead-up | direction-caret-down | direction-caret-left | direction-caret-right | direction-caret-up | direction-left | direction-right | document-search | double-arrow | double-caret | download | envelope-closed | envelope-open | eye-open | eye-slash | filter | flag-fill | flag-outline | floppy-disk | foundation-fill | foundation-outline | group | heart-fill | heart-outline | import-export | link-broken | link | magnifying-glass | menu | move-direction-arrow-move-down | move-direction-arrow-move-left | move-direction-arrow-move-right | move-direction-arrow-move-up | new-window | note | paperclip | path-fill | pattern-fill | pause-fill | pause-outline | pencil | play-fill | play-outline | plus-circle | plus | power | printer | reliability-fill | rename | rocket-fill | save | send-arrow | shop-front | shopping-cart | sliders-fill | sliders-outline | star-fill | star-outline | stop-filled | stop-outline | three-dots-horizontal-fill | three-dots-horizontal-outline | three-dots-vertical-fill | three-dots-vertical-outline | thumbs-up-fill | tick-box | trash | ungroup | upload | usage-and-billing | voice-and-tone | bell | circle-warning | clock | cloud-slash | cloud | gauge | in-progress | information | not-doing | planned | released | status-fail | status-success | status-warning | stop | stopwatch | success | bar-chart-horizontal | bar-chart-vertical | columns | donut-chart | line-chart | piechart | rows | scatter-chart | table | values-flow | AD | AE | AF | AG | AL | AM | AN | AO | AR | AT | AU | AW | AZ | BA | BB | BD | BE | BF | BG | BH | BI | BJ | BN | BO | BR | BS | BT | BV | BW | BY | BZ | CA | CC | CD | CF | CG | CH | CI | CK | CL | CM | CN | CO | CR | CS | CU | CV | CW | CX | CY | CZ | DE | DJ | DK | DM | DO | DZ | EC | EE | EG | EH | ER | ES | ET | FI | FJ | FK | FM | FO | FR | GA | GB | GD | GE | GF | GH | GI | GL | GM | GN | GP | GQ | GR | GS | GT | GU | GW | GY | HK | HM | HN | HR | HT | HU | ID | IE | IL | IN | IQ | IR | IS | IT | JM | JO | JP | KE | KG | KH | KI | KM | KN | KP | KR | KW | KY | KZ | LA | LB | LC | LI | LK | LR | LS | LT | LU | LV | LY | MA | MC | MD | ME | MG | MH | MK | ML | MM | MN | MO | MP | MQ | MR | MS | MT | MU | MV | MW | MX | MY | MZ | NA | NC | NE | NF | NG | NI | NL | NO | NP | NR | NU | NZ | OM | PA | PE | PF | PG | PH | PK | PL | PM | PN | PR | PS | PT | PW | PY | QA | RE | RO | RS | RU | RW | SA | SB | SC | SD | SE | SG | SH | SI | SJ | SK | SL | SM | SN | SO | SR | SS | ST | SV | SX | SY | SZ | TC | TD | TF | TG | TH | TJ | TK | TL | TM | TN | TO | TR | TT | TV | TW | TZ | UA | UG | UM | US | UY | UZ | VA | VC | VE | VI | VN | VU | WF | WS | YE | YT | ZA | ZM | ZW | cloud-arrow-up | flow-decision | flow-operator | flow-shared-elements | flow-step | flow-subflow | flow-swimlane | flow-tenant | play | return | sliders | suitcase | vector | api | document | folder-closed-fill | folder-closed-outline | folder-group | folder-minus | folder-open-fill | folder-open-outline | folder-plus | align-to-bottom | align-to-left | align-to-right | align-to-top | alignment-center | alignment-left | alignment-right | center-alignment-horizontal | center-alignment-vertical | code | horizontal | list-bulleted | list-numbered | plain-text | text-bold | text-italic | text-strikethrough | text-underline | typography | video | x-sub | x-super | cursor | draggable | hand-closed | hand-open | hand-pointing | magnify-minus | magnify-plus | minus-circle | console-screen | database | note-pencil | package | play-circle | plug | publish | stack | fingerprint | globe-east | globe-west | key | lock-closed | lock-open | shield-slash | shield-warning | shield | api-management-color | api-management | dcp-color | dcp | edi-color | edi | event-stream | flow-color | flow | hub-color | hub | integration-color | integration | training | community | device-desktop | device-mobile | home | person-circle | person | pin-fill | pin-outline | pin-slash | rss | signin | signout | tag | Archive | Arrange | Attachment | Auditing | Auto arrange | Bookmark | BoomiPlatform | Close | Copy | Create | Delete | Down arrow | Down caret | Download | Edit | Favorite | Favorited | Filter | Group | Hide | Left arrow | Left caret | Like | Liked | Link break | Link | Lock file | MapTrifold | Menu | Merge | Message | Monitor | More options | Move down | Move left | Move right | Move up | Note | Open in new window | Paste | Pause | Pin | Power | Print | Process | Properties | Read | Redo | Refresh | Reorder | Retry | Return | Right arrow | Right caret | Run | Save | Scan | Search | Select | Send | Settings | Share | Show | Sign in | Sign out | Skip backward | Skip forward | Sort ascending | Sort descending | Sort | Start | Step | Stop | Tag | ThumbsDown | ThumbsUp | Toolbox | Undo | Ungroup | Unmerge | Unpin | Up arrow | Up caret | Zoom to fit graph | Check | Disabled | Error | Help | In progress | Notification | Notifications off | Offline | Online | Selected | Snooze notifications | Success | Warning | Afghanistan | Albania | Algeria | Andorra | Angola | Antigua and Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bhutan | Bolivia | Bosnia and Herzegovina | Botswana | Bouvet Island | Brazil | Brunei | Bulgaria | Burkina Faso | Burundi | Cabo Verde | Cameroon | Canada | Cayman Islands | Central African Republic | Chad | Chile | China | Christmas Island | Cocos (Keeling) Islands | Colombia | Comoros | Congo | Cook Islands | Costa Rica | Croatia | Curaçao | Cyprus | Czechia | Denmark | Djibouti | Dominica | Dominican Republic | Ecuador | Egypt | El Salvador | Equatorial Guinea | Eritrea | Estonia | Eswatini | Ethiopia | Falkland Islands | Faroe Islands | Fiji | Finland | France | French Guiana | French Polynesia | French Southern Territories | Gabon | Gambia | Georgia | Germany | Ghana | Gibraltar | Greece | Greenland | Grenada | Guadeloupe | Guam | Guatemala | Guinea-Bissau | Guinea | Guyana | Haiti | Heard Island and McDonald Islands | Honduras | Hong Kong | Hungary | India | Indonesia | Iran | Iraq | Ireland | Israel | Italy | Ivory Coast (Côte d'Ivoire) | Jamaica | Japan | Jordan | Kazakhstan-1 | Kazakhstan | Kenya | Kiribati | Kuwait | Kyrgyzstan | Laos | Latvia | Lebanon | Lesotho | Liberia | Libya | Liechtenstein | Lithuania | Luxembourg | Macao | Madagascar | Malawi | Malaysia | Maldives | Mali | Malta | Marshall Islands-1 | Marshall Islands | Martinique | Mauritania | Mauritius | Mayotte | Mexico | Micronesia | Moldova | Monaco | Mongolia | Montenegro | Montserrat | Morocco | Mozambique | Myanmar | Namibia | Nauru | Nepal | Netherlands Antilles | Netherlands | New Caledonia | New Zealand | Nicaragua | Niger | Nigeria | Niue | Norfolk | North Korea | Northern Mariana Islands | Norway | Oman | Pakistan | Palau | Palestine | Panama | Papua New Guinea | Paraguay | Peru | Philippines | Pitcairn Islands | Poland | Portugal | Puerto Rico | Qatar | Republic of North Macedonia | Reunion | Romania | Russia | Rwanda | Saint Helena | Saint Kitts and Nevis | Saint Lucia | Saint Pierre and Miquelon | Saint Vincent and the Grenadines | Samoa | San Marino | Sao Tome and Principe | Saudi Arabia | Senegal | Serbia | Seychelles | Sierra Leone | Singapore | Sint Maarten | Slovakia | Slovenia | Solomon Islands | Somalia | South Africa | South Georgia and the South Sandwich Islands | South Korea | South Sudan | Spain | Sri Lanka | Sudan | Suriname | Svalbard and Jan Mayen | Sweden | Switzerland | Syria | Taiwan | Tajikistan | Tanzania | Thailand | The Democratic Republic of Congo | Timor-Leste | Togo | Tokelau | Tonga | Trinidad and Tabago | Tunisia | Turkey | Turkmenistan | Turks and Caicos Islands | Tuvalu | Uganda | Ukraine | United Arab Emirates | United Kingdom | United States Minor Outlying Islands | United States of America | Uruguay | Uzbekistan | Vanuatu | Vatican | Venezuela | Vietnam | Virgin Islands U.S. | Wallis and Futuna | Western Sahara | Yemen | Zambia | Zimbabwe | PII | attribute-col | boolean | business-glossary | city | database-dataset | dataset | datasource | date-time | date | dcp-profile | dcp-table | decimal | deprecated | email | filesystem-dataset | fullouterjoin | function | gender | genetic-sequence | geolocation | graph | hub-dataset | imei | innerjoin | integer | ip-address | leftouterjoin | maestro-card | mask | master-card | passport | phone-number | rightouterjoin | schema | security-ssn | security | service | state | string | thumb-down | thumb-up | trusted | visa-card | zipcode | Bar graph horizontal | Bar graph | Donut graph | Line graph | Pie graph | Scatter graph | Add folder | Copy folder | Delete folder | Folder | Locked folder | Open folder | Storage | Align bottom | Align horizontal center | Align left | Align right | Align text center | Align text justified | Align text left | Align text right | Align top | Align vertical center | Bold | Bullet list | CSS file | CSV file | Check list | Code Block | Code | Components | DOC file | Document | Erase | File | Grid view | HTML file | Indent | Italic | JPEG file | JXS file | Lettercase | List | Notepad | Numbered list | Outdent | PDF file | PNG file | PPT file | Pages | Paragraph | Repeat | SQL file | SVG file | Shared elements | Side navigation | Strikethrough | Table | Text Color | Text Highlight | Text columns | Text heading 1 | Text heading 2 | Text heading 3 | Text heading 4 | Text heading 5 | Text heading 6 | Text highlight | Text | Textbox | Underline | Video | X sub | X super | XLS file | Zip file | erase | Expand | Grab | Location | Minus | Plus | Pointer | Rail | Zoom in | Zoom out | Add new | Calendar | Dashboard | Day | Earth east | Earth west | Function | History | Macros | Night | Operator | Remove | Restore | Time | Timer | Values | Vector | Wait | Database | Decision | Players | Publish | Stack | Terminal | Types | Upload | Authenticated | Certificate | Encrypt | Information | Key | Locked | Password | Secure | Security warning | Unlocked | Unsecure | AI | API Management | DCP | EDI | Event Streams | Flow | Hub | Integration | Task Automation | API | Assets | Atom | Bug | Cart | Connectors | Cursor | Desktop | Home | Laptop | Market place | Mobile | Modal | Qr code | Subflow | Suitcase | Add new user | Identity providers | Language | Profile | RSS feed | Remove user | Swimlane | Tenant | User | AgentStudio | Ai | Arrange alt | Arrows merge | Binoculars | Cards | Chatcircletext | Company | Compass | Component | Cube | Dotsnine | Enter fullscreen | Exit fullscreen | Filter simple | Hash | Headset | Lab | Library | Lightning | Lightningslash | Message unread | Message urgent | Plugin | Reset | Rocket | String | Toggle | Treestructure | Users four | XCircle | Outcome | Payment card | Preview | Queue | Select empty | Selected mix | Send filled | Radio empty | Radio selected | AmazonQ-Color | AmazonQ | MCP | Boomiplatform | Maptrifold | Thumbsdown | Thumbsup | BarGraph | BarGraphHorizontal | DonutGraph | LineGraph | PieGraph | ScatterGraph | File upload | Files | Newspaper | Arrows out | Hand | Lightning filled | Opertator | Branch | Fork | Gitfork | Gitmerge | Gitpullrequest | ACP | AIAgent | BookOpenUser | Brush | CalendarAlt | CardsThree | Chats | CubeAlt | Environments | FolderSimpleStar | LinkBreak | LinkSimple | ListMagnifyingGlass | Market | Number | Plug | PlugsConnected | QR Code | RefreshAlt | Robot | Runtime | SubFlow | Tabs | TrendDown | TrendUp | AddNewUser | Community | Community2 | IdentityProvider | Partner | Profile2 | RSSfeed | RemoveUser` |
| showLeadingIcon | 

Show Leading Icon or not

boolean

 | 

false

 |  |
| showStatusIcon | 

Show status icon in footerType

boolean

 | 

false

 |  |
| footerType | 

Textarea Footer Type

string

 | 

info

 | `one of: info | success | error | warning` |
| dangerouslyUseHTML | 

Enables direct HTML input in the textarea without sanitization. Use with caution as it may pose security risks if not properly validated.

boolean

 | 

false

 |  |
| onBlur | 

The onblur event occurs when an HTML element loses focus.

\-

 | 

@onBlur

 | \- |
| onFocus | 

The onfocus event occurs when an element gets focus.

\-

 | 

@onFocus

 | \- |
| onChange | 

The onchange event occurs when the value of an HTML element is changed.

\-

 | 

@onChange

 | \- |
| onInput | 

The oninput event occurs when an element gets input.

\-

 | 

@onInput

 | \- |
| resize | 

specify whether a textarea should be resizable or not

\-

 | 

vertical

 | `one of: none | vertical` |
| value | 

Textarea value attribute

\-

 | 

""

 |  |
| error-msg | 

Error text for Textarea

\-

 | 

""

 |  |
| leadingIconLabel | 

Custom native tooltip label for the leading icon in ex-textarea

string

 | \- |  |
| statusIconlabel | 

Custom native tooltip label for the status icon in ex-textarea

string

 | \- |  |

## Stories

### Default

### With Info Text

### With Auto Focus

### With Vertical Resize

### With Rows

### Readonly Textarea

### Disabled Textarea

### Invalid Textarea

### With Custom Error Msg

### With Help Text

### With Label

### With Label Info Icon

### With Label Info Icon And Optional

### With Label Info Icon And Required

### With Min Length And Max Length Attribute

### With Optional Attribute

### With Required Attribute

### With Spell Check Attribute
