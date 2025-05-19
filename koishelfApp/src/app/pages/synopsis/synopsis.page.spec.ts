import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SynopsisPage } from './synopsis.page';

describe('SynopsisPage', () => {
  let component: SynopsisPage;
  let fixture: ComponentFixture<SynopsisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopsisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
