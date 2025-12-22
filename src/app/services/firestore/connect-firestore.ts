import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, CollectionReference } from '@angular/fire/firestore';

import { Observable, of, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IntConnectFirestore } from '../../interface/firestore/connect-firestore';

@Injectable({
  providedIn: 'root',
})
export class ConnectFirestore {
	private firestore = inject(Firestore);

	public constructor(){}
	public getCollectionData(collectionName: string): Observable<IntConnectFirestore[]>{
		const colRef = collection(this.firestore, collectionName) as CollectionReference;
		return collectionData<IntConnectFirestore>(colRef, { idField: 'id' }).pipe(tap(_ => console.log(`Data from ${collectionName}`)));
	}
}
