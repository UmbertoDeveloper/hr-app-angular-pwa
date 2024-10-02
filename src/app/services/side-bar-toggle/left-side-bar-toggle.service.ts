import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable()

export class LeftSideBarToggleService {
    private subject = new Subject<any>();

    toggleOn(): void {
        this.subject.next(true);
    }

    toggleOff(): void {
        this.subject.next(false);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
