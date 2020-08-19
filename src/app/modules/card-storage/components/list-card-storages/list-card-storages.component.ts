import {Component, OnInit} from '@angular/core';
import {CardStorageService} from '../../service/card-storage.service';
import {Article} from "../../../articles/entities/article";
import {CardStorage} from "../../entities/card-storage";
import {UpdateUserDialogComponent} from "../../../users/components/update-user-dialog/update-user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {UpdateCardStorageDialogComponent} from "../update-card-storage-dialog/update-card-storage-dialog.component";
import {ConfirmationDialogComponent} from "../../../shared/components/confirmation-dialog/confirmation-dialog.component";

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
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?";
    dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.cardStorageService.deleteCardStorage(cardStorage).subscribe(
            res => this.ngOnInit()
          );
        }
      }
    );
  }



  editCardStorage(cardStorage: CardStorage): void {
    const dialogRef = this.dialog.open(UpdateCardStorageDialogComponent, {
      width: '400px',
      data: cardStorage
    });
    dialogRef.afterClosed().subscribe(result => this.ngOnInit());
  }
}

