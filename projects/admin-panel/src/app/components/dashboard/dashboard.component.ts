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
import { DialogService, DynamicDialogRef, DynamicDialogModule } from 'primeng/dynamicdialog';

import { DataService } from '../../services/firestore/data-service';
import { StorageService } from '../../services/firestore/storage-service';
import { environment } from '../../../environments/environment';
import { Brand, Scent } from '../../../interfaces/car-air-fresheners.interface';
import { Brands, Scents } from '../../../models/car-air-fresheners.model';
import { Prices } from '../../../models/prices.model';
import { AddFreshenerFormComponent } from '../add-freshener-form/add-freshener-form.component';
import { EditFreshenerFormComponent } from '../edit-freshener-form/edit-freshener-form.component';

import { Observable, of, EMPTY } from 'rxjs';
import { tap, map, filter, switchMap, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
	providers: [DialogService],
	imports: [CommonModule, Avatar, Card, ButtonModule, FluidModule, ProgressSpinner, TooltipModule, DynamicDialogModule]
})
export class DashboardComponent  implements OnInit, OnDestroy {

	private dataService = inject(DataService);
	private router = inject(Router);
	private dialogService = inject(DialogService);
	private destrofRef = inject(DestroyRef);
	private ref: DynamicDialogRef<AddFreshenerFormComponent> | null = null;
	private ref00: DynamicDialogRef<EditFreshenerFormComponent> | null = null;

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
		this.caf00$ = this.dataService.getCarAirFresheners00$().pipe(
			tap(brand00 => console.log('dashboard => car_air_fresheners(): ', brand00)),
			shareReplay(1)
		);
	}
	public addNewItem(){
		this.ref = this.dialogService.open(AddFreshenerFormComponent, {
			header: 'Add New Car Air Freshener',
			width: '700px',
			modal: true,
			breakpoints: {'960px': '75vw','640px': '90vw'}
		});
		if(this.ref){
			this.ref.onClose.pipe(
				filter(payload => !!payload),
				tap(payload00 => console.log('dashboard -> addNewItem(): ', payload00)),
				map(payload01 => {
					return new Brands({
						brand: payload01.brand,
						by_scent: [new Scents({
							name: payload01.scent_name,
							description: payload01.scent_description,
							scent_type: payload01.scent,
							scent_sub_type: payload01.subScent,
							price: payload01.price
						})]
					})
				}),
				tap((payload02: Brands) => console.log(payload02 instanceof Brands)),
				switchMap((payload03: Brands) => this.dataService.addNewCarAirFreshener00$(payload03)),
				takeUntilDestroyed(this.destrofRef)
			).subscribe(doc => {
				console.log('Has been saved!: ', doc.idDoc);
				this.car_air_fresheners();
			});
		}else{
			console.log('Not working at app.component.ts');
		}
	}
	public editItem(item: any){
		this.ref00 = this.dialogService.open(EditFreshenerFormComponent, {
			header: 'Edit Car Air Freshener',
			width: '700px',
			modal: true,
			breakpoints: {'960px': '75vw','640px': '90vw'},
			data: {payload: item}
		});
		if(this.ref00){
			this.ref00.onClose.pipe(
				filter(payload => !!payload),
				tap(payload00 => console.log('1. dashboard -> editItem(): ', payload00)),
				map(payload01 => {
					return new Brands({
						documentId: payload01.document_id,
						brand: payload01.brand,
						by_scent: [new Scents({
							name: payload01.name,
							description: payload01.scent_description,
							scent_type: payload01.scent,
							scent_sub_type: payload01.subScent,
							price: payload01.price
						})]
					})
				}),
				tap(payload00 => console.log('2. dashboard -> editItem(): ', payload00)),
				switchMap((payload03: Brands) => this.dataService.updateCarAirFreshener00$(payload03)),
				takeUntilDestroyed(this.destrofRef)
			).subscribe(doc => {
				console.log('Has been updated: ', doc);
				this.car_air_fresheners();
			});
		}else{
			console.log('Not working at app.component.ts');
		}
	}
	public deleteItem(name: string){
		console.log('Deleting item with ID:', name);
	}
	public ngOnDestroy(){
		if(this.ref) this.ref.close();
	}
}
