import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  
import { CustomerCategoryService } from '../customer.category-service';
import { CustomerCategory } from 'src/Models/CustomerCategory';
@Component({
  selector: 'app-costomer.category-edit',
  templateUrl: './customer.category-edit.component.html',
  styleUrls: ['./customer.category-edit.component.sass']
})

export class CustomerCategoryEditComponent implements OnInit {

  constructor(private dataservice: CustomerCategoryService, private route: Router) {

  }
  
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn', { static: false, }) cb: ElementRef;
  ngOnInit() { 
    // alert( "objemp :" + this.objemp.value + "\n objemp displayname : " + this.objemp.displayName);
  }

  @Input() reset: boolean = false;
  @ViewChild('editvat', { static: false, }) myForm: NgForm;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = true;

  
  objtempemp: CustomerCategory;
  @Input() objemp: CustomerCategory = new CustomerCategory();

  
  EditMainObject(regForm: NgForm) {
    
    if(!this.IsNew){      

      this.objemp = regForm.value;
      console.log('this.objemp',this.objemp)
      this.dataservice.update(this.objemp).subscribe(res => {
         
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
        
      });
    }
    else{
         
      this.objtempemp=new CustomerCategory();      
      this.objtempemp.name=regForm.value.name;
      this.objtempemp.remark=regForm.value.remarque;    
      this.dataservice.add(this.objtempemp).subscribe(res=>{
        alert("Vat Added successfully");
        this.TakeHome();
      })

    }
  }
  
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    //this.route.navigateByUrl('tva'); 
  }


}
