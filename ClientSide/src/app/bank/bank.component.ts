import { Component, OnInit } from '@angular/core';
import { BankDataService } from '../DataService/BankDataService';
import { Router } from '@angular/router';
import { Bank } from 'src/Models/Bank';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.sass']
})
export class BankComponent implements OnInit {

  objlist: Bank[];
  dataavailbale: Boolean = false;
  action:string
  tempemp: Bank

  constructor(private dataservce: BankDataService, private route: Router) {
  
  }

  ngOnInit() {
    this.LoadData();

  }

  LoadData() { 
    // this.dataservce.Get().subscribe((tempdate) => {
    //   this.objlist = tempdate;
    //   console.log(this.objlist);
    //   if (this.objlist.length > 0) {
    //     this.dataavailbale = true;
    //   }
    //   else {
    //     this.dataavailbale = false;
    //   }
    // }), err => {
    //     console.log(err);
    //   }
  }
  deleteconfirmation(id: string) {

    if (confirm("Are you sure you want to delete this ?")) {
      this.tempemp = new Bank();
      this.tempemp.id = id;
      this.dataservce.Delete(this.tempemp).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }


  // @ViewChild('empadd') addcomponent: VatAddComponent

  // @ViewChild('editvat') editcomponent: VatEditComponent



  // loadAddnew() {
  //   this.action="add vat";
  //   this.editcomponent.objemp.displayname = ""
  //   this.editcomponent.objemp.value = "" 
  //   this.editcomponent.objemp.id = "" 
  //   this.editcomponent.IsNew=true;
  // }

  // loadnewForm(id: string, displayname: string, value: string) {
  //   this.editcomponent.IsNew=false;
  //   this.action="Edit vat : "+displayname;
  //   console.log(displayname);
  //   this.editcomponent.objemp.displayname = displayname
  //   this.editcomponent.objemp.value = value 
  //   this.editcomponent.objemp.id = id  
  // }

  RefreshData() {
    this.LoadData();
  }

}
