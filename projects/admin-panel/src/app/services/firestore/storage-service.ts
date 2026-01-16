import { Injectable, inject } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

import { Observable, from, EMPTY } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
	private readonly storage = inject(Storage);

	public uploadImage(file: File): Observable<string>{
		const filePath = `images/${Date.now()}_${file.name}`;
		const storageRef = ref(this.storage, filePath);
		const uploadTask = uploadBytes(storageRef, file);

		return from(uploadBytes(storageRef, file)).pipe(
			switchMap(result => from(getDownloadURL(result.ref)))
		);
	}
}
