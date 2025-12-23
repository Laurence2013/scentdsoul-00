import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalisedPage } from './personalised.page';

describe('PersonalisedPage', () => {
  let component: PersonalisedPage;
  let fixture: ComponentFixture<PersonalisedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalisedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
