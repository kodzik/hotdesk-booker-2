import { Resource } from 'src/app/_models/resource';
import { addResources } from '../actions/resource-list.actions';
import {
  initialState,
  resourceListReducer,
  State,
} from './resource-list.reducer';

describe('ResourceListReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = resourceListReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  }),
    describe('addResource action', () => {
      it('should add resource and update state', () => {
        const newResources: Resource[] = [
          {
            id: 'some_id',
            name: 'cosy_desk',
            available: true,
            reserved: false,
          },
        ];
        const newState: State = {
          ids: ['some_id'],
          entities: {
            some_id: newResources[0],
          },
        };
        const action = addResources({ payload: newResources });
        const state = resourceListReducer(initialState, action);

        expect(state).toEqual(newState);
        expect(state).not.toBe(initialState);
      });
    });
});
