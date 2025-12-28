import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { menuOutline, menuSharp } from 'ionicons/icons';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonMenuButton, IonButtons,
	IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle } from '@ionic/angular/standalone';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
	standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonButtons,
		IonTitle, IonContent, IonList, IonItem, IonMenuToggle, IonMenuButton, RouterLink],
})
export class AppComponent implements OnInit {
  public constructor(){
		addIcons({ menuOutline, menuSharp });
	}
	public ngOnInit(){
		console.log('Attempting to get project: ', environment.firebase.projectId);
	}
}
