import {Injectable} from '@angular/core';
import {SecureHttpClientService} from "../../shared/secure-http-client.service";
import {StockItem} from "../entities/stock-item";
import {Observable} from "rxjs";
import {Article} from '../../articles/entities/article';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StockItemsService {

  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  saveStockItem(stockItem: StockItem, article: Article): Observable<any> {
    stockItem.article = article;
    return this.secureHttpClientService.post(environment.apiUrl + '/stockitem/create', stockItem);
  }

  updateStockItem(stockItem: StockItem): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/stockitem/update', stockItem);

  }

  getAllStockItems(): Observable<any> {
    return this.secureHttpClientService.get(environment.apiUrl+ '/stockitem/get/all');
  }

  getAllStockItemsV(): Observable<any> {
    return this.secureHttpClientService.get(environment.apiUrl + '/stockitemview/all');
  }

  getStockItemById(id) {
    return this.secureHttpClientService.get(environment.apiUrl + '/stockitem/get/id/1');
  }

  deleteStockItem(stockItem: StockItem): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/stockitem/delete', stockItem);

  }


  saveStockItemAsSold(stockItem: StockItem): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/stockitem/sold', stockItem);

  }

  getStockItemsByStorageId(): Observable<any> {
    return this.secureHttpClientService.get(environment.apiUrl + '/cardstorage/get/stockitems/:storageId');
  }
}
