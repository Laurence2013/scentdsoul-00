import { Timestamp } from '@angular/fire/firestore';

export type PlatformTypes = 'Own_Store | Instagram | TikTok | eBay'
export type CurrencyCode = 'USD' | 'GBP' | 'EUR';

export interface StorePrice {
	id?: string;
	price: number;
	platformPrices: PlatformPrices[];
	seasonalPrices?: SeasonalPrices[];
	createdAt: Timestamp;
}
export interface PlatformPrices {
	id?: string;
	listingPrice: number;
	plaformType: PlatformTypes;
	currecyCode: CurrencyCode;
	platformFeePercentage: number;
	fixedTransactionalFee: number;
	createdAt: Timestamp;
}
export interface SeasonalPrices {
	id?: string;
	createdAt: Timestamp;
}
