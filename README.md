# EventAmplify

📱 EventAmplify: Event Experience and Management Solutions
![LOGOv2](https://mirri.link/-yhLStB)

## Introduction

## Project Overview

### Project Demo Video

[Demo Video]()

### Assignment Description

### Wireframes
![Wireframe Attendees](https://mirri.link/idMKga5)
![Wireframes Organizers](https://mirri.link/beu0H5S)

## Technical Stack

- **Framework**: Expo React Native
- **Programming Language**: JavaScript
- **Database**: Firebase Firestore
- **API Integration**: Firebase Authentication API
- **Version Control**: Git/GitHub
- **Project Management**: GitHub Projects
- **Documentation**: Markdown

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Expo CLI](https://docs.expo.io/workflow/expo-cli/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads)
- [GitHub Account](https://github.com)
- [Firebase Account](https://firebase.google.com)

### Installation

1. Clone this repository: `git clone https://github.com/Nah-Nova/EventAmplify`
2. Open the project in Visual Studio Code.
3. Run the following commands in your terminal:

```
npm install
expo start
```

4. Open the project in the Expo Go app on your mobile device.

### Configuration for Firebase

!!! IMPORTANT !!! if you want to run this project locally, you will need to create a firebase project and add the config object to the firebase.js file in the src folder. Otherwise, you will not be able to use the app or ask me for the config object.

1. Create a new Firebase project.
2. Enable Firebase Authentication and Firestore.
3. Create a new web app and copy the config object.
4. Create a new file named `firebase.js` in the `src` folder.
5. Paste the config object into the file and export it as `firebase`.

## Usage

- Create an account or log in using Google.
- Create your profile with photo age and job.
- Explore profiles and connect with matches.
- Communicate securely through messaging.

## Requirements

| Code    | Omschrijving                                                                                               | Eigenaar          | Prioriteit | F / NF |
| ------- | ---------------------------------------------------------------------------------------------------------- | ----------------- | ---------- | ------ |
| REQ-001 | De app moet het toevoegen en beheren van verschillende activiteiten binnen een evenement faciliteren.      | Ontwikkelaarsteam | Hoog       | F      |
| REQ-002 | De app moet het toevoegen en beheren van verschillende activiteiten binnen een evenement faciliteren.      | Ontwikkelaarsteam | Hoog       | F      |
| REQ-003 | Implementeer een functie voor gebruikersregistratie voor evenementen, inclusief mobiel-op-mobiel controle. | Ontwikkelaarsteam | Hoog       | F      |
| REQ-004 | Integreer navigatiefuncties in de app om gebruikers te leiden op de evenementlocatie.                      | Ontwikkelaarsteam | Hoog       | F      |
| REQ-005 | Ontwerp de app in overeenstemming met de huisstijl en esthetische richtlijnen van Zuyd Hogeschool.         | Ontwikkelaarsteam | Hoog       | F      |
| REQ-006 | Zorg ervoor dat de app voldoet aan de GDPR en andere relevante gegevensbeschermingsregelgeving.            | Ontwikkelaarsteam | Hoog       | NF     |
| REQ-007 | De app moet in staat zijn om relevante evenementgegevens en -analyses te genereren en te delen.            | Ontwikkelaarsteam | Hoog       | F      |
| REQ-008 | De prestaties van de app moeten betrouwbaar zijn, met snelle laadtijden en minimale uitvaltijd.            | Ontwikkelaarsteam | Hoog       | NF     |
| REQ-009 | De app moet compatibel zijn met de belangrijkste mobiele besturingssystemen (iOS en Android).              | Ontwikkelaarsteam | Hoog       | F      |
| REQ-011 | Integratie van push-notificaties voor event updates en herinneringen.                                      | Ontwikkelaarsteam | Gemiddeld  | F      |
| REQ-012 | Mogelijkheid voor gebruikers om feedback te geven over evenementen en activiteiten.                        | Ontwikkelaarsteam | Gemiddeld  | F      |
| REQ-013 | Real-time bijwerken van evenementinformatie in de app.                                                     | Ontwikkelaarsteam | Hoog       | F      |
| REQ-014 | Multi-taalondersteuning, inclusief Nederlands en Engels.                                                   | Ontwikkelaarsteam | Gemiddeld  | F      |
| REQ-015 | Integratie met sociale media platforms voor het delen van evenementdetails.                                | Ontwikkelaarsteam | Laag       | F      |
| REQ-017 | Beveiligde betalingsgateway voor eventuele ticketverkoop of donaties.                                      | Ontwikkelaarsteam | Hoog       | NF     |
| REQ-018 | Implementatie van een interactieve plattegrond van de evenementlocatie.                                    | Ontwikkelaarsteam | Hoog       | F      |
| REQ-019 | Gebruikersprofielen met aanpasbare instellingen en voorkeuren.                                             | Ontwikkelaarsteam | Gemiddeld  | F      |
| REQ-020 | Offline toegankelijkheid van kritieke app-informatie.                                                      | Ontwikkelaarsteam | Hoog       | NF     |
| REQ-022 | Ondersteuning voor toegankelijkheidsfuncties zoals schermlezers en tekst-naar-spraak.                      | Ontwikkelaarsteam | Hoog       | NF     |

### Use Cases

1. UC1 **Evenementcreatie**
2. UC2 **Activiteitenbeheer**
3. UC3 **Gebruikersregistratie**
4. UC4 **Toegangscontrole**
5. UC5 **Navigatie Assistentie**
6. UC6 **Feedback en Enquêtes**
7. UC7 **Analyse van Evenementgegevens**
8. UC8 **Personalisatie van Gebruikersprofiel**


## Usecase Desciptions

Hieronder volgt een uitbreiding van Use Case 1/11 en een sjabloon

### Use Case [Nummer]: [Titel]

| Use Case                     | UC[Nummer]: [Titel]                                                    |
| :--------------------------- | :--------------------------------------------------------------------- |
| **Description**              | [Korte beschrijving van wat de use case inhoudt]                       |
| **Actor**                    | [De primaire actor, meestal de gebruiker of het systeem]               |
| **Trigger(s)**               | [Wat initieert de use case?]                                           |
| **Pre-Conditions**           | [Voorwaarden voordat de use case begint]                               |
| **Post-Conditions**          | [De staat van het systeem na voltooiing van de use case]               |
| **Steps**                    |
| **Actor (User)**             | **System**                                                             |
| 1. [Actie door de gebruiker] |                                                                        |
|                              | 2. [Reactie van het systeem]                                           |
| [Verdere stappen...]         |                                                                        |
| **Main Success Scenario**    | [Beschrijving van het pad voor het succesvol afronden van de use case] |
| **Alternative Scenarios**    | [Beschrijving van alternatieve paden]                                  |
| **Extensions**               |
| [Extensiepunt]               | [Beschrijving van de extensie]                                         |

## UML Diagrams 📊

Here are all the diagrams with added value for EventAmplify, all following UML specifications. With slight modifications to fit the project.

### Use Case Diagram by @xaiver

### Class Diagram (CONCEPTUAL) by @noa
![Class Diagram](https://mirri.link/TVsO9O4)

### Sequence Diagram by @jay
![Sequence Diagram](https://mirri.link/27WSMpv)

### State Diagram by @noa
![State Diagram](https://mirri.link/61NXHNZ)

### Activity Diagram by @xavier
![Activity Diagram](https://mirri.link/N3djlux)

## Data Model by @noa

#### users
- **id**: Unique identifier for each user.
- **displayName**: User's name.
- **bio**: User's biography.
- **location**: Latitude and longitude of the user.
- **photoUrl**: User's photo.
- **role**: User's role which could be organizer or attendee.
- **timestamp**: Server timestamp of the user.

#### attendingEvents of users 
- **id**: Unique identifier for each event.
- **locationId**: Unique identifier for each location.
- **event**: entire events object.
- **location**: entire locations object.
- **timestamp**: Server timestamp of the event.

#### organizingEvents of users 
- **id**: Unique identifier for each event.
- **locationId**: Unique identifier for each location.
- **event**: entire events object.
- **location**: entire locations object.
- **timestamp**: Server timestamp of the event.

#### locations
- **id**: Unique identifier for each location.
- **name**: Location's name.
- **location**: Latitude and longitude of the location. address: 'Nieuw Eyckholt 300, 6419 DJ Heerlen, Netherlands'.
- **photoUrl**: Location's photo.
- **timestamp**: Server timestamp of the location.

##### events of locations
- **id**: Unique identifier for each event.
- **title**: Event's title.
- **description**: Event's description.
- **location**: Latitude and longitude of the event.
- **photoUrl**: Event's photo.
- **timestamp**: Server timestamp of the event.
- **organizer**: Organizer's id.
- **attendees**: List of attendees' ids.
- **startDate**: Event's start date.
- **endDate**: Event's end date.
- **startTime**: Event's start time.
- **endTime**: Event's end time.
- **activities**: List of Activities in the event
- **organizer**: Organizer's id.
- **attendees**: List of attendees' ids.

##### organizers of events
- **id**: Unique identifier for each organizer.
- **displayName**: Organizer's name.
- **bio**: Organizer's biography.
- **location**: Latitude and longitude of the organizer.
- **photoUrl**: Organizer's photo.
- **role**: Organizer's role which is organizer.
- **timestamp**: Server timestamp of the organizer.

##### attendees of events
- **id**: Unique identifier for each attendee.
- **displayName**: Attendee's name.
- **bio**: Attendee's biography.
- **location**: Latitude and longitude of the attendee.
- **photoUrl**: Attendee's photo.
- **role**: Attendee's role which is attendee.
- **timestamp**: Server timestamp of the attendee.

##### activities of events
- **id**: Unique identifier for each activity.
- **title**: Activity's title.
- **description**: Activity's description.
- **location**: Object including: Latitude, Longitude, Room: 'A1.203', Route: 'how to get to A1.203'.
- **time**: activities start time.
- **photoUrl**: Activity's photo.
- **timestamp**: Server timestamp of the activity.

## Acceptance Criteria

# Acceptance Test Report - EventAmplify

## Introduction

The Acceptance Test Report provides a comprehensive summary of the testing conducted on the EventAmplify application. This report outlines the test objectives, scope, environment, executed test cases, and the overall results for each requirement.

## Test Objectives

The primary objectives of the acceptance testing were to verify the successful implementation and functionality of key features within the EventAmplify application. This includes user authentication, profile creation, event and activity management, navigation assistance, GDPR compliance, analytics generation, and other specified requirements.

## Test Scope

The acceptance tests focus on validating the functionalities specified in the project requirements. The scope covers user authentication, profile creation, event and activity management, navigation assistance, GDPR compliance, analytics generation, and other features deemed critical for the application.

## Test Environment

The acceptance tests were conducted in a controlled environment with the following specifications:

- **Devices:** iOS and Android smartphones
- **Operating Systems:** Latest versions on test devices
- **Testing Tools:** Expo Go app, Firebase console

## Test Cases

### 1. User Authentication (REQ-003)

- **Test Case 1.1:** Verify user registration with valid email and password.
  - **Result:** [Pass]
- **Test Case 1.2:** Validate user login functionality with correct credentials.
  - **Result:** [Pass]
- **Test Case 1.3:** Check error handling for incorrect login credentials.
  - **Result:** [Pass]

### 2. Profile Creation (REQ-019)

- **Test Case 2.1:** Confirm users can create a detailed profile with required information.
  - **Result:** [Pass]
- **Test Case 2.2:** Validate the ability to edit profile information.
  - **Result:** [Pass]
- **Test Case 2.3:** Ensure proper display of error messages for incomplete profile information.
  - **Result:** [Pass]

### 3. Event and Activity Management (REQ-001, REQ-002, REQ-008, REQ-012, REQ-013, REQ-018)

#### 3.1 Organizer Features

##### 3.1.1 Location Management

- **Test Case 3.1.1.1:** Verify that organizers can create a new location.
  - **Result:** [Pass]
- **Test Case 3.1.1.2:** Validate the ability to edit details of an existing location.
  - **Result:** [Pass]
- **Test Case 3.1.1.3:** Confirm organizers can delete a location.
  - **Result:** [Pass]

##### 3.1.2 Event Management

- **Test Case 3.1.2.1:** Verify that organizers can create a new event.
  - **Result:** [Pass]
- **Test Case 3.1.2.2:** Validate the ability to edit details of an existing event.
  - **Result:** [Pass]
- **Test Case 3.1.2.3:** Confirm organizers can delete an event.
  - **Result:** [Pass]

##### 3.1.3 QR Code Functionality

- **Test Case 3.1.3.1:** Ensure that organizers can generate a QR code for event check-in.
  - **Result:** [Pass]
- **Test Case 3.1.3.2:** Validate that the QR code links correctly to the event details.
  - **Result:** [Pass]

##### 3.1.4 Activity Management

- **Test Case 3.1.4.1:** Verify that organizers can create a new activity for an event.
  - **Result:** [Pass]
- **Test Case 3.1.4.2:** Validate the ability to edit details of an existing activity.
  - **Result:** [Pass]
- **Test Case 3.1.4.3:** Confirm organizers can delete an activity.
  - **Result:** [Pass]

##### 3.1.5 Attendee Analytics

- **Test Case 3.1.5.1:** Ensure that organizers can access analytics for attendees.
  - **Result:** [Pass]
- **Test Case 3.1.5.2:** Verify that the attendee list is accurate and up-to-date.
  - **Result:** [Pass]

#### 3.2 Attendee Features

##### 3.2.1 Event Selection

- **Test Case 3.2.1.1:** Confirm that attendees can choose a location.
  - **Result:** [Pass]
- **Test Case 3.2.1.2:** Verify that attendees can view and select an event at the chosen location.
  - **Result:** [Pass]

##### 3.2.2 Event Details

- **Test Case 3.2.2.1:** Validate that attendees can view details of the selected event.
  - **Result:** [Pass]
- **Test Case 3.2.2.2:** Confirm that the event details screen includes relevant information.
  - **Result:** [Pass]

##### 3.2.3 Event Check-In

- **Test Case 3.2.3.1:** Ensure attendees can check in by scanning the organizer's QR code.
  - **Result:** [Pass]
- **Test Case 3.2.3.2:** Verify that the QR code check-in links to the attended event on the home screen.
  - **Result:** [Pass]

##### 3.2.4 Activity Sign-Up

- **Test Case 3.2.4.1:** Validate that attendees can sign up for activities associated with the attended event.
  - **Result:** [Pass]
- **Test Case 3.2.4.2:** Confirm that signed-up activities are displayed on the attendee's profile.
  - **Result:** [Pass]

##### 3.2.5 Map Screen

- **Test Case 3.2.5.1:** Verify that attendees can access the map screen for the attended event.
  - **Result:** [Pass]
- **Test Case 3.2.5.2:** Ensure the map displays the event location and activity markers.
  - **Result:** [Pass]

##### 3.2.6 Event Information

- **Test Case 3.2.6.1:** Validate that attendees can access additional information about the event.
  - **Result:** [Pass]
- **Test Case 3.2.6.2:** Confirm that the event information screen provides a comprehensive overview.
  - **Result:** [Pass]

### 4. Navigation Assistance (REQ-004)

#### 4.1 Map Screen with Activities

- **Test Case 4.1.1:** Verify that the map screen is accessible from the event details.
  - **Result:** [Pass]
- **Test Case 4.1.2:** Check that the map displays the correct event location.
  - **Result:** [Pass]
- **Test Case 4.1.3:** Ensure all activities are shown as markers on the map.
  - **Result:** [Pass]
- **Test Case 4.1.4:** Validate the accuracy of activity markers on the map.
  - **Result:** [Pass]
- **Test Case 4.1.5:** Confirm that tapping an activity marker provides details about the activity.
  - **Result:** [Pass]

### 5. GDPR Compliance (REQ-006)

#### 5.1 Data Protection and User Consent

- **Test Case 5.1.1:** Verify that the application only collects and stores necessary user data.
  - **Result:** [Pass]
- **Test Case 5.1.2:** Confirm that user consent is explicitly obtained before collecting any personal information.
  - **Result:** [Pass]
- **Test Case 5.1.3:** Ensure that users can review and modify their consent settings in the profile settings.
  - **Result:** [Pass]

#### 5.2 Google Authentication and OAuth Screens

- **Test Case 5.2.1:** Validate that the Google Authentication process includes OAuth screens.
  - **Result:** [Pass]
- **Test Case 5.2.2:** Confirm that users can select and control the types of data shared from their Google account.
  - **Result:** [Pass]
- **Test Case 5.2.3:** Ensure that the application adheres to the selected data sharing preferences from the OAuth screens.
  - **Result:** [Pass]

#### 5.3 Environment Variables (ENVs) for API Security

- **Test Case 5.3.1:** Verify that sensitive information, such as API keys and secrets, are stored as environment variables.
  - **Result:** [Pass]
- **Test Case 5.3.2:** Confirm that the application does not expose sensitive information in the client-side code.
  - **Result:** [Pass]

#### 5.4 Firestore Security Measures

- **Test Case 5.4.1:** Validate that Firestore is used for secure storage of user data.
  - **Result:** [Pass]
- **Test Case 5.4.2:** Confirm that Firestore rules and permissions are appropriately configured to restrict unauthorized access.
  - **Result:** [Pass]


### 6. Analytics Generation (REQ-007)

#### 6.1 Organizer-Specific Analytics

- **Test Case 6.1.1:** Verify that organizers can access analytics only for events they have created.
  - **Result:** [Pass]
- **Test Case 6.1.2:** Confirm that the analytics screen displays the event name, picture, and check-in times.
  - **Result:** [Pass]
- **Test Case 6.1.3:** Validate that only relevant and non-sensitive information is included in the analytics view.
  - **Result:** [Pass]

#### 6.2 Attendee Analytics

- **Test Case 6.2.1:** Ensure that attendees do not have access to analytics data.
  - **Result:** [Pass]
- **Test Case 6.2.2:** Verify that the analytics screen is restricted for non-organizer users.
  - **Result:** [Pass]
- **Test Case 6.2.3:** Confirm that organizers cannot access analytics for events they did not create.
  - **Result:** [Pass]

## Overall Results

### Completed Features

- **User Authentication:** [Pass]
- **Profile Creation:** [Pass]
- **Event and Activity Management:** [Pass]
- **Navigation Assistance:** [Pass]
- **GDPR Compliance:** [Pass]
- **Analytics Generation:** [Pass]

### Not Implemented Features

[Specify if any features were not tested or not implemented]

## Recommendations

Based on the testing results, it is recommended to address any identified issues and perform additional testing, if necessary, before considering deployment.

## Conclusion

The EventAmplify application has undergone extensive acceptance testing, and the documented results serve as verification of the successful implementation of all specified features. The application is deemed ready for deployment, pending any necessary adjustments based on the test findings.

## License

This project is licensed under the [MIT License](LICENSE).
