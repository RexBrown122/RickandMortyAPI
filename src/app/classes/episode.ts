export class Episode {
    private _id: number;
    private _name: string;
    private _air_date: string;
    private _episode: string;
    private _characters: Array<string>;
    private _url: string;
    private _created: string;

    constructor(
        _id?: number,
        _name?: string,
        _air_date?: string,
        _episode?: string,
        _characters?: Array<string>,
        _url?: string,
        _created?: string
        ) {

        this._id = _id;
        this._name = _name;
        this._air_date = _air_date;
        this._episode = _episode;
        this._characters = _characters;
        this._url = _url;
        this._created = _created;
    }

    get id() {
        return this._id;
    }
    
    get name() {
        return this._name;
    }

    get air_date() {
        return this._air_date;
    }

    get episode() {
        return this._episode;
    }

    get characters() {
        return this._characters;
    }

    get url() {
        return this._url;
    }

    get created() {
        return this._created;
    }

    set id(id: number) {
        this._id = id;
    }
    
    set name(name: string) {
        this._name = name;
    }

    set air_date(date: string) {
        this._air_date = date;
    }

    set episode(episode: string) {
        this._episode = episode;
    }

    set characters(characters: string[]) {
        this._characters = characters;
    }

    set url(url: string) {
        this._url = url;
    }

    set created(created: string) {
        this._created = created;
    }
}