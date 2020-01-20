import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AuthorizeGuard } from '../api-authorization/authorize.guard';

const routes: Routes = [

  { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule),canActivate:[AuthorizeGuard]  },
  { path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) },
  { path: 'apptest', loadChildren: () => import('./apptest/apptest.module').then(m => m.ApptestModule) },
  { path: 'purchase', loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'grid', loadChildren: () => import('./grid-exemple/grid.exemple.module').then(m => m.GridExempleModule) }
 

  // {
  // path: 'sales', component: ProductComponent,
  //   children: [{
  //     path: 'legacy',
  //     redirectTo: 'user/'
  //   }, {
  //     path: 'user/:name',
  //     component: ProductComponent
  //   }]
  //   },
  // {path:'Edit',component:EmployeeupdateComponent},
  // {path:'Add',component:EmployeeAddComponent},
  // {path:'Home',component:AngularCRUDComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
