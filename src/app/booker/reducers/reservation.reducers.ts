import { Action, combineReducers } from '@ngrx/store';
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
