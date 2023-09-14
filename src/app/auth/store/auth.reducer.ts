import { createReducer } from '@ngrx/store';
import { User } from 'src/app/_models/user';

export interface authState {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: authState = {
  user: null,
  authError: null,
  loading: false,
};

export const authReducer = createReducer(initialState);
