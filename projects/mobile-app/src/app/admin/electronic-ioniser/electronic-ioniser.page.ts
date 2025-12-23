import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-electronic-ioniser',
  templateUrl: './electronic-ioniser.page.html',
  styleUrls: ['./electronic-ioniser.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ElectronicIoniserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
