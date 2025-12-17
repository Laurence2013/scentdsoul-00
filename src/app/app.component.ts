import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { menuOutline, menuSharp } from 'ionicons/icons';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonMenuButton, IonButtons,
	IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
	standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonButtons,
		IonTitle, IonContent, IonList, IonItem, IonMenuToggle, IonMenuButton, RouterLink],
})
export class AppComponent {
  public constructor(){
		addIcons({ menuOutline, menuSharp });
	}
}
