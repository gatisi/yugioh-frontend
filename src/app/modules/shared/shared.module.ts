import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from './auth.service';
import {SecureHttpClientService} from '../users/services/secure-http-client.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
    MatFormFieldModule,
  ],
  exports: [
    MatSliderModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule
  ],
  providers: [
    AuthService,
    SecureHttpClientService,
  ]
})
export class SharedModule { }
