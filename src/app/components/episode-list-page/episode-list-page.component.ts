import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/classes/episode';
import { RickandMortyService } from '../../services/rickand-morty.service';

@Component({
  selector: 'app-episode-list-page',
  templateUrl: './episode-list-page.component.html',
  styleUrls: ['./episode-list-page.component.css']
})
export class EpisodeListPageComponent implements OnInit {
  episodes: Episode[];
  info: any;


  constructor(private RickandMortyService: RickandMortyService) { }

  ngOnInit(): void {
    this.RickandMortyService.getAll().subscribe(
      episodes => {
        this.episodes = episodes.results;
        this.info = episodes.info;
      });
  }

  next() {
    if(this.info.next != null) {
      this.RickandMortyService.getPage(this.info.next).subscribe(
        episodes => {
          this.episodes = episodes.results;
          this.info = episodes.info
        });
    }
  }

  last() {
    if(this.info.prev != null) {
      this.RickandMortyService.getPage(this.info.prev).subscribe(
        episodes => {
          this.episodes = episodes.results;
          this.info = episodes.info
        });
    }
  }
}
