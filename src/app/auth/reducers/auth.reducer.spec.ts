import { User } from 'src/app/_models/user';
import { AuthApiActions } from '../actions';
import { initialState, reducer, State } from './auth.reducer';

describe('AuthReducer', () => {
  describe('signInSuccess action', () => {
    it('should update state on success', () => {
      const user: User = { username: 'username', password: 'password' };
      const state: State = {
        user: user,
      };

      const action = AuthApiActions.signInSuccess({ user: user });
      const newState = reducer(initialState, action);

      expect(newState).toEqual(state);
      expect(newState).not.toBe(initialState);
    });
  });
});
