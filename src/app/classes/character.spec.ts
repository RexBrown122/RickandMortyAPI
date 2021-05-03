import { Character } from './character';

describe('Character', () => {
  let character: Character;

  beforeEach(() => {
    character = new Character();
  });

  it('should create an instance', () => {
    expect(new Character()).toBeTruthy();
  });

  it('should set and get id', () => {
    character.id = 1;
    expect(character.id).toEqual(1);
  });

  it('should set and get name', () => {
    character.name = "Ricky";
    expect(character.name).toMatch("Ricky");
  });

  it('should set and get status', () => {
    character.status = "alive";
    expect(character.status).toMatch("alive");
  });

  it('should set and get species', () => {
    character.species = "human";
    expect(character.species).toMatch("human");
  });

  it('should set and get type', () => {
    character.type = "cyborg";
    expect(character.type).toMatch("cyborg");
  });

  it('should set and get gender', () => {
    character.gender = "male";
    expect(character.gender).toMatch("male");
  });

  it('should set and get origin', () => {
    character.origin = {origin: "earth"};
    expect(character.origin).toEqual({origin: "earth"});
  });

  it('should set and get location', () => {
    character.location = {location: 'Earth'};
    expect(character.location).toEqual({location: 'Earth'});
  });

  it('should set and get image', () => {
    character.image = 'image.jpg';
    expect(character.image).toMatch('image.jpg');
  });

  it('should set and get episode', () => {
    character.episode = ['Episode 1'];
    expect(character.episode).toEqual(['Episode 1']);
  });

  it('should set and get url', () => {
    character.url = 'url.com';
    expect(character.url).toMatch('url.com');
  });

  it('should set and get created', () => {
    character.created = "monday";
    expect(character.created).toEqual("monday");
  });
});
