import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/Models/client'
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';
@Injectable()
export class ClientDataService {

  endPoints:String="clients";  
  endPoint:String="client";
  clients: Observable<Client[]>;
  newclient: Client;
  constructor(private http: HttpClient) {

  }
//http://localhost:42333/api/clients
  getClient() {
    return this.http.get<Client[]>(ROOT_URL +this.endPoints);
  }
  AddClient(emp: Client) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      name1: emp.name1, name2: emp.name2,name3: emp.name3 ,clientCategorieId:emp.categorieId
    }
    
    console.log(ROOT_URL);
    return this.http.post<Client>(ROOT_URL + this.endPoints+'/', body, { headers })
  }

  ///
  EditClient(emp: Client) {
    console.log(emp);
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      name1: emp.name1, name2: emp.name2,   name3: emp.name3, clientCategorieId:emp.categorieId ,id:emp.id
    }
    
    return this.http.put<Client>(ROOT_URL + this.endPoints+'/' + emp.id, body, { headers, params })

  }
  DeleteClient(emp: Client) {
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      name1: emp.name1, name2: emp.name2,   name3: emp.name3, clientCategorieId:emp.categorieId
    }
    return this.http.delete<Client>(ROOT_URL + this.endPoint+'/' + emp.id)

  }


}




