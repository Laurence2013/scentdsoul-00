import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddFreshenerFormComponent } from './add-freshener-form.component';

describe('AddFreshenerFormComponent', () => {
  let component: AddFreshenerFormComponent;
  let fixture: ComponentFixture<AddFreshenerFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AddFreshenerFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddFreshenerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
