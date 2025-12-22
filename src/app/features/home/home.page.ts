import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

import { ConnectFirestore } from '../../services/firestore/connect-firestore';
import { IntConnectFirestore } from '../../interface/firestore/connect-firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonList, IonItem, IonLabel]
})
export class HomePage implements OnInit {

	private connectFirestore = inject(ConnectFirestore);
	
	public data: IntConnectFirestore[] = [];

  public constructor(){}
  public ngOnInit(){
		this.connectFirestore.getCollectionData('cardboard').subscribe({
			next: res => {
				this.data = res;
				console.log('Succcess', res);
			},
			error: err => console.error('Firestore Error: ', err)
		});
	}
}
