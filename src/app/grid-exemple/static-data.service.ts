import {Sport} from './sport.model';
import {Country} from './country.model';
import {StaticData} from './static-data.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class StaticDataService {
    private apiRootUrl = 'http://localhost:8080';

    private countriesUrl = this.apiRootUrl + '/countries';
    private sportsUrl = this.apiRootUrl + '/sports';

    static alphabeticalSort() {
        return (a: StaticData, b: StaticData) => a.name.localeCompare(b.name);
    }

    constructor(private http: HttpClient) {
    }

    countries(): Observable<Country[]> {
        return this.http.get<Country[]>(this.countriesUrl);
            // .map((response: Response) => response.json())
            // .catch(this.defaultErrorHandler());
    }

    sports(): Observable<Sport[]> {
        return this.http.get<Sport[]>(this.sportsUrl)
            // .map((response: Response) => response.json())
            // .catch(this.defaultErrorHandler());
    }

    private defaultErrorHandler() {
        return (error: any) => Observable.throw(error.json().error || 'Server error');
    }
}
