import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoiceResolverService } from './invoice-resolver-service';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';

const routes: Routes = [ 
  {path: 'invoices', component: InvoiceComponent,resolve: { datas: InvoiceResolverService }}, 
  {path: 'customers', component: CustomersComponent},
  {path: 'customersedit', component: CustomersEditComponent}
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
