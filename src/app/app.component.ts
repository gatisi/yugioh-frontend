import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationDialogComponent} from "./modules/shared/components/confirmation-dialog/confirmation-dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yugioh';
  dialogRef: MatDialogRef <ConfirmationDialogComponent>;
  constructor(private router: Router,
              public dialog: MatDialog) {
  }
  navigateToHome() {
    this.router.navigateByUrl('/');
  }
  navigateToUsers() {
    this.router.navigateByUrl('/users');
  }
  navigateToTests() {
    this.router.navigateByUrl('/tests');
  }
  logoutClicked() {
    this.router.navigateByUrl('/users/logout').then();
  }
}
