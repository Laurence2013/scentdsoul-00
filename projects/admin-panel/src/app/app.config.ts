import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => {
			const firestore = getFirestore();
			if(environment.useEmulators){
				connectFirestoreEmulator(firestore, 'localhost', 8080)
			}
			return firestore;
		})
  ]
};
