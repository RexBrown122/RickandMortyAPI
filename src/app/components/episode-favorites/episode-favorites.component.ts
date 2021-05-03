import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Episode } from '../../classes/episode';
import { FavoritesService } from '../../services/favorites.service';
import { RickandMortyService } from '../../services/rickand-morty.service';


@Component({
  selector: 'app-episode-favorites',
  templateUrl: './episode-favorites.component.html',
  styleUrls: ['./episode-favorites.component.css']
})
export class EpisodeFavoritesComponent implements OnInit {

  public favoriteEpisodes: Episode[];

  constructor(private FavoritesService: FavoritesService, private RickandMortyService: RickandMortyService) { }

  ngOnInit(): void {
    this.favoriteEpisodes = this.FavoritesService.getFavorites();
  }

  select(episode: Episode): void {
    this.RickandMortyService.set_selected(episode);
  }

  remove(episode: Episode) : void {
    this.FavoritesService.remove(episode);
  }

}
