import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';  
import { StatutComponent } from './statut/statut.component';

import { VatComponent } from './vat/vat.component'; 
import { VatResolverService } from './vat-resolver-service';
import { StatutEditComponent } from './statut-edit/statut-edit.component';
import { CustomerCategory } from 'src/Models/CustomerCategory';
import { CustomerCategoryEditComponent } from './customer-category-edit/customer-category-edit.component';
import { CustomerCategoryComponent } from './customer-category/customer-category.component';
import { DeletecustomercatComponent } from './deletecustomercat/deletecustomercat.component';
const routes: Routes = [ 
  {path: 'status', component: StatutComponent}, 
  {path: 'vats', component: VatComponent,resolve: { vats: VatResolverService }},
  {path:'statusedit', component:StatutEditComponent},
  {path:'customerCategory', component:CustomerCategoryComponent},
  {path:'customerCategoryEdit', component:CustomerCategoryEditComponent},
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
