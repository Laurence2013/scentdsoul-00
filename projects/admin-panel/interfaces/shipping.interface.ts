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
	isInternational: boolean;
	vatRate?: number;
	category: ShippingCategory;
	metadata?: RoyalMailMetadata | FedExMetadata | Record<string, any>;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};
export interface RoyalMailMetadata {
	serviceCode: string;
	contractId: string;
};
export interface FedExMetadata {
	fedexZone: number;
}
export interface ShippingAddress {
	houseNumber: number;
	firstLineOfAddress: string;
	secondLineOfAddress: string;
	thirdLineOfAddress: string;
	postcode: string;
	county: string;
	createdAt: Timestamp;
}
