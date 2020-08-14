import {Component, OnInit} from '@angular/core';
import {CardStorageService} from '../../service/card-storage.service';

import {CardStorage} from "../../entities/card-storage";

import {MatDialog} from "@angular/material/dialog";
import {StockItemsService} from "../../../stock-items/services/stock-items.service";
import {UpdateCardStorageDialogComponent} from "../update-card-storage-dialog/update-card-storage-dialog.component";

@Component({
  selector: 'app-list-card-storages',
  templateUrl: './list-card-storages.component.html',
  styleUrls: ['./list-card-storages.component.css']
})
export class ListCardStoragesComponent implements OnInit {
  public cardStorage = [];
  displayedColumns: string[] = ['id', 'storage name', 'update', 'delete', 'view cards'];

  constructor(
    private cardStorageService: CardStorageService,
    private stockItemsService: StockItemsService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getCardStorages();
    this.getStockItemsInStorage(this.cardStorage);
  }

  getCardStorages() {
    this.cardStorageService.getAllCardStorages().subscribe(
      res => {
        this.cardStorage = res;
      }
    );
  }

  deleteCardStorage(cardStorage: CardStorage): void {
    this.cardStorageService.deleteCardStorage(cardStorage).subscribe(
      res => this.ngOnInit()
    );
  }

  editCardStorage(cardStorage: CardStorage): void {
    const dialogRef = this.dialog.open(UpdateCardStorageDialogComponent, {
      width: '400px',
      data: cardStorage
    });
    dialogRef.afterClosed().subscribe(res => this.ngOnInit());
  }

  getStockItemsInStorage(cardStorage: any) {
    this.cardStorageService.getAllStockItemsInCardStorage().subscribe(
      res => {
        this.stockItemsService = res;
      }
    );
  }
}

