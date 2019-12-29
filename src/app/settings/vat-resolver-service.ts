import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { VatService } from "./vat-service";
import { Injectable } from "@angular/core";
import { Vat } from "src/Models/Vat";

@Injectable()

 export class VatResolverService implements Resolve<Vat[]> {
    constructor(private vatService: VatService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
      var vats=this.vatService.getVat();  
      return vats;  
    } 
  }