import {Athlete} from './athlete.model'; 
import { Observable } from 'rxjs';
import { RequestOptions } from 'http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AthleteService {
  
      REQUEST_OPTIONS :HttpHeaders= new HttpHeaders().set('content-type', 'application/json');

    private apiRootUrl = 'http://localhost:8080';

    private findAllUrl = this.apiRootUrl + '/athletes';
    private findByIdUrl = this.apiRootUrl + '/athlete';
    private saveUpdateUrl = this.apiRootUrl + '/saveAthlete';
    private deleteUrl = this.apiRootUrl + '/deleteAthlete';


    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Athlete[]> { 
     return this.http.get<Athlete[]>(this.findAllUrl); 
    }
    findById(id: number): Observable<Athlete> {
     return this.http.get<Athlete>(this.findByIdUrl + '/' + id);
    }

    
    // findById(id: number): Observable<Athlete> {
    //     return this.http.get(this.findByIdUrl + '/' + id).pipe(
    //         .map((response: Response) => response.json())
    //         .catch(this.defaultErrorHandler());
    // }

    save(athlete: Athlete): Observable<Athlete> {
        const headers = new HttpHeaders().set('content-type', 'application/json'); 
        return this.http.post<Athlete>(this.saveUpdateUrl, athlete,{headers});
            // .map((response: Response) => response.json())
            // .catch(this.defaultErrorHandler());
    }

    delete(athlete: Athlete): Observable<boolean> {
        
        const headers = new HttpHeaders().set('content-type', 'application/json'); 
        return this.http.post<boolean>(this.deleteUrl, athlete.id,{headers});
            // .map((response: Response) => response.json())
            // .catch(this.defaultErrorHandler());
    }

    private defaultErrorHandler() {
        return (error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || 'Server error')
        };
    }
}
