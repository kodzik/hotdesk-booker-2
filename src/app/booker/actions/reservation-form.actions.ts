import { createAction, props } from '@ngrx/store';
import { Reservation } from 'src/app/_models/reservation';

export const reservationNew = createAction('[Reservation Form] New');

export const updateForm = createAction(
  '[Reservation Form] Update',
  props<{ payload: { path: string; value: any } }>()
);

export const reservationSuccess = createAction(
  '[Reservation Form] Success',
  props<{ payload: Reservation }>()
);

export const reservationFailure = createAction(
  '[Reservation Form] Failure',
  props<{ payload: { error: string } }>()
);
