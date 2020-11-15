import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockItemsRoutingModule } from './stock-items-routing.module';
import { CreateStockItemComponent } from './components/create-stock-item/create-stock-item.component';
import {SharedModule} from '../shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {UpdateStockItemDialogComponent} from './components/update-stock-item-dialog/update-stock-item-dialog.component';
import { AddStockItemToSoldStorageDialogComponent } from './components/add-stock-item-to-sold-storage-dialog/add-stock-item-to-sold-storage-dialog.component';
import {MatSortModule} from '@angular/material/sort';
import { List2StockItemsComponent } from './components/list2-stock-items/list2-stock-items.component';

@NgModule({
  declarations: [CreateStockItemComponent, UpdateStockItemDialogComponent, AddStockItemToSoldStorageDialogComponent, List2StockItemsComponent],
    imports: [
        CommonModule,
        StockItemsRoutingModule,
        SharedModule,
        MatCheckboxModule,
        MatSortModule,
    ]
})
export class StockItemsModule { }
