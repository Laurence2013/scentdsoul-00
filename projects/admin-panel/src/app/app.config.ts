import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { environment } from '../environments/environment';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
		provideAnimationsAsync(),
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => {
			const firestore = getFirestore();
			if(environment.useEmulators){
				connectFirestoreEmulator(firestore, 'localhost', 8080)
			}
			return firestore;
		}),
		providePrimeNG({ 
			theme: { 
				preset: Aura,
				options: {
					darkModeSelector: '.my-app-dark',
					cssLayer: {
						name: 'primeng',
						order: 'theme, base, primeng, utilities'
						//order: 'tailwind-base, ionic, primeng, tailwind-utilities'
					}
				}
			},
			ripple: true
		})
  ]
};
