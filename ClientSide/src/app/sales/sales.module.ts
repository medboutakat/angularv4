import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceService } from './invoice.service';
import { SalesRoutingModule } from './sales-routing.module';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
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
  MatRadioButton, MatRadioModule, MatProgressSpinnerModule, MatInputModule, MatSnackBarModule, MatSliderModule
} from '@angular/material';
import { CustomersComponent, DialogOverviewExampleDialog } from './customers/customers.component';
import { AgGridModule } from 'ag-grid-angular';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';


@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceEditComponent,
    CustomersComponent,
    DialogOverviewExampleDialog,
    CustomersEditComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
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
    MatBadgeModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressBarModule,
    MatRadioModule, MatProgressSpinnerModule, MatInputModule, MatSnackBarModule,MatSliderModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [
    InvoiceService
  ]
})
export class SalesModule { }
