import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromReservationForm from './reservation-form.reducer';
import * as fromReservationCollection from './reservation-collection.reducer';

export const reservationFeatureKey = 'reservation';

export interface ReservationState {
  [fromReservationForm.reservationFormFeatureKey]: fromReservationForm.reservationFormState;
  [fromReservationCollection.reservationCollectionFeatureKey]: fromReservationCollection.State;
}

export function reservationReducers(
  state: ReservationState | undefined,
  action: Action
) {
  return combineReducers({
    [fromReservationForm.reservationFormFeatureKey]:
      fromReservationForm.reservationFormReducer,
    [fromReservationCollection.reservationCollectionFeatureKey]:
      fromReservationCollection.reservationCollectionReducer,
  })(state, action);
}

export const selectReservationState = createFeatureSelector<ReservationState>(
  reservationFeatureKey
);

export const selectReservationForm = createSelector(
  selectReservationState,
  (state) => state.reservationForm
);

export const selectDatePicker = createSelector(
  selectReservationForm,
  (state) => state.datePicker
);

export const selectResourcePicker = createSelector(
  selectReservationForm,
  (state) => state.resourcePicker
);

export const selectReservationAddLoading = createSelector(
  selectReservationForm,
  fromReservationForm.getPending
);
