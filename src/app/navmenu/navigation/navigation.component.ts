import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { RouterLinkActive } from '@angular/router'; 
import { AuthenticationService } from 'src/app/DataService/authentication.service';
import { ConfigService } from 'src/app/config.service';
// import * as $ from './././node_modules/jquery_modules/jquery'; 

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  // styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterContentChecked {

  menu: any;
  isLoggedIn: boolean;
  menuOpen: boolean;
  database = 'menu';
  profileImage: string;
  user: any;

  constructor(private location: Location,
    private auth: AuthenticationService,
    private config: ConfigService
  ) { }

  ngOnInit() {

    this.menuOpen = false;
    this.getMenu();
    this.isLoggedIn = this.auth.isloggedIn();
    this.getUser();

    }
  ngAfterContentChecked() {
    of(this.auth.isloggedIn()).subscribe(
      () => {
        this.getUser();
      }
    );

  }

  logout() {
    this.auth.logout();
  }

  toggleMenu(status: boolean) {
    this.menuOpen = status;
  }

  getMenu() {
    this.config.getsettings(this.database).subscribe(

      setting => {
        this.menu = setting;
        console.log(setting);
      }

    );
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.user=null;
    if (this.user) {
      this.profileImage = this.user.image;
    } else {
      this.profileImage = 'default-user.jpg';
    }

  }



}
