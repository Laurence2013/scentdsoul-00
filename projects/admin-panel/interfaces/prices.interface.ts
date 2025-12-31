import { Timestamp } from '@angular/fire/firestore';

export type PlatformType = 'Own_Store' | 'Instagram' | 'TikTok' | 'eBay'
export type CurrencyCode = 'USD' | 'GBP' | 'EUR';
export type AdjustmentType = 'FIXED' | 'PERCENTAGE';

export interface StorePrice {
	id?: string;
	basePrice: number;
	platformPrices: PlatformPrice[];
	seasonalPrices?: SeasonalPrice[];
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
export interface SeasonalPrice {
	id?: string;
	seasonName: string;
	description: string;
	adjustmentType: AdjustmentType;
	adjustmentValue: number;
	startDate: Date;
	endDate: Date;
	createdAt: Timestamp;
}
