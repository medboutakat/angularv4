import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { ClientCategory } from 'src/Models/ClientCategory'; 
import { CustomerService } from '../customer-service';
import { ClientCategoryDataService } from '../../DataService/ClientCategoryDataService';
import { Customer } from 'src/Models/Customer';

@Component({
  selector: 'app-Client-edit',
  templateUrl: './Client-edit.component.html',
  styleUrls: ['./Client-edit.component.sass']
})

export class ClientEditComponent implements OnInit {
catList:ClientCategory[];

  constructor(
    private cateService:ClientCategoryDataService, 
    private dataservice: CustomerService,private route: Router) {

  }
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn', { static: false, }) cb: ElementRef; 

  ngOnInit() { 
    this.LoadData();
  }


  @Input() reset: boolean = false;
  @ViewChild('editMainObject', { static: false, }) myForm: NgForm;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = false;

  
  objtempemp: Customer;
  @Input() objemp: Customer = new Customer();
  LoadData() { 
    this.cateService.getCategory().subscribe((tempdate) => {
      this.catList = tempdate;
      console.log(this.catList);
     
    }
    )
      , err => {
        console.log(err);
      }
  }

  EditMainObject(regForm: NgForm) {
    if(!this.IsNew){
      this.dataservice.Update(this.objemp).subscribe(res => {
        alert("Client updated successfully");
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
      });
    }else{
         
        this.objtempemp=new Customer();
        var objForm=regForm.value;
        this.objtempemp.name1=objForm.name1;
        this.objtempemp.name2=objForm.name2;  
        this.objtempemp.clientCategorieID=objForm.categorieId;   
        console.log(this.objtempemp);
        
        this.dataservice.Add(this.objtempemp).subscribe(res=>{
          alert("Client Added successfully");
            this.TakeHome();
          }
        )
    }
  }
  
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('client'); 
  }


}
