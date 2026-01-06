import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { AddFreshenerFormComponent } from './add-freshener-form.component';

describe('AddFreshenerFormComponent', () => {
  let component: AddFreshenerFormComponent;
  let fixture: ComponentFixture<AddFreshenerFormComponent>;
	let mockDialogRef: jasmine.SpyObj<DynamicDialogRef>;

  beforeEach(waitForAsync(() => {
		mockDialogRef = jasmine.createSpyObj('DynamicDialogRef', ['close']);

    TestBed.configureTestingModule({
      imports: [AddFreshenerFormComponent],
			providers: [{
				provide: DynamicDialogRef, useValue: mockDialogRef
			}]
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
		
		expect(labels[0].textContent).toContain('Car Air Freshener name:');
	});
	it('should type in a brand in the item.by_brand input box', fakeAsync(() => {
		const inputDebugEl = fixture.debugElement.query(By.css('input[placeholder="e.g. Lavender"]'));
		const by_brand = inputDebugEl.nativeElement;
		
		by_brand.value = 'California scent';
		by_brand.dispatchEvent(new Event('input'));

		fixture.detectChanges();

		tick();

		expect(component.item.by_brand).toBe('California scent');
		expect(component.item.by_brand).not.toBe('Lavender');
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
