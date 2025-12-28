import { Timestamp } from '@angular/fire/firestore';

export interface CarAirFreshenersModel {
	id: number;
	name: string;
	another_name: string;
	other_name?: string;
	createdAt: Timestamp;
}
