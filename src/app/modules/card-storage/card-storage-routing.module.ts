import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCardStoragesComponent} from './components/list-card-storages/list-card-storages.component';
import {CreateCardStorageComponent} from './components/create-card-storage/create-card-storage.component';


const routes: Routes = [
  {
    path: 'cardstorage',
    children: [
      {
        path: 'list',
        component: ListCardStoragesComponent
      },
      {
        path: 'create',
        component: CreateCardStorageComponent
      },
      {
        path: 'update/:cardStorageId',
        component: CreateCardStorageComponent
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardStorageRoutingModule {
}
