import { Component, OnInit, ViewChild } from '@angular/core';
import { Vat } from 'src/Models/Vat';
import { VatService } from '../vat-service';
import { Router, ActivatedRoute } from '@angular/router';
import { VatEditComponent } from '../vat-edit/vat-edit.component';
import { ColumnApi, ColDef, GridApi } from 'ag-grid-community';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.states'; 
import { selectAll,selectOne } from 'src/app/store/settings/vat/vat.selector';
import { GetAll } from 'src/app/store/settings/vat/vat.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.sass']
})
export class VatComponent implements OnInit {

  objlist: Observable<Vat[]>;
  dataavailbale: Boolean = false;
  action: string;
  tempemp: Vat;

  private createColumnDefs() {
    return [
      { headerName: 'id', field: 'id', editable: true, filter: true, sortable: true, checkboxSelection: true },
      { headerName: 'code', field: 'code', editable: true, filter: true, sortable: true },
      { headerName: 'name', field: 'name', editable: true, filter: true, sortable: true },
      { headerName: 'value', field: 'value', editable: true, filter: true, sortable: true },
    ]
  }

  exist: boolean = false;

  // row data and column definitions
  private rowData: Vat[];
  private columnDefs: ColDef[];


  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;

  private rowSelection;
  private IsRowSelected: boolean;
  private IsMultple: boolean;

  private SelectedClient: Vat=new Vat();
 


  constructor(private dataservce: VatService, private activatedRoute: ActivatedRoute, private route: Router, private _store: Store<IAppState<Vat>>) {
    this.columnDefs = this.createColumnDefs();
    this.add=this.add.bind(this);
    this.edit=this.edit.bind(this);
    this.delete=this.delete.bind(this);  
  }

  ngOnInit() {
    this.LoadData();
    this._store.dispatch(GetAll())   

  }

  LoadData() {
    this.objlist = this._store.pipe(select(selectAll));
  }

  deleteconfirmation(id: number) {

    if (confirm("Are you sure you want to delete this ?")) {
      this.tempemp = new Vat();
      this.tempemp.id = id;
      this.dataservce.Delete(this.tempemp).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }

 

  @ViewChild('editsettings', { static: false, }) editcomponent: VatEditComponent

  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
    console.log('params', params);
  }

  onSelectionChanged(event) { 
    var selectedRowLenght=this.api.getSelectedRows().length;
    if (selectedRowLenght == 0) { 
      this.IsMultple = false;
      this.IsRowSelected = false;
    }else 
    if(selectedRowLenght == 1)
    { 
      this.IsRowSelected = true;
      this.IsMultple = false;
    }
     else {
      this.IsRowSelected = true;
      this.IsMultple = true;
    }
    console.log(event);

    this.SelectedClient= this.IsRowSelected? this.api.getSelectedRows()[0]:new Vat();

    console.log("Selected row :",this.SelectedClient)
  }

  add() {
    this.action = "add vat"; 
    this.editcomponent.objemp=this.SelectedClient; 
    this.editcomponent.isNew = true;
  } 
  edit() {   
      this._store.select(selectOne,{id:this.SelectedClient.id}).subscribe(res=>{
          console.log("selected res", res);
          this.editcomponent.isNew = false;
          this.editcomponent.objemp = res;        
      })  
  } 
  
  delete() {  
    this._store.select(selectOne,{id:this.SelectedClient.id}).subscribe(res=>{
        console.log("selected res", res);
        this.editcomponent.isNew = false;
        this.editcomponent.objemp = res;        
    })  
}
  
  RefreshData() {
    this.LoadData();
  }

}
