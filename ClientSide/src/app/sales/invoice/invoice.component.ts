import { Component, OnInit, Output, ViewChild, EventEmitter, Input, ElementRef } from '@angular/core';
import { InvoiceService } from '../invoice.service'; 
import { Router } from '@angular/router';
import { InvoiceHeader, InvoiceDetail } from 'src/Models/Commande';
import { InvoiceEditComponent } from '../invoice-edit/invoice-edit.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.sass']
})
export class InvoiceComponent implements OnInit {

  objlist: InvoiceHeader[];
  dataavailbale: Boolean = false;
  action:string
  objTemp: InvoiceHeader
   

  constructor(private service: InvoiceService, private route: Router) {
     
  }
 
  ngOnInit() {
    this.LoadData(); 
  }
  LoadData() { 
    this.service.Get().subscribe((tempdate) => {
      this.objlist = tempdate;
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
  GetCurrent(id : string) {  
    this.service.Find(id).subscribe((data) => {
      this.objTemp= data;
      console.log(this.objlist); 
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
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }
 
   
  @ViewChild('editView', { static: false, }) editcomponent: InvoiceEditComponent



  loadAddnew() {
    this.editcomponent.IsNew=true;
    this.action="add Invoice"; 
    this.editcomponent.objTemp= new InvoiceHeader();
    this.editcomponent.objTemp.id = "" 
    this.editcomponent.objTemp.code = ""
    this.editcomponent.objTemp.date = new Date()  
    this.editcomponent.objTemp.invoiceDetails=[];
  }

  loadEditForm(id: string) { 
    this.GetCurrent(id);
    this.editcomponent.IsNew=false;
    this.action="Edit Delivery : "+this.objTemp .code+"id "+id;
    console.log(this.objTemp ); 
    this.editcomponent.objTemp  = this.objTemp  
  }

  RefreshData() {
    this.LoadData();
  }


}