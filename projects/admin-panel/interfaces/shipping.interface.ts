import { Timestamp } from '@angular/fire/firestore';

export type ShippingCategory = 'LETTER' | 'LARGE_LETTER' | 'SMALL_PARCEL' | 'MEDIUM_PARCEL' | 'PADDED_ENVELOPE' | 'CUSTOM_BOX';
export type CarrierName = 'ROYAL_MAIL' | 'EVRI' | 'DPD' | 'UPS' | 'FEDEX';
export type DeliverySpeed = 'NEXT_DAY' | 'STANDARD' | 'ECONOMY' | 'EXPRESS';

export interface Shipping {
	id?: string;
	carrier: CarrierName;
	serviceName: string // e.g., "Tracked 48", "Standard International"
	speed: DeliverySpeed;
	isTracked: boolean;
	vatRate?: boolean;
	shipping:  ShippingCategory;
	createdAt: Timestamp;
}
