---
id: "components-dropdown--overview"
title: "Components/Dropdown"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-dropdown--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:25.654Z"
built_at: "2026-04-21T08:48:27.294Z"
---
# Dropdown

  

### Style Properties:

| Name | Description |
| --- | --- |
| \--exo-component-dropdown-popup-min-height | Token to modify the dropdown popup min height. |

-   Usage:
    
    ```
    
    
    ```
    
    
    .your-class-name {
    \--exo-component-dropdown-popup-min-height: var(\--exo-size-1);
    }
    
    
    ```
    
    
    
    
    ```
    

### Methods:

| Name | Description |
| --- | --- |
| `closeDropdown()` | Public method to programmatically close the dropdown menu. |

-   **Usage Example (Closing on scroll):**
    
    ```
    
    
    ```
    
    
    // Select the element
    const dropdown \= document.querySelector('ex-dropdown');
    // Listen for scroll events
    window.addEventListener('scroll', () \=> {
      if (dropdown) {
        dropdown.closeDropdown();
      }
    });
    
    
    ```
    
    
    
    
    ```
    

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| icon | 
name of icon

string

 | \- | `one of: ACPColor | AIAgentColor | AIControlTowerColor | AIStudioColor | APIM-APIGColor | B2B-EDIColor | BoomiEmbedColor | CAMColor | CommandCenterColor | ConnectColor | DataIntegrationColor | EventStreamsColor | FlowColor | HubColor | IntegrationColor | KnowledgeHub | LabsColor | MFTColor | MarketplaceColor | MetaHubColor | OrchestrateColor | Platform | TaskAutomationColor | component-fill | image | layout | squares | activity | ascending | book-bookmark | calendar | circular-arrow-single | circular-double-arrow | clarity-fill | clock-arrow | coaching | cog-fill | cog-outline | color | copy | cross-circle | cross | curved-arrow-right | delete | descending | direction-arrow-down | direction-arrow-left | direction-arrow-right | direction-arrow-up | direction-arrowhead-down | direction-arrowhead-left | direction-arrowhead-right | direction-arrowhead-up | direction-caret-down | direction-caret-left | direction-caret-right | direction-caret-up | direction-left | direction-right | document-search | double-arrow | double-caret | download | envelope-closed | envelope-open | eye-open | eye-slash | filter | flag-fill | flag-outline | floppy-disk | foundation-fill | foundation-outline | group | heart-fill | heart-outline | import-export | link-broken | link | magnifying-glass | menu | move-direction-arrow-move-down | move-direction-arrow-move-left | move-direction-arrow-move-right | move-direction-arrow-move-up | new-window | note | paperclip | path-fill | pattern-fill | pause-fill | pause-outline | pencil | play-fill | play-outline | plus-circle | plus | power | printer | reliability-fill | rename | rocket-fill | save | send-arrow | shop-front | shopping-cart | sliders-fill | sliders-outline | star-fill | star-outline | stop-filled | stop-outline | three-dots-horizontal-fill | three-dots-horizontal-outline | three-dots-vertical-fill | three-dots-vertical-outline | thumbs-up-fill | tick-box | trash | ungroup | upload | usage-and-billing | voice-and-tone | bell | circle-warning | clock | cloud-slash | cloud | gauge | in-progress | information | not-doing | planned | released | status-fail | status-success | status-warning | stop | stopwatch | success | bar-chart-horizontal | bar-chart-vertical | columns | donut-chart | line-chart | piechart | rows | scatter-chart | table | values-flow | AD | AE | AF | AG | AL | AM | AN | AO | AR | AT | AU | AW | AZ | BA | BB | BD | BE | BF | BG | BH | BI | BJ | BN | BO | BR | BS | BT | BV | BW | BY | BZ | CA | CC | CD | CF | CG | CH | CI | CK | CL | CM | CN | CO | CR | CS | CU | CV | CW | CX | CY | CZ | DE | DJ | DK | DM | DO | DZ | EC | EE | EG | EH | ER | ES | ET | FI | FJ | FK | FM | FO | FR | GA | GB | GD | GE | GF | GH | GI | GL | GM | GN | GP | GQ | GR | GS | GT | GU | GW | GY | HK | HM | HN | HR | HT | HU | ID | IE | IL | IN | IQ | IR | IS | IT | JM | JO | JP | KE | KG | KH | KI | KM | KN | KP | KR | KW | KY | KZ | LA | LB | LC | LI | LK | LR | LS | LT | LU | LV | LY | MA | MC | MD | ME | MG | MH | MK | ML | MM | MN | MO | MP | MQ | MR | MS | MT | MU | MV | MW | MX | MY | MZ | NA | NC | NE | NF | NG | NI | NL | NO | NP | NR | NU | NZ | OM | PA | PE | PF | PG | PH | PK | PL | PM | PN | PR | PS | PT | PW | PY | QA | RE | RO | RS | RU | RW | SA | SB | SC | SD | SE | SG | SH | SI | SJ | SK | SL | SM | SN | SO | SR | SS | ST | SV | SX | SY | SZ | TC | TD | TF | TG | TH | TJ | TK | TL | TM | TN | TO | TR | TT | TV | TW | TZ | UA | UG | UM | US | UY | UZ | VA | VC | VE | VI | VN | VU | WF | WS | YE | YT | ZA | ZM | ZW | cloud-arrow-up | flow-decision | flow-operator | flow-shared-elements | flow-step | flow-subflow | flow-swimlane | flow-tenant | play | return | sliders | suitcase | vector | api | document | folder-closed-fill | folder-closed-outline | folder-group | folder-minus | folder-open-fill | folder-open-outline | folder-plus | align-to-bottom | align-to-left | align-to-right | align-to-top | alignment-center | alignment-left | alignment-right | center-alignment-horizontal | center-alignment-vertical | code | horizontal | list-bulleted | list-numbered | plain-text | text-bold | text-italic | text-strikethrough | text-underline | typography | video | x-sub | x-super | cursor | draggable | hand-closed | hand-open | hand-pointing | magnify-minus | magnify-plus | minus-circle | console-screen | database | note-pencil | package | play-circle | plug | publish | stack | fingerprint | globe-east | globe-west | key | lock-closed | lock-open | shield-slash | shield-warning | shield | api-management-color | api-management | dcp-color | dcp | edi-color | edi | event-stream | flow-color | flow | hub-color | hub | integration-color | integration | training | community | device-desktop | device-mobile | home | person-circle | person | pin-fill | pin-outline | pin-slash | rss | signin | signout | tag | Archive | Arrange | Attachment | Auditing | Auto arrange | Bookmark | BoomiPlatform | Close | Copy | Create | Delete | Down arrow | Down caret | Download | Edit | Favorite | Favorited | Filter | Group | Hide | Left arrow | Left caret | Like | Liked | Link break | Link | Lock file | MapTrifold | Menu | Merge | Message | Monitor | More options | Move down | Move left | Move right | Move up | Note | Open in new window | Paste | Pause | Pin | Power | Print | Process | Properties | Read | Redo | Refresh | Reorder | Retry | Return | Right arrow | Right caret | Run | Save | Scan | Search | Select | Send | Settings | Share | Show | Sign in | Sign out | Skip backward | Skip forward | Sort ascending | Sort descending | Sort | Start | Step | Stop | Tag | ThumbsDown | ThumbsUp | Toolbox | Undo | Ungroup | Unmerge | Unpin | Up arrow | Up caret | Zoom to fit graph | Check | Disabled | Error | Help | In progress | Notification | Notifications off | Offline | Online | Selected | Snooze notifications | Success | Warning | Afghanistan | Albania | Algeria | Andorra | Angola | Antigua and Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bhutan | Bolivia | Bosnia and Herzegovina | Botswana | Bouvet Island | Brazil | Brunei | Bulgaria | Burkina Faso | Burundi | Cabo Verde | Cameroon | Canada | Cayman Islands | Central African Republic | Chad | Chile | China | Christmas Island | Cocos (Keeling) Islands | Colombia | Comoros | Congo | Cook Islands | Costa Rica | Croatia | Curaçao | Cyprus | Czechia | Denmark | Djibouti | Dominica | Dominican Republic | Ecuador | Egypt | El Salvador | Equatorial Guinea | Eritrea | Estonia | Eswatini | Ethiopia | Falkland Islands | Faroe Islands | Fiji | Finland | France | French Guiana | French Polynesia | French Southern Territories | Gabon | Gambia | Georgia | Germany | Ghana | Gibraltar | Greece | Greenland | Grenada | Guadeloupe | Guam | Guatemala | Guinea-Bissau | Guinea | Guyana | Haiti | Heard Island and McDonald Islands | Honduras | Hong Kong | Hungary | India | Indonesia | Iran | Iraq | Ireland | Israel | Italy | Ivory Coast (Côte d'Ivoire) | Jamaica | Japan | Jordan | Kazakhstan-1 | Kazakhstan | Kenya | Kiribati | Kuwait | Kyrgyzstan | Laos | Latvia | Lebanon | Lesotho | Liberia | Libya | Liechtenstein | Lithuania | Luxembourg | Macao | Madagascar | Malawi | Malaysia | Maldives | Mali | Malta | Marshall Islands-1 | Marshall Islands | Martinique | Mauritania | Mauritius | Mayotte | Mexico | Micronesia | Moldova | Monaco | Mongolia | Montenegro | Montserrat | Morocco | Mozambique | Myanmar | Namibia | Nauru | Nepal | Netherlands Antilles | Netherlands | New Caledonia | New Zealand | Nicaragua | Niger | Nigeria | Niue | Norfolk | North Korea | Northern Mariana Islands | Norway | Oman | Pakistan | Palau | Palestine | Panama | Papua New Guinea | Paraguay | Peru | Philippines | Pitcairn Islands | Poland | Portugal | Puerto Rico | Qatar | Republic of North Macedonia | Reunion | Romania | Russia | Rwanda | Saint Helena | Saint Kitts and Nevis | Saint Lucia | Saint Pierre and Miquelon | Saint Vincent and the Grenadines | Samoa | San Marino | Sao Tome and Principe | Saudi Arabia | Senegal | Serbia | Seychelles | Sierra Leone | Singapore | Sint Maarten | Slovakia | Slovenia | Solomon Islands | Somalia | South Africa | South Georgia and the South Sandwich Islands | South Korea | South Sudan | Spain | Sri Lanka | Sudan | Suriname | Svalbard and Jan Mayen | Sweden | Switzerland | Syria | Taiwan | Tajikistan | Tanzania | Thailand | The Democratic Republic of Congo | Timor-Leste | Togo | Tokelau | Tonga | Trinidad and Tabago | Tunisia | Turkey | Turkmenistan | Turks and Caicos Islands | Tuvalu | Uganda | Ukraine | United Arab Emirates | United Kingdom | United States Minor Outlying Islands | United States of America | Uruguay | Uzbekistan | Vanuatu | Vatican | Venezuela | Vietnam | Virgin Islands U.S. | Wallis and Futuna | Western Sahara | Yemen | Zambia | Zimbabwe | PII | attribute-col | boolean | business-glossary | city | database-dataset | dataset | datasource | date-time | date | dcp-profile | dcp-table | decimal | deprecated | email | filesystem-dataset | fullouterjoin | function | gender | genetic-sequence | geolocation | graph | hub-dataset | imei | innerjoin | integer | ip-address | leftouterjoin | maestro-card | mask | master-card | passport | phone-number | rightouterjoin | schema | security-ssn | security | service | state | string | thumb-down | thumb-up | trusted | visa-card | zipcode | Bar graph horizontal | Bar graph | Donut graph | Line graph | Pie graph | Scatter graph | Add folder | Copy folder | Delete folder | Folder | Locked folder | Open folder | Storage | Align bottom | Align horizontal center | Align left | Align right | Align text center | Align text justified | Align text left | Align text right | Align top | Align vertical center | Bold | Bullet list | CSS file | CSV file | Check list | Code Block | Code | Components | DOC file | Document | Erase | File | Grid view | HTML file | Indent | Italic | JPEG file | JXS file | Lettercase | List | Notepad | Numbered list | Outdent | PDF file | PNG file | PPT file | Pages | Paragraph | Repeat | SQL file | SVG file | Shared elements | Side navigation | Strikethrough | Table | Text Color | Text Highlight | Text columns | Text heading 1 | Text heading 2 | Text heading 3 | Text heading 4 | Text heading 5 | Text heading 6 | Text highlight | Text | Textbox | Underline | Video | X sub | X super | XLS file | Zip file | erase | Expand | Grab | Location | Minus | Plus | Pointer | Rail | Zoom in | Zoom out | Add new | Calendar | Dashboard | Day | Earth east | Earth west | Function | History | Macros | Night | Operator | Remove | Restore | Time | Timer | Values | Vector | Wait | Database | Decision | Players | Publish | Stack | Terminal | Types | Upload | Authenticated | Certificate | Encrypt | Information | Key | Locked | Password | Secure | Security warning | Unlocked | Unsecure | AI | API Management | DCP | EDI | Event Streams | Flow | Hub | Integration | Task Automation | API | Assets | Atom | Bug | Cart | Connectors | Cursor | Desktop | Home | Laptop | Market place | Mobile | Modal | Qr code | Subflow | Suitcase | Add new user | Identity providers | Language | Profile | RSS feed | Remove user | Swimlane | Tenant | User | AgentStudio | Ai | Arrange alt | Arrows merge | Binoculars | Cards | Chatcircletext | Company | Compass | Component | Cube | Dotsnine | Enter fullscreen | Exit fullscreen | Filter simple | Hash | Headset | Lab | Library | Lightning | Lightningslash | Message unread | Message urgent | Plugin | Reset | Rocket | String | Toggle | Treestructure | Users four | XCircle | Outcome | Payment card | Preview | Queue | Select empty | Selected mix | Send filled | Radio empty | Radio selected | AmazonQ-Color | AmazonQ | MCP | Boomiplatform | Maptrifold | Thumbsdown | Thumbsup | BarGraph | BarGraphHorizontal | DonutGraph | LineGraph | PieGraph | ScatterGraph | File upload | Files | Newspaper | Arrows out | Hand | Lightning filled | Opertator | Branch | Fork | Gitfork | Gitmerge | Gitpullrequest | ACP | AIAgent | BookOpenUser | Brush | CalendarAlt | CardsThree | Chats | CubeAlt | Environments | FolderSimpleStar | LinkBreak | LinkSimple | ListMagnifyingGlass | Market | Number | Plug | PlugsConnected | QR Code | RefreshAlt | Robot | Runtime | SubFlow | Tabs | TrendDown | TrendUp | AddNewUser | Community | Community2 | IdentityProvider | Partner | Profile2 | RSSfeed | RemoveUser` |
