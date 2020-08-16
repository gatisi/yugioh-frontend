import {Component, OnInit, ViewChild} from '@angular/core';
import {StockItem} from '../../entities/stock-item';
import {StockItemsService} from '../../services/stock-items.service';
import {ArticlesService} from '../../../articles/services/articles.service';
import {UpdateStockItemDialogComponent} from '../update-stock-item-dialog/update-stock-item-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {AddStockItemToSoldStorageDialogComponent} from '../add-stock-item-to-sold-storage-dialog/add-stock-item-to-sold-storage-dialog.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-stock-items',
  templateUrl: './list-stock-items.component.html',
  styleUrls: ['./list-stock-items.component.css']
})
export class ListStockItemsComponent implements OnInit {
  public stockItems = [];
  displayedColumnsStockItems: string[] = ['id', 'card condition', 'card value', 'card value when sold', 'in shop', 'comments', 'booster set', 'card name', 'edition', 'rarity', 'card type', 'storage', 'update', 'add to sold', 'delete'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: MatTableDataSource<StockItem>;

  constructor(
    private stockItemsService: StockItemsService,
    private articlesService: ArticlesService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getStockItems();
    this.articlesService.getArticles();

  }

  getStockItems() {
    this.stockItemsService.getAllStockItems().subscribe(
      res => {
        this.stockItems = res;
        this.dataSource = new MatTableDataSource<StockItem>(res);
        this.dataSource.sort = this.sort;
      }
    );

  }

  deleteStockItem(stockItem: StockItem): void {
    this.stockItemsService.deleteStockItem(stockItem).subscribe(
      res => this.ngOnInit()
    );

  }

  editStockItem(stockItem: StockItem): void {
    const dialogRef = this.dialog.open(UpdateStockItemDialogComponent, {
      width: '600px',
      data: stockItem
    });
    dialogRef.afterClosed().subscribe(result => this.ngOnInit());

  }

  addToSold(stockItem: StockItem) {
    stockItem.inShop = false;
    stockItem.cardStorage.storageName = 'SOLD';
    const dialogRef = this.dialog.open(AddStockItemToSoldStorageDialogComponent, {
      width: '600px',
      data: stockItem
    });
    dialogRef.afterClosed().subscribe(result => this.ngOnInit());
  }

}
