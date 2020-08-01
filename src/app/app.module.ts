import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { CreateUsersComponent } from './modules/users/components/create-users/create-users.component';
import { ListUsersComponent } from './modules/users/components/list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CreateUsersComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
