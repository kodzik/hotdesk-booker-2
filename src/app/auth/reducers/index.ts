import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import * as fromSignInPage from '../reducers/sign-in-page.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.statusFeatureKey]: fromAuth.State;
  [fromSignInPage.signInPageFeatureKey]: fromSignInPage.State;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
    [fromSignInPage.signInPageFeatureKey]: fromSignInPage.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state) => state.status
);

export const selectSignInPageState = createSelector(
  selectAuthState,
  (state) => state.signInPage
);

export const selectSignInPageError = createSelector(
  selectSignInPageState,
  fromSignInPage.getError
);

export const selectSignInPagePending = createSelector(
  selectSignInPageState,
  fromSignInPage.getPending
);
