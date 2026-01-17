import { Timestamp } from '@angular/fire/firestore';
import { StorePrice } from './prices.interface';

export type ScentTypes = 'Cardboard' | 'Vent Clip' | 'Spray' | 'Plug-in' | 'Bag' | 'Tin' |
													'Oil Diffuser' | 'Bead Sachets' | 'Under-seat Blocks' | 'Electronic Ioniser';
export type SubScentTypes = 'Not Needed' | 'Hanging' | 'Stick' |'Electric Diffuser' | 'Pouch';

export interface Brand {
	documentId?: string;
	brandId: string;
	brand: string;
	by_scent: Scent[];
	image_name: string;
	createdAt: Timestamp;
}
export interface Scent {
	scentId: string;
	name: string;
	description: string;
	scent_type: ScentTypes;
	scent_sub_type?: SubScentTypes;
	price: number;
	price_details?: StorePrice;
}
