import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class HomePage implements OnInit {

	private firestore = inject(Firestore);

  public constructor(){}
  public ngOnInit(){}
}
