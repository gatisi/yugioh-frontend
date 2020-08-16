import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {UserInfoService} from '../../user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(

  ) {

  }

  ngOnInit(): void {
  }

  getUserInfo() {
    return JSON.parse(sessionStorage.getItem('yugioh.user.info'));
  }

}
