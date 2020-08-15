import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EnumsService} from "../../../shared/enums.service";
import {StockItem} from "../../entities/stock-item";
import {StockItemsService} from "../../services/stock-items.service";

@Component({
  selector: 'app-update-stock-item-dialog',
  templateUrl: './update-stock-item-dialog.component.html',
  styleUrls: ['./update-stock-item-dialog.component.css']
})
export class UpdateStockItemDialogComponent implements OnInit {
  edition = [];
  rarity = [];
  cardType = [];

  constructor(public dialogRef: MatDialogRef<UpdateStockItemDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public stockItem: StockItem,
              private stockItemsService: StockItemsService,
              private enumsService: EnumsService
  ) {
  }

  ngOnInit(): void {
    this.getEnums();
  }

  saveStockItem() {
    this.stockItemsService.updateStockItem(this.stockItem).subscribe(
      res => this.dialogRef.close()
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
  }

  close(): void {
    this.dialogRef.close();
  }
}
