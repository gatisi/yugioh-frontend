import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Role} from '../../entities/role';
import {UsersService} from "../../services/users.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-role-dialog',
  templateUrl: './update-role-dialog.component.html',
  styleUrls: ['./update-role-dialog.component.css']
})
export class UpdateRoleDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateRoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public role: Role,
    private usersService: UsersService
  ) {
  }

  roleCreationForm = new FormGroup({
    role: new FormControl(''),
  });

  ngOnInit(): void {
  }

  saveRole() {
    this.usersService.updateRole(this.role).subscribe(
      res => this.dialogRef.close()
    );
  }

  close(): void {
    this.dialogRef.close();
  }

}
