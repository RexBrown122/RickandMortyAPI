import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RickandMortyService } from '../../services/rickand-morty.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    search_string: new FormControl(''),
  });

  constructor(private RickandMortyService: RickandMortyService) { }

  ngOnInit(): void {
  }

}
