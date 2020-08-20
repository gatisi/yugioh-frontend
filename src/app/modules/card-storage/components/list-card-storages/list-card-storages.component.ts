import {Component, OnInit, ViewChild} from '@angular/core';
import {CardStorageService} from '../../service/card-storage.service';
import {Article} from "../../../articles/entities/article";
import {CardStorage} from "../../entities/card-storage";
import {UpdateUserDialogComponent} from "../../../users/components/update-user-dialog/update-user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {UpdateCardStorageDialogComponent} from "../update-card-storage-dialog/update-card-storage-dialog.component";
import {ConfirmationDialogComponent} from "../../../shared/components/confirmation-dialog/confirmation-dialog.component";
import {Route, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Articleview} from "../../../articles/entities/articleview";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-card-storages',
  templateUrl: './list-card-storages.component.html',
  styleUrls: ['./list-card-storages.component.css']
})
export class ListCardStoragesComponent implements OnInit {
  public cardStorage = [];
  displayedColumns: string[] = ['id', 'storageName', 'update', 'delete'];
  dataSource: MatTableDataSource<Storage>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private cardStorageService: CardStorageService,
    private dialog: MatDialog,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getCardStorages();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();

    }
  }

  getCardStorages() {
    this.cardStorageService.getAllCardStorages().subscribe(
      res => {
        this.cardStorage = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

  goToStockItemsList(id) {
    this.router.navigateByUrl('stockitems/list/id/' + id + '/searchBy/storage');
  }
}

