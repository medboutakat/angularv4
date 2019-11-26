import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { InvoiceService } from "./invoice.service";
import { InvoiceHeader } from "src/Models/InvoiceModels"

@Injectable()

 export class InvoiceResolverService implements Resolve<InvoiceHeader[]> {
    constructor(private invoiceService: InvoiceService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
      var datas=this.invoiceService.Get();  
      return datas;  
    } 
  }