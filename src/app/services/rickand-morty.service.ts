import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Episode } from '../classes/episode';
import { Character } from '../classes/character';

interface ApiRicksponse {
  info?: {};
  results: Episode[];
}

@Injectable({
  providedIn: 'root'
})
export class RickandMortyService {

  endpoint = "https://rickandmortyapi.com/api/episode";
  endpoint_characters = "https://rickandmortyapi.com/api/character";
  tempEndpoint = "";

  public episodes: Episode[];
  public searched_episodes: Episode[];
  public characters: Character[];
  public info: {};
  public info_chars: {};
  public selected_episode: Episode;
  public last_search: string;

  constructor(private http: HttpClient) {
    
  }

  set_selected(episode: Episode): void {
    sessionStorage.setItem('selected_episode', JSON.stringify(episode));
  }

  get_selected(): Episode {
    return JSON.parse(sessionStorage.getItem('selected_episode')) as Episode;
  }

  getAll(): Observable<ApiRicksponse> {
    return this.http.get<ApiRicksponse>(this.endpoint)
    .pipe(
      tap(
        data =>{
          this.info = data.info;
          this.episodes = data.results;
        },
        err => console.log(err)
        
      )
    )
  }

  getPage(next_endpoint: string): Observable<ApiRicksponse> {
    return this.http.get<ApiRicksponse>(next_endpoint)
    .pipe(
      tap(
        data =>{
          this.info = data.info;
          this.episodes = data.results;
        },
        err => console.log(err)
        
      )
    )
  }

  getCharacter(next_endpoint: string): Observable<any> {
    return this.http.get(next_endpoint);
  }

  getSearchResults(name: string) : Observable<ApiRicksponse> {
    return this.http.get<ApiRicksponse>(this.endpoint+"/?name="+name).pipe(tap(
      episodes => {this.searched_episodes = episodes.results;
      // console.log("search",episodes.results)
    }));
  }
}