import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ROOT_URL} from '../../../Models/Config'
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) { }

  endPoint:string="InvoiceHeaders";

  get(){
    console.log(ROOT_URL+this.endPoint);
    return this.http.get(ROOT_URL+this.endPoint);
  }
}
