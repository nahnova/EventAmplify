# EventAmplify
📱 EventAmplify: Event Experience and Management Solutions 
![LOGOv2](https://mirri.link/-yhLStB)

## Introduction


## Project Overview

### Project Demo Video
[Demo Video]()

### Assignment Description

## Features

- 📊 **Event Experience Analysis**: Tailoring events to resonate with student audiences by analyzing preferences.
- 🔍 **Data Management for Organizers**: Providing organizers with valuable data analytics for insights on attendance, preferences, and feedback.
- 🛡️ **Safety and Risk Assessment**: Focusing on safety by identifying and mitigating event-related risks.
- 🏢 **Venue Optimization**: Making the most of Nieuw Eyckholt's spaces, analyzing room availability and infrastructure needs.
- 📅 **Scheduling and Planning**: Ensuring comprehensive event planning and clear communication of schedules.
- 🧭 **Navigation and Signage**: Offering intuitive navigation and clear signage for effortless attendee movement.
- 📈 **Data Collection & GDPR Compliance**: Gathering event data while fully complying with GDPR for data protection.
- 🚗 **Parking and Accessibility**: Including parking solutions and accessibility in event planning.
- 📲 **User-Friendly App Interface**: Developing easy-to-use applications for independent user interaction, with support features.
- 👥 **Role Management and Support**: Defining roles from organizers to volunteers and providing necessary support.
- 🔑 **Diverse Login Options**: Supporting various secure login methods to cater to different user needs.
- 💳 **Monetization and Ticketing**: Implementing smooth ticketing and payment systems for paid events.


## Not Implemented Features:


## Completed Features:


## Design
[High Fidelity Design]()

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
### Gebruikersrequirements


### Systeemrequirements voor EventAmplify


### Use Cases:


## Usecase Desciptions
Hieronder volgt een uitbreiding van Use Case 1/11 en een sjabloon
### Use Case [Nummer]: [Titel]
| Use Case | UC[Nummer]: [Titel] |
|:----------------|:--------------------------|
| **Description** | [Korte beschrijving van wat de use case inhoudt] |
| **Actor** | [De primaire actor, meestal de gebruiker of het systeem] |
| **Trigger(s)** | [Wat initieert de use case?] |
| **Pre-Conditions** | [Voorwaarden voordat de use case begint] |
| **Post-Conditions** | [De staat van het systeem na voltooiing van de use case] |
| **Steps** | 
| **Actor (User)** | **System** |
| 1. [Actie door de gebruiker] | |
|  | 2. [Reactie van het systeem] |
| [Verdere stappen...] | |
| **Main Success Scenario** | [Beschrijving van het pad voor het succesvol afronden van de use case] |
| **Alternative Scenarios** | [Beschrijving van alternatieve paden] |
| **Extensions** |
| [Extensiepunt] | [Beschrijving van de extensie] |

## UML Diagrams 📊
Here are all the diagrams with added value for EventAmplify, all following UML specifications. With slight modifications to fit the project.

### Use Case Diagram:


### Class Diagram:


### Sequence Diagram:


### State Diagram:


### Activity Diagram:


## Data Model

### Users:
- **id**: Unique identifier for each user.
- **displayName**: User's name.
- **bio**: User's biography.
- **location**: Latitude and longitude of the user.
- **photoUrl**: User's photo.
- **timestamp**: Server timestamp of the user.

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
