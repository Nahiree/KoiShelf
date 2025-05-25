import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LenguagePage } from './lenguage.page';

describe('LenguagePage', () => {
  let component: LenguagePage;
  let fixture: ComponentFixture<LenguagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
