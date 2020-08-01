import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from "./components/list-users/list-users.component";
import {CreateUserComponent} from "./components/create-user/create-user.component";


const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: ListUsersComponent
      },
      {
        path: 'create',
        component: CreateUserComponent
      },
      {
        path: 'update/:userId',
        component: CreateUserComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
