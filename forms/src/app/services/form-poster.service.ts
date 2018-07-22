import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class FormService {
    constructor(private _http: Http) {}

    private extractData(res: Response) {
        const bodyq = res.json();
        return bodyq.field || { };
    }

    private handleError(error: any) {
        return Observable.throw(error.statusText);
    }
    postEmploye(employee: Employee): Observable<any> {
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this._http.post('http://localhost:3100/postemployee', body, options)
                .pipe(map(this.extractData));
    }

}


