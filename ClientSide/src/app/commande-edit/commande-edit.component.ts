import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { CommandeDataService } from '../DataService/CommandeDataService';
import { Delivery } from 'src/Models/Delivery';
import { InvoiceDetail, InvoiceHeader } from 'src/Models/Commande';
  
@Component({
  selector: 'app-Commande-edit',
  templateUrl: './Commande-edit.component.html',
  styleUrls: ['./Commande-edit.component.sass']
})

export class CommandeEditComponent implements OnInit {

  constructor(private dataservice: CommandeDataService, private route: Router) {

  }
  
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn') cb: ElementRef;
  ngOnInit() { 
  }

  @Input() reset: boolean = false;
  @ViewChild('editCommande') myForm: NgForm;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = false;

  
  objtemp: InvoiceHeader;
  @Input() objView: InvoiceHeader = new InvoiceHeader();


  // Add or Edit
  EditMainObject(regForm: NgForm) {
    if(!this.IsNew){
      this.dataservice.EditInvoiceHeader(this.objView).subscribe(res => {
        alert("Employee updated successfully");
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
      }); 
    }else{
         
        this.objView=new InvoiceHeader();
        this.objView.code=regForm.value.code;
        this.objView.date=regForm.value.date;    
        this.objView.invoiceDetails=regForm.value.invoiceDetails;  
        this.dataservice.AddInvoiceHeader(this.objtemp).subscribe(res=>{
          alert("Delivery Added successfully");
            this.TakeHome();
          }
        )
    }
  }
  
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('delivery'); 
  }


}
