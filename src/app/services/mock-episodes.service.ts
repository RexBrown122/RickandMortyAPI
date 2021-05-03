import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockEpisodesService {

  constructor() { }

  results = { info: [{}], results: [{ name: 'Testor-Morty', episode: 'TEST02', id: 123, airDate: 'May 1, 2014', characters: []}]};
  episodes = this.results.results;

  results2 = {};

  getAll(): Observable<any> {
    return of(this.results);
  }

  set_selected() {

  }

  get_selected() {

  }

  getPage(): Observable<any> {
    return of(this.results);
  }

  search(){

  }

  getSearchResults(): Observable<any> {
    return of(this.results);
  }

  getCharacter(): Observable<any> {
    return of(this.results2);
  }
}
