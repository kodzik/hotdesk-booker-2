import { createAction, props } from '@ngrx/store';

export const updateForm = createAction(
  '[Reservation] updateForm',
  props<{ payload: { path: string; value: any } }>()
);
