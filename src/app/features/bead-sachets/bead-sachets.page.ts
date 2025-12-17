import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bead-sachets',
  templateUrl: './bead-sachets.page.html',
  styleUrls: ['./bead-sachets.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BeadSachetsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
