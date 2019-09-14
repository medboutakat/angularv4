import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ROOT_URL } from 'src/Models/Config';
import { Vendor } from 'src/Models/vendor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  endpoints:string = "Vendor";
  newObject: Vendor;
  

  constructor(private http:HttpClient) { }

  
  Get():Observable<Vendor[]> {
    return this.http.get<Vendor[]>(ROOT_URL+"Vendor");
  }
  
  Get1(id:number):Observable<Vendor> {
    return this.http.get<Vendor>(ROOT_URL+"Vendor/"+ id);
  }
  

  Add(obj: Vendor) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      id:obj.id, Code: obj.code, name1: obj.name1, name2: obj.name2,
      Adress:obj.adress, City : obj.city, Phone : obj.phone, GSM : obj.gsm, FAX: obj.fax, Email : obj.email 
    }    
    //console.log("Trip"+this.fullURLS);
    return this.http.post<Vendor>(ROOT_URL+"Vendor/", body, { headers })
  }

  Edit(obj: Vendor) {
    console.log(obj);
    const params = new HttpParams().set('ID', obj.id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      id:obj.id, Code: obj.code, name1: obj.name1, name2: obj.name2,
      Adress:obj.adress, City : obj.city, Phone : obj.phone, GSM : obj.gsm, FAX: obj.fax, Email : obj.email 
    }
    
    return this.http.put<Vendor>("Vendor/"+obj.id, body, { headers, params })
  }
  
  Delete(id: string) {
    const params = new HttpParams().set('ID', id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Vendor>("Vendor/" + id);
  }
}
