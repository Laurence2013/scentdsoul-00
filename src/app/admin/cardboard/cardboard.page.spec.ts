import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardboardPage } from './cardboard.page';

describe('CardboardPage', () => {
  let component: CardboardPage;
  let fixture: ComponentFixture<CardboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
