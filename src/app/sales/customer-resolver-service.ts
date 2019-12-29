import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { InvoiceService } from "./invoice.service"; 
import { CustomerService } from "./customer-service";
import { Customer } from "src/Models/Customer";

@Injectable()

 export class CustomerResolverService implements Resolve<Customer[]> {
    constructor(private service: CustomerService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
      var datas=this.service.GetAll();  
      return datas;  
    } 
  }