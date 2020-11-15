import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../entities/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {UserInfoService} from '../../../shared/user-info.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  user: User;

  constructor(
    private usersService: UsersService,
    private userInfoService: UserInfoService,
  ) { }

  ngOnInit(): void {
    this.userInfoService.getUserInfo().subscribe(
      res => {
        this.user = res;
      }
    );
  }

  saveUser() {
    this.usersService.updateUser(this.user).subscribe(
      res => this.ngOnInit()
    );
  }



}
