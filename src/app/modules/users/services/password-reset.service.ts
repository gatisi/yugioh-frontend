import { Injectable } from '@angular/core';
import {PasswordResetRequest} from '../entities/PasswordResetRequest';
import {HttpClient} from '@angular/common/http';
import {NewPassword} from '../entities/new-password';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  requestReset(request: PasswordResetRequest) {
    this.httpClient.post('http://localhost:8080/user/password/requesttoken', request).subscribe();
  }

  reset(request: NewPassword) {
    this.httpClient.post('http://localhost:8080/user/password/reset', request).subscribe();
  }
}
