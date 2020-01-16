import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, Inject } from '@angular/core';
import { StautService } from '../staut.service';
import { NgForm, FormBuilder } from '@angular/forms';
import { StatutEditComponent } from '../statut-edit/statut-edit.component';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Statut } from 'src/Models/Statut';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.sass']
})
export class StatutComponent implements OnInit {

constructor(private dataservce:StautService,private http: HttpClient){
  this.rowSelection = "multiple";
}
@Output() nameEvent = new EventEmitter<string>();
@ViewChild('closeBtn', { static: false, }) cb: ElementRef;
@ViewChild('editstatut', { static: false, }) editcomponent:StatutEditComponent   

  ngOnInit() {
    this.LoadData();
  }
  /**********************edit (when you click the information will transform to other component)******************************** */
  edit(){
    if(this.IsRowSelected){                
      this.SelectedClient = this.api.getSelectedRows()[0];
      this.editcomponent.IsNew = false;
      this.editcomponent.objemp=this.SelectedClient;              
    }

  }
  /***********************test if row is selected or not******************************** */
  tes:string;
  StObjet:Statut[];
  onSelectionChanged(event) {
    if (this.api.getSelectedRows().length == 0) {
      this.IsRowSelected = false;
    } else {
      this.IsRowSelected = true;
      this.StObjet=this.api.getSelectedRows();
    }
    if (this.api.getSelectedRows().length != 1) {
      this.IsMultiple = true;
    } else {
      this.IsMultiple = false;
    }
  }
  /*********************Variable ag-grid***************************** */
  private api: GridApi;
  private columnApi: ColumnApi; 
  private rowSelection;
  private SelectedClient:Statut;
  IsRowSelected: boolean = false;
  IsMultiple: boolean = false;
  IsNew: boolean;
  private sortingOrder;  
  /******************Fill ag grid ******************************** */
  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
    console.log(params);
  }
  /********************** Create colmun in ag grid*********************************** */
  columnDefs=[
    {
      headerName:"ID",
      field:"id",
      width:300,
      checkboxSelection: true
    },
    {
      headerName:"Libelle",
      field:"libelle",
      sortingOrder:["asc","desc"],

      width:500
    },
    {
      headerName:"Remarque",
      field:"remarque",
      width:500
    },
  ]
  /***********************Variables*************************** */
  objtempemp:Statut;
  @Input() objemp: Statut = new Statut();
  dataavailbale:boolean=false;
  tempdate:Statut;
  objlist:Statut[];
  /****************************Refresh data()************************************** */
  RefreshData() {
    this.LoadData();
  }
  /***************************get Data()********************************** */
  LoadData(){
    this.dataservce.getStatuts().subscribe((tempdate) => {
      this.objlist = tempdate;
        console.log(this.objlist);
        if (this.objlist.length > 0) {
          this.dataavailbale = true;
          console.log("data is got");
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

  /**********************Add()***************************** */
  AddStatut(regForm: NgForm) {
      this.objtempemp=new Statut();      
      this.objtempemp.name=regForm.value.libelle;
      this.objtempemp.remark=regForm.value.remarque;    
      this.dataservce.AddStatut(this.objtempemp).subscribe(res=>{
        alert("Statut Added successfully");
      })
  }
  /********************Delete()***************************** */
  deleteStatut(id){
    this.dataservce.delete(id).subscribe(res=>{
      alert('suppression bien fait');
    })
  }
  
}

