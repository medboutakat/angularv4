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
import { StatutEditComponent } from './statut-edit/statut-edit.component';
import { MatInputModule, MatFormFieldModule, MatLabel, MatButtonModule } from '@angular/material';

 
const MaterialComponents=[
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
]


@NgModule({
  declarations: [
    VatComponent,
    VatEditComponent,
    StatutComponent,  
    StatutEditComponent,
    CustomerCategoryComponent ,
    CustomerCategoryEditComponent 
  ],
  imports: [
    
    MaterialComponents,
    CommonModule ,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]), 

  ],
  providers: [
    VatService,
    VatResolverService,
    CustomerCategoryService,
    CustomerCategoryResolverService
  ]
})
export class SettingsModule { }
