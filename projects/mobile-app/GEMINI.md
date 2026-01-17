# Mobile App (`projects/mobile-app`)

This project is the customer-facing mobile application for scentdsoul, built with Ionic and Capacitor.

## Key Technologies

*   **Angular (v21):** The core framework for the application.
*   **Ionic (v8) & Capacitor (v8):** For building the cross-platform mobile application.
*   **TypeScript:** The primary programming language.

## Building and Running

*   **Serve:** `ionic serve --project=mobile-app`
*   **Build:** `ng build mobile-app` (This will build the web assets. For running on a device, you'll use Capacitor commands.)
*   **Capacitor:**
    *   `npx cap sync`: Syncs the web assets with the native projects.
    *   `npx cap open ios`: Opens the project in Xcode.
    *   `npx cap open android`: Opens the project in Android Studio.

## Architecture

*   **Pages & Components:** The app is structured into pages located in `src/app/features`.
*   **Routing:** The main routing is defined in `src/app/app.routes.ts`. The tabs layout is in `src/app/features/tabs`.
*   **Services:** Services are located in `src/app/services`.
*   **Theme:** Global styles and theme variables are in `src/theme/`.

## Conventions

*   **UI:** Use Ionic components for the user interface.
*   **Native Features:** Access native device features through Capacitor APIs.
