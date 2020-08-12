import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardStorageRoutingModule} from './card-storage-routing.module';

import {ListCardStoragesComponent} from './components/list-card-storages/list-card-storages.component';
import {CreateCardStorageComponent} from "./components/create-card-storage/create-card-storage.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from '../shared/shared.module';
import {UpdateCardStorageDialogComponent} from './components/update-card-storage-dialog/update-card-storage-dialog.component';


@NgModule({
  declarations: [CreateCardStorageComponent, ListCardStoragesComponent, UpdateCardStorageDialogComponent],
  exports: [
    CreateCardStorageComponent,
    UpdateCardStorageDialogComponent
  ],
  imports: [
    CommonModule,
    CardStorageRoutingModule,
    SharedModule,

  ]
})
export class CardStorageModule {
}
