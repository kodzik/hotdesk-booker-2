import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Reservation } from 'src/app/booker/_models/reservation';
import { HttpClient } from '@angular/common/http';

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

  deleteReservation(id: string) {
    return this.http.delete(`/reservations/${id}`);
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
