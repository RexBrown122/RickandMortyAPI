import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { Episode } from '../classes/episode';

import { RickandMortyService } from '../services/rickand-morty.service';

const apiResponse: {} = {
  info: {},
  results: [{
    name: 'Testor-Morty', 
    episode: 'TEST02', 
    id: 123, 
    airDate: 'May 1, 2014', 
    characters: []}]};
const apiResponse2: {} = {
  info: {},
  results: [{
    id: 123,
    name: 'Testor-Morty',
    status: 'ded',
    type: '',
    gender: 'male',
    origin: {},
    location: {},
    image: 'image',
    episode: ['TEST02'],
    url: 'url.com',
    created: '1/1/2021'
}]};


interface ApiRicksponse {
  info?: {};
  results: Episode[];
}

describe('RickandMortyService', () => {
  let service: RickandMortyService;
  let httpServiceSpy: {get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RickandMortyService(httpServiceSpy as any);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 

  it('should get a list of episodes', () => {
    httpServiceSpy.get.and.returnValue(of(apiResponse));
    service.getAll().subscribe( data => {
      expect(data.results).toEqual(service.episodes);
    })
  });

  it('should get and set the selected episode', () => {
    let episode: Episode = new Episode();
    sessionStorage.setItem('selected_episode', JSON.stringify(episode));
    expect(JSON.parse(sessionStorage.getItem('selected_episode')) as Episode).toBeTruthy();
  }); 

  it('should get a page', () => {
    httpServiceSpy.get.and.returnValue(of(apiResponse));
    service.getPage("page").subscribe( data => {
      expect(data.results).toEqual(service.episodes);
    })
  }); 

  it('should get a character', () => {
    httpServiceSpy.get.and.returnValue(of(apiResponse2));
    service.getCharacter("Testor-Morty").subscribe( data => {
      expect(data.results.name).toEqual(service.characters);
    })
  }); 

  it('should get a list of search results', () => {
    httpServiceSpy.get.and.returnValue(of(apiResponse));
    service.getSearchResults("asd").subscribe( data => {
      expect(data.results).toEqual(service.searched_episodes);
    })
  });

});
