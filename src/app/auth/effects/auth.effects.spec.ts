import { TestBed } from '@angular/core/testing';
import { AuthEffects } from './auth.effects';
import { Credentials } from '../models/credentials';
import { User } from 'src/app/_models/user';
import { AuthApiActions, SignInPageActions } from '../actions';
import { Observable, of } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { provideMockActions } from '@ngrx/effects/testing';
import { AuthService } from '../auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let actions$: Observable<any>;
  let mockAuthService: any;
  let router: Router;

  const credentials: Credentials = {
    username: 'test_username',
    password: 'test',
  };

  const user: User = {
    username: 'test_username',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj('AuthService', ['login']),
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
      ],
    });
    effects = TestBed.inject(AuthEffects);
    actions$ = TestBed.inject(Actions);
    router = TestBed.inject(Router);
    mockAuthService = TestBed.inject(AuthService);
  });

  describe('signIn$', () => {
    it('should return auth.loginSuccess action with user info', () => {
      const action = SignInPageActions.signIn({ credentials });
      const completion = AuthApiActions.signInSuccess({ user });

      actions$ = hot('-a---', { a: action });
      const response = cold('-a|', { a: user });
      const expected = cold('--b', { b: completion });

      mockAuthService.login.and.callFake(() => response);

      expect(effects.signIn$).toBeObservable(expected);
    });

    it('should return error on signInFailure', () => {
      const error = { message: 'Error message' };

      const action = SignInPageActions.signIn({ credentials });
      const completion = AuthApiActions.signInFailure({ error });

      actions$ = hot('-a---', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: completion });

      mockAuthService.login.and.callFake(() => response);

      expect(effects.signIn$).toBeObservable(expected);
    });

    it('should dispatch a RouterNavigation action', (done: any) => {
      const action = AuthApiActions.signInSuccess({ user });

      actions$ = of(action);

      effects.signInSuccess$.subscribe(() => {
        expect(router.navigate).toHaveBeenCalledWith(['/booker/live-view']);
        done();
      });
    });
  });
});
