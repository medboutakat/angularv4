import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/Models/Employee'
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';
@Injectable()
export class  IDataService<T> {
  
 
  employees: Observable<T[]>;
  newemployee: T;
  constructor(private http: HttpClient) {
    // this.newemployee=em;
  }


 loggingIdentity<T>(endsapi:string): T[] {
    console.log(endsapi);  // Array has a .length, so no more error
    return null;
 }

  getEmployee<T>(endsapi:string ) {

  //  let endsapi=nameof(T);

    return this.http.get<T[]>(ROOT_URL + endsapi);
  }


  
  AddObject(emp: T) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    // var body = {
    //   Fname: emp.firstname, Lname: emp.lastname, Email: emp.email,gender: emp.gender
    // }
    var body :T;
    for (var name in this.newemployee) {
      if (this.newemployee.hasOwnProperty(name)) {
        body[name]= this.newemployee[name];
      } 
    } 
    console.log(ROOT_URL);
    return this.http.post<T>(ROOT_URL + 'InvoiceHeaders/', body, { headers })
  }

  ///
  EditEmployee(emp: T) {
    console.log(emp);
    
    const params = new HttpParams().set('ID', emp['id']);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    // var body = {
    //   Fname: emp.firstname, Lname: emp.lastname, Email: emp.email, ID: emp.id
    //   , gender: emp.gender
    // }
  
    var body :T;
    for (var name in this.newemployee) {
      if (this.newemployee.hasOwnProperty(name)) {
        body[name]= this.newemployee[name];
      } 
    }
    return this.http.put<T>(ROOT_URL + 'Employees/' + emp['id'], body, { headers, params })

  }
  DeleteObject(emp: T) {
    const params = new HttpParams().set('ID', emp['id']);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      // Fname: emp.firstname, Lname: emp.lastname, Email: emp.email, ID: emp.id
    }
    
 
      return this.http.delete<T>(ROOT_URL + 'Employees/' + emp['id'])
 

  }


}




