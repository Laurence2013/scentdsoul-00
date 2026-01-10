import { Timestamp } from '@angular/fire/firestore';

import { Brands, Scents } from '../car-air-fresheners.model';
import { Prices } from '../prices.model';

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
			expect(brand.brand).toBe('');
			expect(brand.by_scent.length).toBe(1);
			expect(brand.by_scent[0] instanceof Scents).toBeTrue();
			expect(brand.createdAt instanceof Timestamp).toBeTrue();
		});
		it('should accept partial data in the constructor', () => {
			const customName = 'California scents';
			const brand = new Brands({brand: customName});

			expect(brand.brand).toBe(customName);
			expect(brand.brandId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
		});
		it('should overwrite default scent array if provided', () => {
			const mockScent = new Scents({name: 'California scents'});
			const brand = new Brands({by_scent: [mockScent]});

			expect(brand.by_scent.length).toBe(1);
			expect(brand.by_scent[0].name).toBe('California scents');
		});
		it('should create a full brand hierarchy', () => {
			const brand = new Brands({
				brand: 'California scent',
				by_scent: [new Scents({name: 'Cherry', scent_type: 'Bag'})]
			});
			expect(brand.brand).toBe('California scent');
			expect(brand.by_scent[0].name).toBe('Cherry');
			expect(brand.by_scent[0].scent_type).toBe('Bag');
		});
	});
	describe('Scents Class', () => {
		it('should initialise with default ScentTypes and SubScentTypes', () => {
			const scent = new Scents();

			expect(scent.scent_type).toBe('Cardboard');
			expect(scent.scent_sub_type).toBe('Hanging');
			});
		it('should correctly assign provided scent types', () => {
			const scent = new Scents({
				scent_type: 'Vent Clip',
				scent_sub_type: 'Stick'
			});
			expect(scent.scent_type).toBe('Vent Clip');
			expect(scent.scent_sub_type).toBe('Stick');
		});
		it('should test Scents instance of Price Class and default price', () => {
			const priceDefault = new Prices();
			const scent = new Scents({price: priceDefault});

			expect(scent.price instanceof Prices).toBeTrue();
			expect(scent.price?.basePrice).toBe(0.00);
			expect(scent.price?.basePrice).not.toBe(1.99);
		});
	});
});
