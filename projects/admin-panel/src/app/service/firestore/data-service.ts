import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, Timestamp } from '@angular/fire/firestore';

import { Observable, EMPTY } from 'rxjs';

import { CarAirFreshenersModel } from '../../../../models/car-air-fresheners.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
	private firestore = inject(Firestore);
	private injector = inject(Injector);

	public getCarAirFresheners(): Observable<CarAirFreshenersModel[]>{
		return runInInjectionContext(this.injector, () => {
			const getCAFs = collection(this.firestore, 'car-air-fresheners')
			return collectionData(getCAFs, {idField: 'id'}) as Observable<CarAirFreshenersModel[]>;
		})
	}
	public addNewCarAirFreshener(newItem00$: Observable<CarAirFreshenersModel>){
		newItem00$.subscribe(console.log);
		return EMPTY;
	}
}
