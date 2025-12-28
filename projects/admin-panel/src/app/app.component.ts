import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { Avatar } from 'primeng/avatar';

import { DataService } from './service/firestore/data-service';

import { environment } from '../environments/environment';

import { CarAirFreshenersModel } from '../../models/car-air-fresheners.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [CommonModule, Avatar, Card, ButtonModule, FluidModule]
})
export class AppComponent implements OnInit {

	private dataService = inject(DataService);
	private carAirFresheners$ = this.dataService.getCarAirFresheners();

	public sidebarVisible = false;
	public caf00: CarAirFreshenersModel[] = [];

  public constructor(){}
  public ngOnInit(){
		console.log('Attempting to get project: ', environment.firebase.projectId);
	}
	public car_air_fresheners(){
		this.carAirFresheners$.subscribe({
			next: res => this.caf00 = res,
			error: err => console.log(err)
		});
	}
}
