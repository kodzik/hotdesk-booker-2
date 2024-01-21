import { Resource } from '../_models/resource';
import { ResourceListActions, ResourceListApiActions } from '../actions';
import {
  getLoading,
  initialState,
  searchReducer,
  searchState,
} from './search.reducer';

describe('SearchReducer', () => {
  describe('unknown action', () => {
    it('should return default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = searchReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('queryResources action', () => {
    it('should set loading true and update state', () => {
      const newState: searchState = {
        loading: true,
        error: null,
      };
      const action = ResourceListActions.queryResources();
      const state = searchReducer(initialState, action);

      const isLoading = getLoading(newState);

      expect(state).toEqual(newState);
      expect(state).not.toEqual(initialState);

      expect(isLoading).toBe(true);
    });
  });

  describe('fetchSuccess action', () => {
    it('should set loading true and update state', () => {
      const newResources: Resource[] = [
        {
          id: 1,
          name: '1L',
          available: true,
          reserved: false,
          category: 'workspace',
          bounds: { lat: 1, lng: 1 },
        },
      ];
      const newState: searchState = {
        loading: false,
        error: null,
      };
      const action = ResourceListApiActions.fetchSuccess({
        payload: newResources,
      });
      const state = searchReducer(initialState, action);
      const isLoading = getLoading(newState);

      expect(state).toEqual(newState);
      expect(state).toEqual(initialState);
      expect(isLoading).toBe(false);
    });
  });

  describe('fetchFailure action', () => {
    it('should set loading true and update state', () => {
      const newState: searchState = {
        loading: false,
        error: 'Error message',
      };
      const action = ResourceListApiActions.fetchFailure({
        errorMsg: 'Error message',
      });
      const state = searchReducer(initialState, action);
      const isLoading = getLoading(newState);

      expect(state).toEqual(newState);
      expect(state).not.toEqual(initialState);
      expect(isLoading).toBe(false);
    });
  });
});
