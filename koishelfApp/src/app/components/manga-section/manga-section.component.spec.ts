import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MangaSectionComponent } from './manga-section.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MangaSectionComponent', () => {
  let component: MangaSectionComponent;
  let fixture: ComponentFixture<MangaSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaSectionComponent ],
      imports: [IonicModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agregar CUSTOM_ELEMENTS_SCHEMA aquí
    }).compileComponents();

    fixture = TestBed.createComponent(MangaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
