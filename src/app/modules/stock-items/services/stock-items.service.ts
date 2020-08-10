import {Injectable} from '@angular/core';
import {SecureHttpClientService} from "../../shared/secure-http-client.service";
import {StockItem} from "../entities/stock-item";
import {Observable} from "rxjs";
import {Article} from '../../articles/entities/article';

@Injectable({
  providedIn: 'root'
})
export class StockItemsService {

  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  saveStockItem(stockItem: StockItem, article: Article): Observable<any> {
    stockItem.article = article;
    return this.secureHttpClientService.post('http://localhost:8080/stockitem/create', stockItem);
  }
}
