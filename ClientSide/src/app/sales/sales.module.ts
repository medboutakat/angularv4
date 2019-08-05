import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component'; 
import { InvoiceService } from './invoice.service';
import { SalesRoutingModule } from './sales-routing.module';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceEditComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,  
    FormsModule,
    ReactiveFormsModule,
  ], 
  providers: [
    InvoiceService
  ]
})
export class SalesModule { }
