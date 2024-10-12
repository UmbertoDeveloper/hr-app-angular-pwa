
export class Column {
    private _attribute: string;
    private _header: string;

    constructor(attribute: string, header: string) {
        this._attribute = attribute;
        this._header = header;
    }

    get attribute(): string {
        return this._attribute;
    }

    set attribute(value: string) {
        this._attribute = value;
    }

    get header(): string {
        return this._header;
    }

    set header(value: string) {
        this._header = value;
    }
}