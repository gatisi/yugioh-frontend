import { TestBed } from '@angular/core/testing';

import { SecureHttpClientService } from './secure-http-client.service';

describe('SecureHttpClientService', () => {
  let service: SecureHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecureHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
