import { Component, OnInit } from '@angular/core';
import {UserInfoService} from "../../user-info.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private userInfoService: UserInfoService) {

  }

  ngOnInit(): void {
  }

  getUserInfo(){
    return JSON.parse(sessionStorage.getItem('yugioh.user.info'));
  }
}
