import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeFavoritesComponent } from './components/episode-favorites/episode-favorites.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { EpisodeListPageComponent } from './components/episode-list-page/episode-list-page.component';

const routes: Routes = [
  //todo direct to list page on init
  {
    path: '',
    component: EpisodeListPageComponent
  },
  {
    path: 'favorites', 
    component: EpisodeFavoritesComponent
  },
  {
    path: 'details', 
    component: EpisodeDetailsComponent
  },
  {
    path: 'results', 
    component: SearchResultsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
