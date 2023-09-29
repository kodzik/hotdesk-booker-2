import {
  State,
  initialState,
  reducer,
  getError,
  getPending,
} from './sign-in-page.reducer';
import { SignInPageActions, AuthApiActions } from '../actions';

describe('signInPageReducer', () => {
  describe('signIn action', () => {
    it('should change status to pending', () => {
      const state: State = {
        error: null,
        pending: true,
      };

      const newState = reducer(state, SignInPageActions.signIn);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  }),
    describe('signInSuccess action', () => {
      it('should change pending to false', () => {
        const state: State = {
          error: null,
          pending: false,
        };

        const newState = reducer(state, AuthApiActions.signInSuccess);

        expect(state).toEqual(newState);
        expect(state).not.toBe(initialState);
      });
    }),
    describe('signInFailure action', () => {
      it('should change pending to false and throw an error', () => {
        const state: State = {
          error: Object({ message: 'Error message' }),
          pending: false,
        };

        const newState = reducer(
          state,
          AuthApiActions.signInFailure({ error: { message: 'Error message' } })
        );

        expect(state).toEqual(newState);
        expect(state).not.toBe(initialState);
        expect(state.error).toEqual(Object({ message: 'Error message' }));
      });
    });

  describe('Getter functions', () => {
    describe('getError function', () => {
      const state = {
        error: Object({ message: 'Error message' }),
        pending: true,
      };
      const error = getError(state);

      it('should return state error', () => {
        expect(error).toEqual(Object({ message: 'Error message' }));
      });
    });

    describe('getPending function', () => {
      const state = {
        error: null,
        pending: true,
      };
      const pending = getPending(state);

      it('should return pending true', () => {
        expect(pending).toBeTrue();
      });
    });
  });
});
