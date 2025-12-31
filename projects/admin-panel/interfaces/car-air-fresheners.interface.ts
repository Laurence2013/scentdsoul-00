import { Timestamp } from '@angular/fire/firestore';
import { StorePrice } from './prices.interface';

export interface Brand {
	by_type: string;
	sub_type?: string;
	by_brand: string;
	by_scent: Scent[];
	price: StorePrice[];
	createdAt: Timestamp;
}
interface Scent {
	name: string;
	type: string;
	sub_type?: string;
}
