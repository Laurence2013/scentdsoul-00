import { Component, OnInit, inject } from '@angular/core';
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

@Component({
  selector: 'app-edit-freshener-form',
  templateUrl: './edit-freshener-form.component.html',
  styleUrls: ['./edit-freshener-form.component.scss'],
	imports: [ReactiveFormsModule, ButtonModule, InputTextModule, CardModule, SelectModule, TextareaModule, FluidModule]
})
export class EditFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	private config = inject(DynamicDialogConfig);
	private dataService = inject(DataService);

	public payload02!: FormGroup;

  public constructor(){}
  public ngOnInit(){
		const payload00 = this.config.data?.payload;

		payload00 ? this.getCarAirFresheners(payload00) : console.log('Not received payload data');
	}
	public getCarAirFresheners(payload01: any){
		this.payload02 = new FormGroup({
			brand: new FormControl(payload01?.brand || '', [Validators.required]),
			scent: new FormControl(payload01?.by_scent[0].name || '', [Validators.required])
		});
		console.log('edit-freshener-form -> getCarAirFresheners(): ', payload01);
	}
	public editForm(){}
	public save(){}
	public close(){
		this.ref.close();
	}
}
