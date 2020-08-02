import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  registrationForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.httpClient.post(
      'http://localhost:8080/user/register', this.registrationForm.getRawValue()
    ).subscribe();
  }

}
