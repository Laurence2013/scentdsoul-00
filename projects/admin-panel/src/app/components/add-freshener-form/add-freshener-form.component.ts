import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Timestamp } from '@angular/fire/firestore';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';

import { Brands, Scents } from '../../../models/car-air-fresheners.model';
import { DataService } from '../../services/firestore/data-service';

import { Observable, EMPTY } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-freshener-form',
  templateUrl: './add-freshener-form.component.html',
  styleUrls: ['./add-freshener-form.component.scss'],
  standalone: true,
	imports: [CommonModule, ButtonModule, InputTextModule, CardModule, SelectModule, FormsModule, ReactiveFormsModule]
})
export class AddFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	private scents00 = inject(DataService);
	private fb = inject(FormBuilder);

	public option00$: Observable<any> = EMPTY;
	public option01$: Observable<any> = EMPTY;
	public freshenerForm!: FormGroup;

  public ngOnInit(){
		this.initForm();
		this.getScents();
		this.getSubScents();
	}
	private initForm() {
    this.freshenerForm = this.fb.group({
      brand: ['', Validators.required],
      scent_name: ['', Validators.required],
      scent_description: ['', Validators.required],
      scent_type: ['', Validators.required],
      sub_scent: ['', Validators.required]
    });
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
		const payload = {
			brand: this.freshenerForm.value.brand ?? '',
			scent_name: this.freshenerForm.value.scent_name ?? '',
			scent_description: this.freshenerForm.value.scent_description ?? '',
			scent: this.freshenerForm.value.scent_type ?? '',
			subScent: this.freshenerForm.value.sub_scent ?? ''
    };
		console.log('add-freshener-form -> save(): ', payload);

		this.ref.close(payload);
	}
	public close(){
		this.ref.close();
	}
}
