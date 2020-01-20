import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CommonModule } from '@angular/common';

const routes: Routes = [ 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppTestRoutingModule { }