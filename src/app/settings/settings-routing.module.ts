import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';  
import { StatutComponent } from './statut/statut.component';

import { VatComponent } from './vat/vat.component'; 
import { VatResolverService } from './vat-resolver-service';
import { CustomerCategoryComponent } from './customer.category/customer.category.component';
import { CustomerCategoryResolverService } from './customer.category-resolver-service';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { CustomerLocationComponent } from './customer-location/customer-location.component';
const routes: Routes = [ 
  {path: 'status', component: StatutComponent}, 
  {path: 'vats', component: VatComponent,resolve: { vats: VatResolverService }},
  {path: 'customercategory', component: CustomerCategoryComponent},
  {path: 'productcategory', component:ProductCategoryComponent},
  {path: 'customerLocation', component:CustomerLocationComponent}
];

@NgModule({
  // tslint:disable-next-line:no-trailing-whitespace
  declarations: [], 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
