import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { VendorService } from '../vendor.service';
import { Vendor } from 'src/Models/vendor';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor:Vendor;


  // myForm = new FormGroup({
  //   id: new FormControl(''),
  //   code: new FormControl(''),
  //   name1: new FormControl(''),
  //   name2: new FormControl(''),
  //   adress: new FormControl(''),
  //   city: new FormControl(''),
  //   phone: new FormControl(''),
  //   gsm: new FormControl(''),
  //   fax: new FormControl(''),
  //   email: new FormControl('')
  // }); 




  private sub:any;
  action:string = "";
  constructor(private service:VendorService, private router:Router, private route: ActivatedRoute) { }


  generate(){
    this.vendor = new Vendor();
    this.vendor.id = 0,
    this.vendor.code = "",
    this.vendor.name1 = "",
    this.vendor.name2 = "",
    this.vendor.adress = "",
    this.vendor.phone = "",
    this.vendor.gsm = "",
    this.vendor.fax = "",
    this.vendor.email = ""

  }

  ngOnInit() {    

     this.generate();
    this.sub = this.route.params.subscribe(params => {
      var id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.

      if(isNaN(id)){
        this.generate(); 
      }
      else{
        this.service.Get1(id).subscribe( result => {
          this.vendor = result; 
        });
      }

      // console.log("Vendor",this.vendor);
   });
  }

  onSubmit(){
    //this.vendor = this.myForm.value;
    if(this.vendor.id == 0){
      console.log(this.vendor);
      this.service.Add(this.vendor).subscribe(result=>{
  
        this.vendor=result;
      });
    }
    else{
      console.log(this.vendor);
      this.service.Edit(this.vendor).subscribe( result => {
        this.vendor = result;
      })      
    }
   
    this.service.IsAffected = true;
    console.log(this.vendor);
    
    this.router.navigateByUrl("vendor").then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });

  }

}
