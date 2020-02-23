import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef, OnChanges, SimpleChanges } from '@angular/core'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { VatService } from '../vat-service';
import { Vat } from 'src/Models/Vat';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.states';
import { Update, Add, Upsert } from 'src/app/store/settings/vat.action';
import { selectAll,selectOne } from 'src/app/store/settings/vat.selector';
import { ObservableInput, Observable } from 'rxjs';
@Component({
  selector: 'app-vat-edit',
  templateUrl: './vat-edit.component.html',
  styleUrls: ['./vat-edit.component.sass']
})

export class VatEditComponent implements OnInit{

  constructor(private route: Router,private _store: Store<IAppState>) {


  }
  
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn', { static: false, }) cb: ElementRef;
  ngOnInit() { 
 
  }

   
  @Input() reset: boolean = false;
  @ViewChild('editvat', { static: false, }) myForm: NgForm;
  @Input() isReset: boolean = false;
  @Input() IsNew: boolean = true;

   
  @Input() objemp: Vat = new Vat();

  
  EditMainObject(regForm: NgForm) { 
    this.objemp = regForm.value;  
    console.log('this.objemp=>',this.objemp); 
    this._store.dispatch(this.IsNew?
      Add({one:this.objemp}):
      Update({one:this.objemp})
      );     

    this._store.dispatch(this.IsNew?
        Add({one:this.objemp}):
        Update({one:this.objemp})
        );    
  }
  
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    //this.route.navigateByUrl('tva'); 
  }


}
