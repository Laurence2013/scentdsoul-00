import { Timestamp } from '@angular/fire/firestore';
import { StorePrice } from './prices.interface';

export type ScentTypes = 'Cardboard' | 'Vent Clip' | 'Spray' | 'Plug-in' | 'Bag' | 
													'Oil Diffuser' | 'Bead Sachets' | 'Under-seat Blocks' | 'Electronic Ioniser';
export type SubScentTypes = 'Hanging' | 'Stick' |'Electric Diffuser' | 'Pouch';

export interface Brand {
	brandId: string;
	by_type: string;
	sub_type?: string;
	by_brand: string;
	by_scent: Scent[];
	createdAt: Timestamp;
}
export interface Scent {
	scentId: string;
	name: string;
	description: string;
	scents: ScentTypes;
	sub_type?: SubScentTypes;
	price: StorePrice;
}
