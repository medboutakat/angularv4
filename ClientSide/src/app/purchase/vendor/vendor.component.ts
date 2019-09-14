import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from 'src/Models/vendor';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  private createColumnDefs() {
    return [

      { headerName: 'Id', field: 'id', editable: true, filter: true, sortable: true, checkboxSelection: true },
      { headerName: 'Code', field: 'code', editable: true, filter: true, sortable: true },
      { headerName: 'Name1', field: 'name1', editable: true, filter: true, sortable: true },
      { headerName: 'Name2', field: 'name2', editable: true, filter: true, sortable: true },
      { headerName: 'Adress', field: 'adress', editable: true, filter: true, sortable: true },
      { headerName: 'City', field: 'city', editable: true, filter: true, sortable: true },
      { headerName: 'Phone', field: 'phone', editable: true, filter: true, sortable: true },
      { headerName: 'GSM', field: 'gsm', editable: true, filter: true, sortable: true },
      { headerName: 'FAX', field: 'fax', editable: true, filter: true, sortable: true },
      { headerName: 'Email', field: 'email', editable: true, filter: true, sortable: true }

    ]
  }

  vendor:Vendor;
  
  // row data and column definitions
  private rowData: Vendor[];
  private columnDefs: ColDef[];

  
  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;

  private rowSelection;

  private SelectedClient: Vendor;

  constructor(private service: VendorService) { 
    this.columnDefs = this.createColumnDefs();
  }

  LoadData() {
    this.service.Get().subscribe(result => {
      this.rowData = result;
        console.log("row data",this.rowData);
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.LoadData();
    
  }

  Send(){
    this.service.Add(this.vendor).subscribe( resultat => {

    } )
  }



}
