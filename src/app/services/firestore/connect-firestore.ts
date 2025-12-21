import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { Observable, of, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConnectFirestore {
	private firestore = inject(Firestore);

	public constructor(){}
	public getCollectionData(collectionName: string): Observable<any[]>{
		const colRef = collection(this.firestore, collectionName);
		return collectionData(colRef, { idField: 'id' }).pipe(tap(_ => console.log(`Data from ${collectionName}`)));
	}
}
