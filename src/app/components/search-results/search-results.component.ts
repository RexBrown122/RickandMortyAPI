import { Component, OnInit } from '@angular/core';
import { Episode } from '../../classes/episode';
import { RickandMortyService } from '../../services/rickand-morty.service';
import { FavoritesService } from '../../services/favorites.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public searched_episodes: Episode[];

  constructor(private route: ActivatedRoute, private RickandMortyService: RickandMortyService, private FavoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.RickandMortyService.getSearchResults(data['name']).subscribe(data => this.searched_episodes = data.results);
    })
  }

  select(episode: Episode): void {
    this.RickandMortyService.set_selected(episode);
  }

  favorite(episode: Episode) {
    this.FavoritesService.favorite(episode);
  }

}
