import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ROOT_URL} from '../../Models/Config';
import { Observable } from 'rxjs';
import { Product } from 'src/Models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  Get(){
    return this.http.get(ROOT_URL+"Products");
  }
  Add(produit:Product){
 
    return this.http.post(ROOT_URL +"Products", produit);
  }
}


