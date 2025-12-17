import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-scents',
  templateUrl: './scents.page.html',
  styleUrls: ['./scents.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton]
})
export class ScentsPage implements OnInit {

  public constructor(){}
  public ngOnInit(){}
}
