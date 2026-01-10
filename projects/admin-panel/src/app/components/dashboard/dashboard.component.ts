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

import { DataService } from '../../services/firestore/data-service';

import { environment } from '../../../environments/environment';

import { Brand, Scent } from '../../../interfaces/car-air-fresheners.interface';

import { Brands, Scents } from '../../../models/car-air-fresheners.model';

import { AddFreshenerFormComponent } from '../add-freshener-form/add-freshener-form.component';

import { Observable, of, EMPTY } from 'rxjs';
import { tap, map, filter, delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
	providers: [DialogService],
	imports: [CommonModule, Avatar, Card, ButtonModule, FluidModule, ProgressSpinner, TooltipModule]
})
export class DashboardComponent  implements OnInit, OnDestroy {

	private dataService = inject(DataService);
	private carAirFresheners$ = this.dataService.getCarAirFresheners$();
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
		this.caf00$ = this.carAirFresheners$.pipe(delay(1000));
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
				tap(payload00 => console.log('dashboard -> addNewItem(): ', payload00)),
				map(payload01 => {
					return new Brands({
						by_brand: payload01.brand,
						by_scent: [new Scents({
							name: payload01.scent_name,
							description: payload01.scent_description,
							scent_type: payload01.scent.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
							scent_sub_type: payload01.subScent.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
						})]
					})
				}),
				tap((payload02: Brands) => console.log(payload02 instanceof Brands)),
				tap(console.log),
				//switchMap((data02: Brand) => this.dataService.addNewCarAirFreshener00(data02)),
				takeUntilDestroyed(this.destrofRef)
			).subscribe();
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
