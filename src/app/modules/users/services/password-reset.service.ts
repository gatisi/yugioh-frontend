import { Injectable } from '@angular/core';
import {PasswordResetRequest} from '../entities/PasswordResetRequest';
import {HttpClient} from '@angular/common/http';
import {NewPassword} from '../entities/new-password';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  requestReset(request: PasswordResetRequest) {
    this.httpClient.post(environment.apiUrl + '/user/password/requesttoken', request).subscribe();
  }

  reset(request: NewPassword) {
    this.httpClient.post(environment.apiUrl + '/user/password/reset', request).subscribe();
  }
}
