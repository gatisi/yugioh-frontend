import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CardStorageService} from '../../service/card-storage.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-create-card-storage',
  templateUrl: './create-card-storage.component.html',
  styleUrls: ['./create-card-storage.component.css']
})
export class CreateCardStorageComponent implements OnInit {
  storageCreationForm = new FormGroup({
    storageName: new FormControl(''),
  });

  constructor(
    private cardStorageService: CardStorageService,
    private router: Router,
    private authenticationService: AuthService,
  ) {
  }

  buttonDisabled: boolean = false;

  ngOnInit(): void {
  }

  saveCardStorage() {
    this.buttonDisabled = true;
    this.cardStorageService.saveCardStorage(this.storageCreationForm.getRawValue()).subscribe(
      res => {
        if (this.authenticationService.isLoggedIn()) {
          this.router.navigateByUrl('/cardstorage/list');
        } else {
          this.router.navigateByUrl('/users/login');
        }
      }
    );
  }

}
