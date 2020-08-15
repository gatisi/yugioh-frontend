import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockItemsRoutingModule } from './stock-items-routing.module';
import { CreateStockItemComponent } from './components/create-stock-item/create-stock-item.component';
import { ListStockItemsComponent } from './components/list-stock-items/list-stock-items.component';
import {SharedModule} from '../shared/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {UpdateStockItemDialogComponent} from './components/update-stock-item-dialog/update-stock-item-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [CreateStockItemComponent, ListStockItemsComponent, UpdateStockItemDialogComponent, DialogComponent],
  imports: [
    CommonModule,
    StockItemsRoutingModule,
    SharedModule,
    MatCheckboxModule,
  ]
})
export class StockItemsModule { }
