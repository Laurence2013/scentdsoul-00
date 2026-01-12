import { Component, OnInit, inject } from '@angular/core';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';

import { DataService } from '../../services/firestore/data-service';

@Component({
  selector: 'app-edit-freshener-form',
  templateUrl: './edit-freshener-form.component.html',
  styleUrls: ['./edit-freshener-form.component.scss'],
	imports: [ButtonModule, InputTextModule, CardModule, SelectModule]
})
export class EditFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	private dataService = inject(DataService);

  public constructor(){}
  public ngOnInit(){}
	public getCarAirFresheners(){}
	public save(){}
	public close(){
		this.ref.close();
	}
}
