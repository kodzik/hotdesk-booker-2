import { Resource } from 'src/app/booker/_models/resource';
import { ResourceListApiActions } from '../actions';
import {
  initialState,
  resourceCollectionReducer,
  State,
} from './resource-collection.reducer';

describe('ResourceListReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = resourceCollectionReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  }),
    describe('fetchSuccess action', () => {
      it('should add resource and update state', () => {
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
        const newState: State = {
          ids: [1],
          entities: {
            1: newResources[0],
          },
        };
        const action = ResourceListApiActions.fetchSuccess({
          payload: newResources,
        });
        const state = resourceCollectionReducer(initialState, action);

        expect(state).toEqual(newState);
        expect(state).not.toEqual(initialState);
      });
    });
});
