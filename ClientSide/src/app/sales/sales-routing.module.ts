import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


 
const routes: Routes = [ 
  {path:'',component:InvoiceComponent}, 
];

 

@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
