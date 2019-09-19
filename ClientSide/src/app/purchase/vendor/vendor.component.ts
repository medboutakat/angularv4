import { Component, OnInit, Input } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from 'src/Models/vendor';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { Router, NavigationEnd } from '@angular/router';
import { ROOT_URL } from 'src/Models/Config';

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
  //hidden:boolean;
  
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
    if(this.service.IsAffected == true){
      this.service.IsAffected = false; 
    }
    console.log("rrrrrrrrrrr");
    this.LoadData();    
  }

  // Send(){
  //   this.service.Add(this.vendor).subscribe( resultat => {
  //   this.LoadData();
  //   } )
  // }

  
  public navigate(url) {    
    var myurl = ROOT_URL + url;
    this.router.navigateByUrl(url).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });

    this.LoadData();
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

      var myurl = ROOT_URL + url +"/" + this.SelectedClient.id;

      this.router.navigate(['/vendor-edit', this.SelectedClient.id]);
      this.LoadData();
            
    }

  }

  // Delete(){
  //   if(this.IsRowSelected ){
  //     this.SelectedClient = this.api.getSelectedRows()[0];
  //     console.log( this.SelectedClient.id);
  //     this.service.Delete(this.SelectedClient.id).subscribe( Result => {
  //       this.LoadData();
  //     });            

  //   }
  // }
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

  
}
