import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StockItem} from "../../entities/stock-item";
import {StockItemsService} from "../../services/stock-items.service";

@Component({
  selector: 'app-add-stock-item-to-sold-storage-dialog',
  templateUrl: './add-stock-item-to-sold-storage-dialog.component.html',
  styleUrls: ['./add-stock-item-to-sold-storage-dialog.component.css']
})
export class AddStockItemToSoldStorageDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddStockItemToSoldStorageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public stockItem: StockItem,
              private stockItemsService: StockItemsService,
  ) {
  }

  ngOnInit(): void {
  }

  saveStockItem() {
    this.stockItemsService.updateStockItem(this.stockItem).subscribe(
      res => this.dialogRef.close()
    );
  }
  close(): void {
    this.dialogRef.close();
  }
}
