import * as fromSearch from './search.reducer';
import * as fromReservation from './reservation.reducer';
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
  [fromReservation.reservationFeatureKey]: fromReservation.State;
  [fromResourceList.resourcesFeatureKey]: fromResourceList.State;
}

export function reducers(state: ResourcesState | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
    [fromReservation.reservationFeatureKey]: fromReservation.reservationReducer,
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

export const selectDatePicker = createSelector(
  selectResourceState,
  (state) => state.reservation.datePicker
);

export const selectResourcePicker = createSelector(
  selectResourceState,
  (state) => state.reservation.resourcePicker
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
