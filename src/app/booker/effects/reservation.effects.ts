import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromReservation from '../actions/reservation.actions';
import { Injectable } from '@angular/core';
import { switchMap, of, map, catchError, tap } from 'rxjs';
import { ReservationService } from '../reservation.service';

@Injectable()
export class ReservationEffects {
  reservationAdd = createEffect(() =>
    this.actions$.pipe(
      ofType(fromReservation.reservationAdd),
      tap((action) => {
        console.log(action);
      }),
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