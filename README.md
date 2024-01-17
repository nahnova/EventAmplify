# EventAmplify

📱 EventAmplify: Event Experience and Management Solutions
![LOGOv2](https://mirri.link/-yhLStB)

## Introduction

## Project Overview

### Project Demo Video

[Demo Video]()

### Assignment Description

## Design

[High Fidelity Design](https://www.figma.com/file/gxSWRTmZfQqxtPYEfD79lz/EventAmplify---V1?type=design&node-id=1%3A2&mode=design&t=ouFTBBN0VObApzbp-1)

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

### Use Case Diagram

TODO: Add Use Case Diagram @xavier

### Class Diagram (CONCEPTUAL)

![Class Diagram](https://mirri.link/TVsO9O4)

### Sequence Diagram

TODO: Add Use Case Diagram @jay

### State Diagram

TODO: Add Use Case Diagram @jay

### Activity Diagram

TODO: Add Activity Diagram @xavier

## Data Model

#### users

- **id**: Unique identifier for each user.
- **displayName**: User's name.
- **bio**: User's biography.
- **location**: Latitude and longitude of the user.
- **photoUrl**: User's photo.
- **role**: User's role which could be organizer or attendee.
- **timestamp**: Server timestamp of the user.

#### locations

- **id**: Unique identifier for each location.
- **name**: Location's name.
- **description**: Location's description.
- **location**: Latitude and longitude of the location. street, city, country.
- **photoUrl**: Location's photo.
- **timestamp**: Server timestamp of the location.
- **events**: List of events in the location.

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
- **photoUrl**: Activity's photo.
- **timestamp**: Server timestamp of the activity.

## Acceptance Criteria

# Acceptance Test Report for EventAmplify

## Introduction

## Test Objectives

## Test Scope

## Test Environment

The acceptance tests will be conducted in a controlled environment, utilizing the following:

- Test Devices: iOS and Android smartphones running the latest operating systems.
- Testing Tools: Expo Go app, Firebase console for backend validation.

## Test Cases

## Test Execution

The tests will be executed manually on iOS and Android devices using the Expo Go app. The Firebase console will be used to validate backend functionalities.

Certainly! Here's a basic template for an Acceptance Test Report based on the provided information. Please note that you might need to add specific details based on your actual testing results.

# Acceptance Test Report - EventAmplify

## Introduction

## Testing Scope

## Test Environment

- **Device:** [Specify the device(s) used for testing, e.g., Android emulator, iOS simulator, physical device]
- **OS Version:** [Specify the operating system version on the test device]
- **Browser:** [If applicable, mention the browser used for testing]

## Test Cases

### 1. User Authentication

- **Test Case:** Verify that users can register with a valid email and password.
  - **Result:** [Pass]
- **Test Case:** Validate that users can log in with their credentials.
  - **Result:** [Pass]
- **Test Case:** Ensure proper handling of incorrect login credentials.
  - **Result:** [Pass]

### 2. Profile Creation

- **Test Case:** Confirm that users can create a detailed profile with required information.
  - **Result:** [Pass]
- **Test Case:** Validate the ability to edit profile information.
  - **Result:** [Pass]
- **Test Case:** Check for appropriate error messages when required fields are not filled.
  - **Result:** [Pass]

## Overall Results

### Completed Features

- **User Authentication:** [Pass]
- **Profile Creation:** [Pass]

### Not Implemented Features

## Recommendations

Based on the testing results, it is recommended to focus on addressing any identified issues

## Conclusion

Upon successful completion of the acceptance tests and addressing any identified issues, the EventAmplify application will be considered ready for deployment. The acceptance test report will serve as documentation for the verification of implemented features and functionalities. as of now, the app is not ready for deployment.

## License

This project is licensed under the [MIT License](LICENSE).
