import {Component, OnInit} from '@angular/core';
import {StockItem} from "../../entities/stock-item";
import {StockItemsService} from "../../services/stock-items.service";
import {ArticlesService} from "../../../articles/services/articles.service";

@Component({
  selector: 'app-list-stock-items',
  templateUrl: './list-stock-items.component.html',
  styleUrls: ['./list-stock-items.component.css']
})
export class ListStockItemsComponent implements OnInit {
  public stockItems = [];
  displayedColumnsStockItems: string[] = ['id', 'card condition', 'card value', 'card value when sold', 'in shop', 'comments'];
  displayedColumnsArticles: string[] = ['id', 'booster set', 'card name', 'edition', 'rarity', 'card type'];


  constructor(
    private stockItemsService: StockItemsService,
    private articlesService: ArticlesService,
  ) {
  }

  ngOnInit(): void {
    this.getStockItems();
    this.articlesService.getArticles();
  }

  getStockItems() {
    this.stockItemsService.getAllStockItems(this.displayedColumnsStockItems, this.displayedColumnsArticles).subscribe(
      res => {
        this.stockItems = res;
      }
    );

  }
}
