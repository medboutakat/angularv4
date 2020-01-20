import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AppTestRoutingModule } from './test.routing';
import { EmployeesComponent } from './Employees/EmployeesComponent';



@NgModule({
  declarations: [ EmployeesComponent ],
  imports: [
    CommonModule,
    AppTestRoutingModule
  ],
  exports: [ 
  ]
})
export class ApptestModule { }
