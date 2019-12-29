import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ProductComponent } from './product/product.component';
 
const routes: Routes = [

  {path:'',component:ProductComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
