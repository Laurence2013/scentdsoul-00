import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnderSeatPage } from './under-seat.page';

describe('UnderSeatPage', () => {
  let component: UnderSeatPage;
  let fixture: ComponentFixture<UnderSeatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderSeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
