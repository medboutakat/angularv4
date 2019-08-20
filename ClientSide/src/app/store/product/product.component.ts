import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Product } from 'src/Models/Products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service:ProductService) { }
  ObjViews:Product[]=new Array();
  ngForm:any;

  ngOnInit() {
  this.Load();
  }
  tempObj:Product=new Product();

  EditMainObject(objForm:NgForm){
  
    let formValue=objForm.value;
    this.tempObj.code=formValue.code;
    this.tempObj.descreption=formValue.descreption;
    this.tempObj.price=formValue.price;
    console.log(this.tempObj);
    this.service.Add(this.tempObj).subscribe((data)=>{
      console.log(data);
      this.Load();
    })
console.log(objForm.value);  
}
  Load(){
    this.service.Get().subscribe((data)=>{
      console.log(data);
     this.ObjViews=<Product[]>data;
    })
  
  }
  /***
   *  "id": 0,
    "code": "string",
    "descreption": "string",
    "price": "string",
   */

}
