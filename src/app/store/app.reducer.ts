import { ActionReducerMap } from '@ngrx/store';
import * as fromResourceList from '../booker/live-view/store/resource-list.reducer';

// export interface AppState {
//   resourceList: fromResourceList.resourceState;
// }

//TODO fix 'any' type
export const appReducer: ActionReducerMap<any> = {
  resourceList: fromResourceList.resourceListReducer,
};
