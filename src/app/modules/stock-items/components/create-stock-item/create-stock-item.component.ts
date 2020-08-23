import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StockItemsService} from '../../services/stock-items.service';
import {EnumsService} from '../../../shared/enums.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';
import {ArticlesService} from '../../../articles/services/articles.service';
import {CardStorageService} from '../../../card-storage/service/card-storage.service';
import {Observable} from 'rxjs';
import {Article} from '../../../articles/entities/article';
import {CardStorage} from '../../../card-storage/entities/card-storage';


@Component({
  selector: 'app-create-stock-item',
  templateUrl: './create-stock-item.component.html',
  styleUrls: ['./create-stock-item.component.css']
})
export class CreateStockItemComponent implements OnInit {
  article: Article;
  options: string[] = ['cardValue', 'cardValueWhenSold', 'inShop', 'cardCondition', 'comments'];
  cardConditionArr: [];
  cardStorageArr: CardStorage[];

  stockItemCreationForm = new FormGroup({
    cardValue: new FormControl(''),
    cardValueWhenSold: new FormControl(''),
    inShop: new FormControl('true'),
    comments: new FormControl(''),
    cardCondition: new FormControl(''),
    cardStorage: new FormControl(''),
  });
  buttonDisabled: boolean = false;

  filteredOptions: Observable<string[]>;

  constructor(
    private stockItemsService: StockItemsService,
    private router: Router,
    private enumsService: EnumsService,
    private authenticationService: AuthService,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private cardStorageService: CardStorageService,
  ) {
  }

  ngOnInit(): void {
    this.getEnums();
    this.getArticle();
  }

  getEnums() {
    this.enumsService.getCardConditions().subscribe(
      res => this.cardConditionArr = res
    );
    this.enumsService.getCardStorages().subscribe(
      res => {
        this.cardStorageArr = res;
        console.log(res);
      }
    );
  }

  getArticle() {
    this.route.params.subscribe(params => {
      this.articlesService.getArticleById(params.articleId).subscribe(
        res => {
          this.article = res;
        }
      );
    });
  }

  saveStockItem() {
    this.buttonDisabled = true;
    this.stockItemsService.saveStockItem(this.stockItemCreationForm.getRawValue(), this.article).subscribe(
      res => {
        if (this.authenticationService.isLoggedIn()) {
          this.router.navigateByUrl('stockitems/list').then();
        } else {
          this.router.navigateByUrl('users/login').then();
        }
      }
    );
  }


}
