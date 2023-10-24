import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from '../reducers';
import * as fromSignInPage from '../reducers/sign-in-page.reducer';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state) => state.status
);

export const selectAuthStatusUser = createSelector(
  selectAuthStatusState,
  fromAuth.getUser
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
