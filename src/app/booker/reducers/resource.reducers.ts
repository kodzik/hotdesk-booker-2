import * as fromSearch from './search.reducer';
import * as fromResourceList from './resource-list.reducer';
import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export const resourcesFeatureKey = 'resources';

export interface ResourcesState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromResourceList.resourcesFeatureKey]: fromResourceList.State;
}

export function resourceReducers(
  state: ResourcesState | undefined,
  action: Action
) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
    [fromResourceList.resourcesFeatureKey]:
      fromResourceList.resourceListReducer,
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
} = fromResourceList.resourcesAdapter.getSelectors(selectResourceEntitiesState);
