import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListComponent } from './episode-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RickandMortyService } from '../../services/rickand-morty.service';
import { MockEpisodesService } from '../../services/mock-episodes.service';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { EpisodeDetailsComponent } from '../episode-details/episode-details.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { Episode } from 'src/app/classes/episode';



describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let fixture: ComponentFixture<EpisodeListComponent>;
  let appHtml;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeListComponent, EpisodeDetailsComponent ],
      imports: [AppRoutingModule],
      providers: [ { provide: RickandMortyService, useClass: MockEpisodesService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeListComponent);
    router = TestBed.inject(Router);
    appHtml = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(appHtml.querySelector('#pageTitle')).toBeTruthy();
  });

  it('should have a button to redirect to favorites', () => {
    let temp: Episode = {
      name: 'Testor-Morty', 
      episode: 'TEST02', 
      id: 123, 
      air_date: 'May 1, 2014', 
      characters: [],
      url: "asd",
      created: "asd"} as Episode;
    component.episodes.push(temp);
    fixture.detectChanges();
    expect(component.episodes.length==0).toBeFalsy();
    expect(appHtml.querySelector('#ep-fav-btn')).toBeTruthy();
  });

  it('episode should route to details', () => {
    let temp: Episode = {
      name: 'Testor-Morty', 
      episode: 'TEST02', 
      id: 123, 
      air_date: 'May 1, 2014', 
      characters: [],
      url: "asd",
      created: "asd"} as Episode;
    component.episodes.push(temp);
    fixture.detectChanges();
    const routerLink = fixture.nativeElement.querySelector("#select-ep");
    routerLink.click();
    fixture.whenStable().then(() => {
      expect(location.pathname).toEqual('/details');
    })
  });
});
