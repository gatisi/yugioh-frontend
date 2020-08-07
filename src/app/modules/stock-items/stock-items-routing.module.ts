import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCardStorageComponent} from "../card-storage/components/create-card-storage/create-card-storage.component";


const routes: Routes = [
  {
    path: 'stockitems',
    children: [
      {
        path: 'create',
        component: CreateCardStorageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockItemsRoutingModule { }
