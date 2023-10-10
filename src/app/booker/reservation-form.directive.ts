import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import * as reservationActions from './actions/reservation.actions';
import { Store } from '@ngrx/store';
import { Subscription, debounceTime, take } from 'rxjs';
import { ResourcesState } from './reducers';

@Directive({
  selector: '[appReservationForm]',
})
export class ReservationFormDirective {
  @Input('appReservationForm') path: string;

  formChange: Subscription;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private store: Store<ResourcesState>
  ) {}

  ngOnInit() {
    this.store
      .select((state) => {
        return state.resources['reservation'][this.path];
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
  }
}
