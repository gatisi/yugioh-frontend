import {Injectable} from '@angular/core';
import {CardStorage} from '../entities/card-storage';
import {SecureHttpClientService} from '../../shared/secure-http-client.service';
import {Observable} from 'rxjs';
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CardStorageService {

  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  saveCardStorage(cardStorage: CardStorage): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/cardstorage/create', cardStorage);
  }

  updateCardStorage(cardStorage: CardStorage): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/cardstorage/update', cardStorage);
  }

  getAllCardStorages(): Observable<any> {
    return this.secureHttpClientService.get(environment.apiUrl + '/cardstorage/all');
  }

  deleteCardStorage(cardStorage: CardStorage): Observable<any> {
    return this.secureHttpClientService.post(environment.apiUrl + '/cardstorage/delete', cardStorage);
  }

  // updateThisCardStorage(cardStorage: CardStorage) {
  //   return this.secureHttpClientService.post(environment.apiUrl + '/cardstorage/updatethis', cardStorage);
  //
  // }
}



