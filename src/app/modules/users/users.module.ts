import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { UpdateUserDialogComponent } from './components/update-user-dialog/update-user-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { CreateRoleComponent } from './components/create-role/create-role.component';
import { EditInfoComponent } from './components/edit-info/edit-info.component';
import { UpdateRoleDialogComponent } from './components/update-role-dialog/update-role-dialog.component';


@NgModule({
  declarations: [CreateUserComponent, ListUsersComponent, UpdateUserDialogComponent, ListRolesComponent, CreateRoleComponent, EditInfoComponent, UpdateRoleDialogComponent],
  exports: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,

  ]
})
export class UsersModule { }
