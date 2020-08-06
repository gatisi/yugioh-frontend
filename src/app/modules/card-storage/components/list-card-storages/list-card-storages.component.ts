import {Component, OnInit} from '@angular/core';
import {CardStorageService} from '../../service/card-storage.service';

@Component({
  selector: 'app-list-card-storages',
  templateUrl: './list-card-storages.component.html',
  styleUrls: ['./list-card-storages.component.css']
})
export class ListCardStoragesComponent implements OnInit {
  public cardStorage = [];
  displayedColumns: string[] = ['id', 'storageName'];

  constructor(
    private cardStorageService: CardStorageService,
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

}
