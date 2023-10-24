import {
  Directive,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import * as reservationActions from '../actions/reservation-form.actions';
import { Store } from '@ngrx/store';
import { Subscription, debounceTime, filter, take } from 'rxjs';
import { ReservationState } from '../reducers/reservation.reducers';
import { Actions, ofType } from '@ngrx/effects';
import * as fromReservation from '../actions/reservation-form.actions';

@Directive({
  selector: '[appReservationForm]',
})
export class ReservationFormDirective implements OnInit, OnDestroy {
  @Input('appReservationForm') path: string;
  @Output() error = new EventEmitter();
  @Output() success = new EventEmitter();

  formChange: Subscription;
  formSuccess: Subscription;
  formError: Subscription;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private store: Store<ReservationState>,
    private actions$: Actions
  ) {}

  ngOnInit() {
    this.store
      .select((state) => {
        return state['reservation'].reservationForm[this.path];
      })
      .pipe(take(1))
      .subscribe((val) => {
        this.formGroupDirective.form.patchValue(val);
      });

    this.formChange = this.formGroupDirective.form.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.store.dispatch(
          reservationActions.updateForm({ payload: { value, path: this.path } })
        );
      });

    this.formSuccess = this.actions$
      .pipe(ofType(fromReservation.reservationSuccess))
      .subscribe(() => {
        this.success.emit();
      });

    this.formError = this.actions$
      .pipe(ofType(fromReservation.reservationFailure))
      .subscribe(({ payload }) => this.error.emit(payload.error));
  }

  ngOnDestroy() {
    this.formChange.unsubscribe();
    this.formError.unsubscribe();
    this.formSuccess.unsubscribe();
  }
}
