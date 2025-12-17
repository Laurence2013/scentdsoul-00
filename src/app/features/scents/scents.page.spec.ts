import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScentsPage } from './scents.page';

describe('ScentsPage', () => {
  let component: ScentsPage;
  let fixture: ComponentFixture<ScentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
