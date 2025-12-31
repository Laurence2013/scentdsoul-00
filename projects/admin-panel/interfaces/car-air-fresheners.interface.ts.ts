import { Timestamp } from '@angular/fire/firestore';

export interface Brand {
	by_type: string;
	sub_type?: string;
	by_brand: string;
	by_scent: Scent[];
	createdAt: Timestamp;
}
interface Scent {
	name: string;
	type: string;
	sub_type?: string;
}
