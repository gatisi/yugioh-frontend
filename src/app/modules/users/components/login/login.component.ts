import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {AuthenticationResult} from '../../entities/AuthenticationResult';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.httpClient.post<AuthenticationResult>('http://localhost:8080/login', this.loginForm.getRawValue()).subscribe(
      authenticationResult => this.authService.saveAuthentication(
        authenticationResult
      )
    );
  }
}
