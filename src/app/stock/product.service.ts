import { Injectable } from '@angular/core';
import { ROOT_URL } from 'src/Models/Config'; 
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Objects: Observable<Product[]>;
  newObject: Product;
  fullURL:string;
  fullURLS:string;

  constructor(private http: HttpClient) {
    this.fullURL=ROOT_URL+"Trips";
    this.fullURLS=this.fullURL+"/"; 
  }

  Get1():Observable<Product[]> {
    return this.http.get<Product[]>(ROOT_URL+"Trips");
  }
  Get() {
    return this.http.get(ROOT_URL+"Trips");
  }
  Add(obj: Product) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      Code: obj.code, Name1: obj.name1, Description: obj.description,
      Price:obj.price,//tva=obj.tva

    }
    
    console.log("Trip"+this.fullURLS);
    return this.http.post<Product>(this.fullURLS, body, { headers })
  }

  ///
  Edit(obj: Product) {
    console.log(obj);
    const params = new HttpParams().set('ID', obj.id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Code: obj.code, Name1: obj.name1, Description: obj.description,
      Price:obj.price,//tva=obj.tva,id=obj.id
    }
    
    return this.http.put<Product>(this.fullURLS+obj.id, body, { headers, params })
  }
  
  Delete(id: string) {
    const params = new HttpParams().set('ID', id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Product>(this.fullURLS + id)
  }

}
