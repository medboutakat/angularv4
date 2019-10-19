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
  show:boolean = false;
  do : number = 0;
  
  


  constructor(private http:HttpClient) { }

  
  Get():Observable<Vendor[]> {
    return this.http.get<Vendor[]>(ROOT_URL+"Vendor");
  }
  
  Get1(id:number):Observable<Vendor> {
    return this.http.get<Vendor>(ROOT_URL+"Vendor/"+ id);
  }
  

  // Add(obj: Vendor) {
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  
  // //   var body = {
  // //      Code: obj.code, name1: obj.name1, name2: obj.name2,
  // //     Adress:obj.adress, City : obj.city, Phone : obj.phone, GSM : obj.gsm, FAX: obj.fax, Email : obj.email 
  // //   }    


  //   var body2={
  //      ID :0,
  //      Code :  "i123" ,
  //      Name1 :  "danone" ,
  //      Name2 :  "yawmi" ,
  //      Adress :  "saada" ,
  //      City :  "casa" ,
  //      Phone :  "0632145228" ,
  //      FAX :  "0532619487" ,
  //      Email : "aaaaa@gmail.com"
  //   }
    
  //   console.log("Trip"+ROOT_URL);
  //   console.log("body"+body);
  //   return this.http.post<Vendor>(ROOT_URL+"Vendor/", body2, { headers })
  // }

  Add(obj: Vendor) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      Code: obj.code, name1: obj.name1, name2: obj.name2,
      Adress:obj.adress, City : obj.city, Phone : obj.phone, GSM : obj.gsm, FAX: obj.fax, Email : obj.email 
    }
    
    console.log(ROOT_URL);
    return this.http.post<Vendor>(ROOT_URL + this.endpoints+'/', body, { headers })
  }


  Edit(obj) {
    console.log(obj); 
    const params = new HttpParams().set('ID', obj.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      id:obj.id, Code: obj.code, name1: obj.name1, name2: obj.name2,
      Adress:obj.adress, City : obj.city, Phone : obj.phone, GSM : obj.gsm, FAX: obj.fax, Email : obj.email 
    }
    
    return this.http.put<Vendor>(ROOT_URL+"vendor/"+obj.id, body, { headers, params })
  }
  
  Delete(_objView: Vendor) {
    const params = new HttpParams().set('ID', _objView.id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');    
    return this.http.delete<Vendor>(ROOT_URL+"Vendor/" + _objView.id);
  }

}
