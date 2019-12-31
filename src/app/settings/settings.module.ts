import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { VatComponent } from './vat/vat.component';
import { VatEditComponent } from './vat-edit/vat-edit.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { VatService } from './vat-service';
import { VatResolverService } from "./vat-resolver-service";
import { StatutComponent } from './statut/statut.component';
import { CustomerCategoryResolverService } from './customer.category-resolver-service';
import { CustomerCategoryService } from './customer.category-service';
import { CustomerCategoryEditComponent } from './customer.category-edit/customer.category-edit.component';
import { CustomerCategoryComponent } from './customer.category/customer.category.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CustomerLocationComponent } from './customer-location/customer-location.component';
import { CustomerLocationEditComponent } from './customer-location-edit/customer-location-edit.component';



@NgModule({
  declarations: [
    VatComponent,
    VatEditComponent,
    StatutComponent, 
    CustomerCategoryComponent ,
    CustomerCategoryEditComponent,
    ProductCategoryComponent,
    CustomerLocationComponent,
    CustomerLocationEditComponent 
  ],
  imports: [
    CommonModule ,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ],
  entryComponents: [
    CustomerLocationEditComponent
  ],
  providers: [
    VatService,
    VatResolverService,
    CustomerCategoryService,
    CustomerCategoryResolverService
  ]
})
export class SettingsModule { }
