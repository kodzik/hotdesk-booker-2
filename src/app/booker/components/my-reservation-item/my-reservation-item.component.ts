import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Reservation } from 'src/app/booker/_models/reservation';
import { ReservationActions } from '../../actions';

@Component({
  selector: 'app-my-reservation-item',
  templateUrl: './my-reservation-item.component.html',
  styleUrls: ['./my-reservation-item.component.scss'],
})
export class MyReservationItemComponent {
  @Input() item: Reservation;

  constructor(private store: Store) {}

  deleteReservation() {
    this.store.dispatch(ReservationActions.remove({ id: this.item.id }));
  }
}
