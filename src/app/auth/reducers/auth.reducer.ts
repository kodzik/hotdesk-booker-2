import { createReducer, on } from '@ngrx/store';
import { AuthApiActions } from '../actions/';
import { User } from 'src/app/_models/user';

export const statusFeatureKey = 'status';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthApiActions.signInSuccess, (state, { user }) => ({ ...state, user }))
);

export const getUser = (state: State) => state.user;
