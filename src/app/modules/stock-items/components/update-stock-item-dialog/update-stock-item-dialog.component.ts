import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EnumsService} from "../../../shared/enums.service";
import {StockItem} from "../../entities/stock-item";
import {StockItemsService} from "../../services/stock-items.service";
import {ActivatedRoute} from "@angular/router";
import {StockItemV} from '../../entities/stock-item-v';
import {Article} from '../../../articles/entities/article';
import {CardStorage} from '../../../card-storage/entities/card-storage';

@Component({
  selector: 'app-update-stock-item-dialog',
  templateUrl: './update-stock-item-dialog.component.html',
  styleUrls: ['./update-stock-item-dialog.component.css']
})
export class UpdateStockItemDialogComponent implements OnInit {
  edition = [];
  rarity = [];
  cardType = [];
  cardCondition = [];
  // stockItemId: number;

  constructor(public dialogRef: MatDialogRef<UpdateStockItemDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public stockItem: StockItemV,
              private stockItemsService: StockItemsService,
              private enumsService: EnumsService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getEnums();
  }

  saveStockItem() {
    this.stockItemsService.updateStockItem(
      this.getStockItemFromV(this.stockItem)
    ).subscribe(
      res => this.dialogRef.close()
    );
  }

  getStockItemFromV(sv: StockItemV){
    const stockItem = new StockItem();
    stockItem.cardCondition = sv.cardCondition;
    stockItem.cardValue = sv.cardValue;
    stockItem.cardValueWhenSold = sv.cardValueWhenSold;
    stockItem.id = sv.id;
    stockItem.inShop = sv.inShop;
    stockItem.comments = sv.comments;
    const article = new Article();
    article.id = sv.articleId;
    article.rarity = sv.rarity;
    article.edition = sv.edition;
    article.cardType = sv.cardType;
    article.cardName = sv.cardName;
    article.boosterSet = sv.boosterSet;
    const storage = new CardStorage();
    storage.id = sv.storageId;
    storage.storageName = sv.storageName;
    stockItem.cardStorage = storage;
    stockItem.article = article;
    return stockItem;
  }

  // getStockItemId() {
  //   this.route.params.subscribe(params => {
  //     this.stockItemId = params.stockItemId;
  //     this.getStockItem(this.stockItemId);
  //
  //   });
  // }


  getStockItem(stockItemId){
    this.stockItemsService.getStockItemById(stockItemId).subscribe(
      res => {this.stockItem = res;
    console.log(res);
      }
    );
  }

  getEnums() {
    this.enumsService.getCardTypes().subscribe(
      res => this.cardType = res
    );
    this.enumsService.getCardRarities().subscribe(
      res => this.rarity = res
    );
    this.enumsService.getCardEditions().subscribe(
      res => this.edition = res
    );
    this.enumsService.getCardConditions().subscribe(
      res => this.cardCondition = res
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
