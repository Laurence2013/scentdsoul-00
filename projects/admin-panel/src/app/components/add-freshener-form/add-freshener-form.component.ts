import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';

import { FormsModule } from '@angular/forms';
import { Timestamp } from '@angular/fire/firestore';

import { Brands, Scents } from '../../../models/car-air-fresheners.model';

import { DataService } from '../../services/firestore/data-service';

import { Observable, EMPTY } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-freshener-form',
  templateUrl: './add-freshener-form.component.html',
  styleUrls: ['./add-freshener-form.component.scss'],
  standalone: true,
	imports: [CommonModule, ButtonModule, InputTextModule, FormsModule, CardModule, SelectModule]
})
export class AddFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	private scents00 = inject(DataService);

	public option00$: Observable<any> = EMPTY;
	public option01$: Observable<any> = EMPTY;
	public selectedScent = '';
	public selectedSubScent = '';
	public item = {brand: '', scent_name: '', scent_description: ''};

  public ngOnInit(){
		this.getScents();
		this.getSubScents();
	}
	public getScents(){
		this.option01$ = this.scents00.getScents00$().pipe(
			map((payload00: any[]) => payload00
				.filter(item00 => item00.type && !item00.category)
				.map(item01 => ({type: item01.type.charAt(0).toUpperCase() + item01.type.slice(1)}))
			))
	}
	public getSubScents(){
		this.option00$ = this.scents00.getScents00$().pipe(
			map((payload00: any[]) => payload00
				.filter(item00 => item00.type && item00.category)
				.map(item01 => ({type: item01.type.charAt(0).toUpperCase() + item01.type.slice(1)}))
		))
	}
	public save(){
		const payload = {...this.item, scent: this.selectedScent, subScent: this.selectedSubScent};
		console.log('add-freshener-form -> save(): ', payload);

		this.ref.close(payload);
	}
	public close(){
		this.ref.close();
	}
}
