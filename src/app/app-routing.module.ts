import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './apptest/Employees/EmployeesComponent'; 
import { EmployeeAddComponent } from './apptest/employee-add/employee-add.component';
import { VatComponent } from './settings/vat/vat.component';
import { LoginComponent } from './security/login/login.component';
import { SignupComponent } from './security/signup/signup.component';
import { CommandeComponent } from './sales/commande/commande.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './page-section/footer/footer.component';
import { SocialComponent } from './page-section/social/social.component';
import { BankComponent } from './bank/bank.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './apptest/chart/chart.component';
import { MapsComponent } from './apptest/maps/maps.component';
import { UploadfilesComponent } from './apptest/uploadfiles/uploadfiles.component';
import { StatutComponent } from './settings/statut/statut.component';
import { TripComponent } from './apptest/trip/trip.component'; 
import { DeliveryComponent } from './sales/delivery/delivery.component';
import { NavBarComponent } from './page-section/nav-bar/nav-bar.component';
import { TestComponent } from './apptest/test/test.component';
import { ClientsComponent } from './sales/clients/clients.component';
import { InvoiceComponent } from './apptest/invoice/invoice.component';
import { DemoComponent } from './apptest/demo/demo.component';

const routes: Routes = [

  { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule) },
  { path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) },
  { path: 'apptest', loadChildren: () => import('./apptest/apptest.module').then(m => m.ApptestModule) },
  { path: 'purchase', loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }

  // { path: '', component: HomeComponent },
  // { path: 'employee', component: EmployeesComponent },
  // { path: 'clients', component: ClientsComponent },
  // { path: 'navbar', component: NavBarComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },  
  // { path: 'commande', component: CommandeComponent }, 
  // { path: 'bank', component: BankComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'contact', component: HomeComponent },
  // { path: 'chart', component: ChartComponent },
  // { path: 'maps', component: MapsComponent },
  // { path: 'upload', component: UploadfilesComponent },
  // { path: 'statut', component: StatutComponent },
  // { path: 'trip', component: TripComponent },
  // { path: 'delivery', component: DeliveryComponent },
  // { path: 'route', component: VatComponent },
  // { path: 'test', component: TestComponent },
  // { path: 'invoice', component: InvoiceComponent },
  // { path: 'demo', component: DemoComponent },

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
