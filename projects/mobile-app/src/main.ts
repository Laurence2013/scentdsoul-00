import { provideZoneChangeDetection, isDevMode, inject } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { FirebaseApp, provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';

import { environment } from './environments/environment';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
		{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
		provideZoneChangeDetection({eventCoalescing: true}),
		provideIonicAngular(),
		provideRouter(routes, withPreloading(PreloadAllModules)),

		//Add Firebase Providers here
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => {
			const app = inject(FirebaseApp);
			const firestore = getFirestore(app);
      // Only use emulator in development mode
      if (isDevMode()) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
        console.log('Connected to Firestore Emulator');
      }
      return firestore;
		})
  ],
}).catch(err => console.log(err));
