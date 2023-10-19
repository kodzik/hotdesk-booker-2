import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromReservation from '../actions/reservation.actions';
import { Injectable } from '@angular/core';
import { switchMap, of, map, catchError } from 'rxjs';
import { ReservationService } from '../services/reservation.service';

@Injectable()
export class ReservationEffects {
  reservationAdd = createEffect(() =>
    this.actions$.pipe(
      ofType(fromReservation.reservationAdd),
      switchMap((action) =>
        this.reservationService.addReservation(action.payload).pipe(
          map((reservation) =>
            fromReservation.reservationSuccess({
              payload: {
                reservationId: reservation.reservationId,
              },
            })
          ),
          catchError((errorMsg) =>
            of(
              fromReservation.reservationFailure({
                payload: { error: errorMsg },
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private reservationService: ReservationService
  ) {}
}
