import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { AddFreshenerFormComponent } from './add-freshener-form.component';

describe('AddFreshenerFormComponent', () => {
  let component: AddFreshenerFormComponent;
  let fixture: ComponentFixture<AddFreshenerFormComponent>;

	const mockDialogRef = { close: jasmine.createSpy('close') };

  beforeEach(waitForAsync(() => {
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
});
