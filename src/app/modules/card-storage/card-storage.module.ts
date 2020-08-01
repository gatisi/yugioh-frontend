import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardStorageRoutingModule} from './card-storage-routing.module';

import {ListCardStoragesComponent} from './components/list-card-storages/list-card-storages.component';
import {CreateCardStorageComponent} from "./components/create-card-storage/create-card-storage.component";


@NgModule({
  declarations: [ CreateCardStorageComponent, ListCardStoragesComponent],
  imports: [
    CommonModule,
    CardStorageRoutingModule
  ]
})
export class CardStorageModule {
}
