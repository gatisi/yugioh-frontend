import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  private formSubmitted;
  roleCreationForm = new FormGroup({
    role: new FormControl(''),

  });
  private buttonDisabled= false;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private authenticationService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  saveRole() {
    this.buttonDisabled = true;
    this.usersService.saveRole(this.roleCreationForm.getRawValue()).subscribe(
      res => {
        if (this.authenticationService.isLoggedIn()) {
          this.router.navigateByUrl('users/roles/list');
        } else {
          this.router.navigateByUrl('/users/login');
        }
      }
    );
  }

}
