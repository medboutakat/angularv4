import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { RetourComponent } from './retour/retour.component';
import { VendorComponent } from './vendor/vendor.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [RetourComponent, VendorComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,    
    AgGridModule.withComponents([]),
  ]
})
export class PurchaseModule { }
