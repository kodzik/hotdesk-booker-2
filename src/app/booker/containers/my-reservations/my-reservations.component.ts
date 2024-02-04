import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Store } from '@ngrx/store';
import { selectAuthStatusUser } from 'src/app/auth/selectors/auth.selectors';
import { Observable, switchMap } from 'rxjs';
import { Reservation } from 'src/app/booker/_models/reservation';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.scss'],
})
export class MyReservationsComponent implements OnInit {
  reservations$: Observable<Reservation[]>;

  constructor(
    private reservationService: ReservationService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.reservations$ = this.store
      .select(selectAuthStatusUser)
      .pipe(
        switchMap((user) =>
          this.reservationService.getUserReservations(user.id)
        )
      );
  }
}
