# Admin Panel (`projects/admin-panel`)

This project is the web-based administrative dashboard for the scentdsoul e-commerce application.

## Key Technologies

*   **Angular (v21):** The core framework for the application.
*   **PrimeNG (v21) & Tailwind CSS (v4):** UI component libraries for building the user interface.
*   **TypeScript:** The primary programming language.
*   **Standalone Components:** The project uses Angular's standalone components architecture.

## Building and Running

*   **Serve:** `ng serve admin-panel`
*   **Build:** `ng build admin-panel`
*   **Test:** `ng test admin-panel`

## Architecture

*   **Components:** Located in `src/app/components`. These are standalone components.
*   **Services:**
    *   `DataService`: Handles Firestore data operations. Located in `src/app/services/firestore/data-service.ts`.
    *   `StorageService`: Handles Firebase Storage operations. Located in `src/app/services/firestore/storage-service.ts`.
*   **Routing:** Defined in `src/app/app.routes.ts`.
*   **Configuration:** Application providers, including Firebase and PrimeNG, are configured in `src/app/app.config.ts`.
*   **Interfaces:** Data model interfaces are defined in `src/interfaces`.
*   **Models:** Data models with methods are defined in `src/models`.

## Conventions

*   **UI:** Use PrimeNG components for UI elements, styled with Tailwind CSS where necessary.
*   **State Management:** State is managed reactively using RxJS within services and components.
*   **Firebase:** Interact with Firebase services through the provided `DataService` and `StorageService`.
