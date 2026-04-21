---
id: "components-alert-toast--overview"
title: "Components/Alert Toast"
name: "Overview"
source_url: "https://exosphere.boomi.com/iframe.html?id=components-alert-toast--overview&viewMode=docs"
scraped_at: "2026-04-21T08:43:15.208Z"
built_at: "2026-04-21T08:48:27.288Z"
---
# Alert Toast

  

The `ToastController` component is a custom web component designed to display alert messages in a toast notification style. It supports different types of alerts and automatically handles displaying and dismissing messages. This documentation will guide you through the properties, usage, and rules for this component.

## Methods:

##### show({ description, type })

Displays a new toast notification.

-   Parameters:
    
    ```
    
    
    ```
    
    
    description (string): The toast notification's content must be a string and should not exceed 140 characters in length.
                          If the description exceeds this limit, it will be truncated at the end.
    
    
    ```
    
    
    
    
    ```
      
    ```
    
    
    ```
    
    
    type (AlertToastType): The alert type dictates the appearance and icon of the toast notification. It belongs to the AlertToastType (Enum) category and includes the following options:
                          - "INFO": Shows an informational message.
                          - "SUCCESS": Shows a success message.
                          - "WARNING": Shows a warning message.
                          - "ERROR": Shows an error message.
    
    
    ```
    
    
    
    
    ```
      
    
-   Usage:
    
    ```
    
    
    ```
    
    
    ToastController.show({
     description: 'This is an informational message.',
     type: AlertToastType.INFO,
    });
    
    
    ```
    
    
    
    
    ```
    

##### dismiss()

Dismisses the toast notification.

-   Usage:
    
    ```
    
    
    ```
    
    
    ToastController.dismiss();
    
    
    ```
    
    
    
    
    ```
    

##### setOptions(object)

To set the config object for alert toast:

-   Parameters:
    
    ```
    
    
    ```
    
    
    maxToastsToShow (number): To determine the number of toasts to be displayed on screen. By default, the minimum number of toasts shown is 3,
                       but you can change this value to display more than/ less than 3 toasts if you pass this property in the object.
    
    duration (number): Duration of time the toast should appear on the screen
    
    
    ```
    
    
    
    
    ```
      
    
-   Usage:
    
    ```
    
    
    ```
    
    
    ToastController.setOptions({"maxToastsToShow": 4});
    
    
    ```
    
    
    
    
    ```
    

Show Toast

| Name | Description | Default | Control |
| --- | --- | --- | --- |
| type | 
Type of alert toast

string

 | 

info

 | `one of: Information | Success | Warning | Error` |
| description | 

text of the alert toast

string

 | \- | Success message |
| maxToastsToShow | 

Maximum no of toasts to be visible at a given time

number

 | \- |  |
| duration | 

Duration of time which the toast should be visible on screen

number

 | \- |  |
