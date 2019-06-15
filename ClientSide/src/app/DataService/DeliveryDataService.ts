import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delivery } from 'src/Models/Delivery'
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';
@Injectable()
export class DeliveryDataService {

  endPoints:String="deliveries";  
  endPoint:String="delivery";
  Deliverys: Observable<Delivery[]>;
  newDelivery: Delivery;
  constructor(private http: HttpClient) {

  }

  getDelivery() {
    return this.http.get<Delivery[]>(ROOT_URL +this.endPoints);
  }
  AddDelivery(emp: Delivery) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      Displayname: emp.displayname, Value: emp.value,   ID: emp.id
    }
    
    console.log(ROOT_URL);
    return this.http.post<Delivery>(ROOT_URL + this.endPoints+'/', body, { headers })
  }

  ///
  EditDelivery(emp: Delivery) {
    console.log(emp);
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Displayname: emp.displayname, Value: emp.value,   ID: emp.id
    }
    
    return this.http.put<Delivery>(ROOT_URL + this.endPoints+'/' + emp.id, body, { headers, params })

  }
  DeleteDelivery(emp: Delivery) {
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Displayname: emp.displayname, Value: emp.value,   ID: emp.id
    }
    return this.http.delete<Delivery>(ROOT_URL + this.endPoints+'/' + emp.id)

  }


}




