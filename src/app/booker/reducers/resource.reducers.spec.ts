import { Resource } from '../_models/resource';
import { State } from './resource-collection.reducer';
import { searchState } from './search.reducer';
import {
  ResourcesState,
  resourceReducers,
  selectSearchState,
} from './resource.reducers';
import { Action } from '@ngrx/store';

describe('Search selectors', () => {
  const resources: Resource[] = [
    {
      id: 1,
      name: '1L',
      available: true,
      reserved: false,
      category: 'workspace',
      bounds: { lat: 1, lng: 1 },
    },
  ];
  const searchState: searchState = {
    error: null,
    loading: false,
  };
  const newState: State = {
    ids: [1],
    entities: {
      1: resources[0],
    },
  };
  const initialState: ResourcesState = {
    resources: newState,
    search: searchState,
  };
  describe('Select search state', () => {
    it('Should select search state', () => {
      const result = selectSearchState.projector(initialState);
      expect(result).toEqual(searchState);
    });
  });

  describe('Combine resourceReducers', () => {
    it('should return combined resource reducers', () => {
      const action: Action = { type: 'unknown' };
      const combineReducers = resourceReducers(initialState, action);

      const expectedCombinedReducers = {
        resources: newState,
        search: searchState,
      };

      expect(combineReducers).toEqual(expectedCombinedReducers);
    });
  });
});
