import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Reservation } from '../_models/reservation';
import { createReducer, on } from '@ngrx/store';
import { ReservationFormActions, ReservationApiActions } from '../actions';

export const reservationCollectionFeatureKey = 'reservations';

export const reservationsAdapter = createEntityAdapter<Reservation>();
export interface State extends EntityState<Reservation> {}
export const initialState: State = reservationsAdapter.getInitialState();

export const reservationCollectionReducer = createReducer(
  initialState,
  on(ReservationFormActions.reservationSuccess, (state, action) => {
    return reservationsAdapter.addOne(action.payload, state);
  }),
  on(ReservationApiActions.removeSuccess, (state, action) => {
    return reservationsAdapter.removeOne(action.id, state);
  })
);
export const getReservations = (state: State) => state.entities;
