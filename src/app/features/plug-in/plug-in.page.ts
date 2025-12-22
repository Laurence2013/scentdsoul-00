import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-plug-in',
  templateUrl: './plug-in.page.html',
  styleUrls: ['./plug-in.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
	host: { 'collision-id': 'app-admin-plug-in' }
})
export class PlugInPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
