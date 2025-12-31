import { Timestamp } from '@angular/fire/firestore';
import { ShippingAddress } from './shipping.interface';
import { ScentTypes } from './car-air-fresheners.interface';

export type SalesPlatform = 'Web_Store' | 'Instagram' | 'TikTok' | 'eBay'

export interface CustomerInterface {
	id?: string;
	totalPrice: string;
	personalInfo: {
		firstName: string;
		lastName: string;
		phone?: string;
		email: string;
	};
	salesPlatform: SalesPlatform;
	address: ShippingAddress;
	createdAt: Timestamp;
}
export interface PurchasedItem {
	brandName: string;
	scentName: string;
	scentType: ScentTypes;
	quantity: number;
	priceAtPurchase: string;
	boughtAt: Timestamp;
}
