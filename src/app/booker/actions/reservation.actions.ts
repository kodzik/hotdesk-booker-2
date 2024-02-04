import { createAction, props } from '@ngrx/store';
import { Reservation } from 'src/app/booker/_models/reservation';

export const queryReservations = createAction(
  '[Reservation] Query reservations'
);

export const add = createAction(
  '[Reservation] Add',
  props<{ payload: Omit<Reservation, 'id'> }>()
);

export const remove = createAction(
  '[Reservation] Remove',
  props<{ id: string }>()
);
