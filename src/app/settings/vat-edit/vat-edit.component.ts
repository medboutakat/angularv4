import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef, OnChanges, SimpleChanges } from '@angular/core'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { VatService } from '../vat-service';
import { Vat } from 'src/Models/Vat';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.states';
import { Update, Add } from 'src/app/store/settings/vat/vat.action';
import { selectAll,selectOne } from 'src/app/store/settings/vat/vat.selector';
import { ObservableInput, Observable } from 'rxjs';
import { EditSettingsComponent } from '../edit-settings/edit-settings.component';
@Component({
  selector: 'app-vat-edit',
  templateUrl: './vat-edit.component.html',
  styleUrls: ['./vat-edit.component.sass']
})

export class VatEditComponent implements OnInit {

  constructor(private route: Router,private _store: Store<IAppState<Vat>>) {
 
  }
  
  @Output() nameEvent = new EventEmitter<string>(); 

  @ViewChild('editVat', { static: false, }) myForm: NgForm;
  @ViewChild('closeBtn', { static: false, }) cb: ElementRef;
  
  ngOnInit() {  
  }
  
   
  @Input() reset: boolean = false; 
  @Input() isReset: boolean = false;
  @Input() isNew: boolean = true;   


  @Input() objemp= new Vat() ;

 
  EditMainObject(regForm: NgForm) {  
     console.log('regForm.value=>',regForm);
    var payLoad={
      one:this.objemp
    }
    console.log('payLoad=>',payLoad);  

    this._store.dispatch(this.isNew?
        Add(payLoad):
        Update(payLoad)
        );    
  }
  
  TakeHome(){ 
    console.log('settings/vats');  
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    console.log('settings/vats');  
    this.route.navigateByUrl('settings/vats'); 
  } 

  detectChanges() { 
    console.log('detectChanges=>');  
  }
}
