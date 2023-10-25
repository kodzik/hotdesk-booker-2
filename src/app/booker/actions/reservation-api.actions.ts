import { createAction, props } from '@ngrx/store';
import { Reservation } from 'src/app/_models/reservation';

export const fetchSuccess = createAction(
  '[Reservation/API] Query Success',
  props<{ payload: Reservation[] }>()
);

export const fetchFailure = createAction(
  '[Reservation/API] Query Failure',
  props<{ errorMsg: string }>()
);
