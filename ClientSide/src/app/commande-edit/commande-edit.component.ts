import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  
import { InvoiceHeader } from 'src/Models/Commande';
// import { InvoiceHeader } from 'src/Models/Commande';
import { IDataService } from '../DataService/IDataService'; 


@Component({
  selector: 'app-commande-edit',
  templateUrl: './commande-edit.component.html',
  styleUrls: ['./commande-edit.component.sass']
})
export class CommandeEditComponent implements OnInit {

  constructor(private dataservice: IDataService<InvoiceHeader>, private route: Router) {

  }

  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn') cb: ElementRef;
  ngOnInit() { 
  }

  @Input() reset: boolean = false;
  @ViewChild('editview') myForm: NgForm;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = false;

  
  objView: InvoiceHeader;
  @Input() objemp: InvoiceHeader = new InvoiceHeader();

  EditMainObject(regForm: NgForm) {
 
    alert("Opration "+this.IsNew);

    if(!this.IsNew){
      this.dataservice.EditEmployee(this.objemp).subscribe(res => {
        alert("Employee updated successfully");
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click(); 
      });
    }else{ 
        this.objView=new InvoiceHeader();
        this.objView.code=regForm.value.code;
        this.objView.date=regForm.value.date;   

        this.dataservice.AddObject(this.objView).subscribe(res=>{
          alert("Vat Added successfully");
            this.TakeHome();
          }
        )
    }
   
  }
  
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('commande');
  }

}

