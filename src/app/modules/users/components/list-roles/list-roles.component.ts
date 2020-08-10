import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Role} from '../../entities/role';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {
  public roles = [];
  displayedColumns: string[] = ['id', 'roleName', 'delete'];

  constructor(
    private usersService: UsersService,
  ) {
  }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.usersService.getAllRoles().subscribe(
      res => {
        this.roles = res;
      }
    );
  }

  deleteRole(role: Role): void {
    this.usersService.deleteRole(role).subscribe(
      res => this.ngOnInit()
    );
  }
}
