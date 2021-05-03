import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockEpisodesService } from '../../services/mock-episodes.service';
import { RickandMortyService } from '../../services/rickand-morty.service';

import { EpisodeDetailsComponent } from './episode-details.component';

describe('EpisodeDetailsComponent', () => {
  let component: EpisodeDetailsComponent;
  let fixture: ComponentFixture<EpisodeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDetailsComponent ],
      providers: [ { provide: RickandMortyService, useClass: MockEpisodesService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    expect(fixture.nativeElement.querySelector('#title')).toBeTruthy();
  });

  it('should have air_date', () => {
    expect(fixture.nativeElement.querySelector('#air_date')).toBeTruthy();
  });

  it('should have code', () => {
    expect(fixture.nativeElement.querySelector('#code')).toBeTruthy();
  });

  it('should have characters', () => {
    expect(fixture.nativeElement.querySelector('#characters')).toBeTruthy();
  });
});
