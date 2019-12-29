import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';
import { ClientCategory } from 'src/Models/ClientCategory';
@Injectable()
export class ClientCategoryDataService {

  endPoints:String="clientcategories";  
  endPoint:String="clientcategory";
  Categories: Observable<ClientCategory[]>; 
  constructor(private http: HttpClient) {

  }
//http://localhost:42333/api/Categories
  getCategory() {
    return this.http.get<ClientCategory[]>(ROOT_URL +this.endPoints);
  }
  // AddCategory(emp: ClientCategory) {
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  
  //   var body = {
  //     name: emp.name, remarque: emp.remarque,dateCreate: emp.dateCreate ,dateUpdate: emp.dateUpdate
  //   }
    
  //   console.log(ROOT_URL);
  //   return this.http.post<ClientCategory>(ROOT_URL + this.endPoints+'/', body, { headers })
  // }

  // ///
  // EditCategory(emp: ClientCategory) {
  //   console.log(emp);
  //   const params = new HttpParams().set('ID', emp.id);
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  //   var body = {
  //     name: emp.name, remarque: emp.remarque,dateCreate: emp.dateCreate ,dateUpdate: emp.dateUpdate
  //   }
    
  //   return this.http.put<ClientCategory>(ROOT_URL + this.endPoint+'/' + emp.id, body, { headers, params })

  // }
  // DeleteCategory(emp: ClientCategory) {
  //   const params = new HttpParams().set('ID', emp.id);
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  //   var body = {
  //     name: emp.name, remarque: emp.remarque,dateCreate: emp.dateCreate ,dateUpdate: emp.dateUpdate
  //   }
  //   return this.http.delete<ClientCategory>(ROOT_URL + this.endPoints+'/' + emp.id)

  // }


}




