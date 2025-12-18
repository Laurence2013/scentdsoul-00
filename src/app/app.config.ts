import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';

const firebaseConfig = {projectId: 'scentdsoul-00'};

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => {
      const firestore = getFirestore();
      // Only use emulator in development mode
      if (isDevMode()) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
        console.log('Connected to Firestore Emulator');
      }
      return firestore;
    }),
  ],
};
