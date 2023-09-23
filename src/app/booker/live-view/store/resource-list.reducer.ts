import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Resource } from 'src/app/_models/resource';
import * as ResourceListActions from './resource-list.actions';
import { createEntityAdapter } from '@ngrx/entity';
import { EntityState } from '@ngrx/entity/src';

export const resourcesAdapter = createEntityAdapter<Resource>();
export interface State extends EntityState<Resource> {}
export const initialState: State = resourcesAdapter.getInitialState();

export const resourceListReducer = createReducer(
  initialState,
  on(ResourceListActions.addResources, (state, action) => {
    return resourcesAdapter.addMany(action.payload, state);
  })
);

export const getResourceState = createFeatureSelector<State>('resource');

export const { selectIds, selectEntities, selectAll, selectTotal } =
  resourcesAdapter.getSelectors(getResourceState);
