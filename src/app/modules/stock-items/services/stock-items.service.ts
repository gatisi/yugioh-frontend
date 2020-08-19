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

  updateStockItem(stockItem: StockItem): Observable<any> {
    return this.secureHttpClientService.post ('http://localhost:8080/stockitem/update', stockItem);

  }

  getAllStockItems(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080/stockitem/get/all');
  }
  getAllStockItemsV(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080/stockitemview/all');
  }

  getStockItemById(id) {
    return this.secureHttpClientService.get('http://localhost:8080/stockitem/get/id/1');
  }

  deleteStockItem(stockItem: StockItem): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/stockitem/delete', stockItem);

  }


  saveStockItemAsSold(stockItem: StockItem): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/stockitem/sold', stockItem);

  }

  getStockItemsByStorageId(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080//cardstorage/get/stockitems/:storageId');
  }
}
