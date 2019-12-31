import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';   
import { GridComponent } from './grid.component';
import { AthleteEditScreenComponent } from './athlete-edit-screen.component';

const routes: Routes = [ 
  {path: 'grid', component: GridComponent}, 
  {path: 'athlete', component: AthleteEditScreenComponent
  // , resolve: { vats: VatResolverService }
  }
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
export class GridExempleRoutingModule { }
