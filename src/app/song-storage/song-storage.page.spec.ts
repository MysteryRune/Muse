import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongStoragePage } from './song-storage.page';

describe('SongStoragePage', () => {
  let component: SongStoragePage;
  let fixture: ComponentFixture<SongStoragePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SongStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
