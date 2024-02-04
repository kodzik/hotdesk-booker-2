import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/auth/models/user';

export const signInSuccess = createAction(
  '[Auth/API] SignIn Success',
  props<{ user: User }>()
);

export const signInFailure = createAction(
  '[Auth/API] SignIn Failure',
  props<{ error: string }>()
);
