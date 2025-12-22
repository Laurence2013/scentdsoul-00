import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cardboard',
  templateUrl: './cardboard.page.html',
  styleUrls: ['./cardboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
	host: { 'collision-id': 'app-admin-cardboard' }
})
export class CardboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
