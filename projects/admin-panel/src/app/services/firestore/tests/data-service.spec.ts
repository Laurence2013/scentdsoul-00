import { TestBed } from '@angular/core/testing';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Timestamp } from '@angular/fire/firestore';

import { DataService } from '../data-service';
import { createMockStorePrice, createMockScents, createMockPlatformPrice } from './utils/test-utils';

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
	it('should add a new C.A.F with an empty by_scent array, and return with an ID', done => {
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
	it('should add a new C.A.F, returning by_scent with its defaults via Brand, and retun with ID', done => {
		const brand: Brand = ({
			brandId: crypto.randomUUID(),
			by_brand: 'California scent',
			by_scent: createMockScents(),
			createdAt: Timestamp.now()
		});
		service.addNewCarAirFreshener00(brand).subscribe(result => {
			expect(result.by_brand).toBe('California scent');

			expect(Array.isArray(result.by_scent)).toBe(true);
			expect(result.by_scent.length).toBeGreaterThan(0);
			expect(result.by_scent).toBeDefined();

			expect(result.by_scent[0].name).toBe('Some scent');
			expect(result.by_scent[0].name).not.toBe('Another scent');
			expect(result.by_scent[0].description).toBe('Some description');
			expect(result.by_scent[0].scent_type).toBe('Cardboard');
			expect(result.by_scent[0].price.basePrice).toBe(0.00);
			expect(result.by_scent[0].price.basePrice).not.toBe(1.99);
			expect(result.by_scent[0].price.platformPrices).toBeDefined();

			expect(result.createdAt instanceof Timestamp).toBe(true);
			done();
		});
	});
	it('should add a new C.A.F, filling in by_scent via Brand -> Scent, and retun with ID', done => {
		const brand: Brand = ({
			brandId: crypto.randomUUID(),
			by_brand: 'California scent',
			by_scent: createMockScents([{
				name: 'Corondar Cherry',
				description: 'New smell of Corondar Cherry',
				scent_type: 'Tin',
			}]),
			createdAt: Timestamp.now()
		});
		service.addNewCarAirFreshener00(brand).subscribe(result => {
			expect(result.by_brand).toBe('California scent');

			expect(Array.isArray(result.by_scent)).toBe(true);
			expect(result.by_scent.length).toBeGreaterThan(0);
			expect(result.by_scent).toBeDefined();

			expect(result.by_scent[0].name).toBe('Corondar Cherry');
			expect(result.by_scent[0].name).not.toBe('Some scent');
			expect(result.by_scent[0].description).toBe('New smell of Corondar Cherry');
			expect(result.by_scent[0].scent_type).toBe('Tin');
			expect(result.by_scent[0].price.basePrice).toBe(0.00);
			expect(result.by_scent[0].price.basePrice).not.toBe(1.99);

			expect(result.createdAt instanceof Timestamp).toBe(true);
			done();
		});
	});
	it('should add new C.A.F, adding new basePrice via Brand -> Scent -> StorePrice, and return with ID', done => {
		const brand: Brand = ({
			brandId: crypto.randomUUID(),
			by_brand: 'California scent',
			by_scent: createMockScents([{
				name: 'Corondar Cherry',
				description: 'New smell of Corondar Cherry',
				scent_type: 'Tin',
				price: createMockStorePrice({basePrice: 1.99})
			}]),
			createdAt: Timestamp.now()
		});
		service.addNewCarAirFreshener00(brand).subscribe(result => {
			expect(result.by_brand).toBe('California scent');

			expect(Array.isArray(result.by_scent)).toBe(true);
			expect(result.by_scent.length).toBeGreaterThan(0);
			expect(result.by_scent).toBeDefined();

			expect(result.by_scent[0].name).toBe('Corondar Cherry');
			expect(result.by_scent[0].name).not.toBe('Some scent');
			expect(result.by_scent[0].description).toBe('New smell of Corondar Cherry');
			expect(result.by_scent[0].scent_type).toBe('Tin');
			expect(result.by_scent[0].price.basePrice).toBe(1.99);
			expect(result.by_scent[0].price.basePrice).not.toBe(0.00);

			done();
		});
	});
	it('should add new C.A.F, get defaults via Brand -> Scent -> StorePrice -> PlatformPrice, and return with ID', done => {
		const brand: Brand = ({
			brandId: crypto.randomUUID(),
			by_brand: 'California scent',
			by_scent: createMockScents([{
				name: 'Corondar Cherry',
				description: 'New smell of Corondar Cherry',
				scent_type: 'Tin'
			}]),
			createdAt: Timestamp.now()
		});
		service.addNewCarAirFreshener00(brand).subscribe(result => {
			expect(result.by_brand).toBe('California scent');

			expect(Array.isArray(result.by_scent)).toBe(true);
			expect(result.by_scent.length).toBeGreaterThan(0);
			expect(result.by_scent).toBeDefined();

			expect(result.by_scent[0].price.platformPrices[0].listingPrice).toBe(0.00);
			expect(result.by_scent[0].price.platformPrices[0].listingPrice).not.toBe(1.99);
			expect(result.by_scent[0].price.platformPrices[0].platform).toBe('Web_Store');
			expect(result.by_scent[0].price.platformPrices[0].currencyCode).toBe('GBP');
			done();
		});
	});
	it('should add new C.A.F, add custom data via Brand -> Scent -> StorePrice -> PlatformPrice, and return with ID', done => {
		const brand: Brand = ({
			brandId: crypto.randomUUID(),
			by_brand: 'California scent',
			by_scent: createMockScents([{
				name: 'Corondar Cherry',
				description: 'New smell of Corondar Cherry',
				scent_type: 'Tin',
				price: createMockStorePrice({
					platformPrices: [createMockPlatformPrice({
						listingPrice: 1.99,
						currencyCode: 'USD'
					})]
				})
			}]),
			createdAt: Timestamp.now()
		});
		service.addNewCarAirFreshener00(brand).subscribe(result => {
			expect(result.by_brand).toBe('California scent');

			expect(Array.isArray(result.by_scent)).toBe(true);
			expect(result.by_scent.length).toBeGreaterThan(0);
			expect(result.by_scent).toBeDefined();
			expect(result.by_scent[0].price).toBeDefined();

			expect(result.by_scent[0].price.platformPrices[0].listingPrice).toBe(1.99);
			expect(result.by_scent[0].price.platformPrices[0].listingPrice).not.toBe(0.00);
			expect(result.by_scent[0].price.platformPrices[0].currencyCode).toBe('USD');
			expect(result.by_scent[0].price.platformPrices[0].currencyCode).not.toBe('GBP');
			done();
		});
	})
});
