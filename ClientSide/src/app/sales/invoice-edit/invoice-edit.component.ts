import { Component, OnInit, Output, ViewChild, EventEmitter, Input, ElementRef } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceHeader, InvoiceDetail } from 'src/Models/Commande';

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.sass']
})
export class InvoiceEditComponent implements OnInit {
  objectFromDetail: any;
 
   

  constructor(private service: InvoiceService, private route: Router) {

  }
  ngOnInit() { 
  }

 


  objTemp: InvoiceHeader = new InvoiceHeader();
  objID:InvoiceDetail=new InvoiceDetail();
  objDetail:InvoiceDetail=new InvoiceDetail();
  tempemp:InvoiceDetail;
  objDetails:InvoiceDetail[]=[];


  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn', { static: false, }) cb: ElementRef; 
  @Input() reset: boolean = false;
  @ViewChild('EditForm', { static: false, }) myForm: NgForm;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = false;

  
  
  @Input() objView: InvoiceHeader = new InvoiceHeader();

 

  AddDetails(obj:InvoiceDetail ) {  

    console.log("(obj.no+'')  : ", (obj.no+'') ); 
    var details=new InvoiceDetail();  

    if((obj.no+'') != 'undefined')
    {
      console.log("Update", (obj.no+'') );
      var obj1 = this.objDetails.filter(function(objTemp) {
        return objTemp.no == obj.no;
      });  
      console.log("Add : ",  obj1[0]);
      obj1[0].pCode=obj.pCode;
      obj1[0].pName=obj.pName;
    }
    else
    {
      details.no= this.objDetails.length+1;
      details.pCode= obj.pCode;
      details.pName=obj.pName;
      details.qte="0";
      details.prix="0";  
      this.objView=new InvoiceHeader(); 
      this.objDetails.push(details);
    }
  
    console.log("Details : ",this.objDetails);
  }

  DeleteDetails(objDetail:InvoiceDetail){
  
    var objectFromDetail = this.objDetails.filter(function(obj) {
      return obj.no != objDetail.no;
    });  
    this.objDetails=[]; 
    for(var i =0; i<objectFromDetail.length;i++){
      this.objDetails.push(objectFromDetail[i])
    } 
    this.objDetail.pCode="";
    this.objDetail.pName="";
  }

  EditDetails(objDetail:InvoiceDetail){
    var obj = this.objDetails.filter(function(obj) {
      return obj.no == objDetail.no;
    });  
    this.objDetail.pCode=obj[0].pCode;
    this.objDetail.pName=obj[0].pName;
    this.objDetail.no=obj[0].no;
  }
 
 

  // Add or Edit
  EditMainObject(regForm: NgForm) {

    this.objView=new InvoiceHeader();
 
    this.objView.code=regForm.value.code;
    this.objView.date=regForm.value.date;    
    this.objView.invoiceDetails=regForm.value.invoiceDetails;   
    this.objView.invoiceDetails=this.objDetails;
    if(!this.IsNew){
      this.service.Edit(this.objTemp).subscribe(res => {
        alert("Employee updated successfully");
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
      }); 
    }else{  
        this.service.Add(this.objView).subscribe(res=>{
          alert("Delivery Added successfully");
            this.TakeHome();
          }
        )
    }
  }
  
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    // this.route.navigateByUrl('/Sales'); 
  }


}
