import { Component, Input, OnInit } from '@angular/core';
import { Episode } from '../../classes/episode';
import { RickandMortyService } from '../../services/rickand-morty.service';
import { FavoritesService } from '../../services/favorites.service';


@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  @Input() episodes: Episode[] = [];

  constructor(private RickandMortyService: RickandMortyService, private FavoritesService: FavoritesService) {}

  ngOnInit(): void {
  }

  select(episode: Episode): void {
    this.RickandMortyService.set_selected(episode);
  }

  favorite(episode: Episode) {
    this.FavoritesService.favorite(episode);
  }

}