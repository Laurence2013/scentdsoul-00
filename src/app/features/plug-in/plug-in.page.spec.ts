import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlugInPage } from './plug-in.page';

describe('PlugInPage', () => {
  let component: PlugInPage;
  let fixture: ComponentFixture<PlugInPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
