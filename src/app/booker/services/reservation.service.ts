import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Reservation } from 'src/app/booker/_models/reservation';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { selectReservations } from '../reducers/reservation.reducers';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient, private store: Store) {}

  addReservation(
    reservation: Omit<Reservation, 'id'>
  ): Observable<Reservation> {
    return this.http.post<Reservation>('/reservations', reservation);
  }

  removeReservation(id: string) {
    return this.http.delete(`/reservations`, { body: id });
  }

  getUserReservations(userId: number): Observable<Reservation[]> {
    return this.store
      .select(selectReservations)
      .pipe(
        map((reservations) =>
          Object.values(reservations).filter(
            (reservation) => reservation.userId === userId
          )
        )
      );
  }
}
