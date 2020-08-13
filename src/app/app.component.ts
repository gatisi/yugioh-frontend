import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "./modules/shared/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'yugioh';


  constructor(private router: Router,
              private authService: AuthService) {
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
  public isLoggedIn: boolean = false;

/*  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(status => this.isLoggedIn = status);
  }*/
}

