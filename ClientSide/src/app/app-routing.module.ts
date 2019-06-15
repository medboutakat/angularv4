import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/EmployeesComponent';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { VatComponent } from './vat/vat.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommandeComponent } from './commande/commande.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { BankComponent } from './bank/bank.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { MapsComponent } from './maps/maps.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { StatutComponent } from './statut/statut.component'; 
import { TripComponent } from './trip/trip.component'; 
import { ProductComponent } from './stock/product/product.component';
import { ClientComponent } from './client/client.component';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [

  {path:'',component:EmployeesComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'Edit',component:EmployeeupdateComponent},
  {path:'Add',component:EmployeeAddComponent},
  {path:'Home',component:EmployeesComponent}, 
  {path:'tva',component:VatComponent},
  {path:'commande',component:CommandeComponent},
  {path:'client',component:ClientComponent},
  {path:'bank',component:BankComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:HomeComponent},
  {path:'chart',component:ChartComponent},
  {path:'maps',component:MapsComponent},
  {path:'upload',component:UploadfilesComponent},
  {path:'statut',component:StatutComponent},
  {path:'trip',component:TripComponent},
  {path:'delivery',component:DeliveryComponent},
    // {
    // path: 'stock', component: ProductComponent,
    //   children: [{
    //     path: 'legacy',
    //     redirectTo: 'user/'
    //   }, {
    //     path: 'user/:name',
    //     component: ProductComponent
    //   }]
    //   },
    { path: 'stock', loadChildren: './stock/stock.module#StockModule' }
  // {path:'Edit',component:EmployeeupdateComponent},
  // {path:'Add',component:EmployeeAddComponent},
  // {path:'Home',component:AngularCRUDComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
