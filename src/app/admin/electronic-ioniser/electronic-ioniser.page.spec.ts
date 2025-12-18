import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectronicIoniserPage } from './electronic-ioniser.page';

describe('ElectronicIoniserPage', () => {
  let component: ElectronicIoniserPage;
  let fixture: ComponentFixture<ElectronicIoniserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicIoniserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
