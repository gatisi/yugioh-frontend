import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PasswordResetService} from '../../services/password-reset.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordResetRequest} from '../../entities/PasswordResetRequest';
import {NewPassword} from '../../entities/new-password';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  tokenStr: string;
  passwordReset: boolean;
  form = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private route: ActivatedRoute,
    private passwordResetService: PasswordResetService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.passwordReset = false;
    this.route.params.subscribe(params => {
      this.tokenStr = params.token;
    });
  }


  submit() {
    const newPassword = new NewPassword();
    newPassword.tokenStr = this.tokenStr;
    newPassword.password = this.form.getRawValue().password;
    this.passwordResetService.reset(newPassword);
    this.passwordReset = true;
  }
}
