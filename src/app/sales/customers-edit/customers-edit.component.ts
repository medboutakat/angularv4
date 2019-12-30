import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/DataService/ClientDataService';
import { CustomerService } from 'src/app/sales/customer-service';
import { Customer } from 'src/Models/Customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {

  client : Customer;
  myForm:FormGroup;
  //gender:string[] = ["Male","Female","Unknown"];
  genders: any[] = [
    {value: '0', viewValue: 'Male'},
    {value: '1', viewValue: 'Female'},
    {value: '2', viewValue: 'Unknown'}
  ];

  show: boolean = false;



  constructor(private customerService:CustomerService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      id: [''],
      code: ['', Validators.required],
      name1:['', Validators.required],
      name2:[''],
      name3: [''],
      patent:['', Validators.required],            
      adresse:['', Validators.required],
      gender: ['select gender', Validators.required],         
      email: ['', [Validators.required, Validators.email]],
      rc: ['', Validators.required],
      clientCategorieID: [''],
      contracts: [''],         
      clientLocationID: [''],  
      clientLocation: ['']   
    });    

    this.client  = new Customer();
    this.client.code = "123";
    this.client.name1 = "sara";
    this.myForm.setValue(this.client); 
  }

  //get f():any { return this.myForm.controls; }

  EditMainObject(EditForm){
    this.client = new Customer();
    this.client = this.myForm.value;
    this.client.id = 1033;
    alert( "client value : "+ this.client + "\n email client "+ this.client.email  );
    this.customerService.Update(this.client).subscribe( resultat => {
    });
  }

}