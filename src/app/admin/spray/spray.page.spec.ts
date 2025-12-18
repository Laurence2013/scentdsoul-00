import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprayPage } from './spray.page';

describe('SprayPage', () => {
  let component: SprayPage;
  let fixture: ComponentFixture<SprayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SprayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
