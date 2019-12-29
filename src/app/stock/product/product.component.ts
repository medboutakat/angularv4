import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
 
 

  
  objlist: Product[];
  dataavailbale: Boolean = false;
  action:string
  tempemp: Product;

  constructor(private dataservce: ProductService, private route: Router) {
  
  }

  ngOnInit() {
    this.LoadData();

  }

  LoadData() { 
    this.dataservce.Get1().subscribe((tempdate) => {
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
      this.tempemp = new Product();
      this.tempemp.id = id;
      this.dataservce.Delete(id).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }


  // @ViewChild('empadd') addcomponent: VatAddComponent

  // @ViewChild('editvat') editcomponent: VatEditComponent



  loadAddnew() {
    this.action="add vat";
    // this.editcomponent.objemp.displayname = ""
    // this.editcomponent.objemp.value = "" 
    // this.editcomponent.objemp.id = "" 
    // this.editcomponent.IsNew=true;
  }

  loadnewForm(id: string, displayname: string, value: string) {
    // this.editcomponent.IsNew=false;
    this.action="Edit vat : "+displayname;
    console.log(displayname);
    // this.editcomponent.objemp.displayname = displayname
    // this.editcomponent.objemp.value = value 
    // this.editcomponent.objemp.id = id  
  }

  RefreshData() {
    this.LoadData();
  }

}
