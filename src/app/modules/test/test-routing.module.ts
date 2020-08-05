import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectEnumComponent} from './components/select-enum/select-enum.component';
import {ListUsersComponent} from '../users/components/list-users/list-users.component';
import {CreateUserComponent} from '../users/components/create-user/create-user.component';
import {LoginComponent} from '../users/components/login/login.component';


const routes: Routes = [
  {
    path: 'test',
    children: [
      {
        path: 'enum',
        component: SelectEnumComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
