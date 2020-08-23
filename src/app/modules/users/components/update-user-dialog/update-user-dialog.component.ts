import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../entities/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-update-user-dialog',
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.css']
})
export class UpdateUserDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private usersService: UsersService
  ) { }

  registrationForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    password: new FormControl(''),
  });
  buttonDisabled: boolean = false;

  ngOnInit(): void {
  }

  saveUser() {
    this.buttonDisabled = true;
    this.usersService.updateUser(this.user).subscribe(
      res => this.dialogRef.close()
    );
  }
  close(): void {
    this.dialogRef.close();
  }

}
