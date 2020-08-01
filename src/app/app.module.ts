import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArticlesModule} from './modules/articles/articles.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UsersModule} from './modules/users/users.module';
import {StockItemsModule} from './modules/stock-items/stock-items.module';
import {CardStorageModule} from './modules/card-storage/card-storage.module';
import {SharedModule} from "./modules/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ArticlesModule,
    UsersModule,
    StockItemsModule,
    CardStorageModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
