import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeDataService } from '../app/DataService/EmployeeDataService';
import { LayoutComponent } from './page-section/layout/layout.component';
import { SidebarComponent } from './page-section/sidebar/sidebar.component';
import { FixedtopbarComponent } from './page-section/fixedtopbar/fixedtopbar.component';
import { VatComponent } from './settings/vat/vat.component' 
import { VatEditComponent } from './settings/vat-edit/vat-edit.component';
import { LoginComponent } from './security/login/login.component';
import { AuthenticationService } from './DataService/authentication.service';
import { SignupComponent } from './security/signup/signup.component';
import { RoutegaurdService } from './routegaurd.service';
import { CommandeComponent } from './sales/commande/commande.component';
import { IDataService } from './DataService/IDataService';
import { CommandeEditComponent } from './sales/commande-edit/commande-edit.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './page-section/footer/footer.component';
import { SocialComponent } from './page-section/social/social.component';
import { HeaderComponent } from './page-section/header/header.component';
import { TestimonialComponent } from './page-section/testimonial/testimonial.component';
import { PricingComponent } from './pricing/pricing.component';
import { NotfoundComponent } from './page-section/notfound/notfound.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';
import { NavigationComponent } from './page-section/navigation/navigation.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { ConfigService } from './config.service';
import { NavmenuComponent } from './page-section/navmenu/navmenu.component';
import { BankComponent } from './bank/bank.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './apptest/contact/contact.component';
import { ChartComponent } from './apptest/chart/chart.component';
import { SignalRService } from './DataService/signal-r.service';
import { MapsComponent } from './apptest/maps/maps.component';
import { UploadfilesComponent } from './apptest/uploadfiles/uploadfiles.component';
import { StatutComponent } from './settings/statut/statut.component';
import { TripComponent } from './apptest/trip/trip.component';
import { StockModule } from './stock/stock.module';
import { DeliveryEditComponent } from './sales/delivery-edit/delivery-edit.component';
import { DeliveryDataService } from './DataService/DeliveryDataService'; 
import { ClientCategoryDataService } from './DataService/ClientCategoryDataService';
import { CommandeDataService } from './DataService/CommandeDataService';
import { SalesModule } from './sales/sales.module';
import { NavBarComponent } from './page-section/nav-bar/nav-bar.component';
import { TestComponent } from './apptest/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import {MatChipsModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatStepperModule,
  MatSelectModule,
  MatTabsModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatError,
  MatBadgeModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatProgressBarModule,
  MatRadioButton, MatRadioModule, MatProgressSpinnerModule, MatInputModule, MatSnackBarModule
} from '@angular/material';
import { ClientsComponent, DialogOverviewExampleDialog } from './sales/clients/clients.component';
import { EmployeeService } from './DataService/emp.service';
import { ApptestModule } from './apptest/apptest.module';
import { AgGridModule } from 'ag-grid-angular';
import { InvoiceComponent } from './apptest/invoice/invoice.component';
import { ButtonRendererComponent } from './sales/clients/button-render.component';
import { DemoComponent } from './apptest/demo/demo.component';
import { DemoService } from './apptest/demo/demo.service';
import { PurchaseModule } from './purchase/purchase.module';
import { NavComponent } from './page-section/nav/nav.component';
import { LeftbarComponent } from './page-section/leftbar/leftbar.component'; 
import { ControlsModule } from './controls/controls.module';
import { SettingsModule } from './settings/settings.module';
import { GridExempleModule } from './grid-exemple/grid.exemple.module';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { environment } from 'src/environments/environment';
import { API_BASE_URL } from './SysManage-traders-api';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { NavTopMenuComponent } from './nav-top-menu/nav-top-menu.component';
import { NavSideMenuComponent } from './nav-side-menu/nav-side-menu.component';

import { CamelCaseToText } from '../pipes/camel-case-to-text';
import { AppIconsModule } from './app.icons.module';

//import { Grid } from 'ag-grid-community';
// import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    NavTopMenuComponent,
    NavSideMenuComponent,
    LayoutComponent,
    SidebarComponent,
    FixedtopbarComponent, 
    ButtonRendererComponent,
    LoginComponent,
    SignupComponent,
    CommandeComponent,
    CommandeEditComponent,
    ContactusComponent,
    FooterComponent,
    SocialComponent,
    HeaderComponent,
    BankComponent,
    TestimonialComponent,
    PricingComponent,
    NotfoundComponent,
    NavigationComponent,
    NavmenuComponent,
    BankComponent,
    HomeComponent,
    ContactComponent,
    ChartComponent,
    MapsComponent,
    UploadfilesComponent, 
    TripComponent, 
    DeliveryEditComponent,NavBarComponent, TestComponent, ClientsComponent,
    DialogOverviewExampleDialog,
    InvoiceComponent,
    DemoComponent,
    NavComponent,
    LeftbarComponent,
    CamelCaseToText,
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }), 
    // BrowserModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressBarModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    PurchaseModule,
    SettingsModule,
    ControlsModule, 
    GridExempleModule,
    MatChipsModule,
    ApiAuthorizationModule, 
    AppIconsModule,
    //Grid

  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    // { provide: API_BASE_URL, useValue: environment.apiBaseUrl },

    EmployeeDataService,
    DeliveryDataService, 
    AuthenticationService, 
    CommandeDataService,
    ClientCategoryDataService,
    IDataService,
    RoutegaurdService,
    EmployeeService,
    ConfigService,
    SignalRService,
    StockModule,
    SalesModule,
    ApptestModule,
    UserDashboardModule,
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
