import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { FluidModule } from 'primeng/fluid';

import { Brands, Scents } from '../../../models/car-air-fresheners.model';
import { DataService } from '../../services/firestore/data-service';

import { Observable, EMPTY } from 'rxjs';
import { map, filter, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-edit-freshener-form',
  templateUrl: './edit-freshener-form.component.html',
  styleUrls: ['./edit-freshener-form.component.scss'],
	imports: [CommonModule, TitleCasePipe, ReactiveFormsModule, ButtonModule, InputTextModule, 
		CardModule, SelectModule, TextareaModule, FluidModule]
})
export class EditFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	private config = inject(DynamicDialogConfig);
	private dataService = inject(DataService);

	public editForm!: FormGroup;
	public option00$: Observable<any> = EMPTY;
	public option01$: Observable<any> = EMPTY;

  public constructor(){}
  public ngOnInit(){
		const payload00 = this.config.data?.payload;
		const rawScent = this.dataService.getScentTypes00$().pipe(shareReplay(1));

		this.getScents(rawScent);
		this.getSubScents(rawScent);

		payload00 ? this.getCarAirFresheners(payload00) : console.log('Not received payload data');
	}
	public getCarAirFresheners(payload01: any){
		this.editForm = new FormGroup({
			brand: new FormControl(payload01?.brand || '', [Validators.required]),
			scent: new FormControl(payload01?.by_scent[0].name || '', [Validators.required]),
			type_of_scent: new FormControl(payload01?.by_scent[0]?.scent_type || '', [Validators.required]),
			scent_sub_type: new FormControl(payload01?.by_scent[0]?.scent_sub_type || '', [Validators.required]),
			description: new FormControl(payload01?.by_scent[0]?.description || '', [Validators.required]),
			price: new FormControl(payload01?.by_scent[0]?.price || 0.00, [Validators.required])
		});
		console.log('edit-freshener-form -> getCarAirFresheners(): ', payload01);
	}
	public getScents(source$: Observable<any[]>){
		this.option00$ = source$.pipe(map((payload00: any[]) => payload00.filter(item00 => item00.type && !item00.category)))
	}
	public getSubScents(source$: Observable<any[]>){
		this.option01$ = source$.pipe(map((payload00: any[]) => payload00.filter(item00 => item00.type && item00.category)))
	}
	public save(){
		const payload = {
			brand: this.editForm.value.brand ?? '',
			name: this.editForm.value.scent ?? '',
			scent_description: this.editForm.value.description ?? '',
			scent: this.editForm.value.type_of_scent ?? '',
			subScent: this.editForm.value.scent_sub_type ?? '',
			price: this.editForm.value.price ?? ''
    };
		console.log('add-freshener-form -> save(): ', payload);

		//this.ref.close(payload);
	}
	public close(){
		this.ref.close();
	}
}
