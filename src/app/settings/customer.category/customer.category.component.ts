import { Component, OnInit, ViewChild } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { ColumnApi, ColDef, GridApi } from 'ag-grid-community';
import { CustomerCategoryService } from '../customer.category-service';
import { CustomerCategory } from 'src/Models/CustomerCategory';
import { CustomerCategoryEditComponent } from '../customer.category-edit/customer.category-edit.component';

@Component({
  selector: 'app-costomer.category',
  templateUrl: './customer.category.component.html',
  styleUrls: ['./customer.category.component.sass']
})
export class CustomerCategoryComponent implements OnInit {
 
    objlist: CustomerCategory[];
    dataavailbale: Boolean = false;
    action:string;
    tempemp: CustomerCategory;

    private createColumnDefs() {
      return [ 
        { headerName: 'id', field: 'id', editable: true, filter: true, sortable: true, checkboxSelection: true },
        { headerName: 'name', field: 'name', editable: true, filter: true, sortable: true },
        { headerName: 'remarque', field: 'remarque', editable: true, filter: true, sortable: true },
      ]
    }
   
    exist:boolean = false;
    
    // row data and column definitions
    private rowData: CustomerCategory[];
    private columnDefs: ColDef[];
    
    
    // gridApi and columnApi
    private api: GridApi;
    private columnApi: ColumnApi;
  
    private rowSelection;
    private IsRowSelected:boolean;
    private IsMultple:boolean;
  
    private SelectedClient: CustomerCategory;  
    var:any;
    

    constructor(private dataservce: CustomerCategoryService,private activatedRoute: ActivatedRoute, private route: Router) {
      this.columnDefs = this.createColumnDefs();
  //    this.hidden = true;
    }
  
    ngOnInit() {
      this.LoadData();  
    }
  
    LoadData() { 
      this.dataavailbale = true;
      this.activatedRoute.data.subscribe((data: { datas: CustomerCategory[] }) => { 
        // this.objlist = data.objs; 
        console.log(" customer cetgory :  ",data.datas);
        this.objlist = data.datas; 
      }); 
    }

    deleteconfirmation(id: string) {
  
      if (confirm("Are you sure you want to delete this ?")) {
        this.tempemp = new CustomerCategory();
        this.tempemp.id = id;
        this.dataservce.Delete(this.tempemp).subscribe(res => {
          alert("Deleted successfully !!!");
          this.LoadData();
        })
      }
    }

 
    @ViewChild('editCustomerCategory', { static: false, }) editcomponent: CustomerCategoryEditComponent   
    
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
      this.editcomponent.objemp.name = ""
      this.editcomponent.objemp.remarque = "" 
      this.editcomponent.objemp.id = "" 
      this.editcomponent.IsNew=true;
    } 

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
