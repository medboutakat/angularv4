import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {


  addresse:string;

  constructor() { }
 
  ngOnInit() {

    this.addresse='beni mellal';
  }

}
