import { createAction, props } from '@ngrx/store';

export const updateForm = createAction(
  '[Reservation] updateForm',
  props<{ payload: { path: string; value: any } }>()
);

export const reservationSuccess = createAction(
  '[Reservation] Success',
  props<{ payload: { path: string } }>()
);

export const reservationFailure = createAction(
  '[Reservation] Failure',
  props<{ payload: { path: string; error: string } }>()
);
