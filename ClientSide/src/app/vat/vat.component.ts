import { Component, OnInit, ViewChild } from '@angular/core';
import { Vat } from 'src/Models/Vat'; 
import { VatDataService } from '../DataService/VatDataService';
import { Router } from '@angular/router';
import { VatEditComponent } from '../vat-edit/vat-edit.component';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.sass']
})
export class VatComponent implements OnInit {
 
    objlist: Vat[];
    dataavailbale: Boolean = false;
    action:string
    tempemp: Vat
  
    constructor(private dataservce: VatDataService, private route: Router) {
    
    }
  
    ngOnInit() {
      this.LoadData(); 
    }
  
    LoadData() { 
      this.dataservce.getVat().subscribe((tempdate) => {
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
    deleteconfirmation(id: string) {
  
      if (confirm("Are you sure you want to delete this ?")) {
        this.tempemp = new Vat();
        this.tempemp.id = id;
        this.dataservce.DeleteVat(this.tempemp).subscribe(res => {
          alert("Deleted successfully !!!");
          this.LoadData();
        })
      }
    }


    // @ViewChild('empadd') addcomponent: VatAddComponent

    @ViewChild('editvat') editcomponent: VatEditComponent
  
  
  
    loadAddnew() {
      this.action="add vat";
      this.editcomponent.objemp.displayname = ""
      this.editcomponent.objemp.value = "" 
      this.editcomponent.objemp.id = "" 
      this.editcomponent.IsNew=true;
    }
  
    loadnewForm(id: string, displayname: string, value: string) {
      this.editcomponent.IsNew=false;
      this.action="Edit vat : "+displayname;
      console.log(displayname);
      this.editcomponent.objemp.displayname = displayname
      this.editcomponent.objemp.value = value 
      this.editcomponent.objemp.id = id  
    }
  
    RefreshData() {
      this.LoadData();
    }
  
}
