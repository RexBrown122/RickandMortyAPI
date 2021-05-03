import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockEpisodesService } from 'src/app/services/mock-episodes.service';
import { RickandMortyService } from 'src/app/services/rickand-morty.service';

import { EpisodeListPageComponent } from './episode-list-page.component';

describe('EpisodeListPageComponent', () => {
  let component: EpisodeListPageComponent;
  let fixture: ComponentFixture<EpisodeListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeListPageComponent ],
      providers: [ { provide: RickandMortyService, useClass: MockEpisodesService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('next should change data in episode', () => {
    component.episodes = [];
    fixture.nativeElement.querySelector("#next").click();
    expect(component.episodes!==[]).toBeTruthy()
  });


  it('last should change data in episode', () => {
    component.episodes = [];
    fixture.nativeElement.querySelector("#last").click();
    expect(component.episodes!==[]).toBeTruthy();
  });
});