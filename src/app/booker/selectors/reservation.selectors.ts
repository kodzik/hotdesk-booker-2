import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ReservationState,
  reservationFeatureKey,
} from '../reducers/reservation.reducers';
import * as fromReservationForm from '../reducers/reservation-form.reducer';
import * as fromReservationCollection from '../reducers/reservation-collection.reducer';

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

export const selectReservationCollection = createSelector(
  selectReservationState,
  (state) => state.reservations
);

export const selectReservations = createSelector(
  selectReservationCollection,
  fromReservationCollection.getReservations
);
