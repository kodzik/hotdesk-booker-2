import {
  Component,
  ViewChild,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromReservationActions from '../../actions/reservation.actions';
import { selectReservationAddLoading } from '../../selectors/reservation.selectors';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/auth/models/user';
import { selectAuthStatusUser } from 'src/app/auth/selectors/auth.selectors';
import { Reservation } from 'src/app/booker/_models/reservation';
import { DatePicker } from '../../_models/datepicker';
import { ReservationTimeSlot } from '../../_models/reservationTimeSlot';

@Component({
  selector: 'app-reservation-stepper',
  templateUrl: './reservation-stepper.component.html',
  styleUrls: ['./reservation-stepper.component.scss'],
})
export class ReservationStepperComponent implements OnInit, OnDestroy {
  @ViewChild('stepper') private formStepper: MatStepper;

  datePicker: FormGroup;
  resourcePicker: FormGroup;
  viewModeMap: boolean = true;
  isPending$: Observable<boolean>;
  pending$: Subscription;
  currentUser$: Subscription;
  currentUser: Pick<User, 'id'>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.datePicker = this.formBuilder.group({});
    this.resourcePicker = this.formBuilder.group({});
    this.currentUser$ = this.store
      .select(selectAuthStatusUser)
      .subscribe((user) => (this.currentUser = user));
    this.isPending$ = this.store.select(selectReservationAddLoading);
    this.ref.detectChanges();
  }

  toggleViewMode(event: boolean) {
    this.viewModeMap = event;
  }

  // #TODO fix to store navigation
  onAccept() {
    this.router.navigateByUrl('booker/live');
  }

  datePickerConverter(datePickerValue: any): ReservationTimeSlot {
    const { startDate, endDate, startTime, endTime }: DatePicker =
      datePickerValue.datePicker;
    return new ReservationTimeSlot(startDate, endDate, startTime, endTime);
  }

  resourcePickerGetId(resourcePicker): number {
    return resourcePicker.resourcePicker['id'];
  }

  onSubmit() {
    const newReservation: Omit<Reservation, 'id'> = {
      userId: this.currentUser.id,
      timeSlot: this.datePickerConverter(this.datePicker.value),
      resourceId: this.resourcePickerGetId(this.resourcePicker.value),
    };

    this.store.dispatch(
      fromReservationActions.add({ payload: newReservation })
    );
    this.pending$ = this.isPending$.subscribe((isPending) => {
      if (!isPending) this.formStepper.next();
    });
  }

  ngOnDestroy(): void {
    if (this.pending$) this.pending$.unsubscribe();
    this.currentUser$.unsubscribe();
  }
}
