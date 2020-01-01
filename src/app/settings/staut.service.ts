import { Injectable } from '@angular/core';
import { Statut } from 'src/Models/statut.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StautService {

   url:string="http://192.168.0.220:42333/api/statuts/";
  constructor(private http:HttpClient ) { }
    /*********************get Statut********************** */
    getStatuts() {
      return this.http.get<Statut[]>(this.url);
    }
    /************************Post statut*************************** */
    AddStatut(emp:Statut) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      libelle: emp.libelle, remarque: emp.remarque,   id: emp.id
    }
    console.log(this.url);
    return this.http.post<Statut>(this.url, body, { headers })
  }
  
  /****************** ***Edit Statut*******************/   
  EditStatut(emp: Statut) {
    console.log("emp id : ",emp.id);
    const params = new HttpParams().set('id',emp.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      libelle: emp.libelle,remarque: emp.remarque,id: emp.id
    }
    return this.http.put<Statut>(this.url + emp.id, body, {headers,params})
  }

  /*********************Delete Statut******************************** */
    delete(id){
      return this.http.delete(this.url+id);
    }
    
}

