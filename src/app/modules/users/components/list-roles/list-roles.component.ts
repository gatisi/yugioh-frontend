import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Role} from '../../entities/role';
import {UpdateRoleDialogComponent} from '../update-role-dialog/update-role-dialog.component';
import {MatDialog} from "@angular/material/dialog";
import {Router} from '@angular/router';
import {MatTableDataSource} from "@angular/material/table";
import {UserData} from "../../../articles/components/material-example/material-example.component";

// @ts-ignore
@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {
  public roles = [];
  displayedColumns: string[] = ['id', 'roleName', 'update', 'delete'];
  dataSource: MatTableDataSource<Role>;

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.usersService.getAllRoles().subscribe(
      res => {
        this.roles = res;
        this.dataSource = new MatTableDataSource(res);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
