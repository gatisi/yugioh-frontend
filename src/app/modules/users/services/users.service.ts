import {Injectable} from '@angular/core';
import {User} from '../entities/user';
import {SecureHttpClientService} from '../../shared/secure-http-client.service';
import {Observable} from 'rxjs';
import {Role} from '../entities/role';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  getUsers(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080/user/get/id/1');
  }

  saveUser(user: User): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/user/register', user);
  }

  updateUser(user: User): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/user/update', user);
  }

  getAllUsers(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080/user/all');
  }

  deleteUser(user: User): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/user/delete', user);
  }

  saveRole(role: Role): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/users/roles/create', role);
  }

  getAllRoles(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080/users/roles/list');
  }
  deleteRole(role: Role): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/users/roles/delete', role);
  }

  updateThisUser(user: User) {
    return this.secureHttpClientService.post('http://localhost:8080/user/updatethis', user);
  }
}
