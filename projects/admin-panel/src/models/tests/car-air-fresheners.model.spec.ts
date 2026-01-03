import { Timestamp } from '@angular/fire/firestore';

import { Brands, Scents } from '../car-air-fresheners.model';

describe('Car Air Freshener Models', () => {
	describe('Brands and Scents Class', () => {
		it('should create an instance of Brands object', () => {
			expect(new Brands()).toBeTruthy();
		});
		it('should create an instance Scents object', () => {
			expect(new Scents()).toBeTruthy();
		});
	});
	describe('Brands Class', () => {
		it('should create an instance with default values', () => {
			const brand = new Brands();

			expect(brand).toBeTruthy();
			expect(brand.brandId).toBeDefined();
			expect(brand.by_brand).toBe('');
			expect(brand.by_scent.length).toBe(1);
			expect(brand.by_scent[0] instanceof Scents).toBeTrue();
			expect(brand.createdAt instanceof Timestamp).toBeTrue();
		});
		it('should accept partial data in the constructor', () => {
			const customName = 'California scents';
			const brand = new Brands({by_brand: customName});

			expect(brand.by_brand).toBe(customName);
			expect(brand.brandId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
		});
		it('should overwrite default scent array if provided', () => {
			const mockScent = new Scents({name: 'California scents'});
			const brand = new Brands({by_scent: [mockScent]});

			expect(brand.by_scent.length).toBe(1);
			expect(brand.by_scent[0].name).toBe('California scents');
		});
	});
});
