import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { DeliveryDataService } from '../DataService/DeliveryDataService';
import { Delivery } from 'src/Models/Delivery';
  
@Component({
  selector: 'app-Delivery-edit',
  templateUrl: './Delivery-edit.component.html',
  styleUrls: ['./Delivery-edit.component.sass']
})

export class DeliveryEditComponent implements OnInit {

  constructor(private dataservice: DeliveryDataService, private route: Router) {

  }
  
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn') cb: ElementRef;
  ngOnInit() { 
  }

  @Input() reset: boolean = false;
  @ViewChild('editDelivery') myForm: NgForm;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = false;

  
  objtemp: Delivery;
  @Input() objemp: Delivery = new Delivery();


  // Add or Edit
  EditMainObject(regForm: NgForm) {
    if(!this.IsNew){
      this.dataservice.EditDelivery(this.objemp).subscribe(res => {
        alert("Employee updated successfully");
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
      }); 
    }else{
         
        this.objtemp=new Delivery();
        this.objtemp.displayname=regForm.value.displayname;
        this.objtemp.value=regForm.value.value;    
        this.dataservice.AddDelivery(this.objtemp).subscribe(res=>{
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
