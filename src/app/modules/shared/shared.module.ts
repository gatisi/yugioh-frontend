import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from './auth.service';
import {SecureHttpClientService} from './secure-http-client.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {HttpErrorInterceptor} from './http-error.interceptor';
import { WelcomeComponent } from './components/welcome/welcome.component';




@NgModule({
  declarations: [WelcomeComponent],
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
  ],
  providers: [
    AuthService,
    SecureHttpClientService,
  ]
})
export class SharedModule { }
