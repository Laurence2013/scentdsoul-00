import { Timestamp } from '@angular/fire/firestore';

import { SeasonalOffers } from '../interfaces/offers.interface';
import { StorePrice, PlatformPrice, PlatformType, CurrencyCode } from '../interfaces/prices.interface';

export class Prices implements StorePrice{

	public storePriceId = crypto.randomUUID();
	public basePrice = 0.00;
	public platformPrices: PlatformPrice[] = [new PlatformPrices()];
	public seasonalPrices?: SeasonalOffers[];
	public createdAt = Timestamp.now();

	public constructor(data?: Partial<StorePrice>){
		if(data){Object.assign(this, data)}
	}
}
export class PlatformPrices implements PlatformPrice{

	public platformPriceId = crypto.randomUUID();
	public listingPrice = 0.00;
	public platform: PlatformType = 'Web_Store';
	public currencyCode: CurrencyCode = 'GBP';
	public platformFeePercentage = 0.00;
	public fixedTransactionalFee = 0.00;
	public createdAt = Timestamp.now();

	public constructor(data?: Partial<PlatformPrice>){
		if(data){Object.assign(this, data)}
	}
}
