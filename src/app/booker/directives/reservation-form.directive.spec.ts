import { ReservationFormDirective } from './reservation-form.directive';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { FormGroupDirective } from '@angular/forms';
import { Actions } from '@ngrx/effects';

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

  xit('should create an instance', () => {
    // const directive = new ReservationFormDirective(formGroupDirective, store, actions$);
    // expect(directive).toBeTruthy();
  });
});
