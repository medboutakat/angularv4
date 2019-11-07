import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { ClientDataService } from 'src/app/DataService/ClientDataService';
import { ChildeditComponent } from '../childedit/childedit.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service:ClientDataService) { }

  clients:Customer[]=new Array();
  
  ngOnInit() {
    this.LoadData();

  }
  LoadData(){
    this.service.getClient().subscribe((resp) => {
      this.clients = resp;
      console.log(this.clients);
    })
  }
  @ViewChild('editView', { static: false, }) editcomponent: ChildeditComponent
  objTemp:Customer;
  loadEditForm(id: string) {

    this.service.getOne(id).subscribe((data) => {
      this.objTemp = data;
      console.log(data);
      /*
      this.editcomponent.IsNew = false;
      this.editcomponent.objTemp = this.objTemp
      this.editcomponent.objDetails = this.objTemp.invoiceDetails;
      console.log(this.editcomponent.objDetails);
      */
    }), err => {
      console.log(err);
    }

  }
  RefreshData() {
    this.LoadData();
  }

}
