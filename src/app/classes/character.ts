// id	int	- The id of the character.
// name	string - The name of the character.
// status	string - The status of the character ('Alive', 'Dead' or 'unknown').
// species	string - The species of the character.
// type	string - The type or subspecies of the character.
// gender	string - The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
// origin	object - Name and link to the character's origin location.
// location	object - Name and link to the character's last known location endpoint.
// image	string (url) - Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
// episode	array (urls) - List of episodes in which this character appeared.
// url	string (url) - Link to the character's own URL endpoint.
// created	string - Time at which the character was created in the database.

export class Character {
    private _id: number;
    private _name: string;
    private _status: string;
    private _species: string;
    private _type?: string;
    private _gender: string;
    private _origin: object;
    private _location: object;
    private _image: string;
    private _episode: Array<string>;
    private _url: string;
    private _created: string;

    public get id(): number {
        return this._id;
    }

    public set id(_id: number) {
        this._id = _id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get status(): string {
        return this._status;
    }

    public set status(_status: string) {
        this._status = _status;
    }

    public get species(): string {
        return this._species;
    }

    public set species(_species: string) {
        this._species = _species;
    }

    public get type(): string {
        return this._type;
    }

    public set type(_type: string) {
        this._type = _type;
    }

    public get gender(): string {
        return this._gender;
    }

    public set gender(_gender: string) {
        this._gender = _gender;
    }

    public get origin(): object {
        return this._origin;
    }

    public set origin(_origin: object) {
        this._origin = _origin;
    }

    public get location(): object {
        return this._location;
    }

    public set location(_location: object) {
        this._location = _location;
    }

    public get image(): string {
        return this._image;
    }

    public set image(_image: string) {
        this._image = _image;
    }

    public get episode(): Array<string> {
        return this._episode;
    }

    public set episode(_episode: Array<string>) {
        this._episode = _episode;
    }

    public get url(): string {
        return this._url;
    }

    public set url(_url: string) {
        this._url = _url;
    }

    public get created(): string {
        return this._created;
    }

    public set created(_created: string) {
        this._created = _created;
    }

}