export class TableDataSource {
    private _totalElements: number;
    private _content: any[];

    constructor(totalElements: number, content: any[]) {
        this._totalElements = totalElements;
        this._content = content;
    }

    get totalElements(): number {
        return this._totalElements;
    }

    set totalElements(value: number) {
        this._totalElements = value;
    }

    get content(): any[] {
        return this._content;
    }

    set content(value: any[]) {
        this._content = value;
    }
}