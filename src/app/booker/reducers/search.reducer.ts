import { createReducer, on } from '@ngrx/store';
import { ResourceListApiActions, ResourceListActions } from '../actions';

export const searchFeatureKey = 'search';

export interface State {
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  loading: false,
  error: null,
};

export const reducer = createReducer(
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

export const getLoading = (state: State) => state.loading;
