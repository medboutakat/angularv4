import { Component, OnInit, Output, ViewChild, EventEmitter, Input, ElementRef } from '@angular/core';
import { InvoiceService } from '../invoice.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { InvoiceHeader, InvoiceDetail } from 'src/Models/InvoiceModels';
import { InvoiceEditComponent } from '../invoice-edit/invoice-edit.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {

  objlist: InvoiceHeader[];
  dataavailbale: Boolean = false;
  action:string;
  objTemp: InvoiceHeader;
  params: any;

  constructor(private service: InvoiceService,private activatedRoute: ActivatedRoute,private route: Router) {
    this.columnDefs = this.createColumnDefs();
  }
 

  
  private rowData: InvoiceHeader[];
  private columnDefs: ColDef[];
  
  private createColumnDefs() {
    return [ 
      { headerName: 'Id', field: 'id', editable: true, filter: true, sortable: true, checkboxSelection: true },
      { headerName: 'Code', field: 'code', editable: true, filter: true, sortable: true },
      { headerName: 'Date', field: 'date', editable: true, filter: true, sortable: true },
      // { headerName: 'Delete', field: 'id', 
      // cellRenderer: 'buttonRenderer',
      //   cellRendererParams: {
      //     onClick: this.onClick.bind(this),
      //     label: 'Click'
      //   }
      // }
    ]
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }

  ngOnInit() {
    this.LoadData(); 
  }
  
  LoadData() { 

    this.dataavailbale = true;
    this.activatedRoute.data.subscribe((data: { datas: InvoiceHeader[] }) => {  
      console.log("datas : ",data.datas);
      this.objlist = data.datas; 
    });
  }
 

  deleteconfirmation(id: string) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.objTemp = new InvoiceHeader();
      this.objTemp.id = id;
      this.service.Delete(this.objTemp).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }
 
   
  @ViewChild('editView', { static: false, }) editcomponent: InvoiceEditComponent

 
  loadAddnew() {
        
    this.editcomponent.IsNew=true;
    this.editcomponent.objDetails.splice(0, this.editcomponent.objDetails.length);

    this.action="Add new invoice"; 
    this.editcomponent.objTemp= new InvoiceHeader();
    this.editcomponent.objTemp.id = "" 
    this.editcomponent.objTemp.code = (new Date()).toDateString()
    this.editcomponent.objTemp.date = new Date()  
    this.editcomponent.objTemp.invoiceDetails=[]; 
    console.log(this.editcomponent.objTemp);
  }

 

  loadEditForm(id: string) {  
    
        this.service.Find(id).subscribe((data) => {
        this.objTemp= data; 
        this.editcomponent.IsNew=false;
        this.action="Edit Delivery : "+this.objTemp.code+"id "+id; 
        this.editcomponent.objTemp  = this.objTemp   
        this.editcomponent.objDetails=this.objTemp.invoiceDetails;
        console.log(this.editcomponent.objDetails);
       } ) , err => {
        console.log(err);
      } 
    
  }

  RefreshData() {
    this.LoadData();
  }


}
