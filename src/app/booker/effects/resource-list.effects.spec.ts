import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { ResourceListEffects } from './resource-list.effects';
import * as resourceListActions from '../actions/resource-list.actions';
import { Resource } from '../_models/resource';
import { Actions } from '@ngrx/effects';
import { ResourceListService } from '../services/resource-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResourceListActions, ResourceListApiActions } from '../actions';

describe(`Effect: resourceQuery`, () => {
  let effects: ResourceListEffects;
  let actions$: Observable<any>;
  let service: any;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ResourceListEffects,
        provideMockActions(() => actions$),
        {
          provide: ResourceListService,
          useValue: jasmine.createSpyObj('ResourceListService', [
            'getResources',
          ]),
        },
      ],
    });
    effects = TestBed.inject(ResourceListEffects);
    service = TestBed.inject(ResourceListService);
    actions$ = TestBed.inject(Actions);
  });

  describe('resourceQuery', () => {
    it('should return fetchSuccess and resources', () => {
      const action = ResourceListActions.queryResources();
      const completion = ResourceListApiActions.fetchSuccess({
        payload: resources,
      });

      actions$ = hot('-a---', { a: action });
      const response = cold('-a|', { a: resources });
      const expected = cold('--b', { b: completion });

      service.getResources.and.callFake(() => response);

      expect(effects.resourceQuery).toBeObservable(expected);
    });

    it('should return error on fetchFailure', () => {
      const error = 'Error message';
      const action = resourceListActions.queryResources();
      const completion = ResourceListApiActions.fetchFailure({
        errorMsg: 'Error message',
      });

      actions$ = hot('-a---', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: completion });

      service.getResources.and.callFake(() => response);
      expect(effects.resourceQuery).toBeObservable(expected);
    });
  });
});
