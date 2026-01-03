import { TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Timestamp } from '@angular/fire/firestore';

import { DataService } from '../data-service';
import { createMockStorePrice } from './utils/test-utils';

import { Brand, Scent, ScentTypes, SubScentTypes } from '../../../../interfaces/car-air-fresheners.interface';
import { StorePrice } from '../../../../interfaces/prices.interface';

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
	it('should add a new C.A.F and return it with an ID', done => {
		const brand: Brand = ({
			brandId: crypto.randomUUID(),
			by_brand: 'California scent',
			by_scent: [],
			createdAt: Timestamp.now()
		});
		service.addNewCarAirFreshener00(brand).subscribe(result => {
			expect(result.brandId).toBeDefined();
			expect(result.brandId.length).toBeGreaterThan(0);
			expect(result.by_brand).toBe('California scent');
			expect(result.createdAt instanceof Timestamp).toBe(true);
			done();
		});
	});
	it('should add a new C.A.F and filling in the Scent object via Brand', done => {
		const brand: Brand = ({
			brandId: crypto.randomUUID(),
			by_brand: 'California scent',
			by_scent: [],
			createdAt: Timestamp.now()
		});
	});
});
