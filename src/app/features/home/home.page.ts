import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { ConnectFirestore } from '../../services/firestore/connect-firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class HomePage implements OnInit {

	private connectFirestore = inject(ConnectFirestore);

  public constructor(){}
  public ngOnInit(){
		this.connectFirestore.getCollectionData('cardboard').subscribe(data => console.log(data));
	}
}
