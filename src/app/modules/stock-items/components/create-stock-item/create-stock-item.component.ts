import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StockItemsService} from "../../services/stock-items.service";
import {EnumsService} from "../../../shared/enums.service";
import {Router} from "@angular/router";
import {AuthService} from '../../../shared/auth.service';
import {ArticlesService} from "../../../articles/services/articles.service";
import {CardStorageService} from "../../../card-storage/service/card-storage.service";
import {Observable} from "rxjs";
import {filter, map, startWith} from "rxjs/operators";


@Component({
  selector: 'app-create-stock-item',
  templateUrl: './create-stock-item.component.html',
  styleUrls: ['./create-stock-item.component.css']
})
export class CreateStockItemComponent implements OnInit {

  public articles = [];
  articlesControl = new FormControl();
  options: string[] = ['booster set', 'card name', 'edition', 'rarity', 'card type'];
  public cardStorage = [];
  edition = [];
  rarity = [];
  cardType = [];
  cardCondition = [];

  stockItemCreationForm = new FormGroup({
    cardValue: new FormControl(''),
    cardValueWhenSold: new FormControl(''),
    inShop: new FormControl(''),
    comments: new FormControl(''),
    cardStorage: new FormControl(''),
    article: new FormControl(''),

  });
  filteredOptions: Observable<string[]>;

  constructor(
    private stockItemsService: StockItemsService,
    private router: Router,
    private enumsService: EnumsService,
    private authenticationService: AuthService,
    private articlesService: ArticlesService,
    private cardStorageService: CardStorageService,
  ) {
  }

  ngOnInit(): void {
    this.getArticles();
    this.getCardStorages();
    this.filteredOptions = this.articlesControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();


    return this.options.filter(option => option.toLowerCase().includes(filterValue());
  }

  saveStockItem() {
    this.stockItemsService.saveStockItem(this.stockItemCreationForm.getRawValue()).subscribe(
      res => {
        if (this.authenticationService.isLoggedIn()) {
          this.router.navigateByUrl('stockitems/list');
        } else {
          this.router.navigateByUrl('users/login');
        }
      }
    );
  }

  private getArticles() {
    this.articlesService.getAllArticles().subscribe(
      res =>
        this.articles = res);
  }

  private getCardStorages() {
    this.cardStorageService.getAllCardStorages().subscribe(
      res => this.cardStorage = res);
  }

}
