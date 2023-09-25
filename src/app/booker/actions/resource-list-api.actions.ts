import { createAction, props } from '@ngrx/store';
import { Resource } from 'src/app/_models/resource';

export const searchSuccess = createAction(
  '[Resource List/API] Search Success',
  props<{ resources: Resource[] }>()
);

export const searchFailure = createAction(
  '[Resource List/API] Search Failure',
  props<{ errorMsg: string }>()
);
