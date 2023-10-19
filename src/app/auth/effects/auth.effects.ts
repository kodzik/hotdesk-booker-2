import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SignInPageActions, AuthApiActions } from '../actions';
import { map, exhaustMap, tap, catchError, of } from 'rxjs';
import { Credentials } from '../models/credentials';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignInPageActions.signIn),
      map((action) => action.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.login(auth).pipe(
          map((user) => AuthApiActions.signInSuccess({ user })),
          catchError((error) => of(AuthApiActions.signInFailure({ error })))
        )
      )
    )
  );

  signInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.signInSuccess),
        tap(() => this.router.navigate(['/booker']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
