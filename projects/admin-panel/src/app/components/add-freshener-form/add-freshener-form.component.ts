import { Component, OnInit, inject } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';
import { Timestamp } from '@angular/fire/firestore';

import { Brand, Scent } from '../../../../interfaces/car-air-fresheners.interface';

@Component({
  selector: 'app-add-freshener-form',
  templateUrl: './add-freshener-form.component.html',
  styleUrls: ['./add-freshener-form.component.scss'],
  standalone: true,
	imports: [ButtonModule, InputTextModule, FormsModule]
})
export class AddFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	
	//public item: CarAirFreshenersModel = { by_type: '', by_scent: '', sub_type: '', by_brand: '', createdAt: Timestamp.now() };

  public ngOnInit(){}
	public save(){
		this.ref.close(this.item);
	}
	public close(){
		this.ref.close();
	}
}
