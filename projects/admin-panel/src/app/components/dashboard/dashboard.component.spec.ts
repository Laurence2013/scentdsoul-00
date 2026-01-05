import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';

import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';

import { DataService } from '../../services/firestore/data-service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

	const mockDataService = {
		getCarAirFresheners: jasmine.createSpy('getCarAirFresheners').and.returnValue(of([])),
		addNewCarAirFreshener00: jasmine.createSpy('addNewCarAirFreshener00').and.returnValue(of(null))
	};
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ DashboardComponent ],
			providers: [
				{provide: DataService, useValue: mockDataService},
				provideAnimations()
			]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create DashboardComponent', () => {
    expect(component).toBeTruthy();
  });
});
