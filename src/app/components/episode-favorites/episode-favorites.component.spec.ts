import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { EpisodeFavoritesComponent } from './episode-favorites.component';
import { AppRoutingModule } from '../../app-routing.module';
import { MockEpisodesService } from '../../services/mock-episodes.service';
import { RickandMortyService } from '../../services/rickand-morty.service';

describe('EpisodeFavoritesComponent', () => {
  let component: EpisodeFavoritesComponent;
  let fixture: ComponentFixture<EpisodeFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeFavoritesComponent ],
      imports: [AppRoutingModule],
      providers: [ { provide: RickandMortyService, useClass: MockEpisodesService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a title', () => {
    expect(fixture.nativeElement.querySelector('#pageTitle')).toBeTruthy();
  });
});
