import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.sass']
})
export class StatutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoEdit(){
    this.router.navigate(['statusedit'])
  }

}
