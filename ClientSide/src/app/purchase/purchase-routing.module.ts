import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor/vendor.component';
import { RetourComponent } from './retour/retour.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';


const routes: Routes = [
  {
    path : 'vendor',
    component : VendorComponent,
    pathMatch : 'full'
  },
  {
    path : 'vendor-edit',
    component : VendorEditComponent    
    
  },
  { 
    path: 'vendor-edit/:id', component: VendorEditComponent 
  },
  {
    path : 'retour',
    component : RetourComponent,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
