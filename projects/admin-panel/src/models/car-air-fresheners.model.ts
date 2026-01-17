import { Timestamp } from '@angular/fire/firestore';
import { Brand, Scent, ScentTypes, SubScentTypes } from '../interfaces/car-air-fresheners.interface';
import { StorePrice } from '../interfaces/prices.interface';

import { Prices } from './prices.model';

export class Brands implements Brand {

	public documentId = '';
	public brandId = crypto.randomUUID();
	public brand = '';
	public by_scent: Scent[] = [new Scents()];
	public image_name = '';
	public createdAt = Timestamp.now();

	public constructor(data?: Partial<Brand>){
		if(data){Object.assign(this, data)}
	}
	public toPlainObj(){
		return {
			id: this.brandId,
			brand: this.brand,
			createdAt: this.createdAt,
			by_scent: this.by_scent.map(s => ({
				name: s.name,
				description: s.description,
				scent_type: s.scent_type,
				scent_sub_type: s.scent_sub_type || 'Hanging',
				price: s.price
			})),
		}
	}
}
export class Scents implements Scent {

	public scentId = crypto.randomUUID();
	public name = '';
	public description = '';
	public scent_type: ScentTypes = 'Cardboard';
	public scent_sub_type?: SubScentTypes = 'Hanging';
	public price = 0.00;
	public price_details?: StorePrice = new Prices();

	public constructor(data?: Partial<Scent>){
		if(data){Object.assign(this, data)}
	}
}
