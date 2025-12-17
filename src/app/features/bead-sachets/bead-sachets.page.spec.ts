import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeadSachetsPage } from './bead-sachets.page';

describe('BeadSachetsPage', () => {
  let component: BeadSachetsPage;
  let fixture: ComponentFixture<BeadSachetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeadSachetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
