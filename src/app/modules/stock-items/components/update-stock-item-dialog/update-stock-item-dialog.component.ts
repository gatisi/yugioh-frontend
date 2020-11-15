import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EnumsService} from "../../../shared/enums.service";
import {StockItem} from "../../entities/stock-item";
import {StockItemsService} from "../../services/stock-items.service";
import {ActivatedRoute} from "@angular/router";
import {StockItemV} from '../../entities/stock-item-v';
import {Article} from '../../../articles/entities/article';
import {CardStorage} from '../../../card-storage/entities/card-storage';
import {FormControl, FormGroup} from '@angular/forms';

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
  stockItemCreationForm: FormGroup;
  stockItem: StockItem;
  cardStorageArr: [];

  constructor(public dialogRef: MatDialogRef<UpdateStockItemDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public stockItemV: StockItemV,
              private stockItemsService: StockItemsService,
              private enumsService: EnumsService,
              private route: ActivatedRoute,
  ) {
  }
  buttonDisabled: boolean = false;

  ngOnInit(): void {
    this.getEnums();
    this.stockItem = this.getStockItemFromV(this.stockItemV);
    this.stockItemCreationForm = new FormGroup({
      cardValue: new FormControl(this.stockItem.cardValue),
      cardValueWhenSold: new FormControl(this.stockItem.cardValueWhenSold),
      inShop: new FormControl(this.stockItem.inShop),
      comments: new FormControl(this.stockItem.comments),
      cardCondition: new FormControl(this.stockItem.cardCondition),
      cardStorage: new FormControl(this.stockItem.cardStorage),
    });
  }

  // saveStockItem() {
  //   this.buttonDisabled = true;
  //   this.stockItemsService.updateStockItem(
  //     this.getStockItemFromV(this.stockItemV)
  //   ).subscribe(
  //     res => this.dialogRef.close()
  //   );
  // }

  saveStockItem() {
    this.buttonDisabled = true;
    this.stockItemsService.updateStockItem(this.stockItemCreationForm.getRawValue()).subscribe(
      res => {
      }
    );
  }

  getStockItemFromV(sv: StockItemV){
    const stockItemV = new StockItem();
    stockItemV.cardCondition = sv.cardCondition;
    stockItemV.cardValue = sv.cardValue;
    stockItemV.cardValueWhenSold = sv.cardValueWhenSold;
    stockItemV.id = sv.id;
    stockItemV.inShop = sv.inShop;
    stockItemV.comments = sv.comments;
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
    stockItemV.cardStorage = storage;
    stockItemV.article = article;
    return stockItemV;
  }

  getEnums() {
    this.enumsService.getCardStorages().subscribe(
      res => {
        this.cardStorageArr = res;
      }
    );
    this.enumsService.getCardConditions().subscribe(
      res => this.cardCondition = res
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  public objectComparisonFunction( option, value ): boolean {
    return option.id === value.id;
  }
}
