import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArticlesModule} from './modules/articles/articles.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UsersModule} from "./modules/users/users.module";


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticlesModule,
    UsersModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
