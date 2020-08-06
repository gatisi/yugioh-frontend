import {Injectable} from '@angular/core';
import {SecureHttpClientService} from './secure-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class EnumsService {

  constructor(private secureHttpClientService: SecureHttpClientService) {
  }

  getCardTypes() {
    return this.secureHttpClientService.get('http://localhost:8080/enum/card_type');
  }

  getCardConditions() {
    return this.secureHttpClientService.get('http://localhost:8080/enum/card_condition');
  }

  getCardEditions() {
    return this.secureHttpClientService.get('http://localhost:8080/enum/edition');
  }

  getCardRarities() {
    return this.secureHttpClientService.get('http://localhost:8080/enum/rarity');
  }


}
