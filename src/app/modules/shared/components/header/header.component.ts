import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {UserInfoService} from "../../user-info.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userInfo;
  constructor(private userInfoService: UserInfoService) {

  }

  ngOnInit(): void {
    this.userInfoService.getUserInfo().subscribe(
      userInfo => {
        this.userInfo = userInfo;
        console.log(userInfo);
      }
    );
  }

}
