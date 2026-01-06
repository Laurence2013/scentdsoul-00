import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, Timestamp } from '@angular/fire/firestore';

import { Observable, EMPTY, from, of } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { Brand, Scent } from '../../../interfaces/car-air-fresheners.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
	private firestore = inject(Firestore);
	private injector = inject(Injector);

	public getScents$(): Observable<Brand[]>{
		return runInInjectionContext(this.injector, () => {
			const getCAFs = collection(this.firestore, 'scents')
			return collectionData(getCAFs, {idField: 'id'}) as Observable<Brand[]>;
		})
	};
	public getCarAirFresheners$(): Observable<any>{
		return of({name: 'test'})
	};
	public addNewCarAirFreshener00(item00: Brand): Observable<Brand> {
		return runInInjectionContext(this.injector, () => {
			const cafCollection00 = collection(this.firestore, 'car-air-fresheners');

			return from(addDoc(cafCollection00, item00)).pipe(
				map((docRef) => { return {...item00, id: docRef.id} as Brand }))
		});
	}
}
