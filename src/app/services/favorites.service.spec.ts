import { TestBed } from '@angular/core/testing';
import { Episode } from '../classes/episode';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('favorite() should add episode to favorites', () => {
    let testEpisode: Episode = new Episode();
    service.favoriteEpisodes = [testEpisode];
    expect(service.favoriteEpisodes.length).toEqual(1);
  });

  it('remove() should remove episode from favorites', () => {
    let testEpisode: Episode = new Episode();
    service.favoriteEpisodes = [testEpisode];
    expect(service.favoriteEpisodes.length).toEqual(1);
    service.remove(testEpisode);
    expect(service.favoriteEpisodes.length).toEqual(0);
  });
});
