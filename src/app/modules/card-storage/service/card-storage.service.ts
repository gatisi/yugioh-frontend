import {Injectable} from '@angular/core';
import {CardStorage} from '../entities/card-storage';
import {SecureHttpClientService} from '../../shared/secure-http-client.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardStorageService {

  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  saveCardStorage(cardStorage: CardStorage): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/cardstorage/create', cardStorage);
  }

  updateCardStorage(cardStorage: CardStorage): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/cardstorage/update', cardStorage);
  }

  getAllCardStorages(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080/cardstorage/all');
  }

  getAllStockItemsInCardStorage(): Observable<any> {
    return this.secureHttpClientService.get('http://localhost:8080/cardstorage/get/stockitems/id/1');


  }

  deleteCardStorage(cardStorage: CardStorage): Observable<any> {
    return this.secureHttpClientService.post('http://localhost:8080/cardstorage/delete', cardStorage);
  }

  updateThisCardStorage(cardStorage: CardStorage) {
    return this.secureHttpClientService.post('http://localhost:8080/cardstorage/updatethis', cardStorage);

  }
}



