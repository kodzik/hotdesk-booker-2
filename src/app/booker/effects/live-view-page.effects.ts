import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ReservationFormActions } from '../actions/';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LiveViewPageEffects {
  reserveResource$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ReservationFormActions.reservationNew),
        tap(() => this.router.navigate(['booker/reservation']))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
