import { createAction, props } from '@ngrx/store';
import { DatePicker } from '../_models/datepicker';
import { Resource } from 'src/app/_models/resource';

export const reservationNew = createAction('[Reservation] New');

export const updateForm = createAction(
  '[Reservation] updateForm',
  props<{ payload: { path: string; value: any } }>()
);

export const reservationAdd = createAction(
  '[Reservation] Add',
  props<{ payload: { datePicker: DatePicker; resource: Resource } }>()
);

export const reservationSuccess = createAction(
  '[Reservation] Success',
  props<{ payload: { reservationId: string } }>()
);

export const reservationFailure = createAction(
  '[Reservation] Failure',
  props<{ payload: { error: string } }>()
);
