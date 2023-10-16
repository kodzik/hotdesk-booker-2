import * as fromSearch from './search.reducer';
import * as fromResourceCollection from './resource-collection.reducer';
import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export const resourcesFeatureKey = 'resources';

export interface ResourcesState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromResourceCollection.resourcesFeatureKey]: fromResourceCollection.State;
}

export function resourceReducers(
  state: ResourcesState | undefined,
  action: Action
) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
    [fromResourceCollection.resourcesFeatureKey]:
      fromResourceCollection.resourceCollectionReducer,
  })(state, action);
}

export const selectResourceState =
  createFeatureSelector<ResourcesState>(resourcesFeatureKey);

export const selectResourceEntitiesState = createSelector(
  selectResourceState,
  (state) => state.resources
);

export const selectSearchState = createSelector(
  selectResourceState,
  (state) => state.search
);

export const selectSearchLoading = createSelector(
  selectSearchState,
  fromSearch.getLoading
);

export const {
  selectIds: selectResourceIds,
  selectEntities: selectResourceEntities,
  selectAll: selectAllResources,
  selectTotal: selectTotalResources,
} = fromResourceCollection.resourcesAdapter.getSelectors(
  selectResourceEntitiesState
);
