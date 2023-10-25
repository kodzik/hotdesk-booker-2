import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Store } from '@ngrx/store';
import { selectAuthStatusUser } from 'src/app/auth/selectors/auth.selectors';
import { Observable, Subscription } from 'rxjs';
import { Reservation } from 'src/app/_models/reservation';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.scss'],
})
export class MyReservationsComponent implements OnInit, OnDestroy {
  currentUser$: Subscription;
  reservations$: Observable<Reservation[]>;

  constructor(
    private reservationService: ReservationService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.store
      .select(selectAuthStatusUser)
      .subscribe((user) => {
        this.reservations$ = this.reservationService.getUserReservations(
          user.id
        );
      });
  }

  ngOnDestroy(): void {
    this.currentUser$.unsubscribe();
  }
}
