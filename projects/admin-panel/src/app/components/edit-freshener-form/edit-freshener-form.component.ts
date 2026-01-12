import { Component, OnInit, inject } from '@angular/core';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';

import { Brands, Scents } from '../../../models/car-air-fresheners.model';
import { DataService } from '../../services/firestore/data-service';

@Component({
  selector: 'app-edit-freshener-form',
  templateUrl: './edit-freshener-form.component.html',
  styleUrls: ['./edit-freshener-form.component.scss'],
	imports: [ButtonModule, InputTextModule, CardModule, SelectModule]
})
export class EditFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	private config = inject(DynamicDialogConfig);
	private dataService = inject(DataService);

  public constructor(){}
  public ngOnInit(){
		const payload00 = this.config.data?.payload;

		payload00 ? this.getCarAirFresheners(payload00) : console.log('Not received payload data');
	}
	public getCarAirFresheners(payload01: any){
		console.log('edit-freshener-form -> getCarAirFresheners(): ', payload01);
	}
	public save(){}
	public close(){
		this.ref.close();
	}
}
