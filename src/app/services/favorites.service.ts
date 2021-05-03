import { Injectable } from '@angular/core';
import { Episode } from '../classes/episode';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  public favoriteEpisodes: Episode[];

  constructor() {
    this.favoriteEpisodes = JSON.parse(sessionStorage.getItem('favorites')) as Episode[] || [];
   }

  favorite(episode: Episode) : void {
    if(this.favoriteEpisodes.filter(data => data.id == episode.id).length == 0){
      this.favoriteEpisodes.push(episode);
      console.log("favorite: true");
    }

    else{
      console.log("favorite: false")
    }
    sessionStorage.setItem('favorites', JSON.stringify(this.favoriteEpisodes));
  }

  getFavorites(): Episode[] {
    return this.favoriteEpisodes;
  }

  remove(episode: Episode) : void {
    this.favoriteEpisodes.splice(this.favoriteEpisodes.indexOf(episode),1);
    sessionStorage.setItem('favorites', JSON.stringify(this.favoriteEpisodes));
  }
}
