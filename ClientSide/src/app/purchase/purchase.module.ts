import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { RetourComponent } from './retour/retour.component';
import { VendorComponent } from './vendor/vendor.component';
import { AgGridModule } from 'ag-grid-angular';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatCardModule, MatInputModule, MatMenuModule, MatIconModule, MatTabsModule, MatToolbarModule, MatStepperModule, MatSelectModule, MatCheckboxModule, MatBadgeModule, MatSidenavModule, MatNativeDateModule, MatDialogModule, MatProgressBarModule, MatRadioModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [RetourComponent, VendorComponent, VendorEditComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,    
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
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
    MatRadioModule, MatProgressSpinnerModule, MatInputModule, MatSnackBarModule,
    FormsModule
  ]
})
export class PurchaseModule { }
