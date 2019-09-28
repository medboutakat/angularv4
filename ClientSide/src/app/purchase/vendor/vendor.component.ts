import { Component, OnInit, ViewChild } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from 'src/Models/vendor';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { Router } from '@angular/router';
import { VendorEditComponent } from '../vendor-edit/vendor-edit.component';


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

  vendor : Vendor;
  exist:boolean = false;
  
  // row data and column definitions
  private rowData: Vendor[];
  private columnDefs: ColDef[];
  
  
  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;

  private rowSelection;
  private IsRowSelected:boolean;
  private IsMultple:boolean;

  private SelectedClient: Vendor;  
  var:any;
  

  constructor(private service: VendorService, private router:Router) { 
    this.columnDefs = this.createColumnDefs();
//    this.hidden = true;

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
    
    console.log("rrrrrrrrrrr");
    this.LoadData();    
        
    console.log(this.var);
  }
  

  ngAfterViewInit(){
    
    console.log(this.var);
  }
  
  //@ViewChild('editView', { static: false, }) editcomponent: VendorEditComponent;
  @ViewChild(VendorEditComponent,  {static: false, }) modifiervendeur : VendorEditComponent;

  public navigate(url) {    
    
    this.service.show = true;
    this.service.do = 1;
  }

  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
    console.log(params);
  }

  onSelectionChanged(event) {

    if (this.api.getSelectedRows().length == 0) {
      this.IsRowSelected = false;
    } else {
      this.IsRowSelected = true;
    }

    if (this.api.getSelectedRows().length != 1) {
      this.IsMultple = true;
      console.log("multiple....");
    } else {
      this.IsMultple = false;
    }
    console.log(event);

  }

  Edit(url){
    
    if(this.IsRowSelected ){                
      this.SelectedClient = this.api.getSelectedRows()[0];
      console.log(this.SelectedClient);
      this.modifiervendeur.vendorEdit.setValue(this.SelectedClient);            
      this.service.show = true;      
      this.service.do = 2;

    }

  }

  
  Delete() {
    if(this.IsRowSelected ){
            
      this.SelectedClient = this.api.getSelectedRows()[0];
      console.log(this.SelectedClient);
     
      this.service.Delete(this.SelectedClient).subscribe(value => {
        console.log(value);
      }, error1 => console.log(error1));
      this.LoadData();
    }
  }

  outputExemple($event){
    // this.rowData = $event;
    // console.log("rowData : " , this.rowData);
    this.vendor = $event;
    console.log("my output exemple : $event :" + this.vendor.id + " code: " + this.vendor.code + " name1: " + this.vendor.name1);
    this.rowData.forEach( (element, index) => {
      if(element.id == this.vendor.id){
        console.log("element 0 = " + element.id);
        this.rowData[index] = this.vendor;
        return;
      }
    });

    this.rowData.push(this.vendor);

    this.LoadData();
    
  }

}
