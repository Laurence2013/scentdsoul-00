import { Timestamp } from '@angular/fire/firestore';
import { StorePrice } from './prices.interface';

export type ScentTypes = 'Cardboard' | 'Vent Clip' | 'Spray' | 'Plug-in' | 'Bag' | 
													'Oil Diffuser' | 'Bead Sachets' | 'Under-seat Blocks' | 'Electronic Ioniser';
export type SubScentTypes = 'Hanging' | 'Stick' |'Electric Diffuser' | 'Pouch';

export interface Brand {
	brand_id: string;
	by_type: string;
	sub_type?: string;
	by_brand: string;
	by_scent: Scent[];
	price: StorePrice[];
	createdAt: Timestamp;
}
export interface Scent {
	scent_id: string;
	name: string;
	scents: ScentTypes;
	sub_type?: SubScentTypes;
}
