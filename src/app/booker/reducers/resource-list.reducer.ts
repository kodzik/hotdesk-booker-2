import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Resource } from 'src/app/_models/resource';
import { ResourceListApiActions } from '../actions';
import { createEntityAdapter } from '@ngrx/entity';
import { EntityState } from '@ngrx/entity/src';

export const resourcesFeatureKey = 'resources';

export const resourcesAdapter = createEntityAdapter<Resource>();
export interface State extends EntityState<Resource> {}
export const initialState: State = resourcesAdapter.getInitialState();

export const resourceListReducer = createReducer(
  initialState,

  on(ResourceListApiActions.fetchSuccess, (state, action) => {
    return resourcesAdapter.addMany(action.payload, state);
  })
);
