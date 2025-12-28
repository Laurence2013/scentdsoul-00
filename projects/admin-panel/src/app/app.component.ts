import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Avatar } from 'primeng/avatar';

import { DataService } from './service/firestore/data-service';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [CommonModule, Avatar, Card, ButtonModule]
})
export class AppComponent implements OnInit {

	private dataService = inject(DataService);

	public sidebarVisible = false;

	public carAirFresheners$ = this.dataService.getCarAirFresheners();

  public constructor(){}
  public ngOnInit(){
		console.log('Attempting to get project: ', environment.firebase.projectId);
	}
	public car_air_fresheners(){
		this.carAirFresheners$.subscribe(console.log);
	}
}
