import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Role} from '../../entities/role';
import {UpdateRoleDialogComponent} from '../update-role-dialog/update-role-dialog.component';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {
  public roles = [];
  displayedColumns: string[] = ['id', 'roleName', 'update', 'delete'];

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
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

  editRole(role: Role): void {
    const dialogRef = this.dialog.open(UpdateRoleDialogComponent, {
      width: '400px',
      data: role
    });
  }

  deleteRole(role: Role): void {
    this.usersService.deleteRole(role).subscribe(
      res => this.ngOnInit()
    );
  }
}
