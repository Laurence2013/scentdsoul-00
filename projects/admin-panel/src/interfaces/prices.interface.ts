import { Timestamp } from '@angular/fire/firestore';
import { SeasonalOffers } from './offers.interface';

export type PlatformType = 'Web_Store' | 'Instagram' | 'TikTok_Shop' | 'eBay'
export type CurrencyCode = 'USD' | 'GBP' | 'EUR';

export interface StorePrice {
	storePriceId: string;
	basePrice: number;
	platformPrices: PlatformPrice[];
	seasonalPrices?: SeasonalOffers[];
	createdAt: Timestamp;
}
export interface PlatformPrice {
	platformPriceId: string;
	listingPrice: number;
	platform: PlatformType;
	currencyCode: CurrencyCode;
	platformFeePercentage: number;
	fixedTransactionalFee: number;
	createdAt: Timestamp;
}
