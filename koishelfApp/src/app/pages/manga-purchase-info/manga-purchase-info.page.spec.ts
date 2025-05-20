import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangaPurchaseInfoPage } from './manga-purchase-info.page';

describe('MangaPurchaseInfoPage', () => {
  let component: MangaPurchaseInfoPage;
  let fixture: ComponentFixture<MangaPurchaseInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaPurchaseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
