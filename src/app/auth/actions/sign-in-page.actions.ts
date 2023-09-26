import { createAction, props } from '@ngrx/store';
import { Credentials } from '../models/credentials';

export const signIn = createAction(
  '[SignIn Page] SignIn',
  props<{ credentials: Credentials }>()
);
