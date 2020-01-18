import { Injectable } from '@angular/core';
import { Statut } from 'src/Models/Statut';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { ROOT_URL } from 'src/Models/Config'


@Injectable({
  providedIn: 'root'
})
export class StautService implements  ICrudOperation{

  
  /*********************Delete Statut******************************** */
  
    url:string;
   
    constructor(private http:HttpClient) { 
      this.url=ROOT_URL+"statuts/";
    }
      /*********************get Statut********************** */
    get() {
        return this.http.get<Statut[]>(this.url);
    }

      /************************Post statut*************************** */
      
    add(emp:Statut) {
      const headers = new HttpHeaders().set('content-type', 'application/json');
      var body = {
        name: emp.name, remarque: emp.remark,   id: emp.id
      }
      console.log(this.url);
      return this.http.post<Statut>(this.url, body, { headers })
    }
    
    /****************** ***Edit Statut*******************/   
    update(emp: Statut) {
      console.log("emp id : ",emp.id);
      const params = new HttpParams().set('id',emp.id);
      const headers = new HttpHeaders().set('content-type', 'application/json');
      var body = {
        libelle: emp.name,remarque: emp.remark,id: emp.id
      }
      return this.http.put<Statut>(this.url + emp.id, body, {headers,params})
    }

    delete(id){
      return this.http.delete(this.url+id);
    }

    
}

