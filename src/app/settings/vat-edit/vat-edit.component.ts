import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { VatService } from '../vat-service';
import { Vat } from 'src/Models/Vat';
@Component({
  selector: 'app-vat-edit',
  templateUrl: './vat-edit.component.html',
  styleUrls: ['./vat-edit.component.sass']
})

export class VatEditComponent implements OnInit {

  constructor(private dataservice: VatService, private route: Router) {

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

  
  objtempemp: Vat;
  @Input() objemp: Vat = new Vat();

  
  EditMainObject(regForm: NgForm) {
    
    if(!this.IsNew){      

      this.objemp = regForm.value;
      console.log('this.objemp=>',this.objemp)
      this.dataservice.EditVat(this.objemp).subscribe(res => {
         
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
        
      });
    }
    else{
         
      this.objtempemp=new Vat();      
      this.objtempemp.code=regForm.value.code;
      this.objtempemp.name=regForm.value.name;   
      this.objtempemp.value=regForm.value.value;   
       
      this.dataservice.AddVat(this.objtempemp).subscribe(res=>{
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
