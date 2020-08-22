import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordResetRequest} from '../../entities/PasswordResetRequest';
import {PasswordResetService} from '../../services/password-reset.service';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  resetEmailSent: boolean;
  constructor(
    private passwordResetService: PasswordResetService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.resetEmailSent = false;
  }

  goToRegister() {
    this.router.navigateByUrl('/users/create').then();
  }

  reset() {
    const request = new PasswordResetRequest();
    request.email = this.form.getRawValue().email;
    request.host = environment.apiUrl;
    this.passwordResetService.requestReset(request);
    this.resetEmailSent = true;
  }
}
