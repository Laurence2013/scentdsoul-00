import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-vent',
  templateUrl: './vent.page.html',
  styleUrls: ['./vent.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
	host: { 'collision-id': 'add-admin-vent' }
})
export class VentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
