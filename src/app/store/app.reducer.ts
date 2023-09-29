import { ActionReducerMap } from '@ngrx/store';
import * as fromResourceList from '../booker/reducers/resource-list.reducer';

// export interface AppState {
//   resourceList: fromResourceList.resourceState;
// }

//TODO fix 'any' type
export const appReducer: ActionReducerMap<any> = {
  resourceList: fromResourceList.resourceListReducer,
};
