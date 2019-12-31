import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { ROOT_URL } from 'src/Models/Config';
import { Observable } from 'rxjs';
import { CustomerCategory } from 'src/Models/CustomerCategory';
@Injectable()
export class CustomerCategoryService {

  
  Vats: Observable<CustomerCategory[]>;
  newVat: CustomerCategory;
  constructor(private http: HttpClient) {

  }

  Get() {
    return this.http.get<CustomerCategory[]>(ROOT_URL + 'CustomerCategories');
  }
  Add(emp: CustomerCategory) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      Displayname: emp.name, Value: emp.remarque,   ID: emp.id
    }
    
    console.log(ROOT_URL);
    return this.http.post<CustomerCategory>(ROOT_URL + 'CustomerCategories/', body, { headers })
  }

  ///
  Edit(emp: CustomerCategory) {
    console.log(emp);
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      DisplayName: emp.name, Value: emp.remarque,   ID: emp.id
    }
    
    return this.http.put<CustomerCategory>(ROOT_URL + 'CustomerCategories/' + emp.id, body, { headers, params })

  }
  Delete(emp: CustomerCategory) {
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Displayname: emp.name, Value: emp.remarque,   ID: emp.id
    }
    return this.http.delete<CustomerCategory>(ROOT_URL + 'CustomerCategories/' + emp.id)

  }


}




