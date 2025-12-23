import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-under-seat',
  templateUrl: './under-seat.page.html',
  styleUrls: ['./under-seat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
	host: { 'collision-id': 'app-admin-under-seat' }
})
export class UnderSeatPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
