import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangatecaEdicionPage } from './mangateca-edicion.page';

describe('MangatecaEdicionPage', () => {
  let component: MangatecaEdicionPage;
  let fixture: ComponentFixture<MangatecaEdicionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MangatecaEdicionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
