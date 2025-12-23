import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-oil-diffuser',
  templateUrl: './oil-diffuser.page.html',
  styleUrls: ['./oil-diffuser.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OilDiffuserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
