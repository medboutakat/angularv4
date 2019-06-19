import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceHeader } from 'src/Models/Commande'
import { ROOT_URL } from 'src/Models/Config'
import { Observable } from 'rxjs';
@Injectable()
export class CommandeDataService {

  endPoints:String="commandes";  
  endPoint:String="commande";
  commandes: Observable<InvoiceHeader[]>;
  newcommande: InvoiceHeader;
  constructor(private http: HttpClient) {

  }
//http://localhost:42333/api/commandes
  getInvoiceHeader() {
    return this.http.get<InvoiceHeader[]>(ROOT_URL +this.endPoints);
  }
  AddInvoiceHeader(emp: InvoiceHeader) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      code: emp.code, date: emp.date,InvoiceDetail:emp.invoiceDetails
    }
    
    console.log(ROOT_URL);
    return this.http.post<InvoiceHeader>(ROOT_URL + this.endPoints+'/', body, { headers })
  }

  ///
  EditInvoiceHeader(emp: InvoiceHeader) {
    console.log(emp);
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      code: emp.code, date: emp.date,InvoiceDetail:emp.invoiceDetails    }
    
    return this.http.put<InvoiceHeader>(ROOT_URL + this.endPoints+'/' + emp.id, body, { headers, params })

  }
  DeleteInvoiceHeader(emp: InvoiceHeader) {
    const params = new HttpParams().set('ID', emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      code: emp.code, date: emp.date,InvoiceDetail:emp.invoiceDetails    }
    return this.http.delete<InvoiceHeader>(ROOT_URL + this.endPoint+'/' + emp.id)

  }


}




