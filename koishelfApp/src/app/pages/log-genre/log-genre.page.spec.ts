import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogGenrePage } from './log-genre.page';

describe('LogGenrePage', () => {
  let component: LogGenrePage;
  let fixture: ComponentFixture<LogGenrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogGenrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
