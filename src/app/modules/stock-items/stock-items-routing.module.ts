import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateStockItemComponent} from './components/create-stock-item/create-stock-item.component';
import {List2StockItemsComponent} from './components/list2-stock-items/list2-stock-items.component';


const routes: Routes = [
  {
    path: 'stockitems',
    children: [
      {
        path: 'create/:articleId',
        component: CreateStockItemComponent
      },
      // {
      //   path: 'list',
      //   component: ListStockItemsComponent
      // },
      {
        path: 'list',
        component: List2StockItemsComponent
      },
      // {
      //   path: 'list/id/:id/searchBy/:field',
      //   component: ListStockItemsComponent
      // },
      {
        path: 'list/id/:id/searchBy/:field',
        component: List2StockItemsComponent
      },

      // {
      //   path: 'edit/:stockItemId',
      //   component: UpdateStockItemDialogComponent
      // },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockItemsRoutingModule {
}
