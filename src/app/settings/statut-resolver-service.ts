import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { VatService } from "./vat-service";
import { Injectable } from "@angular/core";
import { Vat } from "src/Models/Vat";
import { StatutService } from "../DataService/statut.service";

@Injectable()

 export class StatutResolverService implements Resolve<Vat[]> {
    constructor(private statutService: StatutService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
      var data=this.statutService.getAll();  
      return data;  
    } 
  }