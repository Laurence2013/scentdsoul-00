import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, Timestamp } from '@angular/fire/firestore';

import { Observable, EMPTY, from, of } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { Brand, Scent } from '../../../interfaces/car-air-fresheners.interface';
import { Brands, Scents } from '../../../models/car-air-fresheners.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
	private firestore = inject(Firestore);
	private injector = inject(Injector);

	public getScentTypes00$(): Observable<any>{
		return runInInjectionContext(this.injector, () => {
			const getCAFs = collection(this.firestore, 'scentTypes');

			return collectionData(getCAFs, {idField: 'id'}) as Observable<any>;
		})
	};
	public getCarAirFresheners00$(): Observable<any>{
		return runInInjectionContext(this.injector, () => {
			const getCAFs = collection(this.firestore, 'brands');

			return collectionData(getCAFs, {idField: 'id'}) as Observable<any>;
		});
	};
	public addNewCarAirFreshener00$(payload00: Brands): Observable<any> {
		console.log(payload00);
		return runInInjectionContext(this.injector, () => {
			const cafCollection00 = collection(this.firestore, 'brands');
			const plainData = payload00.toPlainObj()

			return from(addDoc(cafCollection00, plainData)).pipe(map((docRef) => { return {idDoc: docRef.id}}))
		});
	}
}
