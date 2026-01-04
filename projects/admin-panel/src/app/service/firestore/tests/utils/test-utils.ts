import { Timestamp } from '@angular/fire/firestore';

import { StorePrice } from '../../../../../interfaces/prices.interface';
import { Scent, ScentTypes, SubScentTypes } from '../../../../../interfaces/car-air-fresheners.interface';

export function createMockStorePrice(overrides: Partial<StorePrice> = {}): StorePrice{
	return {
		storePriceId: crypto.randomUUID(),
		basePrice: 0.00,
		platformPrices: [],
		createdAt: Timestamp.now(),
		...overrides
	}
}
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
}
