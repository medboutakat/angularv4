import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from 'src/Models/Bank'
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';
@Injectable()
export class BankDataService {

  
  Objects: Observable<Bank[]>;
  newObject: Bank;
  fullURL:string;
  fullURLS:string;
  
  constructor(private http: HttpClient) {
    this.fullURL=ROOT_URL+"Banks";
    this.fullURLS=this.fullURL+"/"; 
  }

  Get() {
    return this.http.get<Bank[]>(ROOT_URL+"Banks");
  }
  
  Add(obj: Bank) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      Displayname: obj.name, Value: obj.shortName, ID: obj.id
    }
    
    console.log(ROOT_URL);
    return this.http.post<Bank>(this.fullURLS, body, { headers })
  }

  ///
  Edit(obj: Bank) {
    console.log(obj);
    const params = new HttpParams().set('ID', obj.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Displayname: obj.name, Value: obj.shortName,   ID: obj.id
    }
    
    return this.http.put<Bank>(this.fullURLS+obj.id, body, { headers, params })
  }
  
  Delete(obj: Bank) {
    const params = new HttpParams().set('ID', obj.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Bank>(this.fullURLS + obj.id)
  }


}




