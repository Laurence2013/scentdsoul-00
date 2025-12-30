import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, Timestamp } from '@angular/fire/firestore';

import { Observable, EMPTY, from } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

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
	public addNewCarAirFreshener00(item00: CarAirFreshenersModel): Observable<CarAirFreshenersModel> {
		return runInInjectionContext(this.injector, () => {
			const cafCollection00 = collection(this.firestore, 'car-air-fresheners');

			return from(addDoc(cafCollection00, item00)).pipe(
				map((docRef) => { return {...item00, id: docRef.id} as CarAirFreshenersModel }))
		});
	}
}
