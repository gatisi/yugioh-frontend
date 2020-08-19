import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from './auth.service';
import {SecureHttpClientService} from './secure-http-client.service';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {HttpErrorInterceptor} from './http-error.interceptor';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {LogoutComponent} from './components/logout/logout.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [WelcomeComponent, LogoutComponent, HeaderComponent, FooterComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatCardModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,


  ],
  exports: [
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatCardModule,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    MatPaginatorModule,
    MatSortModule,
    ConfirmationDialogComponent,
  ],
  providers: [
    AuthService,
    SecureHttpClientService,
  ],
  entryComponents: [ConfirmationDialogComponent]
})
export class SharedModule {
}
