import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Role} from '../../entities/role';
import {UpdateRoleDialogComponent} from '../update-role-dialog/update-role-dialog.component';
import {MatDialog} from "@angular/material/dialog";
import {Router} from '@angular/router';
import {ConfirmationDialogComponent} from "../../../shared/components/confirmation-dialog/confirmation-dialog.component";

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
    private router: Router
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
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?";
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.usersService.deleteRole(role).subscribe(
          res => this.ngOnInit()
        );
      }
      }
    );
  }

}
