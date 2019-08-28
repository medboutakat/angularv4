import { Injectable } from '@angular/core';
import { InvoiceHeader } from 'src/Models/Commande';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ROOT_URL } from 'src/Models/Config';
import { _ } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  endPoints:String="invoiceheaders";  
  endPoint:String="invoiceheaders";
  Deliverys: Observable<InvoiceHeader[]>;
  newDelivery: InvoiceHeader;
  constructor(private http: HttpClient) {

  }

  Get() {
    return this.http.get<InvoiceHeader[]>(ROOT_URL +this.endPoints);
  }

  Find(id : string) {
    return this.http.get<InvoiceHeader>(ROOT_URL +this.endPoints+"/"+id);
  }

  Add(_objView: InvoiceHeader) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
  
    var body = {
      code: _objView.code, date: _objView.date,   InvoiceDetails: _objView.invoiceDetails
    }
    
    console.log(ROOT_URL);
    return this.http.post<InvoiceHeader>(ROOT_URL + this.endPoints+'/', body, { headers })
  }

  ///
  Edit(_objView: InvoiceHeader) {
    console.log(_objView);
    const params = new HttpParams().set('ID', _objView.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      id:_objView.id,  code: _objView.code, date: _objView.date,   InvoiceDetails: _objView.invoiceDetails
    }
    
    return this.http.put<InvoiceHeader>(ROOT_URL + this.endPoints+'/' + _objView.id, body, { headers, params })

  }
  Delete(_objView: InvoiceHeader) {
    const params = new HttpParams().set('ID', _objView.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
     id:_objView.id, code: _objView.code, date: _objView.date,   InvoiceDetails: _objView.invoiceDetails
    }
    return this.http.delete<InvoiceHeader>(ROOT_URL + this.endPoints+'/' + _objView.id)

  }

}
