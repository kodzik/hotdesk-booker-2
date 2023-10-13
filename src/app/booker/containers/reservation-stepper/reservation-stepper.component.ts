import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromReservation from '../../actions/reservation.actions';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-stepper',
  templateUrl: './reservation-stepper.component.html',
  styleUrls: ['./reservation-stepper.component.scss'],
})
export class ReservationStepperComponent {
  // @ViewChild('stepper') private myStepper: MatStepper;
  error: string;
  success: boolean;

  datePicker: FormGroup;
  resourcePicker: FormGroup;
  viewModeMap: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.datePicker = this._formBuilder.group({});
    this.resourcePicker = this._formBuilder.group({});
  }

  toggleViewMode(event: boolean) {
    this.viewModeMap = event;
  }

  onError(error) {
    this.error = error;
  }

  onSuccess() {
    this.success = true;
  }

  onAccept() {
    this.router.navigateByUrl('booker/live-view');
  }

  onSubmit() {
    console.log(this.datePicker.value, this.resourcePicker.value);
    const payload = {
      datePicker: this.datePicker.value,
      resource: this.resourcePicker.value,
    };
    this.store.dispatch(fromReservation.reservationAdd({ payload }));
  }
}
