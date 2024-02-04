import { createReducer, on } from '@ngrx/store';
import { ResourceListApiActions, ResourceListActions } from '../actions';

export const searchFeatureKey = 'search';

export interface searchState {
  loading: boolean;
  error: string | null;
}

export const initialState: searchState = {
  loading: false,
  error: null,
};

export const searchReducer = createReducer(
  initialState,
  on(ResourceListActions.queryResources, (state) => ({
    ...state,
    error: null,
    loading: true,
  })),
  on(ResourceListApiActions.fetchSuccess, (state) => ({
    ...state,
    error: null,
    loading: false,
  })),
  on(ResourceListApiActions.fetchFailure, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
    loading: false,
  }))
);

export const getLoading = (state: searchState) => state.loading;
