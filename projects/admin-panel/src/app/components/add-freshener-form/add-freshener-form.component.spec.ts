import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
