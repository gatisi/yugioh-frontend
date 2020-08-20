import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {MatDialog} from '@angular/material/dialog';
import {UpdateUserDialogComponent} from '../update-user-dialog/update-user-dialog.component';
import {User} from '../../entities/user';
import {ConfirmationDialogComponent} from "../../../shared/components/confirmation-dialog/confirmation-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public users = [];
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'role', 'update', 'delete'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();

    }
  }

  getUser() {
    this.usersService.getAllUsers().subscribe(
      res => {
        this.users = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(UpdateUserDialogComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => this.ngOnInit());
  }

  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?";
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.usersService.deleteUser(user).subscribe(
            res => this.ngOnInit()
          );
        }
      }
    );
  }

}
