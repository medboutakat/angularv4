import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { VatComponent } from './vat/vat.component';
import { VatEditComponent } from './vat-edit/vat-edit.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { VatService } from './vat-service';
import { VatResolverService } from './vat-resolver-service';
import { StatutComponent } from './statut/statut.component';



@NgModule({
  declarations: [
    VatComponent,
    VatEditComponent,
    StatutComponent, 
  ],
  imports: [
    CommonModule ,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [
    VatService,
    VatResolverService
  ]
})
export class SettingsModule { }
