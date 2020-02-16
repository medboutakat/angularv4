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

  getVat() {

    console.log("vats : ")
    return this.http.get<Vat[]>(ROOT_URL + 'Vats');
  }
  AddVat(emp: Vat) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      Code: emp.code, Name: emp.name, Value: emp.value,  ID: emp.id
    }
    
    console.log(ROOT_URL);
    return this.http.post<Vat>(ROOT_URL + 'Vats/', body, { headers })
  }

  ///
  EditVat(emp: Vat) {
    console.log(emp);
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Code: emp.code, Name: emp.name, Value: emp.value,  ID: emp.id
    }
    
    return this.http.put<Vat>(ROOT_URL + 'Vats/' + emp.id, body, { headers, params })

  }
  DeleteVat(emp: Vat) {
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      name: emp.name,  code: emp.code , Value: emp.value,   id: emp.id
    }
    return this.http.delete<Vat>(ROOT_URL + 'Vats/' + emp.id)

  }


}




