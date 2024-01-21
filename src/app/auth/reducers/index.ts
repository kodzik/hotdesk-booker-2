import { Action, combineReducers } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import * as fromSignInPage from '../reducers/sign-in-page.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.statusFeatureKey]: fromAuth.State;
  [fromSignInPage.signInPageFeatureKey]: fromSignInPage.State;
}

export function authReducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
    [fromSignInPage.signInPageFeatureKey]: fromSignInPage.reducer,
  })(state, action);
}
