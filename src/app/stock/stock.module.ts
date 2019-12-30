import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
// import { StockRoutingModule } from './stock-routing.module'; 
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [ 
  {path:'',component:ProductComponent},  
];

@NgModule({
  declarations: [
    ProductComponent 
  ],
  imports: [
    CommonModule,
    // StockRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    ProductService
  ]
})
export class StockModule { }
