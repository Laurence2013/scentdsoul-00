import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OilDiffuserPage } from './oil-diffuser.page';

describe('OilDiffuserPage', () => {
  let component: OilDiffuserPage;
  let fixture: ComponentFixture<OilDiffuserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OilDiffuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
