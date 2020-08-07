import {Injectable} from '@angular/core';
import {SecureHttpClientService} from "../../shared/secure-http-client.service";
import {StockItem} from "../entities/stock-item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StockItemsService {

  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  saveStockItem(stockItem: StockItem): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/stockitem/save', stockItem);
  }
}
