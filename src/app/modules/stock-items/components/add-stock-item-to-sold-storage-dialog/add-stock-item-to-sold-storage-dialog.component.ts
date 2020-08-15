import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StockItem} from "../../entities/stock-item";
import {StockItemsService} from "../../services/stock-items.service";
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";

@Component({
  selector: 'app-add-stock-item-to-sold-storage-dialog',
  templateUrl: './add-stock-item-to-sold-storage-dialog.component.html',
  styleUrls: ['./add-stock-item-to-sold-storage-dialog.component.css']
})
export class AddStockItemToSoldStorageDialogComponent implements OnInit {
  private stockItemsService: StockItemsService;

  constructor(public dialogRef: MatDialogRef<AddStockItemToSoldStorageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public stockItem: StockItem,
  ) {
  }

  ngOnInit(): void {
    console.log(this.stockItem);
  }

  //
  // saveStockItemAsSold() {
  //   this.stockItemsService.saveStockItemAsSold(this.stockItem).subscribe(
  //     res => this.dialogRef.close()
  //   );
  // }

  saveStockItem() {
    this.stockItemsService.updateStockItem(this.stockItem).subscribe(
      res => this.dialogRef.close()
    );
  }
  close(): void {
    this.dialogRef.close();
  }
}
