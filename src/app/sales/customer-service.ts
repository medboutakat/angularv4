import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { ROOT_URL } from 'src/Models/Config'

import { Observable } from 'rxjs';

@Injectable()
export class ClientDataService {
export class CustomerService {

  endPoints: String = "customers";
  endPoint: String = "customer";
  clients: Observable<Customer[]>;
  newclient: Customer;
  constructor(private http: HttpClient) {

  }

  //http://localhost:42333/api/clients
  GetAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(ROOT_URL + this.endPoints);
  }

  // findAll(): Observable<Customer[]> {
  //   return this.http.get<Customer[]>("http://localhost:4200/assets/clients.json");
  // }

  getOne(id:string): Observable<Customer>{
    return this.http.get<Customer>(ROOT_URL + this.endPoints+"/"+id);
  }

  Add(emp: Customer) {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      id: emp.id, code:emp.code, name1: emp.name1, name2: emp.name2, name3: emp.name3,
      patent: emp.patent, adresse: emp.adresse, gender: emp.gender, email: emp.email,
      rc: emp.rc, clientCategorieID: emp.clientCategorieID, contracts: emp.contracts,
      clientLocationID: emp.clientLocationID, clientLocation: emp.clientLocation
    }

    console.log(ROOT_URL);
    return this.http.post<Customer>(ROOT_URL + this.endPoints + '/', body, { headers })
  }

  ///
  Update(emp: Customer) {
    console.log(emp);
    const params = new HttpParams().set('ID', emp.id+'');
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      name1: emp.name1, name2: emp.name2, name3: emp.name3, clientCategorieId: emp.clientCategorieID, id: emp.id
    }

    return this.http.put<Customer>(ROOT_URL + this.endPoints + '/' + emp.id, body, { headers, params })
  }

  Delete(id:number) {
    const params = new HttpParams().set('ID',id+'');
    const headers = new HttpHeaders().set('content-type', 'application/json');
    
    return this.http.delete<Customer>(ROOT_URL + this.endPoint + '/' + id)

  }


}




