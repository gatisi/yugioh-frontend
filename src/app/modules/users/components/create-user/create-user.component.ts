import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  registrationForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private usersService: UsersService,
    private router: Router,
    private authenticationService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.usersService.saveUser(this.registrationForm.getRawValue()).subscribe(
      res => {
        if (this.authenticationService.isLoggedIn()) {
          this.router.navigateByUrl('/users/list');
        } else {
          this.router.navigateByUrl('/users/login');
        }
      }
    );
  }


}
