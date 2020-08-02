import { Injectable } from '@angular/core';
import {SecureHttpClientService} from './secure-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private secureHttpClientService: SecureHttpClientService) { }

  getUsers() {
    return this.secureHttpClientService.get('http://localhost:8080/user/get/id/1');
  }
}
