import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeFavoritesComponent } from './components/episode-favorites/episode-favorites.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { EpisodeListPageComponent } from './components/episode-list-page/episode-list-page.component';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    EpisodeFavoritesComponent,
    EpisodeDetailsComponent,
    SearchComponent,
    SearchResultsComponent,
    EpisodeListPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
