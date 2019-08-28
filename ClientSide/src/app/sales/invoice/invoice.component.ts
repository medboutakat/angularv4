import { Component, OnInit, Output, ViewChild, EventEmitter, Input, ElementRef } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Router } from '@angular/router';
import { InvoiceHeader, InvoiceDetail } from 'src/Models/Commande';
import { InvoiceEditComponent } from '../invoice-edit/invoice-edit.component';
import { DatePipe } from '@angular/common';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  objlist: InvoiceHeader[];
  dataavailbale: Boolean = false;
  action: string
  objTemp: InvoiceHeader


  constructor(private service: InvoiceService, private route: Router, private date: DatePipe) {
    this.columnDefs = this.createColumnDefs();
    this.rowSelection = "multiple";
  }
  // row data and column definitions
  private rowData: InvoiceHeader[];
  private columnDefs: ColDef[];

  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;

  private rowSelection;

  private SelectedClient: InvoiceHeader;

  ngOnInit() {
    this.LoadData();
  }

  private createColumnDefs() {
    return [
      { headerName: 'code', field: 'code', editable: true, filter: true, sortable: true, checkboxSelection: true },
      { headerName: 'date', field: 'date', editable: true, filter: true, sortable: true },
      { headerName: 'id', field: 'id', editable: true, filter: true, sortable: true }

    ]
  }
  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
    console.log(params);
  }

  IsRowSelected: boolean = false;
  IsMultiple: boolean = false;
  IsNew: boolean;
  onSelectionChanged(event) {

    if (this.api.getSelectedRows().length == 0) {
      this.IsRowSelected = false;
    } else {
      this.IsRowSelected = true;

    }
    if (this.api.getSelectedRows().length != 1) {
      this.IsMultiple = true;
      console.log("multiple....");
    } else {
      this.IsMultiple = false;
    }
    console.log(event);

  }
  onCellValueChanged(event) {

    console.log(event); ///to test it
    event.data.modified = true;
    console.log(event);

  }
  saveModifiedRows() {

    const modifiedRows = this.rowData.filter(row => row['modified']);
    console.log(modifiedRows);

  }
  LoadData() {
    this.service.get().subscribe((tempdate) => {
      this.objlist = tempdate;
      this.rowData = tempdate;
      console.log(this.objlist);
      if (this.objlist.length > 0) {
        this.dataavailbale = true;
      }
      else {
        this.dataavailbale = false;
      }
    }
    )
      , err => {
        console.log(err);
      }
  }


  deleteconfirmation(id: string) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.objTemp = new InvoiceHeader();
      this.objTemp.id = id;
      this.service.Delete(this.objTemp).subscribe(res => {
        alert("Deleted successfully !");
        this.LoadData();
      })
    }
  }
  OnlySelected: boolean = false;
  exportCSV() {

    var params = {
      onlySelected: this.OnlySelected
    };
    if (this.OnlySelected && this.api.getSelectedRows().length == 0)
      alert("No rows is selected! select some rows or uncheck only selected rows checkbox.")
    else this.api.exportDataAsCsv(params);
  }


  @ViewChild('editView', { static: false, }) editcomponent: InvoiceEditComponent


  loadAddnew() {

    this.editcomponent.IsNew = true;
    this.editcomponent.objDetails.splice(0, this.editcomponent.objDetails.length);
    console.log(this.editcomponent.objDetails);
    this.action = "Add new invoice";
    this.editcomponent.objTemp = new InvoiceHeader();
    this.editcomponent.objTemp.id = "";
    this.editcomponent.objTemp.code = this.date.transform(new Date(), "ddMMyyyyhmmss");
    this.editcomponent.objView.code = this.date.transform(new Date(), "ddMMyyyyhmmss");
    console.log(this.editcomponent.objTemp.code);
    this.editcomponent.objTemp.date = new Date();
    this.editcomponent.objTemp.invoiceDetails = [];

  }



  loadEditForm(id: string) {

    this.service.Find(id).subscribe((data) => {
      this.objTemp = data;
      this.editcomponent.IsNew = false;
      this.action = "Edit Delivery : " + this.objTemp.code + "| id :" + id;
      this.editcomponent.objTemp = this.objTemp
      this.editcomponent.objDetails = this.objTemp.invoiceDetails;
      console.log(this.editcomponent.objDetails);
    }), err => {
      console.log(err);
    }

  }

  RefreshData() {
    this.LoadData();
  }


}
