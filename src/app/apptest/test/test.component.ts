import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  hide = true;
  constructor(private router: Router, private title: Title) { }

  ngOnInit() {

    this.title.setTitle("Connexion - Cosumar")
  }


  UsernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  PasswordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();
  error: boolean = false;
  msg: String;
  charg: boolean = false;
  logIn() {
    if (this.UsernameFormControl.valid && this.PasswordFormControl.valid) {


      this.charg = true;
      this.error = false;
      console.log(this.UsernameFormControl.value + "///" + this.PasswordFormControl.value);
      /*
      this.auth.logIn(this.UsernameFormControl.value).subscribe(value => {
        this.personne = value;
        console.log(this.personne);
        console.log(this.personne.accesMod);
        if (this.personne.password == this.PasswordFormControl.value) {
          console.log('succes' + this.personne.accesMod);
          if (this.personne.accesMod == "user") this.router.navigate(['profile']);
          if (this.personne.accesMod == "rh") {
            this.router.navigate(['employes']);
            console.log("its an rh");
          }
          if (this.personne.accesMod == "sec") this.router.navigate(['securite']);
          if (this.personne.accesMod == "director") this.router.navigate(['employes']);
          // store user details  in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(this.personne));
          this.charg = false;
          return true;
        } else {
          this.charg = false;
          this.error = true;
          console.log('failles');

          return false;

        }
      });*/


    }
  }
  logOut() {
    //this.auth.logOut();
  }

}
