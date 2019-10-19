import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { NgForm,  FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { VendorService } from '../vendor.service';
import { Vendor } from 'src/Models/vendor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})

export class VendorEditComponent implements OnInit {

  private sub:any;
  action:string = "";
  vendor:Vendor = new Vendor();
  public changes : any;
  @Output() outputExemple = new EventEmitter<Vendor>();


  constructor(private service:VendorService, private router:Router, private formBuilder: FormBuilder) { }

  vendorEdit: FormGroup;
  isSubmitted  =  false;   
  div : any;
  any:string = "That is my 2nd test for viewchild";
  

  // 

  // get formControls() { return this.vendorEdit.controls; }

  ngOnInit() {    
    
    this.vendorEdit  =  this.formBuilder.group({
      id: [''],
      code: ['', Validators.required],
      name1: ['', Validators.required],
      name2: ['', Validators.required],
      adress: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)] ],
      gsm: ['', Validators.required],
      fax: ['', Validators.required],
      email: ['', [Validators.required, Validators.email] ]
    });       
        
    this.vendorEdit.setValue(this.vendor);
  }  
  
  onSubmit(){        
    
    this.vendor = this.vendorEdit.value;
    console.log(this.vendor);

    if( this.service.do == 1 ){      
      this.service.Add(this.vendor).subscribe(r=>{          
      });
    }

    if( this.service.do == 2){      
      this.service.Edit(this.vendor).subscribe( r => {        
      });          
    }

    this.service.show = false;    
    
    this.outputExemple.emit(this.vendor);
    this.isSubmitted = true;    
    
    // if( this.vendorEdit.valid){
    //   location.reload();     
    // }

  }

}
