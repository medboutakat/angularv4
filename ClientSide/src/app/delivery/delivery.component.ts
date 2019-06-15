import { Component, OnInit, ViewChild } from '@angular/core';
import { Delivery } from 'src/Models/Delivery'; 
import { DeliveryDataService } from '../DataService/DeliveryDataService';
import { Router } from '@angular/router';
import { DeliveryEditComponent } from '../Delivery-edit/Delivery-edit.component';

@Component({
  selector: 'app-Delivery',
  templateUrl: './Delivery.component.html',
  styleUrls: ['./Delivery.component.sass']
})
export class DeliveryComponent implements OnInit {
 
    objlist: Delivery[];
    dataavailbale: Boolean = false;
    action:string
    tempemp: Delivery
  
    constructor(private dataservce: DeliveryDataService, private route: Router) {
    
    }
  
    ngOnInit() {
      this.LoadData(); 
    }
  
    LoadData() { 
      this.dataservce.getDelivery().subscribe((tempdate) => {
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
        this.tempemp = new Delivery();
        this.tempemp.id = id;
        this.dataservce.DeleteDelivery(this.tempemp).subscribe(res => {
          alert("Deleted successfully !!!");
          this.LoadData();
        })
      }
    }


    // @ViewChild('empadd') addcomponent: DeliveryAddComponent

    @ViewChild('editDelivery') editcomponent: DeliveryEditComponent
  
  
  
    loadAddnew() {
      this.action="add Delivery";
      this.editcomponent.objemp.displayname = ""
      this.editcomponent.objemp.value = "" 
      this.editcomponent.objemp.id = "" 
      this.editcomponent.IsNew=true;
    }
  
    loadnewForm(id: string, displayname: string, value: string) {
      this.editcomponent.IsNew=false;
      this.action="Edit Delivery : "+displayname;
      console.log(displayname);
      this.editcomponent.objemp.displayname = displayname
      this.editcomponent.objemp.value = value 
      this.editcomponent.objemp.id = id  
    }
  
    RefreshData() {
      this.LoadData();
    }
  
}
