import { createAction, props } from '@ngrx/store';
import { Reservation } from 'src/app/_models/reservation';

export const add = createAction(
  '[Reservation] Add',
  props<{ payload: Omit<Reservation, 'id'> }>()
);
