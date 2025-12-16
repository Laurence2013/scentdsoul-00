import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, diamondOutline, personOutline} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, CommonModule]
})
export class TabsPage implements OnInit {
	private router = inject(Router);

  public constructor(){
		addIcons({homeOutline, diamondOutline, personOutline})
	}
  public ngOnInit(){}
	public goToScents(){
		this.router.navigate(['/scents']);
	}
	public goToPersonalised(){}
}
