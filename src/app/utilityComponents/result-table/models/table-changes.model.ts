import { PageEvent } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";

export class TableChanges {
    private _page: PageEvent;
    private _sort: Sort;

    constructor(page: PageEvent, sort: Sort) {
        this._page = page;
        this._sort = sort;
    }

    get page(): PageEvent {
        return this._page;
    }

    set page(value: PageEvent) {
        this._page = value;
    }

    get sort(): Sort {
        return this._sort;
    }

    set sort(value: Sort) {
        this._sort = value;
    }
}