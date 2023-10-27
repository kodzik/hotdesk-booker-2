import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromReservationFormActions from '../actions/reservation-form.actions';
import * as fromReservationActions from '../actions/reservation.actions';
import * as fromReservationApiActions from '../actions/reservation-api.actions';
import { Injectable } from '@angular/core';
import { switchMap, of, map, catchError, mergeMap } from 'rxjs';
import { ReservationService } from '../services/reservation.service';

@Injectable()
export class ReservationEffects {
  reservationAdd = createEffect(() =>
    this.actions$.pipe(
      ofType(fromReservationActions.add),
      switchMap((action) =>
        this.reservationService.addReservation(action.payload).pipe(
          map((reservation) =>
            fromReservationFormActions.reservationSuccess({
              payload: reservation,
            })
          ),
          catchError((errorMsg) =>
            of(
              fromReservationFormActions.reservationFailure({
                payload: { error: errorMsg },
              })
            )
          )
        )
      )
    )
  );

  removeReservation = createEffect(() =>
    this.actions$.pipe(
      ofType(fromReservationActions.remove),
      mergeMap((reservation) =>
        this.reservationService.removeReservation(reservation.id).pipe(
          map(() =>
            fromReservationApiActions.removeSuccess({ id: reservation.id })
          ),
          catchError((errorMsg) =>
            of(fromReservationApiActions.removeFailure({ errorMsg: errorMsg }))
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
