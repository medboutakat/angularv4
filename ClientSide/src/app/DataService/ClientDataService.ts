import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, client } from 'src/Models/client';
import { ROOT_URL } from 'src/Models/Config'

import { Observable } from 'rxjs';

@Injectable()
export class ClientDataService {

  endPoints: String = "customers";
  endPoint: String = "customer";
  clients: Observable<Client[]>;
  newclient: Client;
  constructor(private http: HttpClient) {

  }
  //http://localhost:42333/api/clients
  getClient(): Observable<client[]> {
    return this.http.get<client[]>(ROOT_URL + this.endPoints);
  }

  findAll(): Observable<client[]> {
    return this.http.get<client[]>("http://localhost:4200/assets/clients.json");
  }
  getOne(id:string): Observable<client>{
    return this.http.get<client>(ROOT_URL + this.endPoints+"/"+id);
  }

  AddClient(emp: client) {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      name1: emp.name1, name2: emp.name2, name3: emp.name3, clientCategorieId: emp.clientCategorieID
    }

    console.log(ROOT_URL);
    return this.http.post<Client>(ROOT_URL + this.endPoints + '/', body, { headers })
  }

  ///
  EditClient(emp: client) {
    console.log(emp);
    const params = new HttpParams().set('ID', emp.id+'');
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      name1: emp.name1, name2: emp.name2, name3: emp.name3, clientCategorieId: emp.clientCategorieID, id: emp.id
    }

    return this.http.put<Client>(ROOT_URL + this.endPoints + '/' + emp.id, body, { headers, params })

  }
  DeleteClient(id:number) {
    const params = new HttpParams().set('ID',id+'');
    const headers = new HttpHeaders().set('content-type', 'application/json');
    
    return this.http.delete<Client>(ROOT_URL + this.endPoint + '/' + id)

  }


}




