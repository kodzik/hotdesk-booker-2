import { TestBed } from '@angular/core/testing';

import { ReservationService } from './reservation.service';
import { HttpClient } from '@angular/common/http';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReservationService', () => {
  let service: ReservationService;
  let store: MockStore;
  let http: HttpClient;

  beforeEach(() => {
    service = new ReservationService(http, store);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore()],
    });
    service = TestBed.inject(ReservationService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
