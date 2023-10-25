import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { navigationActions } from '../actions';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CoreNavigationEffects {
  redirectToMyReservations$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(navigationActions.gotoMyReservations),
        tap(() => {
          this.router.navigateByUrl('/booker/my-reservations');
        })
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions, private router: Router) {}
}
