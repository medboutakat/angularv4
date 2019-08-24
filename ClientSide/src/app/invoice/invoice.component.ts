import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../sales/invoice.service';
import { client } from 'src/Models/Client';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { InvoiceHeader } from 'src/Models/Commande';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private service: InvoiceService,public snackBar: MatSnackBar) {
    this.columnDefs = this.createColumnDefs();
   }


  /************************* */
  // row data and column definitions
  private rowData: InvoiceHeader[];
  private columnDefs: ColDef[];

  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;

  ngOnInit() {
    this.service.Get().subscribe(
      response => {
        this.rowData = response
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
  /*
  "id": 1,
    "code": "5005",
    "date": "2012-08-14T00:00:00",
    "invoiceDetails": [{
        "id": 4,
        "no": 0,
        "pCode": "2000",
        "pname": "INV5",
        "qte": "20",
        "prix": "30000",
        "invoiceHeaderID": 1
    }
    */
  private createColumnDefs() {
    return [
      { headerName: 'code', field: 'code', editable: true },
      { headerName: 'date', field: 'date', editable: true },
    ]
  }

  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
    console.log(params);
  }

  onCellValueChanged(event) {

    console.log(event); ///to test it
    event.data.modified = true;
    console.log(event);
    this.openSnackBar(" Data Changed ", "Edit");

  }

  saveModifiedRows() {

    const modifiedRows = this.rowData.filter(row => row['modified']);
    console.log(modifiedRows);

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

 

}
