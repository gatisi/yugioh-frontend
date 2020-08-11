import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArticlesModule} from './modules/articles/articles.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UsersModule} from './modules/users/users.module';
import {StockItemsModule} from './modules/stock-items/stock-items.module';
import {CardStorageModule} from './modules/card-storage/card-storage.module';
import {SharedModule} from './modules/shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './modules/users/components/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {TestModule} from './modules/test/test.module';
import {HttpErrorInterceptor} from './modules/shared/http-error.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,



  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ArticlesModule,
    UsersModule,
    StockItemsModule,
    CardStorageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TestModule,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
