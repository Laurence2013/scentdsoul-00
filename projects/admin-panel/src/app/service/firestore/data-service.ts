import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, Timestamp } from '@angular/fire/firestore';

import { Observable, EMPTY, from } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { CarAirFreshenersModel } from '../../../../models/car-air-fresheners.model';

import { CreateCarAirFreshener } from '../../components/add-freshener-form/add-freshener-form.component';

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
	public addNewCarAirFreshener(newItem00$: Observable<CreateCarAirFreshener>): Observable<CarAirFreshenersModel> {
		return runInInjectionContext(this.injector, () => {
			const cafCollection = collection(this.firestore, 'car-air-fresheners');
			const newItem: Observable<CarAirFreshenersModel> = newItem00$.pipe(
				filter(formData => !!formData),
				switchMap((formData) => runInInjectionContext(this.injector, () => 
					from(addDoc(cafCollection, formData)).pipe(
					map((docRef) => {
						const numericId = parseInt(docRef.id, 10)
						return {
							...formData,
							id: isNaN(numericId) ? 0 : numericId
						} as CarAirFreshenersModel
					})
				))));
			return newItem;
		})
	}
}
