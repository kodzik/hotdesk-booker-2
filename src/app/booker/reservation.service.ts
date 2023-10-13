import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DatePicker } from './_models/datepicker';
import { Resource } from '../_models/resource';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor() {}

  addReservation(payload: {
    datePicker: DatePicker;
    resource: Resource;
  }): Observable<{ reservationId: string }> {
    return of({ reservationId: 'elo' });
  }
}
