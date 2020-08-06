import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {MatDialog} from '@angular/material/dialog';
import {UpdateUserDialogComponent} from '../update-user-dialog/update-user-dialog.component';
import {User} from '../../entities/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public users = [];
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'role', 'update', 'delete'];


  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.usersService.getAllUsers().subscribe(
      res => {
        this.users = res;
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
    this.usersService.deleteUser(user).subscribe(
      res => this.ngOnInit()
    );
  }

}
