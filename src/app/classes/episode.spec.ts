import { Episode } from './episode';

describe('Episode', () => {
  let episode: Episode;

  beforeEach(() => {
    episode = new Episode();
  });

  it('should create an instance', () => {
    expect(episode).toBeTruthy();
  });

  it('should set and get id', () => {
    episode.id = 1;
    expect(episode.id).toEqual(1);
  });

  it('should set and get name', () => {
    episode.name = "Filler Episode"
    expect(episode.name).toMatch("Filler Episode");
  });

  it('should set and get air_date', () => {
    episode.air_date = "1/1/2021";
    expect(episode.air_date).toMatch("1/1/2021");
  });

  it('should set and get episode_code', () => {
    episode.episode = "S0E100";
    expect(episode.episode).toMatch("S0E100");
  });

  it('should set and get characters', () => {
    episode.characters = ["Rick","Morty"];
    expect(episode.characters).toEqual(["Rick","Morty"]);
  });

  it('should set and get url', () => {
    episode.url = "google.com";
    expect(episode.url).toMatch("google.com");
  });

  it('should set and get date_created', () => {
    episode.created = "1/1/2021";
    expect(episode.created).toMatch("1/1/2021");
  });
});
