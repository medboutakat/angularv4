import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../DataService/authentication.service';
import { TripService } from '../DataService/trip.service';
import { Router } from '@angular/router';
import { Trip } from 'src/Models/Trip';
import { AgGridNg2 } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.sass']
})
export class TripComponent{  
  
  private gridApi:any;
  private gridColumnApi:any;

  private columnDefs;
  private defaultColDef;
  private rowData: any;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: "id",
        width: 150,
        suppressSizeToFit: true
      },
      {
        field: "fname",
        width: 90,
        minWidth: 50,
        maxWidth: 100
      },
      {
        field: "lname",
        width: 110
      },
      {
        field: "enddate",
        width: 120
      } 
    ];
    this.defaultColDef = { resizable: true };
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi; 
    this.http
      .get(
        "http://localhost:42333/api/Employees"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
}