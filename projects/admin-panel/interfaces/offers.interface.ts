import { Timestamp } from '@angular/fire/firestore';

export type AdjustmentType = 'FIXED' | 'PERCENTAGE';

export interface Offers {}
export interface DiscountOffers {}
export interface SpecialOccassionOffers {}
export interface SeasonalOffers {
	id?: string;
	seasonName: string;
	description: string;
	adjustmentType: AdjustmentType;
	adjustmentValue: number;
	startDate: Date;
	endDate: Date;
	createdAt: Timestamp;
}
