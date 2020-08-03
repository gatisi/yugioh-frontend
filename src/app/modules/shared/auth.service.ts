import {Injectable} from '@angular/core';
import {AuthenticationResult} from '../users/entities/AuthenticationResult';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  saveAuthentication(authenticationResult: AuthenticationResult) {
    sessionStorage.setItem('yugioh.token', authenticationResult.token);
  }

  logout(): void {
    sessionStorage.clear();
  }

  getToken(): string {
    return sessionStorage.getItem('yugioh.token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
