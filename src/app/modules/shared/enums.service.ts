import {Injectable} from '@angular/core';
import {SecureHttpClientService} from './secure-http-client.service';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnumsService {

  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  getCardTypes() {
    return this.secureHttpClientService.get(environment.apiUrl + '/enum/card_type');
  }

  getCardConditions() {
    return this.secureHttpClientService.get(environment.apiUrl + '/enum/card_condition');
  }

  getCardEditions() {
    return this.secureHttpClientService.get(environment.apiUrl + '/enum/edition');
  }

  getCardRarities() {
    return this.secureHttpClientService.get(environment.apiUrl + '/enum/rarity');
  }

  getCardStorages() {
    return this.secureHttpClientService.get(environment.apiUrl + '/cardstorage/all');
  }


}
