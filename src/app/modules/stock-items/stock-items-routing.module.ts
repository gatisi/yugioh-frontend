import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateStockItemComponent} from './components/create-stock-item/create-stock-item.component';
import {ListStockItemsComponent} from './components/list-stock-items/list-stock-items.component';


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

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockItemsRoutingModule {
}
