import { User } from 'src/app/auth/models/user';
import { AuthApiActions } from '../actions';
import { getUser, initialState, reducer, State } from './auth.reducer';
import { authReducers, AuthState } from '.';
import { Action } from '@ngrx/store';

describe('AuthReducer', () => {
  const user: User = { id: 1, username: 'username' };
  const mockedAuthState: State = {
    user: user,
  };
  describe('signInSuccess action', () => {
    it('should update state on success', () => {
      const action = AuthApiActions.signInSuccess({ user: user });
      const newState = reducer(initialState, action);
      const getUserResult = getUser(mockedAuthState);

      expect(newState).toEqual(mockedAuthState);
      expect(newState).not.toBe(initialState);
      expect(getUserResult).toBe(user);
    });
  });

  describe('Combine authReducers', () => {
    it('should return combined auth reducers', () => {
      const action: Action = { type: 'unknown' };

      const expectedCombinedReducers: AuthState = {
        signInPage: { error: null, pending: false },
        status: mockedAuthState,
      };
      const combineReducers = authReducers(expectedCombinedReducers, action);

      expect(combineReducers).toEqual(expectedCombinedReducers);
    });
  });
});
