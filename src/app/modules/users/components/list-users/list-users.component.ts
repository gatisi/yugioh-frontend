import {Component, OnInit} from '@angular/core';
import {SecureHttpClientService} from '../../services/secure-http-client.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {


  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.usersService.getUsers().subscribe(
      res => console.log(res)
    );
  }

}
