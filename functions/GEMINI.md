# Firebase Functions (`functions`)

This directory contains the serverless backend logic for the scentdsoul application, using Firebase Cloud Functions.

## Key Technologies

*   **Node.js:** The runtime for the functions.
*   **TypeScript:** The primary programming language.
*   **Firebase Admin SDK:** Used to interact with Firebase services from the backend.

## Building and Deploying

These commands should be run from within the `functions` directory.

*   **Install Dependencies:** `npm install`
*   **Build:** `npm run build`
*   **Serve Locally (with emulators):** `npm run serve`
*   **Deploy:** `npm run deploy`

## Architecture

*   **Entry Point:** All functions are defined and exported from `src/index.ts`.
*   **Dependencies:** Backend dependencies are managed separately in `functions/package.json`.

## Conventions

*   **Function Naming:** Follow a consistent naming convention for functions (e.g., `onUserCreate`, `httpRequestName`).
*   **Error Handling:** Implement robust error handling and logging for all functions.
