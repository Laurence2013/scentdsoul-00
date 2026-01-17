import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Timestamp } from '@angular/fire/firestore';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { FileUpload } from 'primeng/fileupload';

import { Brands, Scents } from '../../../models/car-air-fresheners.model';
import { DataService } from '../../services/firestore/data-service';
import { StorageService } from '../../services/firestore/storage-service';

import { Observable, EMPTY } from 'rxjs';
import { map, filter, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-add-freshener-form',
  templateUrl: './add-freshener-form.component.html',
  styleUrls: ['./add-freshener-form.component.scss'],
  standalone: true,
	imports: [CommonModule, ButtonModule, InputTextModule, CardModule, SelectModule, 
		FormsModule, ReactiveFormsModule, FileUpload]
})
export class AddFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	private dataService = inject(DataService);
	private storageService = inject(StorageService);
	private fb = inject(FormBuilder);

	public option00$: Observable<any> = EMPTY;
	public option01$: Observable<any> = EMPTY;
	public freshenerForm!: FormGroup;
	public previewUrl: string | null = null;
	public selectedFile: File | null = null;

  public ngOnInit(){
		const rawScent$ = this.dataService.getScentTypes00$().pipe(shareReplay(1));

		this.initForm();
		this.getScents(rawScent$);
		this.getSubScents(rawScent$);
	}
	private initForm() {
    this.freshenerForm = this.fb.group({
      brand: ['', Validators.required],
      scent_name: ['', Validators.required],
      scent_description: ['', Validators.required],
      scent_type: ['', Validators.required],
      sub_scent: ['', Validators.required],
			price: ['', Validators.required]
    });
  }
	public getScents(source$: Observable<any[]>){
		this.option01$ = source$.pipe(
			map((payload00: any[]) => payload00
				.filter(item00 => item00.type && !item00.category)
				.map(item01 => ({type: item01.type.charAt(0).toUpperCase() + item01.type.slice(1)}))
			))
	}
	public getSubScents(source$: Observable<any[]>){
		this.option00$ = source$.pipe(
			map((payload00: any[]) => payload00
				.filter(item00 => item00.type && item00.category)
				.map(item01 => ({type: item01.type.charAt(0).toUpperCase() + item01.type.slice(1)}))
		))
	}
	public onFileSelected(event: any){
		const file = event.files[0];
		if(file){
			this.selectedFile = file;

			const reader = new FileReader();
			reader.onload = () => this.previewUrl = reader.result as string;
			reader.readAsDataURL(file);
		}
	}
	public save(){
		const payload = {
			brand: this.freshenerForm.value.brand ?? '',
			scent_name: this.freshenerForm.value.scent_name ?? '',
			scent_description: this.freshenerForm.value.scent_description ?? '',
			scent: this.freshenerForm.value.scent_type ?? '',
			subScent: this.freshenerForm.value.sub_scent ?? '',
			price: this.freshenerForm.value.price ?? ''
    };
		console.log('add-freshener-form -> save(): ', payload);

		this.ref.close(payload);
	}
	public close(){
		this.ref.close();
	}
}
