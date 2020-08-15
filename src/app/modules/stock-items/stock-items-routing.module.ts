import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateStockItemComponent} from './components/create-stock-item/create-stock-item.component';
import {ListStockItemsComponent} from './components/list-stock-items/list-stock-items.component';
import {UpdateStockItemDialogComponent} from "./components/update-stock-item-dialog/update-stock-item-dialog.component";


const routes: Routes = [
  {
    path: 'stockitems',
    children: [
      {
        path: 'create/:articleId',
        component: CreateStockItemComponent
      },
      {
        path: 'list',
        component: ListStockItemsComponent
      },
      {
        path: 'edit/:stockItemId',
        component: UpdateStockItemDialogComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockItemsRoutingModule {
}
