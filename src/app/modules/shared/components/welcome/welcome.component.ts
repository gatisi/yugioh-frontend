import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {User} from '../../../users/entities/user';
import {UserInfoService} from '../../user-info.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public user: User;
  constructor(
    private userInfoService: UserInfoService,
  ) { }

  ngOnInit(): void {
    this.userInfoService.getUserInfo().subscribe(
      res => this.user = res
    );
  }

}
