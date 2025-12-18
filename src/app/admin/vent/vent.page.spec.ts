import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentPage } from './vent.page';

describe('VentPage', () => {
  let component: VentPage;
  let fixture: ComponentFixture<VentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
