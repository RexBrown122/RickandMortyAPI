import { Component, OnInit } from '@angular/core';
import { Character } from '../../classes/character';
import { Episode } from '../../classes/episode';
import { RickandMortyService } from '../../services/rickand-morty.service'

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {

  public episode: Episode = new Episode(1,"default","default","default",["default"],"default","default");
  public characters: Character[] = [];
  public character_names: string[] = [];

  constructor(private RickandMortyService: RickandMortyService) {
    this.episode = this.RickandMortyService.get_selected() || this.episode;
   }

  ngOnInit(): void {

    this.episode.characters.forEach(character => {
      this.RickandMortyService.getCharacter(character).subscribe(data => {
        this.characters.push(data);
      })
    });
  }
}