import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/_models/user';

export const signInSuccess = createAction(
  '[Auth/API] SignIn Success',
  props<{ user: Pick<User, 'id'> }>()
);

export const signInFailure = createAction(
  '[Auth/API] SignIn Failure',
  props<{ error: any }>()
);

// export const loginRedirect = createAction('[Auth/API] Login Redirect');
