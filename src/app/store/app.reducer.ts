import { ActionReducerMap } from '@ngrx/store';
import * as fromResourceCollection from '../booker/reducers/resource-collection.reducer';

// export interface AppState {
//   resourceList: fromResourceList.resourceState;
// }

//TODO fix 'any' type
export const appReducer: ActionReducerMap<any> = {
  resourceList: fromResourceCollection.resourceCollectionReducer,
};
