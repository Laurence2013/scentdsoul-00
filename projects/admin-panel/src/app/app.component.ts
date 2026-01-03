import { Component, OnInit, OnDestroy, inject, DestroyRef } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { Avatar } from 'primeng/avatar';
import { ProgressSpinner } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DataService } from './service/firestore/data-service';

import { environment } from '../environments/environment';

import { Brand, Scent } from '../interfaces/car-air-fresheners.interface';

import { AddFreshenerFormComponent } from './components/add-freshener-form/add-freshener-form.component';

import { Observable, of, EMPTY } from 'rxjs';
import { tap, map, filter, delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	standalone: true,
	providers: [DialogService],
	imports: [CommonModule, Avatar, Card, ButtonModule, FluidModule, ProgressSpinner, TooltipModule]
})
export class AppComponent implements OnInit, OnDestroy {

	private dataService = inject(DataService);
	private carAirFresheners$ = this.dataService.getCarAirFresheners();
	private router = inject(Router);
	private dialogService = inject(DialogService);
	private destrofRef = inject(DestroyRef);
	private ref: DynamicDialogRef<AddFreshenerFormComponent> | null = null;

	public sidebarVisible = false;
	public caf00$: Observable<Brand[]> = EMPTY;
	
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
	public addNewItem(){
		this.ref = this.dialogService.open(AddFreshenerFormComponent, {
			header: 'Add New Car Air Freshener',
			width: '600px',
			modal: true,
			breakpoints: {
				'960px': '75vw',
				'640px': '90vw'
			}
		});
		if(this.ref){
			this.ref.onClose.pipe(
				filter(data00 => !!data00),
				switchMap((data01: Brand) => this.dataService.addNewCarAirFreshener00(data01)),
				takeUntilDestroyed(this.destrofRef)
			).subscribe(console.log);
		}else{
			console.log('Not working at app.component.ts');
		}
	}
	public editItem(item: any){
		console.log(item);
	}
	public deleteItem(name: string){
		console.log('Deleting item with ID:', name);
	}
	public ngOnDestroy(){
		if(this.ref) this.ref.close();
	}
}
