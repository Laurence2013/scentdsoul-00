import { Timestamp } from '@angular/fire/firestore';

import { StorePrice, PlatformPrice, PlatformType, CurrencyCode } from '../../../../../interfaces/prices.interface';
import { Scent, ScentTypes, SubScentTypes } from '../../../../../interfaces/car-air-fresheners.interface';

export function createMockPlatformPrice(overrides: Partial<PlatformPrice> = {}): PlatformPrice{
	const defaultPlatformPrice: PlatformPrice = {
		platformPriceId: crypto.randomUUID(),
		listingPrice: 0.00,
		platform: 'Web_Store',
		currencyCode: 'GBP',
		platformFeePercentage: 0.00,
		fixedTransactionalFee: 0.00,
		createdAt: Timestamp.now(),
		...overrides
	}
	return Object.keys(overrides).length > 0 ? {...defaultPlatformPrice, ...overrides} : defaultPlatformPrice;
};
export function createMockStorePrice(overrides: Partial<StorePrice> = {}): StorePrice{
	const defaultStorePrice: StorePrice = {
		storePriceId: crypto.randomUUID(),
		basePrice: 0.00,
		platformPrices: [createMockPlatformPrice()],
		createdAt: Timestamp.now(),
		...overrides
	};
	return Object.keys(overrides).length > 0 ? {...defaultStorePrice, ...overrides} : defaultStorePrice;
};
export function createMockScents(overrides: Partial<Scent>[] = []): Scent[]{
	const defaultScent: Scent = {
		scentId: crypto.randomUUID(),
		name: 'Some scent',
		description: 'Some description',
		scent_type: 'Cardboard',
		price: createMockStorePrice(),
		...overrides
	};
	return overrides.length > 0 ? overrides.map(obj => ({...defaultScent, ...obj} as Scent)) : [defaultScent]
};
