import { createAction, props } from '@ngrx/store';
import { Resource } from 'src/app/_models/resource';

export const queryResources = createAction('[Resource List] Query resources');

export const addResource = createAction(
  '[Resource List] added',
  props<{ payload: Resource }>()
);