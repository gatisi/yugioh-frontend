import { Component, OnInit } from '@angular/core';
import {UserInfoService} from "../../user-info.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
