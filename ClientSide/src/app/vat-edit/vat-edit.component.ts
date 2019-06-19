import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { VatDataService } from '../DataService/VatDataService';
import { Vat } from 'src/Models/Vat';
@Component({
  selector: 'app-vat-edit',
  templateUrl: './vat-edit.component.html',
  styleUrls: ['./vat-edit.component.sass']
})

export class VatEditComponent implements OnInit {

  constructor(private dataservice: VatDataService, private route: Router) {

  }
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn') cb: ElementRef;
  ngOnInit() { 
  }

  @Input() reset: boolean = false;
  @ViewChild('editvat') myForm: NgForm;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = false;

  
  objtempemp: Vat;
  @Input() objemp: Vat = new Vat();

  EditMainObject(regForm: NgForm) {
    if(!this.IsNew){
      this.dataservice.EditVat(this.objemp).subscribe(res => {
        alert("Employee updated successfully");
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
      });
    }else{
         
        this.objtempemp=new Vat();
        this.objtempemp.displayname=regForm.value.displayname;
        this.objtempemp.value=regForm.value.value;    
        this.dataservice.AddVat(this.objtempemp).subscribe(res=>{
          alert("Vat Added successfully");
            this.TakeHome();
          }
        )
    }
  }
  
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('tva'); 
  }


}
