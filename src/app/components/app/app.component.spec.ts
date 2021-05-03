import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EpisodeListComponent } from 'src/app/components/episode-list/episode-list.component';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { EpisodeDetailsComponent } from 'src/app/components/episode-details/episode-details.component';
import { EpisodeFavoritesComponent } from 'src/app/components/episode-favorites/episode-favorites.component';
import { MockEpisodesService } from 'src/app/services/mock-episodes.service';
import { RickandMortyService } from 'src/app/services/rickand-morty.service';

describe('AppComponent', () => {
  let router: Router;
  let fixture;
  let app;
  let appHtml;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EpisodeListComponent,
        EpisodeDetailsComponent,
        EpisodeFavoritesComponent
      ],
      imports: [AppRoutingModule],
      providers: [ { provide: RickandMortyService, useClass: MockEpisodesService }]

    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement;
    appHtml = app.nativeElement
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render search form', () => {
  });

  it('navigate to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('');
  }));

  it('navigate to /favorites', fakeAsync(() => {
    router.navigate(['favorites']);
    tick();
    expect(location.path()).toBe('/favorites');
  }));

  it('navigate to /details', fakeAsync(() => {
    router.navigate(['details']);
    tick();
    expect(location.path()).toBe('/details');
  }));
});
