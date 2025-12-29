import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { Avatar } from 'primeng/avatar';
import { ProgressSpinner } from 'primeng/progressspinner';

import { DataService } from './service/firestore/data-service';

import { environment } from '../environments/environment';

import { CarAirFreshenersModel } from '../../models/car-air-fresheners.model';

import { Observable, of, EMPTY } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [CommonModule, Avatar, Card, ButtonModule, FluidModule, ProgressSpinner]
})
export class AppComponent implements OnInit {

	private dataService = inject(DataService);
	private carAirFresheners$ = this.dataService.getCarAirFresheners();
	private router = inject(Router);

	public sidebarVisible = false;
	public caf00$: Observable<CarAirFreshenersModel[]> = EMPTY;
	
	public readonly EMPTY = EMPTY;

  public constructor(){}
  public ngOnInit(){
		console.log('Attempting to get project: ', environment.firebase.projectId);
	}
	public dashboard(){
		this.caf00$ = EMPTY;
		this.router.navigate(['/']);
	}
	public car_air_fresheners(){
		this.caf00$ = this.carAirFresheners$.pipe(delay(2000));
	}
}
