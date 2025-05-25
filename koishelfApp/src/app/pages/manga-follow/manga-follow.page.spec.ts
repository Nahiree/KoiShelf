import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangaFollowPage } from './manga-follow.page';

describe('MangaFollowPage', () => {
  let component: MangaFollowPage;
  let fixture: ComponentFixture<MangaFollowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaFollowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
