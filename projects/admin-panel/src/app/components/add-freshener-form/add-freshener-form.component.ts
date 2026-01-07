import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';
import { Timestamp } from '@angular/fire/firestore';

import { ScentTypes } from '../../../interfaces/car-air-fresheners.interface';

import { Brands, Scents } from '../../../models/car-air-fresheners.model';

import { DataService } from '../../services/firestore/data-service';

import { Observable, EMPTY } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-freshener-form',
  templateUrl: './add-freshener-form.component.html',
  styleUrls: ['./add-freshener-form.component.scss'],
  standalone: true,
	imports: [CommonModule, ButtonModule, InputTextModule, FormsModule]
})
export class AddFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	private scents00 = inject(DataService);

	public option00$: Observable<any> = EMPTY;
	public selectedScent = '';
	public selectedSubScent = '';
	public item = {brand: '', scent_name: '', scent_description: '', sub_scent: ''};

  public ngOnInit(){
		this.getScents();
	}
	public getScents(){
		this.option00$ = this.scents00.getScents$();
	}
	public onScentSelect(event: any){
		console.log('Selected scent: ', event.target.value);
	}
	public save(){
		this.ref.close();
	}
	public close(){
		this.ref.close();
	}
}
