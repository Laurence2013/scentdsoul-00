import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, personCircleOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, CommonModule]
})
export class TabsPage implements OnInit {

  public constructor(){
		addIcons({homeOutline, personCircleOutline, settingsOutline})
	}
  public ngOnInit(){}
}
