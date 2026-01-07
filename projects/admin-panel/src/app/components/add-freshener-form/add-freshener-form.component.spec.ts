import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { AddFreshenerFormComponent } from './add-freshener-form.component';

import { DataService } from '../../services/firestore/data-service';

import { of } from 'rxjs';

describe('AddFreshenerFormComponent', () => {
  let component: AddFreshenerFormComponent;
  let fixture: ComponentFixture<AddFreshenerFormComponent>;
	let mockDialogRef: jasmine.SpyObj<DynamicDialogRef>;

	const mockDataService = {
		getScents$: jasmine.createSpy('getScents$').and.returnValue(of([
			{ name: 'Vanilla' },
			{ name: 'Lavender' },
			{ name: 'California scent' },
		])),
	};
  beforeEach(waitForAsync(() => {
		mockDialogRef = jasmine.createSpyObj('DynamicDialogRef', ['close']);

    TestBed.configureTestingModule({
      imports: [AddFreshenerFormComponent],
			providers: [
				{provide: DataService, useValue: mockDataService},
				{provide: DynamicDialogRef, useValue: mockDialogRef}
			]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFreshenerFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create AddFreshenerFormComponent', () => {
    expect(component).toBeTruthy();
  });
	it('should render the correct labels', () => {
		const labels = fixture.nativeElement.querySelectorAll('label');
		
		expect(labels[0].textContent).toContain('Brand name:');
	});
	it('should type in a brand in the item.by_brand input box', fakeAsync(() => {
		const inputDebugEl = fixture.debugElement.query(By.css('input[placeholder="e.g. Lavender"]'));
		const by_brand = inputDebugEl.nativeElement;
		
		by_brand.value = 'California scent';
		by_brand.dispatchEvent(new Event('input'));

		fixture.detectChanges();

		tick();

		expect(component.item.brand).toBe('California scent');
		expect(component.item.brand).not.toBe('Lavender');
	}));
	it('should select the second option from the scent types dropdown', fakeAsync(() => {
		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		const scentSelectDebug = fixture.debugElement.query(By.css('p-select'));

		const scentSelectComponent = scentSelectDebug.componentInstance;

    let options: any[] = [];
    component.option01$.subscribe(o => options = o);

    expect(options.length).toBeGreaterThan(1);

    const secondOption = options[1];
    scentSelectComponent.updateModel(secondOption.name); // Updates the ngModel

    scentSelectComponent.onChange.emit({ value: secondOption.name });

		fixture.detectChanges();
		tick();

    expect(component.selectedScent).toBe(secondOption.name);

    const debugText = fixture.nativeElement.querySelector('.text-xl').textContent;
    expect(debugText).toContain(`Selected: ${secondOption.name}`);
	}));
	it('should call close() and dismiss dialog when Cancel button is clicked', () => {
		const cancelBtn = fixture.debugElement.query(By.css('p-button[label="Cancel"]')).nativeElement;

		cancelBtn.click();

		expect(mockDialogRef.close).toHaveBeenCalled();
	});
	it('should call save() and dismiss dialog when Save button is clicked', () => {
		const saveBtn = fixture.debugElement.query(By.css('p-button[label="Save"]')).nativeElement;

		saveBtn.click();

		expect(mockDialogRef.close).toHaveBeenCalled();
	})
});
