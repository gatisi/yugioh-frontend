import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EnumsService} from "../../../shared/enums.service";
import {StockItem} from "../../entities/stock-item";
import {StockItemsService} from "../../services/stock-items.service";
import {ActivatedRoute} from "@angular/router";

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
              @Inject(MAT_DIALOG_DATA) public stockItem: StockItem,
              private stockItemsService: StockItemsService,
              private enumsService: EnumsService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getEnums();
   console.log(this.stockItem);
  }

  saveStockItem() {
    this.stockItemsService.updateStockItem(this.stockItem).subscribe(
      res => this.dialogRef.close()
    );
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
