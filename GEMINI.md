# Gemini Project Analysis: scentdsoul-00

## Project Overview

This is a monorepo for the "scentdsoul" project, an e-commerce application. It consists of two main applications: a customer-facing mobile app and a web-based admin panel. The project is built with Angular and leverages Firebase for its backend services.

### Key Technologies:

*   **Frontend:**
    *   **Angular (v21):** The core framework for both applications.
    *   **Ionic (v8) & Capacitor (v8):** Used to build the cross-platform mobile application.
    *   **PrimeNG (v21) & Tailwind CSS (v4):** UI component libraries for building the user interface.
    *   **TypeScript:** The primary programming language.
*   **Backend:**
    *   **Firebase:** Used for the database (Firestore), serverless functions (Cloud Functions), and file storage (Cloud Storage).
*   **Monorepo Management:**
    *   **Angular CLI:** Used to manage the workspace, projects, and libraries.

### Architecture:

The project is structured as an Angular monorepo with the following key directories:

*   `projects/admin-panel`: The web-based administrative dashboard.
*   `projects/mobile-app`: The customer-facing mobile application.
*   `functions`: Contains the serverless backend logic for Firebase Cloud Functions.
*   `libs/shared-logic`: Intended for shared code between the applications (currently empty).

## Building and Running

### Root Project:

*   **Install Dependencies:** `npm install`
*   **Run Admin Panel:** `npm start` or `ng serve admin-panel`
*   **Run Mobile App:** `npm run ionic` or `ionic serve --project=mobile-app`
*   **Build:** `npm run build` or `ng build`
*   **Test:** `npm test`
*   **Lint:** `npm run lint`

### Firebase Functions:

*   **Navigate to functions directory:** `cd functions`
*   **Install Dependencies:** `npm install`
*   **Build:** `npm run build`
*   **Run Emulators:** `npm run serve`
*   **Deploy:** `npm run deploy`

## Development Conventions

*   **Coding Style:** The project uses ESLint for code linting, with configurations found in `.eslintrc.json`. The rules enforce a consistent coding style and help prevent common errors.
*   **Testing:** Unit tests are written with Karma and Jasmine. Test files are located alongside the source files, with a `.spec.ts` extension. The `package.json` file contains several scripts for running tests with different configurations.
*   **Standalone Components:** The project uses Angular's standalone components, which simplifies the architecture by reducing the need for NgModules.
*   **Firebase Integration:** The applications interact with Firebase services through the `@angular/fire` library. The `projects/admin-panel/src/app/services/firestore/data-service.ts` file provides a good example of how data is fetched and manipulated from Firestore.
