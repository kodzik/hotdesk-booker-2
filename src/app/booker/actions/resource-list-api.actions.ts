import { createAction, props } from '@ngrx/store';
import { Resource } from 'src/app/booker/_models/resource';

export const fetchSuccess = createAction(
  '[Resource List/API] Search Success',
  props<{ payload: Resource[] }>()
);

export const fetchFailure = createAction(
  '[Resource List/API] Search Failure',
  props<{ errorMsg: string }>()
);
