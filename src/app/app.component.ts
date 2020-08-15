import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yugioh';
  constructor(private router: Router) {
  }
  navigateToHome() {
    this.router.navigateByUrl('/');
  }
  navigateToUsers() {
    this.router.navigateByUrl('/users');
  }
  navigateToTests() {
    this.router.navigateByUrl('/tests');
  }
  logoutClicked() {
    this.router.navigateByUrl('/users/logout').then();
  }
}


