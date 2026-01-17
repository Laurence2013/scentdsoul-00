import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FirebaseApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator, initializeFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

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
			const app = inject(FirebaseApp);
			const firestore = getFirestore(app);
			//const firestore = initializeFirestore(app, {experimentalForceLongPolling: true});
			if(environment.useEmulators){
				console.log('Connecting to Firestore Emulator at 127.0.0.1:8080');
				connectFirestoreEmulator(firestore, '127.0.0.1', 8080)
			}
			return firestore;
		}),
		provideStorage(() => getStorage()),
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