| flavor | 

flavor of button

string

 | 

base

 | `one of: base | branded | risky` |
| type | 

type of button

string

 | 

primary

 | `one of: primary | secondary | tertiary` |
| text | 

text of the button

string

 | 

button

 | open |
| size | 

size of the button

string

 | 

default

 | `one of: small | default | large` |
| disabled | 

button state is disabled or not

boolean

 | \- |  |
| use-display | 

Allow to choose multiple options without closing

boolean

 | \- |  |
| auto-open | 

Automatically opens the popover when the component is rendered

boolean

 | \- |  |
| keepOpen | 

the popover will not close during scroll or resize events  
  
***Note: `keepOpen` has been deprecated and will be removed in the next major release.***

boolean

 | \- |  |
| hide-prefix | 

Hide the prefix icon from dropdown

boolean

 | 

false

 |  |
| tooltipText | 

Tooltip text

string

 | \- | Action |
| align | 

Controls the alignment of the dropdown menu

string

 | 

left

 | `one of: left | right` |
| enableIconButtonFlavor | 

boolean

 | \- |  |
| enableTransition | 

Enables smooth transitions when opening and closing the dropdown menu. When true, applies smooth movement animation with opacity transitions.

boolean

 | 

false

 |  |
| use-portal | 

Render dropdown menu in a portal to avoid clipping issues when used inside components with overflow hidden (like carousel)

boolean

 | 

false

 |  |
| width | 

Width of the dropdown. for example 120

\-

 | \- |  |
| prefixIconLabel | 

Custom native tooltip label for the icon in ex-dropdown

string

 | \- |  |

## Stories

### Default

### With Icon Button

### With Small Icon Button

### With Icon Button Tooltip

LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps Youtube Facebook

### Without Prefix

### With Customized Width
