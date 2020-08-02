import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [CreateUserComponent, ListUsersComponent],
  exports: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatButtonModule

  ]
})
export class UsersModule { }
