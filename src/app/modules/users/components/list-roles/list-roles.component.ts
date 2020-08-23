import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Role} from '../../entities/role';
import {UpdateRoleDialogComponent} from '../update-role-dialog/update-role-dialog.component';
import {MatDialog} from "@angular/material/dialog";
import {Router} from '@angular/router';
import {ConfirmationDialogComponent} from "../../../shared/components/confirmation-dialog/confirmation-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {UserData} from "../../../articles/components/material-example/material-example.component";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {isBoolean} from "util";

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
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataIsLoaded: boolean = false;

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getRoles();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRoles() {
    this.usersService.getAllRoles().subscribe(
      res => {
        this.dataIsLoaded = true;
        this.roles = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
        if (result) {
          this.usersService.deleteRole(role).subscribe(
            res => this.ngOnInit()
          );
        }
      }
    );
  }


}
