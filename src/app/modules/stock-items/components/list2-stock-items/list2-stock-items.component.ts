import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {StockItem} from '../../entities/stock-item';
import {StockItemsService} from '../../services/stock-items.service';
import {ArticlesService} from '../../../articles/services/articles.service';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {EnumsService} from '../../../shared/enums.service';
import {AddStockItemToSoldStorageDialogComponent} from '../add-stock-item-to-sold-storage-dialog/add-stock-item-to-sold-storage-dialog.component';
import {UpdateStockItemDialogComponent} from '../update-stock-item-dialog/update-stock-item-dialog.component';
import {StockItemV} from '../../entities/stock-item-v';
import {ConfirmationDialogComponent} from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-list2-stock-items',
  templateUrl: './list2-stock-items.component.html',
  styleUrls: ['./list2-stock-items.component.css']
})
export class List2StockItemsComponent implements OnInit {
  public stockItems = [];
  public stockItemsV = [];
  public cardStorages = [];
  displayedColumnsStockItems: string[] = ['id', 'cardCondition', 'cardValue', 'cardValueWhenSold', 'inShop', 'comments', 'boosterSet', 'cardName', 'edition', 'rarity', 'cardType', 'storage', 'update', 'addToSold', 'delete'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource: MatTableDataSource<StockItemV>;


  constructor(
    private stockItemsService: StockItemsService,
    private articlesService: ArticlesService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private enumsService: EnumsService,
  ) {
  }

  ngOnInit(): void {
    this.getStockItems();
    this.getCardStorage();
  }

  getCardStorage() {
    this.enumsService.getCardStorages().subscribe(
      res => {
        this.cardStorages = res;
      }
    );
  }

  addToSold(stockItem: StockItem) {
    stockItem.inShop = false;
    console.log(this.cardStorages);
    stockItem.cardStorage = this.cardStorages.find(cardStorage => cardStorage.storageName == 'SOLD');
    const dialogRef = this.dialog.open(AddStockItemToSoldStorageDialogComponent, {
      width: '600px',
      data: stockItem
    });
    dialogRef.afterClosed().subscribe(result => this.ngOnInit());
  }

  getStockItems() {
    this.stockItemsService.getAllStockItemsV().subscribe(
      res => {
        this.stockItemsV = res;
            this.route.params.subscribe(params => {
              if (params.field && params.id) {
                this.stockItemsV = this.filterByFields(params.id, this.stockItemsV, params.field);
              }
            });
        this.dataSource = new MatTableDataSource(this.stockItemsV);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  deleteStockItem(stockItem: StockItem): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete this?";
    dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.stockItemsService.deleteStockItem(stockItem).subscribe(
            res => this.ngOnInit()
          );
        }
      }
    );
  }

  editStockItem(stockItem: StockItem): void {
    const dialogRef = this.dialog.open(UpdateStockItemDialogComponent, {
      width: '600px',
      data: stockItem
    });
    dialogRef.afterClosed().subscribe(result => this.ngOnInit());
  }


  filterByFields(id, stockItems: StockItemV[], filterBy: String) {
    switch (filterBy) {
      case "storage":
        return stockItems.filter(
          stockItem => stockItem.storageId == id
        );
        break;

      case "article":
        console.log('ir');
        return stockItems.filter(
          stockItem => stockItem.articleId == id
        );
        break;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
