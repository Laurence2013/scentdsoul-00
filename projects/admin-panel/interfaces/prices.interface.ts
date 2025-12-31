import { Timestamp } from '@angular/fire/firestore';

export type PlatformType = 'Own_Store' | 'Instagram' | 'TikTok' | 'eBay'
export type CurrencyCode = 'USD' | 'GBP' | 'EUR';
export type AdjustmentType = 'FIXED' | 'PERCENTAGE';

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
	platformType: PlatformType;
	currencyCode: CurrencyCode;
	platformFeePercentage: number;
	fixedTransactionalFee: number;
	createdAt: Timestamp;
}
export interface SeasonalPrices {
	id?: string;
	seasonName: string;
	description: string;
	adjustmentType: AdjustmentType;
	startDate: Date;
	endDate: Date;
	createdAt: Timestamp;
}
