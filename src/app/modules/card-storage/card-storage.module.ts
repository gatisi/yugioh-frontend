import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardStorageRoutingModule } from './card-storage-routing.module';
import { CardStorageComponent } from './card-storage/card-storage.component';
import { CreateCardStorageComponent } from './create-card-storage/create-card-storage.component';
import { ListCardStorageComponent } from './components/list-card-storage/list-card-storage.component';
import { ListCardStoragesComponent } from './components/list-card-storages/list-card-storages.component';
import { CreateCardStoragesComponent } from './components/create-card-storages/create-card-storages.component';


@NgModule({
  declarations: [CardStorageComponent, CreateCardStorageComponent, ListCardStorageComponent, ListCardStoragesComponent, CreateCardStoragesComponent],
  imports: [
    CommonModule,
    CardStorageRoutingModule
  ]
})
export class CardStorageModule { }
