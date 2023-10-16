import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Reservation } from '../../_models/reservation';
import { createReducer } from '@ngrx/store';

export const reservationCollectionFeatureKey = 'reservations';

export const reservationsAdapter = createEntityAdapter<Reservation>();
export interface State extends EntityState<Reservation> {}
export const initialState: State = reservationsAdapter.getInitialState();

export const reservationCollectionReducer = createReducer(initialState);
