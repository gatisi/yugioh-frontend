import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StockItemsService} from "../../services/stock-items.service";
import {EnumsService} from "../../../shared/enums.service";
import {Router} from "@angular/router";
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-create-stock-item',
  templateUrl: './create-stock-item.component.html',
  styleUrls: ['./create-stock-item.component.css']
})
export class CreateStockItemComponent implements OnInit {
  edition = [];
  rarity = [];
  cardType = [];
  cardCondition = [];

  stockItemCreationForm = new FormGroup({
    cardCondition: new FormControl(''),
    cardValue: new FormControl(''),
    cardValueWhenSold: new FormControl(''),
    inShop: new FormControl(''),
    comments: new FormControl(''),
    cardStorage: new FormControl(''),
    article: new FormControl(''),
  });

  constructor(
    private stockItemsService: StockItemsService,
    private router: Router,
    private enumsService: EnumsService,
    private authenticationService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  saveStockItem() {
    this.stockItemsService.saveStockItem(this.stockItemCreationForm.getRawValue()).subscribe(
      res => {
        if (this.authenticationService.isLoggedIn()) {
          this.router.navigateByUrl('stockitem/list');
        } else {
          this.router.navigateByUrl('users/login');
        }
      }
    );
  }

}
