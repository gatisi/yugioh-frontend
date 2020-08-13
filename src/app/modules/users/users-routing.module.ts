import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListUsersComponent} from './components/list-users/list-users.component';
import {CreateUserComponent} from './components/create-user/create-user.component';
import {LoginComponent} from './components/login/login.component';
import {ListRolesComponent} from './components/list-roles/list-roles.component';
import {CreateRoleComponent} from './components/create-role/create-role.component';
import {EditInfoComponent} from './components/edit-info/edit-info.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {NewPasswordComponent} from './components/new-password/new-password.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: 'list',
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
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'edit',
        component: EditInfoComponent
      },
      {
        path: 'resetpassword',
        component: ResetPasswordComponent
      },
      {
        path: 'password/reset/:token',
        component: NewPasswordComponent
      },
      {
        path: 'roles',
        children: [
          {
            path: 'list',
            component: ListRolesComponent
          },
          {
            path: 'create',
            component: CreateRoleComponent
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
