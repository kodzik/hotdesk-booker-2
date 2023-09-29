import { createReducer, on } from '@ngrx/store';
import { SignInPageActions, AuthApiActions } from '../actions';

export const signInPageFeatureKey = 'signInPage';

export interface State {
  error: { error: { message: string } } | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(SignInPageActions.signIn, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(AuthApiActions.signInSuccess, (state) => ({
    ...state,
    error: null,
    pending: false,
  })),
  on(AuthApiActions.signInFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
