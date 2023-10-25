import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Reservation } from 'src/app/_models/reservation';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_models/user';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  addReservation(
    reservation: Omit<Reservation, 'id'>
  ): Observable<Reservation> {
    return this.http.post<Reservation>('/reservations', reservation);
  }

  getUserReservations(userId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('/reservations').pipe(
      map((reservations) => {
        return reservations.filter(
          (reservation) => reservation.userId === userId
        );
      })
    );
  }
}
