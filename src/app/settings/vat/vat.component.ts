import { Component, OnInit, ViewChild } from '@angular/core';
import { Vat } from 'src/Models/Vat'; 
import { VatService } from '../vat-service';
import { Router, ActivatedRoute } from '@angular/router';
import { VatEditComponent } from '../vat-edit/vat-edit.component';
import { ColumnApi, ColDef, GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.sass']
})
export class VatComponent implements OnInit {
 
    objlist: Vat[];
    dataavailbale: Boolean = false;
    action:string;
    tempemp: Vat;

    private createColumnDefs() {
      return [ 
        { headerName: 'id', field: 'id', editable: true, filter: true, sortable: true, checkboxSelection: true },
        { headerName: 'code', field: 'code', editable: true, filter: true, sortable: true },
        { headerName: 'name', field: 'value', editable: true, filter: true, sortable: true },
        { headerName: 'value', field: 'value', editable: true, filter: true, sortable: true },
      ]
    }
   
    exist:boolean = false;
    
    // row data and column definitions
    private rowData: Vat[];
    private columnDefs: ColDef[];
    
    
    // gridApi and columnApi
    private api: GridApi;
    private columnApi: ColumnApi;
  
    private rowSelection;
    private IsRowSelected:boolean;
    private IsMultple:boolean;
  
    private SelectedClient: Vat;  
    var:any;
    

    constructor(private dataservce: VatService,private activatedRoute: ActivatedRoute, private route: Router) {
      this.columnDefs = this.createColumnDefs(); 
    }
  
    ngOnInit() {

      console.log("hello ")
      this.LoadData();  
    }
  
    LoadData() { 

      console.log(this.activatedRoute.data);
      this.dataavailbale = true;
      this.activatedRoute.data.subscribe((data: { vats: Vat[] }) => { 
        console.log("vats : ",data.vats);
        this.objlist = data.vats; 
      });

      // this.dataservce.getVat().subscribe((tempdate) => {
      // this.objlist = tempdate;
      
      //   console.log(this.objlist);
      //   if (this.objlist.length > 0) {
      //     this.dataavailbale = true;
      //   }
      //   else {
      //     this.dataavailbale = false;
      //   }
      // }
      // )
      //   , err => {
      //     console.log(err);
      //   }
    }

    deleteconfirmation(id: string) {
  
      if (confirm("Are you sure you want to delete this ?")) {
        this.tempemp = new Vat();
        this.tempemp.id = id;
        this.dataservce.DeleteVat(this.tempemp).subscribe(res => {
          alert("Deleted successfully !!!");
          this.LoadData();
        })
      }
    }


    // @ViewChild('empadd') addcomponent: VatAddComponent

    @ViewChild('editvat', { static: false, }) editcomponent: VatEditComponent   
    
    onGridReady(params): void {
      this.api = params.api;
      this.columnApi = params.columnApi;
  
      this.api.sizeColumnsToFit();
      console.log('params',params);
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
  
    loadAddnew() {
      this.action="add vat";
      this.editcomponent.objemp.code = ""
      this.editcomponent.objemp.name = "" 
      this.editcomponent.objemp.value = "" 
      this.editcomponent.objemp.id = "" 
      this.editcomponent.IsNew=true;
    }
    //oussama
    edit(){

      if(this.IsRowSelected ){                

        this.SelectedClient = this.api.getSelectedRows()[0];
        console.log("selected client", this.SelectedClient);
        this.editcomponent.IsNew = false;
        this.editcomponent.objemp = this.SelectedClient;                
        
        console.log("is new :" + this.editcomponent.IsNew);
        console.log("objemp value :" , this.editcomponent.objemp);
      }
    } 
  
    RefreshData() {
      this.LoadData();
    }
  
}
