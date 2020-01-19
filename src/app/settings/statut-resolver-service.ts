import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { VatService } from "./vat-service";
import { Injectable } from "@angular/core";
import { Vat } from "src/Models/Vat"; 
import { StatutService } from "./StatutService";
import { Statut } from "src/Models/Statut";

@Injectable()

 export class StatutResolverService implements Resolve<Statut[]> {
    constructor(private statutService: StatutService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
      var data=this.statutService.get();  
      return data;  
    } 
  }