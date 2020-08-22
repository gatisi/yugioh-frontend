import {Injectable} from '@angular/core';
import {User} from '../entities/user';
import {SecureHttpClientService} from '../../shared/secure-http-client.service';
import {Observable} from 'rxjs';
import {Role} from '../entities/role';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  getUsers(): Observable<any> {
    return this.secureHttpClientService.get(environment.apiUrl + '/user/get/id/1');
  }

  saveUser(user: User): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/user/register', user);
  }

  updateUser(user: User): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/user/update', user);
  }

  getAllUsers(): Observable<any> {
    return this.secureHttpClientService.get(environment.apiUrl + '/user/all');
  }

  deleteUser(user: User): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/user/delete', user);
  }

  saveRole(role: Role): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/users/roles/create', role);
  }

  getAllRoles(): Observable<any> {
    return this.secureHttpClientService.get(environment.apiUrl + '/users/roles/list');
  }

  deleteRole(role: Role): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/users/roles/delete', role);
  }

  updateThisUser(user: User) {
    return this.secureHttpClientService.post(environment.apiUrl + '/user/updatethis', user);
  }

  updateRole(role: Role): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/users/roles/update', role);
  }

}
