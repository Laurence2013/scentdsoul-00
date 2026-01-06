import { Component, OnInit, inject } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';
import { Timestamp } from '@angular/fire/firestore';

import { ScentTypes } from '../../../interfaces/car-air-fresheners.interface';

import { Brands, Scents } from '../../../models/car-air-fresheners.model';

import { DataService } from '../../services/firestore/data-service';

import { Observable, EMPTY } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-freshener-form',
  templateUrl: './add-freshener-form.component.html',
  styleUrls: ['./add-freshener-form.component.scss'],
  standalone: true,
	imports: [ButtonModule, InputTextModule, FormsModule]
})
export class AddFreshenerFormComponent implements OnInit {

	private ref = inject(DynamicDialogRef);
	private scents00 = inject(DataService);

	public option: Observable<any> = EMPTY;
	public selectedOption = '';
	public item = {brand: ''};

  public ngOnInit(){
		this.getScents();
	}
	public getScents(){
		this.option = this.scents00.getScents$();
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
