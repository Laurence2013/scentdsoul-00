import { Injectable, inject, Injector, runInInjectionContext } from '@angular/core';
import { Firestore, collection, collectionData, CollectionReference } from '@angular/fire/firestore';

import { Observable, of, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IntConnectFirestore } from '../../interface/firestore/connect-firestore';

@Injectable({
  providedIn: 'root',
})
export class ConnectFirestore {
	private firestore = inject(Firestore);
	private injector = inject(Injector);

	public constructor(){}
	public getCollectionData(collectionName: string): Observable<IntConnectFirestore[]>{
		return runInInjectionContext(this.injector, () => {
			const colRef = collection(this.firestore, collectionName) as CollectionReference<IntConnectFirestore>;

			return collectionData(colRef, { idField: 'id' }).pipe(tap(_ => console.log(`Data from ${collectionName}`)));
		});
	}
}
