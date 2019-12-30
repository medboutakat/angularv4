import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { InvoiceService } from "./invoice.service";
import { InvoiceHeader } from "src/Models/InvoiceModels"

@Injectable()

 export class InvoiceResolverService implements Resolve<any> {
    constructor(private invoiceService: InvoiceService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
      var editedObjectId= route.paramMap.get('id')    

      let editiew=false;
       route.url.forEach(element => {
         if(element.path === 'Edit'){
          editiew=true;
          return;
         }
      });
      if(editiew){ 
        if(editedObjectId!=null){  
         return this.invoiceService.Find(editedObjectId);
        }
       }
      else {  
        return this.invoiceService.Get();  
      }  
    } 
  }