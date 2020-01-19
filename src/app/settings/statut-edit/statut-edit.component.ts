import { Component, OnInit, Input, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stat } from 'fs';
import { Statut } from 'src/Models/Statut';
import { StatutService } from '../StatutService';

@Component({
  selector: 'app-statut-edit',
  templateUrl: './statut-edit.component.html',
  styleUrls: ['./statut-edit.component.css']
})
export class StatutEditComponent implements OnInit {
  
  ngOnInit(){
  this.RefreshData();
  }
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn', { static: false, }) cb: ElementRef;
  //****************Refresh data()*********************************** */
  RefreshData() {
    this.LoadData();
  }
  constructor(private dataservce:StatutService){
  }
  /***********************Variable******************************** */
  @Input() IsNew: boolean = true;
    dataavailbale:boolean=false;
    tempdate:Statut;
    objlist:Statut[];
    objtempemp:Statut;
    @Input() objemp: Statut = new Statut();
    /********************Get Data()************************************* */
  LoadData(){
    this.dataservce.get().subscribe((tempdate) => {
      this.objlist = tempdate;
        console.log(this.objlist);
        if (this.objlist.length > 0) {
          this.dataavailbale = true;
        }
        else {
          this.dataavailbale = false;
        }
      }
      )
        , err => {
          console.log(err);
        }
  }
  /*************************Add / Edit ************************************************ */
  EditMainObject(regForm: NgForm) {
    /************************Add Code******************** */
    if(!this.IsNew){      
      this.objemp = regForm.value;
      this.dataservce.update(this.objemp).subscribe(res => {
        alert("Statut modified successfully");
        this.RefreshData();
      });
    }
    /********************Edit Code******************************** */
    else{
      this.objtempemp=new Statut();      
      this.objtempemp.name=regForm.value.libelle;
      this.objtempemp.remark=regForm.value.remarque;    
      this.dataservce.add(this.objtempemp).subscribe(res=>{
        alert("Statut Added successfully");
        this.RefreshData();
      })
    }
  }
 
  
}
