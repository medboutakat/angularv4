import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
import {InvoiceHeader} from './model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private servcie:DemoService) { }

  data:InvoiceHeader[] = new Array();
  ngOnInit() {
    this.LoadData();
  }
  
  LoadData(){
    this.servcie.get().subscribe((resp)=>{
      this.data=<InvoiceHeader[]>resp;
      console.log(this.data);
    })
  }

}
