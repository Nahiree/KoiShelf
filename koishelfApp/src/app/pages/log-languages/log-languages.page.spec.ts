import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogLanguagesPage } from './log-languages.page';

describe('LogLanguagesPage', () => {
  let component: LogLanguagesPage;
  let fixture: ComponentFixture<LogLanguagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogLanguagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
