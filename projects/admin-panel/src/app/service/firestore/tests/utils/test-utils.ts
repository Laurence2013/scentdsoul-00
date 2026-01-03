import { Timestamp } from '@angular/fire/firestore';

import { StorePrice } from '../../../../../interfaces/prices.interface';
import { Scent } from '../../../../../interfaces/car-air-fresheners.interface';

export function createMockStorePrice(overrides: Partial<StorePrice> = {}): StorePrice{
	return {
		storePriceId: crypto.randomUUID(),
		basePrice: 0.00,
		platformPrices: [],
		createdAt: Timestamp.now(),
		...overrides
	}
}
export function createMockScents(overrides: Partial<Scent> = {}): Scent{
	return {
		scentId: crypto.randomUUID(),
		price: {} as StorePrice,
		...overrides
	}
}
