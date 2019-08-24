import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ChildeditComponent } from './childedit/childedit.component';
import { AppTestRoutingModule } from './test.routing';



@NgModule({
  declarations: [ChildComponent, ChildeditComponent],
  imports: [
    CommonModule,
    AppTestRoutingModule
  ],
  exports:[
    ChildComponent,
    ChildeditComponent
  ]
})
export class ApptestModule { }
