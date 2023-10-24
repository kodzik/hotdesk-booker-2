import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/_models/reservation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  addReservation(reservation: Partial<Reservation>): Observable<Reservation> {
    return this.http.post<Reservation>('/reservations', reservation);
  }
}
