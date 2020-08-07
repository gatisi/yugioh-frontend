import {Component, OnInit} from '@angular/core';
import {CardStorageService} from '../../service/card-storage.service';
import {Article} from "../../../articles/entities/article";
import {CardStorage} from "../../entities/card-storage";
import {UpdateUserDialogComponent} from "../../../users/components/update-user-dialog/update-user-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-card-storages',
  templateUrl: './list-card-storages.component.html',
  styleUrls: ['./list-card-storages.component.css']
})
export class ListCardStoragesComponent implements OnInit {
  public cardStorage = [];
  displayedColumns: string[] = ['id', 'storageName', 'update', 'delete'];

  constructor(
    private cardStorageService: CardStorageService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getCardStorages();
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
    const dialogRef = this.dialog.open(UpdateUserDialogComponent, {
      width: '400px',
      data: cardStorage
    });
    dialogRef.afterClosed().subscribe(result => this.ngOnInit());
  }
}

