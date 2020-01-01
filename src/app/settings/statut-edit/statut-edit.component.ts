import { Component, OnInit, Input, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { StautService } from '../staut.service';
import { Statut } from 'src/Models/statut.model';
import { NgForm } from '@angular/forms';
import { StatutComponent } from '../statut/statut.component';
import { stat } from 'fs';

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
  constructor(private dataservce:StautService){
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
    this.dataservce.getStatuts().subscribe((tempdate) => {
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
      this.dataservce.EditStatut(this.objemp).subscribe(res => {
        alert("Statut modified successfully");
        this.RefreshData();
      });
    }
    /********************Edit Code******************************** */
    else{
      this.objtempemp=new Statut();      
      this.objtempemp.libelle=regForm.value.libelle;
      this.objtempemp.remarque=regForm.value.remarque;    
      this.dataservce.AddStatut(this.objtempemp).subscribe(res=>{
        alert("Statut Added successfully");
        this.RefreshData();
      })
    }
  }
 
  
}
