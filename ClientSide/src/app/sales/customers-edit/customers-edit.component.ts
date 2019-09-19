import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/DataService/ClientDataService';
import { client } from 'src/Models/Client';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {

  client : client;

  constructor(private service:ClientDataService) { }

  ngOnInit() {
  }

}
