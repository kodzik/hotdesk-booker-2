import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

describe('ReservationFormDirective', () => {
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  xit('should create an instance', () => {});
});
