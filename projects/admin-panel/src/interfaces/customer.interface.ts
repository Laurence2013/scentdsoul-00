import { Timestamp } from '@angular/fire/firestore';
import { ShippingAddress } from './shipping.interface';
import { ScentTypes } from './car-air-fresheners.interface';
import { PlatformType } from './prices.interface';

export type Status = 'PENDING' | 'SHIPPED' | 'DELIVERED';

export interface CustomerInfo {
	customerId: string;
	personalInfo: {
		firstName: string;
		lastName: string;
		phone?: string;
		email: string;
	};
	address: ShippingAddress;
	createdAt: Timestamp;
}
export interface PurchasedItem {
	purchasedItemId: string;
	brandName: string;
	scentName: string;
	scentType: ScentTypes;
	quantity: number;
	priceAtPurchase: string;
	boughtAt: Timestamp;
}
export interface CustomerOrder {
	customerOrderId: string;
	items: PurchasedItem[];
	totalPrice: string;
	salePlatform: PlatformType;
	shippingId?: string;
	status: Status;
	createdAt: Timestamp;
}
