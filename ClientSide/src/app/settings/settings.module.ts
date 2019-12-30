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
import { StatutEditComponent } from './statut-edit/statut-edit.component';
import { ControlsModule } from '../controls/controls.module';
import { CustomerCategoryComponent } from './customer-category/customer-category.component';
import { CustomerCategoryEditComponent } from './customer-category-edit/customer-category-edit.component';
import { DeletecustomercatComponent } from './deletecustomercat/deletecustomercat.component';



@NgModule({
  declarations: [
    VatComponent,
    VatEditComponent,
    StatutComponent,
    StatutEditComponent,
    CustomerCategoryComponent,
    CustomerCategoryEditComponent,
    DeletecustomercatComponent, 
  ],
  entryComponents: [
     CustomerCategoryEditComponent ,
     DeletecustomercatComponent
    ],
  imports: [
    CommonModule ,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    ControlsModule,// khassak t importi l module hit app select kayena f module wahed akhor  ControlModule
    AgGridModule.withComponents([]),
  ],
  providers: [
    VatService,
    VatResolverService
  ]
})
export class SettingsModule { }
