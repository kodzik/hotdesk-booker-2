import { createAction, props } from '@ngrx/store';
import { Reservation } from 'src/app/booker/_models/reservation';

export const fetchSuccess = createAction(
  '[Reservation/API] Query Success',
  props<{ payload: Reservation[] }>()
);

export const fetchFailure = createAction(
  '[Reservation/API] Query Failure',
  props<{ errorMsg: string }>()
);

export const removeSuccess = createAction(
  '[Reservation/API] Remove Success',
  props<{ id: string }>()
);

export const removeFailure = createAction(
  '[Reservation/API] Remove Failure',
  props<{ errorMsg: string }>()
);
