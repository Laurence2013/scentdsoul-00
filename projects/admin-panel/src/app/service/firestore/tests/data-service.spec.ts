import { TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';

import { DataService } from '../data-service';

import { Brand, Scent, ScentTypes, SubScentTypes } from '../../../../interfaces/car-air-fresheners.interface';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
			providers: [
				DataService,
				provideFirebaseApp(() => initializeApp({ projectId: 'scentdsoul-demo'})),
				provideFirestore(() => {
					const firestore = getFirestore();
					connectFirestoreEmulator(firestore, 'localhost', 8080);
					return firestore;
				}),
			]
		});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
