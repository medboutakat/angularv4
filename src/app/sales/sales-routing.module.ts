import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoiceResolverService } from './invoice-resolver-service';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';

const routes: Routes = [ 
  {path: 'invoices', component: InvoiceComponent,resolve: { datas: InvoiceResolverService }}, 
  {path: 'invoices/Edit/:id',component:InvoiceEditComponent,resolve: { datas: InvoiceResolverService }},
  {path: 'customers', component: CustomersComponent},
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
export class SalesRoutingModule { }
