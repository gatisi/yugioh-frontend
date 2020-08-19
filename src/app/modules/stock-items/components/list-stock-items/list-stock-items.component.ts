import {Component, OnInit, ViewChild} from '@angular/core';
import {StockItem} from "../../entities/stock-item";
import {StockItemsService} from "../../services/stock-items.service";
import {ArticlesService} from "../../../articles/services/articles.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {AddStockItemToSoldStorageDialogComponent} from "../add-stock-item-to-sold-storage-dialog/add-stock-item-to-sold-storage-dialog.component";
import {UpdateStockItemDialogComponent} from '../update-stock-item-dialog/update-stock-item-dialog.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {EnumsService} from "../../../shared/enums.service";
import {CardStorage} from "../../../card-storage/entities/card-storage";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-list-stock-items',
  templateUrl: './list-stock-items.component.html',
  styleUrls: ['./list-stock-items.component.css']
})
export class ListStockItemsComponent implements OnInit {
  public stockItems = [];
  public cardStorages = [];
  displayedColumnsStockItems: string[] = ['id', 'cardCondition', 'cardValue', 'cardValueWhenSold', 'inShop', 'comments', 'boosterSet', 'cardName', 'edition', 'rarity', 'cardType', 'storageName', 'update', 'addToSold', 'delete'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource: MatTableDataSource<StockItem>;


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
    this.articlesService.getArticles();
    this.getCardStorage();
  }

  getCardStorage() {
    this.enumsService.getCardStorages().subscribe(
      res => {
        this.cardStorages = res;
        // this.dataSource = new MatTableDataSource(res);
        // this.dataSource.paginator = this.paginator;
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
    this.stockItemsService.getAllStockItems().subscribe(
      res => {
        this.stockItems = res;
        this.route.params.subscribe(params => {
          if (params.field && params.id) {
            this.stockItems = this.filterByFields(params.id, this.stockItems, params.field);
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;

          }
        });
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


  filterByFields(id, stockItems: StockItem[], filterBy: String) {

    switch (filterBy) {
      case "storage":
        return stockItems.filter(
          stockItem => stockItem.cardStorage.id == id
        );
        break;

      case "article":
        console.log('ir');
        return stockItems.filter(
          stockItem => stockItem.article.id == id
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

