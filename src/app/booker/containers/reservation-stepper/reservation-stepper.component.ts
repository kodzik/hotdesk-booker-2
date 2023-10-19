import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromReservationActions from '../../actions/reservation.actions';
import { fromReservation } from '../../reducers';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservation-stepper',
  templateUrl: './reservation-stepper.component.html',
  styleUrls: ['./reservation-stepper.component.scss'],
})
export class ReservationStepperComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;

  datePicker: FormGroup;
  resourcePicker: FormGroup;
  viewModeMap: boolean = true;
  isPending$: Observable<boolean>;

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {
    this.datePicker = this._formBuilder.group({});
    this.resourcePicker = this._formBuilder.group({});
  }

  ngOnInit(): void {
    this.isPending$ = this.store.select(
      fromReservation.selectReservationAddLoading
    );
    this.ref.detectChanges();
  }

  toggleViewMode(event: boolean) {
    this.viewModeMap = event;
  }

  onAccept() {
    this.router.navigateByUrl('booker/live');
  }

  onSubmit() {
    const payload = {
      datePicker: this.datePicker.value,
      resource: this.resourcePicker.value,
    };
    this.store.dispatch(fromReservationActions.reservationAdd({ payload }));
    this.isPending$.subscribe((isPending) => {
      if (!isPending) this.myStepper.next();
    });
  }
}
