import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vat } from 'src/Models/Vat'
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';

@Injectable()
export class VatService {

  
  Vats: Observable<Vat[]>;
  newVat: Vat;
  constructor(private http: HttpClient) {

  }

  getAll() { 
    return this.http.get<Vat[]>(ROOT_URL + 'Vats');
  } 
  getOne(objId:number) { 
    return this.http.get<Vat>(ROOT_URL + 'Vats/'+objId);
  }

  Add(emp: Vat) {
    const headers = new HttpHeaders().set('content-type', 'application/json'); 
 
     var body = {
     code: emp.code, name: emp.name,value: emp.value
    }    
    console.log("post request",body)
    return this.http.post<Vat>(ROOT_URL + 'vats/', body, { headers })
  }

  ///
  Update(emp: Vat) {
    console.log(emp);
    const params = new HttpParams().set('Id', emp.id+"");
    const headers = new HttpHeaders().set('content-type', 'application/json');
   
    var body = {
      "code": emp.code, "name": emp.name, "value": emp.value,  "id": emp.id
    }    
    console.log("post request",body)
    
    return this.http.put<Vat>(ROOT_URL + 'vats/' + emp.id, body, { headers, params })
  }
  Delete(emp: Vat) {  
    return this.http.delete<Vat>(ROOT_URL + 'vats/' + emp.id)
  }
}




