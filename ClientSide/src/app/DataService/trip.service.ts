import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ROOT_URL } from 'src/Models/Config';
import { Trip } from 'src/Models/Trip';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  
  Objects: Observable<Trip[]>;
  newObject: Trip;
  fullURL:string;
  fullURLS:string;
  
  constructor(private http: HttpClient) {
    this.fullURL=ROOT_URL+"Trips";
    this.fullURLS=this.fullURL+"/"; 
  }

  Get1():Observable<Trip[]> {
    return this.http.get<Trip[]>(ROOT_URL+"Trips");
  }
  Get() {
    return this.http.get(ROOT_URL+"Trips");
  }
  Add(obj: Trip) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      Name: obj.name, StartDate: obj.startDate, EndDate: obj.endDate
    }
    
    console.log("Trip"+this.fullURLS);
    return this.http.post<Trip>(this.fullURLS, body, { headers })
  }

  ///
  Edit(obj: Trip) {
    console.log(obj);
    const params = new HttpParams().set('ID', obj.id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Name: obj.name, StartDate: obj.startDate, EndDate: obj.endDate,Id: obj.id
    }
    
    return this.http.put<Trip>(this.fullURLS+obj.id, body, { headers, params })
  }
  
  Delete(id: Number) {
    const params = new HttpParams().set('ID', id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Trip>(this.fullURLS + id)
  }

  
}
