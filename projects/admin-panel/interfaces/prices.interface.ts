import { Timestamp } from '@angular/fire/firestore';
import { SeasonalOffers } from './offers.interface';

export type PlatformType = 'Web_Store' | 'Instagram' | 'TikTok' | 'eBay'
export type CurrencyCode = 'USD' | 'GBP' | 'EUR';

export interface StorePrice {
	id?: string;
	basePrice: number;
	platformPrices: PlatformPrice[];
	seasonalPrices?: SeasonalOffers[];
	createdAt: Timestamp;
}
export interface PlatformPrice {
	id?: string;
	listingPrice: number;
	platform: PlatformType;
	currencyCode: CurrencyCode;
	platformFeePercentage: number;
	fixedTransactionalFee: number;
	createdAt: Timestamp;
}
