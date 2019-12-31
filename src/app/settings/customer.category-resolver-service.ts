import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { VatService } from "./vat-service";
import { Injectable } from "@angular/core";
import { Vat } from "src/Models/Vat";
import { CustomerCategoryService } from "./customer.category-service";
import { CustomerCategory } from "src/Models/CustomerCategory";

@Injectable()

 export class CustomerCategoryResolverService implements Resolve<CustomerCategory[]> {
    constructor(private service: CustomerCategoryService) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
      var datas=this.service.Get();  
      return datas;  
    } 
  }