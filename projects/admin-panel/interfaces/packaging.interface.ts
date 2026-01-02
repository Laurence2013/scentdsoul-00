import { Timestamp } from '@angular/fire/firestore';
import { PlatformType } from './prices.interface';

export type WeightUnit = 'g' | 'kg' | 'oz';
export type DimensionUnit = 'cm' | 'in';

export interface Packaging {
	packagingId: string;
	description?: string;
	labellingCost: number;
	materialCost: number;
	otherCosts: number;
	otherCostDesc?: string;
	dimensions: {
		length: number;
		width: number;
		height: number;
		unit: DimensionUnit;
	};
	weight: {
		value: number;
		unit: WeightUnit;
	}
	platformRules?: {
		platform: PlatformType;
		additionalWeight: number;
		packagingSurcharge: number;
		description?: string;
	}[];
	createdAt: Timestamp;
}
