import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../DataService/authentication.service';
import { TripService } from '../DataService/trip.service';
import { Router } from '@angular/router';
import { Trip } from 'src/Models/Trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.sass']
})
export class TripComponent implements OnInit {
    objlist: Trip[];

    constructor(private tripService:TripService){

    }

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }
 

    LoadData() { 
        this. tripService.Get().subscribe((tempdate) => {
          this.objlist = <Trip[]>tempdate;
          console.log(this.objlist);
          if (this.objlist.length > 0) {
            // this.dataavailbale = true;
          }
          else {
            // this.dataavailbale = false;
          }
        }), err => {
            console.log(err);
          }
       
        }
}