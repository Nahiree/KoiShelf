import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MangaSectionComponent } from './manga-section.component';

describe('MangaSectionComponent', () => {
  let component: MangaSectionComponent;
  let fixture: ComponentFixture<MangaSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaSectionComponent ],
      imports: [IonicModule.forRoot()]  // Importar IonicModule
    }).compileComponents();

    fixture = TestBed.createComponent(MangaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
